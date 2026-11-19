// Vercel Serverless Function: Live Hiring Job Aggregator aligned to Mark Chester Santos's expertise
// Aggregates live public APIs (Remotive, Arbeitnow, Jobicy) server-side to avoid CORS issues.

const MARK_EXPERTISE_KEYWORDS = [
  "ai", "automation", "n8n", "python", "next.js", "nextjs", "react", "typescript",
  "javascript", "full stack", "full-stack", "frontend", "backend", "node", "supabase",
  "postgres", "postgresql", "mysql", "java", "virtual assistant", "technical support",
  "customer support", "operations", "prompt", "llm", "workflow", "zapier", "make.com",
  "saas", "web developer", "software engineer", "support engineer", "tier 2", "helpdesk",
  "api", "vercel", "tailwind", "prisma", "sql", "qa", "devops", "remote"
];

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

function scoreAlignment(title, description, tags = [], categoryFilter = "all") {
  const haystack = `${title} ${tags.join(" ")} ${description}`.toLowerCase();
  const matched = [];
  for (const kw of MARK_EXPERTISE_KEYWORDS) {
    if (haystack.includes(kw)) matched.push(kw);
  }

  let catBoost = 0;
  if (categoryFilter === "automation" && /(ai|automation|n8n|zapier|prompt|llm|workflow|python)/.test(haystack)) catBoost = 18;
  if (categoryFilter === "fullstack" && /(next\.?js|react|typescript|full.?stack|frontend|node|supabase|web developer)/.test(haystack)) catBoost = 18;
  if (categoryFilter === "ops" && /(support|virtual assistant|operations|customer|technical support|helpdesk|success|coordinator)/.test(haystack)) catBoost = 18;
  if (categoryFilter === "backend" && /(java|sql|mysql|postgres|backend|api|prisma|node)/.test(haystack)) catBoost = 18;

  const base = Math.min(98, 62 + matched.length * 5 + catBoost);
  return {
    score: matched.length === 0 ? 55 : base,
    matched: Array.from(new Set(matched)).slice(0, 8)
  };
}

async function fetchJsonWithTimeout(url, timeoutMs = 5500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "MarkChesterPortfolio-CareerEngine/1.0" }
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
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const location = String(req.query.location || "Muntinlupa, Metro Manila, Philippines").slice(0, 120);
  const category = String(req.query.category || "all").toLowerCase();
  const queryText = String(req.query.q || "").trim().toLowerCase();

  const searchMap = {
    all: "developer",
    automation: "automation",
    fullstack: "react",
    ops: "support",
    backend: "backend"
  };
  const remotiveQuery = encodeURIComponent(queryText || searchMap[category] || "developer");

  const [remotiveData, arbeitnowData, jobicyData] = await Promise.all([
    fetchJsonWithTimeout(`https://remotive.com/api/remote-jobs?search=${remotiveQuery}&limit=25`),
    fetchJsonWithTimeout("https://www.arbeitnow.com/api/job-board-api"),
    fetchJsonWithTimeout("https://jobicy.com/api/v2/remote-jobs?count=20")
  ]);

  const normalized = [];

  if (remotiveData && Array.isArray(remotiveData.jobs)) {
    for (const j of remotiveData.jobs.slice(0, 20)) {
      const desc = stripHtml(j.description || "").slice(0, 2400);
      const tags = Array.isArray(j.tags) ? j.tags : [];
      const align = scoreAlignment(j.title || "", desc, tags, category);
      normalized.push({
        id: `remotive-${j.id}`,
        title: j.title || "Software / Operations Role",
        company: j.company_name || "Hiring Company",
        location: j.candidate_required_location || "Worldwide / Remote",
        type: j.job_type || "Full-time",
        salary: j.salary || "Competitive / Listed on post",
        postedAt: j.publication_date ? String(j.publication_date).slice(0, 10) : "Active",
        url: j.url,
        source: "Remotive Live",
        tags: tags.slice(0, 6),
        description: desc,
        alignmentScore: align.score,
        matchedSkills: align.matched,
        hiringStatus: "Actively Hiring"
      });
    }
  }

  if (jobicyData && Array.isArray(jobicyData.jobs)) {
    for (const j of jobicyData.jobs.slice(0, 15)) {
      const desc = stripHtml(j.jobDescription || j.jobExcerpt || "").slice(0, 2400);
      const tags = [j.jobIndustry, j.jobLevel, j.jobType].flat().filter(Boolean).map(String);
      const align = scoreAlignment(j.jobTitle || "", desc, tags, category);
      normalized.push({
        id: `jobicy-${j.id}`,
        title: j.jobTitle || "Remote Specialist",
        company: j.companyName || "Hiring Company",
        location: j.jobGeo || "Anywhere / Remote",
        type: Array.isArray(j.jobType) ? j.jobType[0] : (j.jobType || "Full-time"),
        salary: j.annualSalaryMin ? `$${j.annualSalaryMin}–$${j.annualSalaryMax || ""}` : "Listed on post",
        postedAt: j.pubDate ? String(j.pubDate).slice(0, 10) : "Active",
        url: j.url,
        source: "Jobicy Live",
        tags: tags.slice(0, 5),
        description: desc,
        alignmentScore: align.score,
        matchedSkills: align.matched,
        hiringStatus: "Actively Hiring"
      });
    }
  }

  if (arbeitnowData && Array.isArray(arbeitnowData.data)) {
    for (const j of arbeitnowData.data.slice(0, 15)) {
      const desc = stripHtml(j.description || "").slice(0, 2400);
      const tags = Array.isArray(j.tags) ? j.tags : [];
      const align = scoreAlignment(j.title || "", desc, tags, category);
      if (align.score >= 72) {
        normalized.push({
          id: `arbeitnow-${j.slug}`,
          title: j.title || "Engineering Role",
          company: j.company_name || "Hiring Company",
          location: j.remote ? `${j.location || "Remote"} (Remote)` : (j.location || "Hybrid"),
          type: Array.isArray(j.job_types) && j.job_types[0] ? j.job_types[0] : "Full-time",
          salary: "Listed on post",
          postedAt: "Active",
          url: j.url,
          source: "Arbeitnow Live",
          tags: tags.slice(0, 5),
          description: desc,
          alignmentScore: align.score,
          matchedSkills: align.matched,
          hiringStatus: "Actively Hiring"
        });
      }
    }
  }

  // Deduplicate by title+company and filter by optional search query
  const seen = new Set();
  let filtered = normalized.filter((item) => {
    const key = `${item.title.toLowerCase()}::${item.company.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    if (!queryText) return true;
    return `${item.title} ${item.company} ${item.description} ${item.tags.join(" ")}`.toLowerCase().includes(queryText);
  });

  // Sort by alignment score descending
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
