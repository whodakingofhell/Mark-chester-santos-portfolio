// Vercel Serverless Function: Hardened Live Hiring Job Aggregator
// Expanded to include Technical Support Representative, Customer Support, Virtual Assistant,
// AI Automation, Full-Stack, and Java/Backend roles + automated Scam/Legitimacy Safety Scoring.

const rateBucket = new Map();
const MAX_REQ_PER_MIN = 20;

const MARK_EXPERTISE_KEYWORDS = [
  "technical support", "support representative", "customer support", "tier 2", "helpdesk",
  "service desk", "it support", "virtual assistant", "operations", "customer service",
  "ai", "automation", "n8n", "python", "next.js", "nextjs", "react", "typescript",
  "javascript", "full stack", "full-stack", "frontend", "backend", "node", "supabase",
  "postgres", "postgresql", "mysql", "java", "prompt", "llm", "workflow", "zapier",
  "saas", "web developer", "software engineer", "support engineer", "api", "vercel",
  "tailwind", "prisma", "sql", "qa", "remote", "anydesk", "teamviewer", "zendesk"
];

const SCAM_RED_FLAGS = [
  /wire transfer|western union|send money|registration fee|training fee|pay to apply/i,
  /telegram only|whatsapp only|text us on whatsapp/i,
  /earn \$5,000 a week no experience|guaranteed \$1000 daily/i,
  /crypto wallet seed|buy gift cards/i
];

function getClientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.length > 0) return fwd.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function stripHtml(html) {
  if (!html) return "";
  return String(html)
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function evaluateLegitimacy(title, company, url, desc) {
  const text = `${title} ${company} ${desc}`;
  for (const pat of SCAM_RED_FLAGS) {
    if (pat.test(text)) {
      return { safe: false, badge: "Flagged — Review Carefully" };
    }
  }
  const hasHttps = typeof url === "string" && url.startsWith("https://");
  const hasCompany = typeof company === "string" && company.trim().length >= 2;
  return {
    safe: hasHttps && hasCompany,
    badge: hasHttps && hasCompany ? "Legit Verified Source" : "Unverified Domain"
  };
}

function scoreAlignment(title, description, tags = [], categoryFilter = "all") {
  const haystack = `${title} ${tags.join(" ")} ${description}`.toLowerCase();
  const matched = [];
  for (const kw of MARK_EXPERTISE_KEYWORDS) {
    if (haystack.includes(kw)) matched.push(kw);
  }

  let catBoost = 0;
  if (categoryFilter === "tech_support" && /(technical support|support representative|customer support|helpdesk|tier 2|service desk|zendesk|troubleshoot)/.test(haystack)) catBoost = 22;
  if (categoryFilter === "automation" && /(ai|automation|n8n|zapier|prompt|llm|workflow|python)/.test(haystack)) catBoost = 20;
  if (categoryFilter === "fullstack" && /(next\.?js|react|typescript|full.?stack|frontend|node|supabase|web developer)/.test(haystack)) catBoost = 20;
  if (categoryFilter === "va_ops" && /(virtual assistant|operations|coordinator|executive assistant|booking|crm|admin)/.test(haystack)) catBoost = 20;
  if (categoryFilter === "backend" && /(java|sql|mysql|postgres|backend|api|prisma|node)/.test(haystack)) catBoost = 20;

  const base = Math.min(99, 60 + matched.length * 5 + catBoost);
  return {
    score: matched.length === 0 ? 58 : base,
    matched: Array.from(new Set(matched)).slice(0, 8)
  };
}

async function fetchJsonWithTimeout(url, timeoutMs = 5500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "MarkChesterPortfolio-CareerEngine/2.0" }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=240, stale-while-revalidate=600");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const bucket = rateBucket.get(ip) || { count: 0, resetAt: now + 60000 };
  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + 60000;
  }
  bucket.count += 1;
  rateBucket.set(ip, bucket);
  if (bucket.count > MAX_REQ_PER_MIN) {
    return res.status(429).json({ error: "Too many requests. Slow down briefly." });
  }

  const location = String(req.query.location || "Muntinlupa, Metro Manila, Philippines").slice(0, 120);
  const category = String(req.query.category || "all").toLowerCase().slice(0, 32);
  const queryText = String(req.query.q || "").trim().toLowerCase().slice(0, 100);

  const searchMap = {
    all: "support",
    tech_support: "technical support",
    automation: "automation",
    fullstack: "react",
    va_ops: "customer support",
    backend: "backend"
  };
  const remotiveQuery = encodeURIComponent(queryText || searchMap[category] || "support");

  const [remotiveData, arbeitnowData, jobicyData] = await Promise.all([
    fetchJsonWithTimeout(`https://remotive.com/api/remote-jobs?search=${remotiveQuery}&limit=25`),
    fetchJsonWithTimeout("https://www.arbeitnow.com/api/job-board-api"),
    fetchJsonWithTimeout("https://jobicy.com/api/v2/remote-jobs?count=20")
  ]);

  const normalized = [];

  if (remotiveData && Array.isArray(remotiveData.jobs)) {
    for (const j of remotiveData.jobs.slice(0, 20)) {
      const desc = stripHtml(j.description || "").slice(0, 2200);
      const tags = Array.isArray(j.tags) ? j.tags : [];
      const align = scoreAlignment(j.title || "", desc, tags, category);
      const safety = evaluateLegitimacy(j.title, j.company_name, j.url, desc);
      if (!safety.safe) continue;
      normalized.push({
        id: `remotive-${j.id}`,
        title: j.title || "Support / Engineering Role",
        company: j.company_name || "Verified Employer",
        location: j.candidate_required_location || "Worldwide / Remote",
        type: j.job_type || "Full-time",
        salary: j.salary || "Listed on official post",
        postedAt: j.publication_date ? String(j.publication_date).slice(0, 10) : "Active",
        url: j.url,
        source: "Remotive Live",
        tags: tags.slice(0, 6),
        description: desc,
        alignmentScore: align.score,
        matchedSkills: align.matched,
        hiringStatus: "Actively Hiring",
        safetyBadge: safety.badge
      });
    }
  }

  if (jobicyData && Array.isArray(jobicyData.jobs)) {
    for (const j of jobicyData.jobs.slice(0, 15)) {
      const desc = stripHtml(j.jobDescription || j.jobExcerpt || "").slice(0, 2200);
      const tags = [j.jobIndustry, j.jobLevel, j.jobType].flat().filter(Boolean).map(String);
      const align = scoreAlignment(j.jobTitle || "", desc, tags, category);
      const safety = evaluateLegitimacy(j.jobTitle, j.companyName, j.url, desc);
      if (!safety.safe) continue;
      normalized.push({
        id: `jobicy-${j.id}`,
        title: j.jobTitle || "Remote Specialist",
        company: j.companyName || "Verified Employer",
        location: j.jobGeo || "Anywhere / Remote",
        type: Array.isArray(j.jobType) ? j.jobType[0] : (j.jobType || "Full-time"),
        salary: j.annualSalaryMin ? `$${j.annualSalaryMin}–$${j.annualSalaryMax || ""}` : "Listed on official post",
        postedAt: j.pubDate ? String(j.pubDate).slice(0, 10) : "Active",
        url: j.url,
        source: "Jobicy Live",
        tags: tags.slice(0, 5),
        description: desc,
        alignmentScore: align.score,
        matchedSkills: align.matched,
        hiringStatus: "Actively Hiring",
        safetyBadge: safety.badge
      });
    }
  }

  if (arbeitnowData && Array.isArray(arbeitnowData.data)) {
    for (const j of arbeitnowData.data.slice(0, 15)) {
      const desc = stripHtml(j.description || "").slice(0, 2200);
      const tags = Array.isArray(j.tags) ? j.tags : [];
      const align = scoreAlignment(j.title || "", desc, tags, category);
      const safety = evaluateLegitimacy(j.title, j.company_name, j.url, desc);
      if (!safety.safe || align.score < 70) continue;
      normalized.push({
        id: `arbeitnow-${j.slug}`,
        title: j.title || "Engineering / Support Role",
        company: j.company_name || "Verified Employer",
        location: j.remote ? `${j.location || "Remote"} (Remote)` : (j.location || "Hybrid"),
        type: Array.isArray(j.job_types) && j.job_types[0] ? j.job_types[0] : "Full-time",
        salary: "Listed on official post",
        postedAt: "Active",
        url: j.url,
        source: "Arbeitnow Live",
        tags: tags.slice(0, 5),
        description: desc,
        alignmentScore: align.score,
        matchedSkills: align.matched,
        hiringStatus: "Actively Hiring",
        safetyBadge: safety.badge
      });
    }
  }

  const seen = new Set();
  const filtered = normalized.filter((item) => {
    const key = `${item.title.toLowerCase()}::${item.company.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    if (!queryText) return true;
    return `${item.title} ${item.company} ${item.description} ${item.tags.join(" ")}`.toLowerCase().includes(queryText);
  });

  filtered.sort((a, b) => b.alignmentScore - a.alignmentScore);

  return res.status(200).json({
    ok: true,
    location,
    category,
    fetchedAt: new Date().toISOString(),
    count: filtered.length,
    jobs: filtered.slice(0, 18)
  });
};
