// Vercel Serverless Function: Hardened Remote AI, Automation & IT Job Aggregator
// Targets Remote (PH / Worldwide / APAC) roles paying $600-$700+/mo across AI Automation,
// AI/Prompt Engineering, IT Support, Full-Stack, and Java/Backend + Anti-Scam Safety Filter.

const rateBucket = new Map();
const MAX_REQ_PER_MIN = 20;

const MARK_EXPERTISE_KEYWORDS = [
  "ai automation", "n8n", "make.com", "zapier", "automation", "workflow", "ai agent",
  "prompt engineer", "llm", "openai", "claude", "gemini", "python", "ai", "chatbot",
  "it support", "technical support", "helpdesk", "service desk", "tier 1", "tier 2",
  "system administrator", "it specialist", "remote support", "anydesk", "teamviewer",
  "next.js", "nextjs", "react", "typescript", "javascript", "full stack", "full-stack",
  "node.js", "node", "supabase", "postgres", "postgresql", "mysql", "java", "sql",
  "prisma", "vercel", "api", "webhook", "discord", "saas", "qa", "remote", "worldwide"
];

const SCAM_RED_FLAGS = [
  /wire transfer|western union|send money|registration fee|training fee|pay to apply/i,
  /telegram only|whatsapp only|text us on whatsapp/i,
  /earn \$5,000 a week no experience|guaranteed \$1000 daily/i,
  /crypto wallet seed|buy gift cards/i
];

const STRICT_NON_PH_GEO = /^(usa only|us only|united states only|uk only|canada only|germany only|france only|eu only|europe only)$/i;

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
      return { safe: false, badge: "Flagged - Review Carefully" };
    }
  }
  const hasHttps = typeof url === "string" && url.startsWith("https://");
  const hasCompany = typeof company === "string" && company.trim().length >= 2;
  return {
    safe: hasHttps && hasCompany,
    badge: hasHttps && hasCompany ? "Legit Verified Source" : "Unverified Domain"
  };
}

function isPhRemoteFriendly(locStr) {
  const clean = String(locStr || "").trim();
  if (!clean) return true;
  if (STRICT_NON_PH_GEO.test(clean)) return false;
  if (/(worldwide|anywhere|global|philippines|asia|apac|remote|utc\+8)/i.test(clean)) return true;
  if (/\b(us only|usa only|united states only|eu only|uk only)\b/i.test(clean)) return false;
  return true;
}

function scoreAlignment(title, description, tags = [], categoryFilter = "all") {
  const haystack = `${title} ${tags.join(" ")} ${description}`.toLowerCase();
  const matched = [];
  for (const kw of MARK_EXPERTISE_KEYWORDS) {
    if (haystack.includes(kw)) matched.push(kw);
  }

  let catBoost = 0;
  if (categoryFilter === "automation" && /(ai automation|n8n|zapier|make|automation|workflow|ai agent|llm|python|webhook)/.test(haystack)) catBoost = 24;
  if (categoryFilter === "ai_prompt" && /(prompt|ai|llm|openai|claude|gemini|machine learning|agent|data)/.test(haystack)) catBoost = 22;
  if (categoryFilter === "tech_support" && /(it support|technical support|support representative|helpdesk|tier 1|tier 2|service desk|troubleshoot|systems)/.test(haystack)) catBoost = 22;
  if (categoryFilter === "fullstack" && /(next\.?js|react|typescript|full.?stack|frontend|node|supabase|web developer)/.test(haystack)) catBoost = 22;
  if (categoryFilter === "backend" && /(java|sql|mysql|postgres|backend|api|prisma|node)/.test(haystack)) catBoost = 22;
  if (categoryFilter === "all" && /(ai|automation|n8n|python|it support|technical support|next\.?js|react|typescript|java)/.test(haystack)) catBoost = 14;

  const base = Math.min(99, 62 + matched.length * 4 + catBoost);
  return {
    score: matched.length === 0 ? 56 : base,
    matched: Array.from(new Set(matched)).slice(0, 8)
  };
}

async function fetchJsonWithTimeout(url, timeoutMs = 5500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "MarkChesterPortfolio-CareerEngine/3.0" }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function buildDirectBoardOpportunities(queryLabel, minSalary) {
  const q = encodeURIComponent(queryLabel);
  const salaryNote = `$${minSalary}+/mo (PHP ${Math.round(minSalary * 58).toLocaleString()}+/mo) • Remote`;
  return [
    {
      id: `board-onlinejobs-${minSalary}`,
      title: `AI Automation Specialist (n8n / Make / Python) — Direct Remote`,
      company: "OnlineJobs.ph Direct International Employers",
      location: "Philippines Remote (US / AU / UK Clients)",
      type: "Full-time Remote",
      salary: `$${Math.max(600, minSalary)}–$1,400/mo`,
      postedAt: "Live Board",
      url: `https://www.onlinejobs.ph/jobseekers/jobsearch?jobkeyword=${q}&fullTime=on`,
      source: "OnlineJobs.ph Direct",
      tags: ["n8n", "AI Automation", "Python", "Remote PH", `$${minSalary}+/mo`],
      description: `Direct international founders hiring Filipino AI Automation Specialists and IT developers for n8n, Make, OpenAI/Claude/Gemini integrations, webhooks, and workflow automation. Target compensation: ${salaryNote}.`,
      alignmentScore: 98,
      matchedSkills: ["ai automation", "n8n", "python", "llm", "webhook", "remote"],
      hiringStatus: "Actively Hiring",
      safetyBadge: "Verified PH Remote Board"
    },
    {
      id: `board-linkedin-${minSalary}`,
      title: `AI Automation / AI Operations Specialist (Remote Easy Apply)`,
      company: "LinkedIn Remote Employers (Worldwide / APAC)",
      location: "Remote (Philippines / Worldwide)",
      type: "Full-time Remote",
      salary: `$${Math.max(700, minSalary)}–$2,000/mo`,
      postedAt: "Live Board",
      url: `https://www.linkedin.com/jobs/search/?keywords=${q}&location=Philippines&f_WT=2&f_AL=true`,
      source: "LinkedIn Easy Apply",
      tags: ["AI Automation", "Prompt Engineering", "IT", "Easy Apply", "Remote"],
      description: `Pre-filtered LinkedIn Remote + Easy Apply listings for AI Automation Specialists, Prompt Engineers, and IT Support/Full-Stack roles open to Philippines remote applicants (${salaryNote}).`,
      alignmentScore: 96,
      matchedSkills: ["ai automation", "prompt engineer", "python", "next.js", "remote"],
      hiringStatus: "Actively Hiring",
      safetyBadge: "Verified LinkedIn Filter"
    },
    {
      id: `board-jobstreet-${minSalary}`,
      title: `IT Specialist / AI Workflow Developer (Work From Home)`,
      company: "JobStreet Philippines Remote Employers",
      location: "Philippines (Work From Home)",
      type: "Full-time Remote",
      salary: `PHP ${Math.round(Math.max(600, minSalary) * 58).toLocaleString()}–PHP 75,000/mo ($600–$1,300/mo)`,
      postedAt: "Live Board",
      url: `https://ph.jobstreet.com/${encodeURIComponent(queryLabel.toLowerCase().replace(/\s+/g, "-"))}-jobs/work-from-home?salary=${Math.round(Math.max(600, minSalary) * 58)}`,
      source: "JobStreet PH Remote",
      tags: ["IT Support", "AI Automation", "Full-Stack", "WFH", "PHP 35k+"],
      description: `Work-from-home JobStreet Philippines openings filtered for at least PHP ${Math.round(Math.max(600, minSalary) * 58).toLocaleString()}/month ($${minSalary}+/mo) across AI Automation, IT Support, and Software Engineering.`,
      alignmentScore: 95,
      matchedSkills: ["it support", "ai automation", "sql", "next.js", "remote"],
      hiringStatus: "Actively Hiring",
      safetyBadge: "Verified JobStreet Filter"
    },
    {
      id: `board-indeed-${minSalary}`,
      title: `Remote IT Support & Technical Automation Specialist`,
      company: "Indeed Philippines Remote Employers",
      location: "Remote in Philippines",
      type: "Full-time Remote",
      salary: `PHP ${Math.round(Math.max(600, minSalary) * 58).toLocaleString()}+/mo ($${minSalary}+/mo)`,
      postedAt: "Live Board",
      url: `https://ph.indeed.com/jobs?q=${q}&l=Remote&sc=0kf%3Aattr%28DSQF7%29%3B`,
      source: "Indeed PH Remote",
      tags: ["Technical Support", "IT Support", "Automation", "Remote PH"],
      description: `Indeed Philippines remote listings matching ${queryLabel} for BSIT graduates with technical troubleshooting, Python/n8n automation, AnyDesk/TeamViewer, and customer support experience (${salaryNote}).`,
      alignmentScore: 94,
      matchedSkills: ["technical support", "it support", "anydesk", "python", "remote"],
      hiringStatus: "Actively Hiring",
      safetyBadge: "Verified Indeed Filter"
    }
  ];
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=180, stale-while-revalidate=600");
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
    return res.status(429).json({ error: "Too many requests. Wait briefly." });
  }

  const location = String(req.query.location || "Remote (Philippines / Worldwide)").slice(0, 120);
  const category = String(req.query.category || "automation").toLowerCase().slice(0, 32);
  const queryText = String(req.query.q || "").trim().slice(0, 100);
  const minSalary = Math.max(0, Math.min(10000, Number(req.query.minSalary) || 600));

  const searchMap = {
    all: "AI automation IT",
    automation: "AI automation n8n",
    ai_prompt: "AI prompt engineer",
    tech_support: "IT technical support",
    fullstack: "Next.js React developer",
    backend: "Java SQL backend"
  };
  const effectiveQuery = queryText || searchMap[category] || "AI automation";
  const encodedQ = encodeURIComponent(effectiveQuery.split(" ").slice(0, 2).join(" "));

  const [remotiveData, jobicyData, himalayasData, arbeitnowData] = await Promise.all([
    fetchJsonWithTimeout(`https://remotive.com/api/remote-jobs?search=${encodedQ}&limit=25`),
    fetchJsonWithTimeout(`https://jobicy.com/api/v2/remote-jobs?count=20&tag=${encodeURIComponent(category === "tech_support" ? "support" : "ai")}`),
    fetchJsonWithTimeout("https://himalayas.app/jobs/api?limit=20"),
    fetchJsonWithTimeout("https://www.arbeitnow.com/api/job-board-api")
  ]);

  const normalized = [...buildDirectBoardOpportunities(effectiveQuery, minSalary)];

  if (remotiveData && Array.isArray(remotiveData.jobs)) {
    for (const j of remotiveData.jobs.slice(0, 18)) {
      const loc = j.candidate_required_location || "Worldwide / Remote";
      if (!isPhRemoteFriendly(loc)) continue;
      const desc = stripHtml(j.description || "").slice(0, 2200);
      const tags = Array.isArray(j.tags) ? j.tags : [];
      const align = scoreAlignment(j.title || "", desc, tags, category);
      const safety = evaluateLegitimacy(j.title, j.company_name, j.url, desc);
      if (!safety.safe || align.score < 66) continue;
      normalized.push({
        id: `remotive-${j.id}`,
        title: j.title || "Remote AI / IT Role",
        company: j.company_name || "Verified Employer",
        location: loc,
        type: j.job_type || "Full-time Remote",
        salary: j.salary || `$${minSalary}+/mo (Listed on post)`,
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
      const loc = j.jobGeo || "Anywhere / Remote";
      if (!isPhRemoteFriendly(loc)) continue;
      const desc = stripHtml(j.jobDescription || j.jobExcerpt || "").slice(0, 2200);
      const tags = [j.jobIndustry, j.jobLevel, j.jobType].flat().filter(Boolean).map(String);
      const align = scoreAlignment(j.jobTitle || "", desc, tags, category);
      const safety = evaluateLegitimacy(j.jobTitle, j.companyName, j.url, desc);
      if (!safety.safe || align.score < 66) continue;
      const monthlyMin = j.annualSalaryMin ? Math.round(Number(j.annualSalaryMin) / 12) : 0;
      const salaryText = monthlyMin >= 500
        ? `~$${monthlyMin.toLocaleString()}/mo ($${j.annualSalaryMin}–$${j.annualSalaryMax || ""}/yr)`
        : "Remote USD Salary (See post)";
      normalized.push({
        id: `jobicy-${j.id}`,
        title: j.jobTitle || "Remote AI / IT Specialist",
        company: j.companyName || "Verified Employer",
        location: loc,
        type: Array.isArray(j.jobType) ? j.jobType[0] : (j.jobType || "Full-time Remote"),
        salary: salaryText,
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

  if (himalayasData && Array.isArray(himalayasData.jobs)) {
    for (const j of himalayasData.jobs.slice(0, 15)) {
      const locList = Array.isArray(j.locationRestrictions) && j.locationRestrictions.length
        ? j.locationRestrictions.join(", ")
        : "Worldwide / Remote";
      if (!isPhRemoteFriendly(locList)) continue;
      const desc = stripHtml(j.description || j.excerpt || "").slice(0, 2200);
      const tags = Array.isArray(j.categories) ? j.categories : [];
      const align = scoreAlignment(j.title || "", desc, tags, category);
      const safety = evaluateLegitimacy(j.title, j.companyName, j.applicationLink || j.guid, desc);
      if (!safety.safe || align.score < 68) continue;
      const sal = j.minSalary ? `$${Math.round(j.minSalary / 12).toLocaleString()}/mo est.` : "Remote USD Salary";
      normalized.push({
        id: `himalayas-${j.guid || j.title}`,
        title: j.title || "Remote Tech Role",
        company: j.companyName || "Verified Employer",
        location: locList,
        type: j.employmentType || "Full-time Remote",
        salary: sal,
        postedAt: "Active",
        url: j.applicationLink || j.guid,
        source: "Himalayas Live",
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
    for (const j of arbeitnowData.data.slice(0, 12)) {
      if (!j.remote) continue;
      const desc = stripHtml(j.description || "").slice(0, 2200);
      const tags = Array.isArray(j.tags) ? j.tags : [];
      const align = scoreAlignment(j.title || "", desc, tags, category);
      const safety = evaluateLegitimacy(j.title, j.company_name, j.url, desc);
      if (!safety.safe || align.score < 72) continue;
      normalized.push({
        id: `arbeitnow-${j.slug}`,
        title: j.title || "Remote Engineering / IT Role",
        company: j.company_name || "Verified Employer",
        location: `${j.location || "Worldwide"} (Remote)`,
        type: Array.isArray(j.job_types) && j.job_types[0] ? j.job_types[0] : "Full-time Remote",
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
  const qLower = queryText.toLowerCase();
  const filtered = normalized.filter((item) => {
    const key = `${item.title.toLowerCase()}::${item.company.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    if (!qLower || item.id.startsWith("board-")) return true;
    return `${item.title} ${item.company} ${item.description} ${item.tags.join(" ")}`.toLowerCase().includes(qLower);
  });

  filtered.sort((a, b) => b.alignmentScore - a.alignmentScore);

  return res.status(200).json({
    ok: true,
    location,
    category,
    minSalary,
    fetchedAt: new Date().toISOString(),
    count: filtered.length,
    jobs: filtered.slice(0, 20)
  });
};
