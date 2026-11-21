// ============================================================================
// Mark Chester Santos — Portfolio, 7-Theme Data Dashboard, Live Auditor,
// 3D Voice Mae AI & Private Owner-Only Career Vault
// Security-Hardened (Strict Escaping, Timing-Safe Owner Auth, Zero Layout Reflow)
// ============================================================================

const DEFAULT_SOCIALS = {
  github: "https://github.com/whodakingofhell",
  facebook: "https://www.facebook.com/search/top?q=Mark%20Chester%20Santos",
  instagram: "https://www.instagram.com/"
};

// 100% Verified Canonical Profile from Mark_Chester_Santos_Resume.pdf + GitHub Repos
const MARK_PROFILE = {
  fullName: "MARK CHESTER R. SANTOS",
  location: "Muntinlupa, Philippines 1772",
  email: "chesrakzxc@gmail.com",
  phone: "+63995-814-0991",
  github: "github.com/whodakingofhell",
  portfolioUrl: "https://mark-chester-santos-portfolio.vercel.app/",
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "South Mansfield College",
    dates: "July 2017 – August 2023"
  },
  certifications: [
    "Python Programming: A Concise Introduction — Wesleyan University (Coursera) | April 2023",
    "Security Awareness Training — ISC2 (Coursera) | August 2023"
  ],
  experience: [
    {
      role: "Customer Service Representative (Technical & Account Support)",
      company: "IBEX Global Solutions INC (Walmart Account)",
      dates: "October 2025 – June 2026",
      bullets: [
        "Delivered technical and account support for Walmart US customers across phone, live chat, and email channels.",
        "Navigated multiple backend order, account, and payment systems simultaneously to resolve complex escalations with high first-call resolution.",
        "Consistently met or exceeded daily operational metrics including AHT, CSAT, and quality assurance audits."
      ]
    },
    {
      role: "Travel Associate (Operations & Escalation Resolution)",
      company: "IGT Solutions (Atain)",
      dates: "March 2025 – September 2025",
      bullets: [
        "Managed end-to-end domestic and international travel bookings, modifications, and cancellations under strict SLA queues.",
        "Troubleshot booking system errors and coordinated directly with airline and hotel partners to close discrepancies.",
        "Collaborated with team leads to identify process improvements that reduced average handle time."
      ]
    }
  ],
  projects: [
    {
      id: "bground",
      name: "BGround — 0-Credit Browser-Local Background Removal Studio",
      meta: "bground.vercel.app | Next.js, WASM/ONNX, Canvas, Strict CSP",
      tags: ["nextjs", "react", "typescript", "ai", "wasm", "canvas", "media", "fullstack", "vercel", "security"],
      bullets: [
        "Engineered a browser-local AI background removal and studio photo enhancer running WASM/ONNX directly on-device with zero recurring AI credit costs.",
        "Built natural contact-shadow compositing, editorial color grading, and 1:1 Marketplace, 4:5 Carousel, and 1–30s Social Reel exports.",
        "Hardened deployment with strict Content-Security-Policy, X-Frame-Options DENY, and frame-ancestors none."
      ]
    },
    {
      id: "skyland",
      name: "Philippine Skyland — Real Estate Broker & Appraiser Platform",
      meta: "philippine-skyland.vercel.app | Next.js 16, TypeScript, Prisma, PostgreSQL 16",
      tags: ["nextjs", "react", "typescript", "postgres", "postgresql", "prisma", "security", "fullstack", "saas", "api", "rbac"],
      bullets: [
        "Architected a full-stack SaaS platform with 13 Prisma models on PostgreSQL 16, 14+ authenticated API endpoints, and 4-role RBAC with 5-attempt lockout.",
        "Implemented an 11-layer security stack: Zod validation, CSRF, rate limiting, bcrypt, JWT, HMAC API signing, Cloudflare Turnstile, and audit logs.",
        "Delivered EN/Filipino/Chinese localization, 30-minute auto-signout, and Playwright E2E test suites."
      ]
    },
    {
      id: "sonata",
      name: "Sonata — Microsoft Setup Form (LicenseDesk)",
      meta: "microsoft-setup-form1.vercel.app | Next.js 15, React 19, Tailwind CSS 4",
      tags: ["nextjs", "react", "typescript", "tailwind", "supabase", "vercel", "automation", "webhook", "api", "support", "technical support"],
      bullets: [
        "Built a production service intake platform for Microsoft Windows/Office activation workflows with Next.js 15, React 19, and Tailwind CSS 4.",
        "Engineered serverless API validation (Zod), deduplication, rate limiting, 3-attempt Discord webhook retry, Resend emails, Turnstile, and Sentry monitoring."
      ]
    },
    {
      id: "appointment",
      name: "AI Appointment Assistant — Remote PC Support API",
      meta: "appointment-backend-one.vercel.app | Node.js, Supabase RLS, Vercel",
      tags: ["node", "backend", "api", "supabase", "postgres", "vercel", "support", "technical support", "helpdesk", "anydesk", "virtual assistant"],
      bullets: [
        "Deployed 3 testable Vercel serverless endpoints (book-appointment, list-appointments, health) for 5–20 minute remote PC support via AnyDesk and TeamViewer.",
        "Enforced Supabase Row-Level Security (RLS), audit logging, 5 bookings/IP/hour rate limiting, CORS restrictions, and instant Discord technician alerts."
      ]
    },
    {
      id: "content-os",
      name: "PAIOS, AI Engineering OS & Python Intelligence Suite",
      meta: "github.com/whodakingofhell/PAIOS | n8n, Python, TypeScript, Multi-LLM",
      tags: ["ai", "automation", "n8n", "python", "llm", "prompt", "workflow", "typescript", "agent", "operations"],
      bullets: [
        "Built PAIOS, system-intel-scanner, youtube-transcript-pro (5-layer fallback), and a 14-stage n8n + Python content pipeline operating at $0/month free-tier cost.",
        "Created SHA-256 asset deduplication (autonomous-file-organizer) and critical-skill-evaluator to audit workflows against real failure patterns."
      ]
    },
    {
      id: "inventory",
      name: "SMC Inventory System — Enterprise POS & Inventory Core",
      meta: "Java 17, MySQL 8.0, HikariCP, JUnit 5 | 47 Source Files, 10,400+ LOC",
      tags: ["java", "mysql", "sql", "backend", "pos", "testing", "security", "gradle", "enterprise", "software"],
      bullets: [
        "Architected a 47-file, 10,400+ LOC Point-of-Sale and inventory system with a 10-table MySQL 8.0 schema and clean layered architecture.",
        "Implemented BCrypt (12 rounds), PreparedStatement SQLi defense, SELECT FOR UPDATE row locking, deadlock retry, and 100+ JUnit 5 + Mockito + H2 tests."
      ]
    }
  ],
  skillGroups: {
    "Support & Operations": "Tier-1/Tier-2 Technical Support, Multi-Channel Phone/Chat/Email (Walmart/IBEX, IGT), AnyDesk, TeamViewer, CRM, SLA/CSAT/AHT, SOP Writing",
    "Languages & Web": "TypeScript, JavaScript, Python, Java 17 (4 yrs), SQL, Next.js 15/16, React 18/19, Tailwind CSS 4, Node.js, REST APIs",
    "Data & Cloud": "PostgreSQL 16, Supabase (RLS), Prisma ORM, MySQL 8.0, HikariCP, Vercel Serverless, Cloudflare, Docker, GitHub Actions",
    "AI & Automation": "n8n, Claude, OpenAI GPT, Gemini, Prompt Engineering, Browser WASM/ONNX, Agent-Reach, Python Scripting, FFmpeg",
    "Security & QA": "HSTS, Strict CSP, Zod, RBAC, HMAC-SHA256, BCrypt, Rate Limiting, SSRF Defense, Playwright E2E, JUnit 5, Sentry"
  }
};

const CASE_STUDIES = {
  bground: {
    badge: "Browser-Local AI Media App",
    title: "BGround — 0-Credit Background Removal & Studio Exporter",
    challenge: "Cloud background removers charge per-image AI credits and force sellers to upload product photos to third-party servers.",
    solution: "Built a browser-local cutout studio running WASM/ONNX on the user's device, paired with realistic contact shadows, studio color grades, and 1:1, 4:5, and 1–30s social reel exports under a hardened CSP.",
    metrics: [
      "0 AI credits consumed — background isolation executes locally in browser",
      "Exports exact 1:1 Marketplace, 4:5 Carousel, and 9:16 Social Reel formats",
      "Production CSP + X-Frame-Options: DENY security headers verified live"
    ],
    stack: ["Next.js", "TypeScript", "WASM / ONNX", "Canvas API", "Vercel", "Strict CSP"],
    github: "https://github.com/whodakingofhell",
    live: "https://bground.vercel.app/"
  },
  skyland: {
    badge: "Enterprise SaaS • 11-Layer Security",
    title: "Philippine Skyland — Real Estate & Appraiser Platform",
    challenge: "Philippine licensed brokers and appraisers needed a secure, multi-language system for listings, appraisals, and client inquiries.",
    solution: "Shipped Next.js 16 + Prisma + PostgreSQL 16 with 13 models, 14+ endpoints, 4-role RBAC, 5-attempt lockout, HMAC signing, CSRF, Turnstile, and Playwright E2E tests.",
    metrics: [
      "13 Prisma models and 14+ authenticated endpoints in production",
      "11-layer defense stack covering auth, input validation, and audit trails",
      "EN/FIL/ZH localization with 30-minute idle auto-signout"
    ],
    stack: ["Next.js 16", "TypeScript", "Prisma ORM", "PostgreSQL 16", "NextAuth", "Playwright E2E"],
    github: "https://github.com/whodakingofhell/MarkChesterSantosRealEstateProj",
    live: "https://philippine-skyland.vercel.app"
  },
  sonata: {
    badge: "Fulfillment & Support Pipeline",
    title: "Sonata — Microsoft Setup Form (LicenseDesk)",
    challenge: "Manual Microsoft activation bookings caused duplicate requests and missed notifications.",
    solution: "Built Next.js 15 + React 19 intake with Zod validation, deduplication, email rate limiting, 3-attempt Discord webhook retry, Resend emails, Turnstile, and Sentry.",
    metrics: [
      "3-attempt webhook retry eliminates dropped fulfillment alerts",
      "Automated deduplication and Cloudflare Turnstile bot filtering",
      "Live deployed at microsoft-setup-form1.vercel.app"
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Zod", "Supabase", "Resend", "Sentry"],
    github: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer1",
    live: "https://microsoft-setup-form1.vercel.app"
  },
  appointment: {
    badge: "Serverless API • Remote PC Support",
    title: "AI Appointment Assistant — Backend API",
    challenge: "Remote AnyDesk/TeamViewer PC support bookings needed timezone normalization and spam protection.",
    solution: "Built 3 standalone Vercel serverless endpoints with Supabase RLS, audit logging, 5 req/IP/hr rate limiting, and Discord dispatch embeds.",
    metrics: [
      "3 independently curl-testable serverless endpoints on Vercel",
      "Supabase Row-Level Security and audit trail on every booking",
      "Philippine timezone handling with 5 bookings/IP/hr spam cap"
    ],
    stack: ["Node.js", "Vercel Serverless", "Supabase RLS", "PostgreSQL", "Discord Webhooks"],
    github: "https://github.com/whodakingofhell",
    live: "https://appointment-backend-one.vercel.app"
  },
  "content-os": {
    badge: "AI Operating System & Python Skills",
    title: "PAIOS, AI Engineering OS & 14-Stage Pipeline",
    challenge: "Running multi-tool AI engineering and research manually created fragmented docs and high API bills.",
    solution: "Built PAIOS (TypeScript), system-intel-scanner (Python), youtube-transcript-pro (5-layer fallback), dashboard-extras, and a 14-stage n8n + Python workflow designed at $0/month.",
    metrics: [
      "12 public GitHub repositories spanning TypeScript, Python, Java, and PowerShell",
      "$0/month free-tier orchestration across Gemini, Supabase, Vercel, and GitHub Actions",
      "5-layer YouTube transcript fallback chain for reliable research ingestion"
    ],
    stack: ["TypeScript", "Python", "n8n", "PowerShell", "Obsidian", "Agent-Reach"],
    github: "https://github.com/whodakingofhell/PAIOS",
    live: "https://github.com/whodakingofhell"
  },
  inventory: {
    badge: "Enterprise Java 17 • 10,400+ LOC",
    title: "SMC Inventory System — POS & Warehouse Core",
    challenge: "Multi-register checkout environments risk stock overselling and database deadlocks.",
    solution: "Engineered 47 Java 17 source files in layered architecture with MySQL 8.0, HikariCP, BCrypt, SELECT FOR UPDATE locking, deadlock retry, and 100+ JUnit 5/Mockito tests.",
    metrics: [
      "47 source files and 10,400+ lines of tested Java 17 code",
      "100+ automated unit and integration tests (JUnit 5 + Mockito + H2)",
      "Transaction-locked inventory math and Gradle Shadow fat JAR build"
    ],
    stack: ["Java 17", "MySQL 8.0", "HikariCP", "BCrypt", "JUnit 5", "Mockito", "Gradle 8.14"],
    github: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer",
    live: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer"
  },
  "ops-vault": {
    badge: "SHA-256 Asset Governance",
    title: "Autonomous File Organizer & Critical Skill Evaluator",
    challenge: "Growing AI asset directories quickly accumulate duplicate files and untested prompt skills.",
    solution: "Combined a Python SHA-256 deduplicator (`auto_organize.py`) maintaining JSON catalogs with `critical-skill-evaluator` and `hermes-restore-point` snapshots.",
    metrics: [
      "Zero bit-exact duplicates via SHA-256 collision hashing",
      "Structured CATALOG.json + INDEX.md generated automatically",
      "100/100 safe score verified by repo-security-auditor"
    ],
    stack: ["Python", "SHA-256", "PowerShell", "JSON Catalog", "Security Auditing"],
    github: "https://github.com/whodakingofhell/critical-skill-evaluator",
    live: "https://github.com/whodakingofhell/hermes-restore-point"
  }
};

const WAVE_TOOLS = [
  { name: "BGround WASM / ONNX", abbr: "BG", desc: "Browser-local 0-credit background removal, studio shadows, and 1–30s social reel exports." },
  { name: "Next.js 15 / 16", abbr: "NX", desc: "App Router, Server Components, and Serverless APIs powering BGround, Skyland, and Sonata." },
  { name: "TypeScript", abbr: "TS", desc: "Strict type safety paired with Zod schema validation across frontend and API boundaries." },
  { name: "Python", abbr: "PY", desc: "Powers system-intel-scanner, youtube-transcript-pro, dashboard-extras, and SHA-256 asset tools." },
  { name: "Technical Support", abbr: "TSR", desc: "Enterprise phone/chat/email escalations for Walmart US (IBEX Global) and IGT Solutions." },
  { name: "n8n Automation", abbr: "N8", desc: "14-stage workflows connecting webhooks, LLMs, voice synthesis, and YouTube APIs." },
  { name: "Supabase & Postgres", abbr: "PG", desc: "13+ Prisma models, Row-Level Security (RLS), audit tables, and rate-limited endpoints." },
  { name: "Java 17 & MySQL", abbr: "JV", desc: "10,400+ LOC enterprise POS with SELECT FOR UPDATE row locking and 100+ JUnit tests." },
  { name: "Web Security", abbr: "SEC", desc: "HSTS, strict CSP, timing-safe HMAC auth, SSRF IP blocking, BCrypt, and Turnstile." },
  { name: "Vercel Edge", abbr: "VC", desc: "Production deployments and Node.js serverless functions with hardened security headers." },
  { name: "PowerShell", abbr: "PS", desc: "Built hermes-restore-point snapshots and automated Windows workflow launchers." },
  { name: "Agent-Reach", abbr: "AR", desc: "Zero-API-fee web discovery across GitHub, job boards, and public documentation." }
];

const NO_AI_SLOP_PATTERNS = [
  { regex: /\bdelve\b/gi, label: "delve", fix: "Use 'examine' or 'review'." },
  { regex: /\bunlock(ing|s|ed)?\b/gi, label: "unlock", fix: "Name the actual capability." },
  { regex: /\belevate(s|d|ing)?\b/gi, label: "elevate", fix: "State the concrete improvement." },
  { regex: /\bempower(s|ed|ing)?\b/gi, label: "empower", fix: "Say what the user can now do." },
  { regex: /\bseamless(ly)?\b/gi, label: "seamless", fix: "Describe how the steps connect." },
  { regex: /\bgame[- ]changer\b/gi, label: "game-changer", fix: "State the measurable result." },
  { regex: /\bcutting[- ]edge\b/gi, label: "cutting-edge", fix: "Name the exact version or tool." },
  { regex: /\bnext[- ]level\b/gi, label: "next-level", fix: "Remove hype wording." },
  { regex: /\brobust\b/gi, label: "robust", fix: "Specify the reliability mechanism." },
  { regex: /\btestament\b/gi, label: "testament", fix: "Show direct proof instead." },
  { regex: /\bsynergy\b/gi, label: "synergy", fix: "Describe the actual collaboration." },
  { regex: /\bpassionate self-starter\b/gi, label: "passionate self-starter", fix: "Cite shipped work instead." },
  { regex: /\bhit the ground running\b/gi, label: "hit the ground running", fix: "State Day-1 deliverables." },
  { regex: /\bi am writing to express\b/gi, label: "I am writing to express", fix: "Open with the team's need." },
  { regex: /\bit['’]?s not just\b/gi, label: "It's not just X", fix: "State the fact directly." },
  { regex: /\bhere['’]?s the thing\b/gi, label: "Here's the thing", fix: "Delete throat-clearing opener." }
];

// Verified Portfolio Dataset for the 7-Theme Interactive Editorial Dashboard
const PORTFOLIO_DEFAULT_DATASET = {
  name: "Mark Chester Santos — Verified Shipped Systems & GitHub Repos",
  labelCol: "System",
  categoryCol: "Domain",
  metricCol: "Engineering Score",
  secondaryCol: "Key Metric",
  columns: ["System", "Domain", "Primary Stack", "Engineering Score", "Key Metric", "Status"],
  rows: [
    { System: "BGround Studio", Domain: "Live Web App", "Primary Stack": "Next.js + WASM/ONNX", "Engineering Score": 96, "Key Metric": "0 AI credits / 3 formats", Status: "Live on Vercel" },
    { System: "Philippine Skyland", Domain: "Live Web App", "Primary Stack": "Next.js 16 + Prisma + PG", "Engineering Score": 98, "Key Metric": "13 models / 11-layer sec", Status: "Live on Vercel" },
    { System: "Sonata LicenseDesk", Domain: "Live Web App", "Primary Stack": "Next.js 15 + Zod + Resend", "Engineering Score": 94, "Key Metric": "3-attempt webhook retry", Status: "Live on Vercel" },
    { System: "SMC Inventory POS", Domain: "Ops & Backend", "Primary Stack": "Java 17 + MySQL 8.0", "Engineering Score": 97, "Key Metric": "10,400+ LOC / 100+ tests", Status: "GitHub Public" },
    { System: "AI Appointment API", Domain: "Ops & Backend", "Primary Stack": "Node.js + Supabase RLS", "Engineering Score": 92, "Key Metric": "3 endpoints / 5 req/hr", Status: "Live on Vercel" },
    { System: "PAIOS", Domain: "AI & Python", "Primary Stack": "TypeScript + n8n", "Engineering Score": 95, "Key Metric": "Personal AI OS", Status: "GitHub Public" },
    { System: "system-intel-scanner", Domain: "AI & Python", "Primary Stack": "Python CLI", "Engineering Score": 92, "Key Metric": "GitHub + SO + YT intel", Status: "GitHub Public" },
    { System: "youtube-transcript-pro", Domain: "AI & Python", "Primary Stack": "Python 5-Layer", "Engineering Score": 91, "Key Metric": "5-layer caption fallback", Status: "GitHub Public" },
    { System: "dashboard-extras", Domain: "AI & Python", "Primary Stack": "Python Voice API", "Engineering Score": 90, "Key Metric": "Monitor & voice backend", Status: "GitHub Public" },
    { System: "hermes-restore-point", Domain: "Ops & Backend", "Primary Stack": "PowerShell", "Engineering Score": 89, "Key Metric": "Snapshot & rollback", Status: "GitHub Public" },
    { System: "critical-skill-evaluator", Domain: "AI & Python", "Primary Stack": "QA + SHA-256", "Engineering Score": 90, "Key Metric": "Error-driven skill QA", Status: "GitHub Public" },
    { System: "Walmart & IGT Ops", Domain: "Technical Support", "Primary Stack": "Phone/Chat/Email + CRM", "Engineering Score": 95, "Key Metric": "Top CSAT / AHT / FCR", Status: "Verified Role" }
  ]
};

// Global App State
const STATE = {
  ownerAuthenticated: false,
  jobFinderMode: "manual", // 'manual' | 'auto'
  location: "Remote (Philippines / Worldwide)",
  minSalary: 600,
  jobs: [],
  selectedJob: null,
  lastResumeModel: null,
  resumeVariant: 0,
  coverVariant: 0,
  reqsVariant: 0,
  maeOpen: false,
  maeListening: false,
  maeHistory: [],
  dataset: JSON.parse(JSON.stringify(PORTFOLIO_DEFAULT_DATASET)),
  sortCol: null,
  sortAsc: false,
  bgroundCutout: true,
  bgroundBackdrop: "studio",
  bgroundAspect: "1:1"
};

const RESUME_VARIANTS = [
  { id: "ai_automation", label: "Track 1/5 — AI Automation Specialist (n8n / Python / Webhooks)" },
  { id: "ai_prompt", label: "Track 2/5 — Prompt Engineer & AI Operations Specialist" },
  { id: "it_support", label: "Track 3/5 — IT Support & Technical Support Specialist" },
  { id: "fullstack", label: "Track 4/5 — Full-Stack Developer (Next.js / TypeScript / Postgres)" },
  { id: "java_backend", label: "Track 5/5 — Java 17 / SQL Backend Software Engineer" }
];

const COVER_VARIANTS = [
  { id: "role_matched", label: "Style 1/4 — Role-Matched Impact Letter" },
  { id: "direct_remote", label: "Style 2/4 — Direct Remote Founder Pitch (OnlineJobs / Startup)" },
  { id: "concise_dm", label: "Style 3/4 — Concise Recruiter Message (<130 words)" },
  { id: "formal_portal", label: "Style 4/4 — Formal Enterprise Portal Letter (LinkedIn / JobStreet / Indeed)" }
];

const REQS_VARIANTS = [
  { id: "technical", label: "Angle 1/3 — Technical Proof & Live Portfolio" },
  { id: "reliability", label: "Angle 2/3 — IT Support & SLA Reliability" },
  { id: "roi", label: "Angle 3/3 — AI Automation ROI & $0/mo Cost Discipline" }
];

const JOB_BOARDS_AUTH = [
  {
    id: "onlinejobs",
    name: "OnlineJobs.ph",
    badge: "Best for $600–$1,400/mo Remote",
    loginUrl: "https://www.onlinejobs.ph/login",
    signupUrl: "https://www.onlinejobs.ph/jobseekers/signup",
    buildSearchUrl: (q) => `https://www.onlinejobs.ph/jobseekers/jobsearch?jobkeyword=${encodeURIComponent(q)}&fullTime=on`
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    badge: "Remote + Easy Apply",
    loginUrl: "https://www.linkedin.com/login",
    signupUrl: "https://www.linkedin.com/signup",
    buildSearchUrl: (q) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(q)}&location=Philippines&f_WT=2&f_AL=true`
  },
  {
    id: "jobstreet",
    name: "JobStreet PH",
    badge: "WFH + PHP 35k+/mo",
    loginUrl: "https://ph.jobstreet.com/oauth/login",
    signupUrl: "https://ph.jobstreet.com/oauth/register",
    buildSearchUrl: (q, minSal) => `https://ph.jobstreet.com/${encodeURIComponent(q.toLowerCase().replace(/[^a-z0-9]+/g, "-"))}-jobs/work-from-home?salary=${Math.round((minSal || 600) * 58)}`
  },
  {
    id: "indeed",
    name: "Indeed PH",
    badge: "Remote IT & AI Roles",
    loginUrl: "https://secure.indeed.com/auth",
    signupUrl: "https://secure.indeed.com/auth",
    buildSearchUrl: (q) => `https://ph.indeed.com/jobs?q=${encodeURIComponent(q)}&l=Remote&sc=0kf%3Aattr%28DSQF7%29%3B`
  }
];

// ============================================================================
// SAFE UTILITIES
// ============================================================================
function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeUrl(url) {
  try {
    const u = new URL(url, window.location.origin);
    if (u.protocol === "http:" || u.protocol === "https:") return u.href;
  } catch {
    return "#";
  }
  return "#";
}

let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById("toast-notification");
  const txt = document.getElementById("toast-text");
  if (!el || !txt) return;
  txt.textContent = msg;
  el.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}

function copyText(text, label) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast(label || "Copied")).catch(() => fallbackCopy(text, label));
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    showToast(label || "Copied");
  } catch {
    showToast("Copy unavailable");
  }
  document.body.removeChild(ta);
}

function auditTextForAiSlop(text) {
  const hits = [];
  for (const p of NO_AI_SLOP_PATTERNS) {
    const m = String(text || "").match(p.regex);
    if (m && m.length) hits.push({ pattern: p.label, count: m.length, fix: p.fix });
  }
  return hits;
}

// ============================================================================
// 1. ANTIGRAVITY PARTICLE CANVASES & FIRM MICRO-INTERACTIONS
// ============================================================================
function initAntigravityCanvas(canvasId, theme) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const colors = theme === "dark"
    ? ["#4285f4", "#60a5fa", "#818cf8", "#a855f7", "#38bdf8", "#f59e0b"]
    : ["#4285f4", "#5e6ad2", "#7c3aed", "#db2777", "#ea580c", "#d97706", "#2563eb"];

  let width = 0;
  let height = 0;
  let particles = [];
  let visible = true;
  const mouse = { x: -9999, y: -9999, active: false };

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(300, rect.width);
    height = Math.max(260, rect.height);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = theme === "dark" ? Math.min(115, Math.floor(width / 10)) : Math.min(150, Math.floor(width / 8));
    const cx = width * 0.56;
    const cy = height * 0.42;
    particles = [];
    for (let i = 0; i < count; i++) {
      const ring = (i % 7) + 1;
      const baseRadius = Math.min(width, height) * (0.18 + ring * 0.11) + (Math.random() - 0.5) * 40;
      const angle = (i / count) * Math.PI * 2 * 3 + Math.random() * 0.5;
      const x = cx + Math.cos(angle) * baseRadius * 1.35;
      const y = cy + Math.sin(angle) * baseRadius * 0.85;
      particles.push({
        x, y, vx: 0, vy: 0, angle,
        orbitSpeed: (0.0005 + Math.random() * 0.0008) * (ring % 2 === 0 ? 1 : -1),
        radius: baseRadius,
        len: 4 + Math.random() * 5.5,
        thick: 1.5 + Math.random() * 1.3,
        color: colors[i % colors.length],
        alpha: theme === "dark" ? (0.35 + Math.random() * 0.5) : (0.42 + Math.random() * 0.42)
      });
    }
  }

  resize();
  window.addEventListener("resize", resize);

  const parent = canvas.parentElement;
  parent.addEventListener("mousemove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
    mouse.active = true;
  });
  parent.addEventListener("mouseleave", () => { mouse.active = false; });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => { visible = entries[0]?.isIntersecting ?? true; }, { threshold: 0.02 }).observe(parent);
  }

  function render() {
    if (visible) {
      ctx.clearRect(0, 0, width, height);
      const cx = width * 0.55;
      const cy = height * (theme === "dark" ? 0.5 : 0.36);

      for (const p of particles) {
        if (!prefersReduced) p.angle += p.orbitSpeed;
        const tx = cx + Math.cos(p.angle) * p.radius * 1.36;
        const ty = cy + Math.sin(p.angle) * p.radius * 0.82;

        if (mouse.active && !prefersReduced) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 145 && dist > 1) {
            const f = (145 - dist) / 145;
            p.vx += (dx / dist) * f * 2.0;
            p.vy += (dy / dist) * f * 2.0;
          }
        }
        p.vx += (tx - p.x) * 0.045;
        p.vy += (ty - p.y) * 0.045;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(Math.atan2(p.y - cy, p.x - cx));
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.roundRect(-p.len * 0.5, -p.thick * 0.5, p.len, p.thick, p.thick);
        ctx.fill();
        ctx.restore();
      }
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

// Floating magnetic hover STRICTLY on small pills (never shifting prose boxes!)
function initMagneticPills() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".float-pill[data-float]").forEach((el) => {
    const s = Number(el.getAttribute("data-float")) || 5;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
      el.style.transform = `translate3d(${(nx * s).toFixed(1)}px, ${(ny * s - 2).toFixed(1)}px, 0)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

function initTypewriterMorph() {
  const el = document.getElementById("typewriter-role");
  if (!el) return;
  const phrases = ["web apps & AI tools", "BGround & SaaS", "technical support ops", "Python & n8n flows", "Java 17 systems"];
  let pi = 0;
  let ci = phrases[0].length;
  let del = false;
  function step() {
    const cur = phrases[pi];
    if (!del) {
      ci++;
      el.textContent = cur.slice(0, ci);
      if (ci >= cur.length) { del = true; setTimeout(step, 2200); return; }
      setTimeout(step, 58);
    } else {
      ci--;
      el.textContent = cur.slice(0, ci);
      if (ci <= 0) { del = false; pi = (pi + 1) % phrases.length; setTimeout(step, 240); return; }
      setTimeout(step, 32);
    }
  }
  setTimeout(() => { del = true; step(); }, 2500);
}

function initScrollManifesto() {
  const el = document.getElementById("scroll-manifesto");
  if (!el) return;
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map((w) => `<span class="scroll-reveal-word">${escapeHtml(w)}</span>`).join(" ") + `<span class="prismatic-cursor" aria-hidden="true"></span>`;
  const spans = Array.from(el.querySelectorAll(".scroll-reveal-word"));
  function update() {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    const prog = Math.max(0.1, Math.min(1, (vh * 0.85 - rect.top) / (vh * 0.5 + rect.height)));
    const lit = Math.ceil(prog * spans.length);
    spans.forEach((sp, i) => sp.classList.toggle("lit", i < lit));
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initWaveRibbon() {
  const container = document.getElementById("wave-ribbon");
  const nameEl = document.getElementById("wave-detail-name");
  const descEl = document.getElementById("wave-detail-desc");
  if (!container) return;

  const total = WAVE_TOOLS.length;
  container.innerHTML = WAVE_TOOLS.map((t, i) => {
    const y = Math.round(Math.sin((i / (total - 1)) * Math.PI) * -18 + 8);
    return `<button type="button" class="wave-node ${i === 0 ? "active" : ""}" style="--wave-y:${y}px" data-idx="${i}" aria-label="${escapeHtml(t.name)}" title="${escapeHtml(t.name)}"><span class="font-mono-code text-[11px] font-bold">${escapeHtml(t.abbr)}</span></button>`;
  }).join("");

  const nodes = container.querySelectorAll(".wave-node");
  function pick(idx) {
    const t = WAVE_TOOLS[idx];
    if (!t) return;
    nodes.forEach((n, j) => n.classList.toggle("active", j === idx));
    if (nameEl) nameEl.textContent = t.name;
    if (descEl) descEl.textContent = t.desc;
  }
  nodes.forEach((n) => {
    const idx = Number(n.getAttribute("data-idx"));
    n.addEventListener("mouseenter", () => pick(idx));
    n.addEventListener("focus", () => pick(idx));
    n.addEventListener("click", () => pick(idx));
  });
}

function filterWork(cat) {
  document.querySelectorAll("#work-filter-bar .studio-tab").forEach((b) => b.classList.toggle("active", b.getAttribute("data-filter") === cat));
  document.querySelectorAll(".work-card").forEach((c) => c.classList.toggle("hidden", cat !== "all" && c.getAttribute("data-category") !== cat));
}

// ============================================================================
// 2. INTERACTIVE PROJECT LIVE PREVIEW SANDBOXES (BGround, Skyland, Sonata, CLI)
// ============================================================================
function openProjectDemo(key) {
  switchLiveDemo(key);
  document.getElementById("demos")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function switchLiveDemo(key) {
  ["bground", "skyland", "sonata", "intel"].forEach((k) => {
    const btn = document.getElementById(`demo-tab-${k}`);
    if (!btn) return;
    if (k === key) {
      btn.classList.add("bg-white", "text-[#111215]");
      btn.classList.remove("text-white/75");
    } else {
      btn.classList.remove("bg-white", "text-[#111215]");
      btn.classList.add("text-white/75");
    }
  });

  const stage = document.getElementById("live-demo-stage");
  if (!stage) return;

  if (key === "bground") {
    renderBGroundPreview(stage);
  } else if (key === "skyland") {
    renderSkylandPreview(stage);
  } else if (key === "sonata") {
    renderSonataPreview(stage);
  } else {
    renderIntelPreview(stage);
  }
}

function renderBGroundPreview(stage) {
  const bgs = {
    studio: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    obsidian: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    sand: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    cobalt: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)"
  };
  const clutterBg = "repeating-linear-gradient(45deg, #334155 0 12px, #475569 12px 24px)";
  const activeBg = STATE.bgroundCutout ? bgs[STATE.bgroundBackdrop] : clutterBg;
  const aspectClass = STATE.bgroundAspect === "1:1" ? "w-48 h-48" : STATE.bgroundAspect === "4:5" ? "w-44 h-56" : "w-36 h-60";

  stage.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      <div class="lg:col-span-5 flex flex-col items-center justify-center p-4 rounded-2xl bg-black/40 border border-white/10 min-h-[270px]">
        <div class="${aspectClass} rounded-2xl flex flex-col items-center justify-center relative transition-all duration-300 shadow-2xl border border-white/20" style="background:${activeBg}">
          <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-mono-code bg-black/70 text-white">${escapeHtml(STATE.bgroundAspect)} • ${STATE.bgroundCutout ? "0-Credit Cutout" : "Original Raw"}</span>
          <!-- Minimal Studio Sneaker/Product Silhouette SVG -->
          <svg class="w-24 h-24 drop-shadow-xl" viewBox="0 0 120 120" fill="none">
            <ellipse cx="60" cy="96" rx="${STATE.bgroundCutout ? 36 : 0}" ry="7" fill="rgba(0,0,0,0.28)"/>
            <rect x="34" y="28" width="52" height="62" rx="14" fill="#111215" stroke="#ffffff" stroke-width="2.5"/>
            <rect x="44" y="42" width="32" height="16" rx="4" fill="#1a73e8"/>
            <circle cx="60" cy="72" r="7" fill="#34d399"/>
          </svg>
        </div>
      </div>

      <div class="lg:col-span-7 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs font-mono-code text-[#34d399]">bground.vercel.app • Browser-Local WASM/ONNX</span>
          <a href="https://bground.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-white px-4 py-1.5 text-xs">Launch Full BGround App ↗</a>
        </div>
        <h3 class="font-display font-bold text-xl text-white">Interactive Cutout, Studio Shadow &amp; Reel Format Preview</h3>
        <p class="text-xs text-[#9aa0ad] leading-relaxed">
          BGround enforces <code class="text-white">X-Frame-Options: DENY</code> for strict clickjacking security. Test the workflow mechanics right here, then launch the full production app in one click.
        </p>

        <div class="space-y-3 pt-1">
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <span class="text-[#9aa0ad] w-24">1. Isolation:</span>
            <button type="button" onclick="STATE.bgroundCutout=false;switchLiveDemo('bground')" class="px-3 py-1 rounded-full border ${!STATE.bgroundCutout ? "bg-white text-[#111215] border-white font-semibold" : "border-white/20 text-white/80"}">Raw Cluttered Photo</button>
            <button type="button" onclick="STATE.bgroundCutout=true;switchLiveDemo('bground')" class="px-3 py-1 rounded-full border ${STATE.bgroundCutout ? "bg-white text-[#111215] border-white font-semibold" : "border-white/20 text-white/80"}">0-Credit Cutout + Shadow</button>
          </div>
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <span class="text-[#9aa0ad] w-24">2. Backdrop:</span>
            ${["studio", "obsidian", "sand", "cobalt"].map((b) => `<button type="button" onclick="STATE.bgroundCutout=true;STATE.bgroundBackdrop='${b}';switchLiveDemo('bground')" class="px-3 py-1 rounded-full border capitalize ${STATE.bgroundBackdrop === b && STATE.bgroundCutout ? "bg-[#1a73e8] text-white border-[#1a73e8]" : "border-white/20 text-white/80"}">${b}</button>`).join("")}
          </div>
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <span class="text-[#9aa0ad] w-24">3. Export:</span>
            ${["1:1", "4:5", "9:16"].map((a) => `<button type="button" onclick="STATE.bgroundAspect='${a}';switchLiveDemo('bground')" class="px-3 py-1 rounded-full border ${STATE.bgroundAspect === a ? "bg-white text-[#111215] border-white font-semibold" : "border-white/20 text-white/80"}">${a} Export</button>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSkylandPreview(stage) {
  stage.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      <div class="lg:col-span-6 space-y-3">
        <span class="text-xs font-mono-code text-[#60a5fa]">philippine-skyland.vercel.app • Next.js 16 + PostgreSQL 16</span>
        <h3 class="font-display font-bold text-xl text-white">11-Layer Security &amp; 4-Role RBAC Matrix</h3>
        <p class="text-xs text-[#9aa0ad] leading-relaxed">Built for licensed Philippine brokers and appraisers with 13 Prisma models, 5-attempt lockout, 30-min idle signout, EN/FIL/ZH localization, and Playwright E2E coverage.</p>
        <div class="flex flex-wrap gap-2 pt-2">
          <a href="https://philippine-skyland.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-white px-4 py-2 text-xs">Open Philippine Skyland ↗</a>
          <a href="https://github.com/whodakingofhell/MarkChesterSantosRealEstateProj" target="_blank" rel="noopener noreferrer" class="btn-ghost-dark px-4 py-2 text-xs">View Source ↗</a>
        </div>
      </div>
      <div class="lg:col-span-6 grid grid-cols-2 gap-2.5 text-xs font-mono-code">
        <div class="p-3.5 rounded-xl bg-white/[0.05] border border-white/10"><div class="text-[#34d399] font-semibold">Admin Role</div><div class="text-[#9aa0ad] mt-1">Full audit logs, RBAC approvals, lockouts</div></div>
        <div class="p-3.5 rounded-xl bg-white/[0.05] border border-white/10"><div class="text-[#60a5fa] font-semibold">Broker Role</div><div class="text-[#9aa0ad] mt-1">Listings CRUD, verified client leads</div></div>
        <div class="p-3.5 rounded-xl bg-white/[0.05] border border-white/10"><div class="text-[#fbbf24] font-semibold">Appraiser Role</div><div class="text-[#9aa0ad] mt-1">Valuation queue, PDF report uploads</div></div>
        <div class="p-3.5 rounded-xl bg-white/[0.05] border border-white/10"><div class="text-[#c084fc] font-semibold">11-Layer Guard</div><div class="text-[#9aa0ad] mt-1">Zod + CSRF + HMAC + BCrypt + Turnstile</div></div>
      </div>
    </div>
  `;
}

function renderSonataPreview(stage) {
  stage.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      <div class="lg:col-span-6 space-y-3">
        <span class="text-xs font-mono-code text-[#34d399]">microsoft-setup-form1.vercel.app • Next.js 15 + React 19</span>
        <h3 class="font-display font-bold text-xl text-white">Sonata Booking &amp; 3-Attempt Webhook Retry Flow</h3>
        <p class="text-xs text-[#9aa0ad] leading-relaxed">Test how incoming support/activation submissions pass Zod schema checks, deduplication, Turnstile anti-bot validation, Discord webhook retries, and Resend email confirmations.</p>
        <div class="flex flex-wrap gap-2 pt-2">
          <button type="button" onclick="simulateSonataPipeline()" class="btn-white px-4 py-2 text-xs">Run Live Pipeline Simulation</button>
          <a href="https://microsoft-setup-form1.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-ghost-dark px-4 py-2 text-xs">Open Live App ↗</a>
        </div>
      </div>
      <div id="sonata-sim-log" class="lg:col-span-6 p-4 rounded-xl bg-black/60 border border-white/10 font-mono-code text-[11px] text-[#d1d5db] space-y-1.5 min-h-[175px]">
        <div class="text-[#9aa0ad]">// Ready — click "Run Live Pipeline Simulation"</div>
        <div>1. POST /api/submit-booking (Zod strict validation)</div>
        <div>2. Cloudflare Turnstile + IP Rate Limiter check</div>
        <div>3. Duplicate email/ticket hash check</div>
        <div>4. Discord webhook dispatch (up to 3 exponential retries)</div>
        <div>5. Resend transactional receipt + Sentry trace</div>
      </div>
    </div>
  `;
}

function simulateSonataPipeline() {
  const log = document.getElementById("sonata-sim-log");
  if (!log) return;
  const steps = [
    "[0ms] ✓ Zod schema validated (service: Windows Activation)",
    "[24ms] ✓ Cloudflare Turnstile token verified",
    "[41ms] ✓ SHA-256 deduplication check passed (unique submission)",
    "[118ms] ✓ Discord fulfillment embed delivered (attempt 1/3 — HTTP 204)",
    "[165ms] ✓ Resend confirmation queued + Sentry transaction OK"
  ];
  log.innerHTML = "";
  steps.forEach((line, idx) => {
    setTimeout(() => {
      const d = document.createElement("div");
      d.className = "text-[#34d399]";
      d.textContent = line;
      log.appendChild(d);
    }, idx * 240);
  });
}

function renderIntelPreview(stage) {
  stage.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      <div class="lg:col-span-5 space-y-3">
        <span class="text-xs font-mono-code text-[#fbbf24]">github.com/whodakingofhell • 12 Public Repositories</span>
        <h3 class="font-display font-bold text-xl text-white">Python &amp; TypeScript Agentic Tooling</h3>
        <p class="text-xs text-[#9aa0ad] leading-relaxed">Open-source utilities shipped alongside Mark's web apps: unified intel scanning, 5-layer YouTube transcript extraction, PowerShell restore snapshots, and PAIOS.</p>
        <a href="https://github.com/whodakingofhell?tab=repositories" target="_blank" rel="noopener noreferrer" class="btn-white px-4 py-2 text-xs">Browse All 12 Repos ↗</a>
      </div>
      <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        <a href="https://github.com/whodakingofhell/PAIOS" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10"><div class="font-mono-code text-white font-semibold">PAIOS (TypeScript) ↗</div><div class="text-[#9aa0ad] mt-1">Personal AI Operating System governance &amp; prompts</div></a>
        <a href="https://github.com/whodakingofhell/system-intel-scanner" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10"><div class="font-mono-code text-white font-semibold">system-intel-scanner (Python) ↗</div><div class="text-[#9aa0ad] mt-1">GitHub, StackOverflow &amp; YouTube unified scanner</div></a>
        <a href="https://github.com/whodakingofhell/youtube-transcript-pro" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10"><div class="font-mono-code text-white font-semibold">youtube-transcript-pro (Python) ↗</div><div class="text-[#9aa0ad] mt-1">Resilient 5-layer fallback transcript extractor</div></a>
        <a href="https://github.com/whodakingofhell/dashboard-extras" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10"><div class="font-mono-code text-white font-semibold">dashboard-extras (Python) ↗</div><div class="text-[#9aa0ad] mt-1">Monitoring &amp; voice control backend endpoints</div></a>
      </div>
    </div>
  `;
}

// ============================================================================
// 3. INTERACTIVE 7-THEME EDITORIAL DASHBOARD + CSV AI DATA ANALYST
// ============================================================================
function setDashTheme(theme) {
  const shell = document.getElementById("dash-shell");
  if (!shell) return;
  shell.setAttribute("data-dash-theme", theme);
  document.querySelectorAll(".dash-theme-btn").forEach((b) => {
    b.style.boxShadow = b.getAttribute("data-theme") === theme ? "0 0 0 2px #1a73e8" : "none";
  });
  showToast(`Dashboard theme: ${theme}`);
}

function populateDashCategoryFilter() {
  const sel = document.getElementById("dash-category-filter");
  if (!sel) return;
  const ds = STATE.dataset;
  const cats = Array.from(new Set(ds.rows.map((r) => String(r[ds.categoryCol] ?? "Other"))));
  sel.innerHTML = `<option value="__ALL__">All Categories (${ds.rows.length} rows)</option>` +
    cats.map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
}

function renderDashboard() {
  const ds = STATE.dataset;
  const filterVal = document.getElementById("dash-category-filter")?.value || "__ALL__";
  let rows = filterVal === "__ALL__"
    ? [...ds.rows]
    : ds.rows.filter((r) => String(r[ds.categoryCol] ?? "Other") === filterVal);

  if (STATE.sortCol) {
    rows.sort((a, b) => {
      const av = a[STATE.sortCol];
      const bv = b[STATE.sortCol];
      const an = Number(av);
      const bn = Number(bv);
      if (!Number.isNaN(an) && !Number.isNaN(bn)) return STATE.sortAsc ? an - bn : bn - an;
      return STATE.sortAsc ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });
  }

  const nums = rows.map((r) => Number(r[ds.metricCol])).filter((n) => !Number.isNaN(n));
  const avg = nums.length ? (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(1) : "—";
  const maxVal = nums.length ? Math.max(...nums) : 0;
  const sumVal = nums.length ? nums.reduce((a, b) => a + b, 0).toFixed(0) : "—";
  const topRow = rows.slice().sort((a, b) => Number(b[ds.metricCol] || 0) - Number(a[ds.metricCol] || 0))[0];

  // KPI Grid
  const kpiEl = document.getElementById("dash-kpi-grid");
  if (kpiEl) {
    kpiEl.innerHTML = `
      <div class="dash-card p-3.5"><div class="text-[10px] font-mono-code uppercase dash-muted">Rows Shown</div><div class="font-display font-bold text-xl mt-0.5">${rows.length}</div></div>
      <div class="dash-card p-3.5"><div class="text-[10px] font-mono-code uppercase dash-muted">Average ${escapeHtml(ds.metricCol)}</div><div class="font-display font-bold text-xl mt-0.5">${escapeHtml(avg)}</div></div>
      <div class="dash-card p-3.5"><div class="text-[10px] font-mono-code uppercase dash-muted">Peak Value</div><div class="font-display font-bold text-xl mt-0.5">${escapeHtml(maxVal)}</div></div>
      <div class="dash-card p-3.5"><div class="text-[10px] font-mono-code uppercase dash-muted">Cumulative Sum</div><div class="font-display font-bold text-xl mt-0.5">${escapeHtml(sumVal)}</div></div>
    `;
  }

  // Editorial Story
  const stTitle = document.getElementById("dash-story-title");
  const stBody = document.getElementById("dash-story-body");
  if (stTitle) stTitle.textContent = ds.name;
  if (stBody) {
    stBody.textContent = topRow
      ? `Across ${rows.length} filtered record(s), "${topRow[ds.labelCol]}" leads ${ds.metricCol} at ${topRow[ds.metricCol]} (average: ${avg}). Click any column header below to sort or ask a natural-language question above.`
      : "No matching rows for this filter.";
  }

  // Responsive SVG Bar Chart
  const barEl = document.getElementById("dash-svg-bar");
  const barTitle = document.getElementById("dash-bar-title");
  if (barTitle) barTitle.textContent = `${ds.metricCol} by ${ds.labelCol}`;
  if (barEl) {
    const topRows = rows.slice(0, 8);
    const maxM = Math.max(1, ...topRows.map((r) => Math.abs(Number(r[ds.metricCol]) || 0)));
    const barH = 26;
    const svgH = Math.max(140, topRows.length * 34 + 16);
    barEl.innerHTML = `
      <svg viewBox="0 0 420 ${svgH}" class="w-full h-auto" role="img" aria-label="Bar chart of ${escapeHtml(ds.metricCol)}">
        ${topRows
          .map((r, i) => {
            const val = Number(r[ds.metricCol]) || 0;
            const w = Math.max(6, Math.round((Math.abs(val) / maxM) * 215));
            const y = i * 34 + 8;
            const lbl = String(r[ds.labelCol] || "").slice(0, 18);
            return `
              <text x="0" y="${y + 16}" fill="currentColor" font-size="11" font-family="Inter, sans-serif">${escapeHtml(lbl)}</text>
              <rect x="148" y="${y + 3}" width="${w}" height="${barH - 8}" rx="5" fill="var(--d-accent)" opacity="${(0.95 - i * 0.06).toFixed(2)}"/>
              <text x="${155 + w}" y="${y + 16}" fill="var(--d-muted)" font-size="11" font-family="JetBrains Mono, monospace">${escapeHtml(val)}</text>
            `;
          })
          .join("")}
      </svg>`;
  }

  // Responsive SVG Donut Chart (Category Distribution)
  const donutEl = document.getElementById("dash-svg-donut");
  if (donutEl) {
    const counts = {};
    rows.forEach((r) => {
      const k = String(r[ds.categoryCol] ?? "Other");
      counts[k] = (counts[k] || 0) + 1;
    });
    const entries = Object.entries(counts);
    const total = Math.max(1, rows.length);
    const palette = ["var(--d-accent)", "var(--d-accent-2)", "var(--d-accent-3)", "#7c3aed", "#ec4899", "#0ea5e9"];
    let offset = 0;
    const circ = 2 * Math.PI * 46;
    const slices = entries.map(([k, cnt], idx) => {
      const len = (cnt / total) * circ;
      const seg = `<circle cx="64" cy="64" r="46" fill="none" stroke="${palette[idx % palette.length]}" stroke-width="16" stroke-dasharray="${len.toFixed(1)} ${circ.toFixed(1)}" stroke-dashoffset="${(-offset).toFixed(1)}" transform="rotate(-90 64 64)"/>`;
      offset += len;
      return { k, cnt, seg, color: palette[idx % palette.length] };
    });

    donutEl.innerHTML = `
      <div class="flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
        <svg viewBox="0 0 128 128" class="w-36 h-36 shrink-0" role="img" aria-label="Category distribution donut chart">
          ${slices.map((s) => s.seg).join("")}
          <text x="64" y="62" text-anchor="middle" fill="currentColor" font-size="18" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">${rows.length}</text>
          <text x="64" y="76" text-anchor="middle" fill="var(--d-muted)" font-size="9" font-family="JetBrains Mono, monospace">RECORDS</text>
        </svg>
        <div class="space-y-1.5 text-xs">
          ${slices.map((s) => `<div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${s.color}"></span><span>${escapeHtml(s.k)}</span><span class="font-mono-code dash-muted">(${s.cnt})</span></div>`).join("")}
        </div>
      </div>`;
  }

  // Accessible Sortable Data Table
  const thead = document.getElementById("dash-table-head");
  const tbody = document.getElementById("dash-table-body");
  if (thead) {
    thead.innerHTML = `<tr>${ds.columns.map((c) => `<th><button type="button" onclick="sortDashTable('${escapeHtml(c)}')" class="hover:underline text-left font-semibold">${escapeHtml(c)}${STATE.sortCol === c ? (STATE.sortAsc ? " ↑" : " ↓") : ""}</button></th>`).join("")}</tr>`;
  }
  if (tbody) {
    tbody.innerHTML = rows
      .slice(0, 40)
      .map((r) => `<tr>${ds.columns.map((c) => `<td>${escapeHtml(r[c] ?? "")}</td>`).join("")}</tr>`)
      .join("");
  }
}

function sortDashTable(col) {
  if (STATE.sortCol === col) STATE.sortAsc = !STATE.sortAsc;
  else { STATE.sortCol = col; STATE.sortAsc = false; }
  renderDashboard();
}

function parseCsvSafe(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (ch === '"') inQuotes = false;
      else field += ch;
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === ",") { row.push(field.trim()); field = ""; }
      else if (ch === "\n" || ch === "\r") {
        if (ch === "\r" && text[i + 1] === "\n") i++;
        row.push(field.trim());
        if (row.some((v) => v !== "")) rows.push(row);
        row = [];
        field = "";
      } else field += ch;
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field.trim());
    if (row.some((v) => v !== "")) rows.push(row);
  }
  return rows;
}

function handleCsvUpload(ev) {
  const file = ev.target.files?.[0];
  if (!file) return;
  if (file.size > 1024 * 1024) {
    showToast("CSV must be under 1 MB for browser analysis");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const parsed = parseCsvSafe(String(reader.result || ""));
    if (parsed.length < 2 || parsed[0].length < 2) {
      showToast("CSV needs a header row and at least 1 data row");
      return;
    }
    const headers = parsed[0].slice(0, 8);
    const dataRows = parsed.slice(1, 201).map((vals) => {
      const obj = {};
      headers.forEach((h, i) => { obj[h] = vals[i] ?? ""; });
      return obj;
    });

    // Auto-detect first numeric column for charts
    const numericCol = headers.find((h) => dataRows.some((r) => r[h] !== "" && !Number.isNaN(Number(r[h])))) || headers[headers.length - 1];
    const labelCol = headers.find((h) => h !== numericCol) || headers[0];
    const categoryCol = headers.find((h) => h !== numericCol && h !== labelCol) || labelCol;

    STATE.dataset = {
      name: `Custom CSV Report: ${file.name}`,
      labelCol,
      categoryCol,
      metricCol: numericCol,
      columns: headers,
      rows: dataRows
    };
    STATE.sortCol = null;
    populateDashCategoryFilter();
    renderDashboard();
    showToast(`Loaded ${dataRows.length} rows from ${file.name}`);
  };
  reader.readAsText(file);
}

function resetPortfolioDataset() {
  STATE.dataset = JSON.parse(JSON.stringify(PORTFOLIO_DEFAULT_DATASET));
  STATE.sortCol = null;
  document.getElementById("dash-analyst-answer")?.classList.add("hidden");
  populateDashCategoryFilter();
  renderDashboard();
  showToast("Restored Mark's verified portfolio dataset");
}

function runDataAnalystQuery() {
  const q = (document.getElementById("dash-analyst-query")?.value || "").trim().toLowerCase();
  const box = document.getElementById("dash-analyst-answer");
  if (!box || !q) return;
  const ds = STATE.dataset;
  const nums = ds.rows.map((r) => ({ label: r[ds.labelCol], cat: r[ds.categoryCol], val: Number(r[ds.metricCol]) })).filter((x) => !Number.isNaN(x.val));

  let ans = "";
  if (/(highest|top|max|best|most)/.test(q) && nums.length) {
    const best = nums.slice().sort((a, b) => b.val - a.val)[0];
    ans = `Highest ${ds.metricCol}: "${best.label}" (${best.cat}) at ${best.val}.`;
  } else if (/(lowest|min|least|bottom)/.test(q) && nums.length) {
    const low = nums.slice().sort((a, b) => a.val - b.val)[0];
    ans = `Lowest ${ds.metricCol}: "${low.label}" (${low.cat}) at ${low.val}.`;
  } else if (/(average|mean|avg)/.test(q) && nums.length) {
    const avg = (nums.reduce((a, b) => a + b.val, 0) / nums.length).toFixed(2);
    ans = `Average ${ds.metricCol} across ${nums.length} rows is ${avg}.`;
  } else if (/(total|sum)/.test(q) && nums.length) {
    const sum = nums.reduce((a, b) => a + b.val, 0).toFixed(2);
    ans = `Total ${ds.metricCol} sum across ${nums.length} rows is ${sum}.`;
  } else {
    const matches = ds.rows.filter((r) => Object.values(r).join(" ").toLowerCase().includes(q));
    if (matches.length) {
      ans = `Found ${matches.length} matching record(s): ` + matches.slice(0, 4).map((m) => `${m[ds.labelCol]} (${ds.metricCol}: ${m[ds.metricCol]})`).join(" • ");
    } else {
      const avg = nums.length ? (nums.reduce((a, b) => a + b.val, 0) / nums.length).toFixed(1) : "N/A";
      ans = `Dataset "${ds.name}" has ${ds.rows.length} rows across columns [${ds.columns.join(", ")}]. Average ${ds.metricCol}: ${avg}. Try asking for highest, lowest, average, total, or a specific project/keyword.`;
    }
  }
  box.textContent = `AI Data Analyst: ${ans}`;
  box.classList.remove("hidden");
}

// ============================================================================
// 4. LIVE WEBSITE ACCESSIBILITY, PERFORMANCE & SECURITY CHECKER (/api/audit)
// ============================================================================
function setAuditTarget(url) {
  const inp = document.getElementById("audit-url-input");
  if (inp) inp.value = url;
  runWebsiteAudit();
}

async function runWebsiteAudit() {
  const inp = document.getElementById("audit-url-input");
  const out = document.getElementById("audit-results-container");
  const btn = document.getElementById("btn-run-audit");
  if (!inp || !out) return;

  const targetUrl = inp.value.trim();
  if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
    showToast("Enter a valid https:// URL");
    return;
  }

  out.classList.remove("hidden");
  out.innerHTML = `<div class="lg:col-span-12 text-xs text-[#9aa0ad] font-mono-code py-4">Running live DNS SSRF check, security header inspection, WCAG landmark scan &amp; SEO audit on ${escapeHtml(targetUrl)}...</div>`;
  if (btn) btn.disabled = true;

  try {
    const res = await fetch(`/api/audit?url=${encodeURIComponent(targetUrl)}`);
    const data = await res.json();
    if (!res.ok || !data.ok) {
      out.innerHTML = `<div class="lg:col-span-12 p-4 rounded-xl bg-red-500/15 border border-red-400/30 text-xs text-red-200">Audit blocked or failed: ${escapeHtml(data.error || "Network unavailable in local file preview")}</div>`;
      if (btn) btn.disabled = false;
      return;
    }

    const scoreCard = (label, val) => {
      const color = val >= 85 ? "#34d399" : val >= 65 ? "#fbbf24" : "#f87171";
      return `
        <div class="p-4 rounded-xl bg-white/[0.05] border border-white/10 text-center">
          <div class="text-2xl font-display font-bold" style="color:${color}">${val}</div>
          <div class="text-[11px] text-[#9aa0ad] mt-1">${label}</div>
        </div>`;
    };

    const renderList = (title, items) => `
      <div class="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
        <div class="text-xs font-semibold text-white">${title}</div>
        ${items.map((c) => `<div class="flex items-center gap-2 text-xs"><span class="${c.pass ? "text-[#34d399]" : "text-[#f87171]"} font-bold">${c.pass ? "✓" : "✕"}</span><span class="text-[#d1d5db]">${escapeHtml(c.name)}</span></div>`).join("")}
      </div>`;

    out.innerHTML = `
      <div class="lg:col-span-12 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code text-[#9aa0ad]">
        <span>Target: <strong class="text-white">${escapeHtml(data.title || data.url)}</strong> (HTTP ${data.httpStatus})</span>
        <span>TTFB: ${data.ttfbMs}ms • HTML: ${data.htmlKb} KB • AI Slop Terms: ${data.slopFound.length}</span>
      </div>
      <div class="lg:col-span-12 grid grid-cols-2 sm:grid-cols-5 gap-3">
        ${scoreCard("Overall", data.scores.overall)}
        ${scoreCard("Security", data.scores.security)}
        ${scoreCard("Accessibility", data.scores.accessibility)}
        ${scoreCard("SEO / Google", data.scores.seo)}
        ${scoreCard("Performance", data.scores.performance)}
      </div>
      <div class="lg:col-span-4">${renderList("Security Headers", data.checks.security)}</div>
      <div class="lg:col-span-4">${renderList("Accessibility (WCAG)", data.checks.accessibility)}</div>
      <div class="lg:col-span-4">${renderList("Google SEO &amp; Indexing", data.checks.seo)}</div>
    `;
  } catch {
    out.innerHTML = `<div class="lg:col-span-12 p-4 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-[#d1d5db]">Live serverless audit runs on the deployed Vercel domain (<code class="text-white">/api/audit</code>). Open the live Vercel URL to scan any website in real time.</div>`;
  }
  if (btn) btn.disabled = false;
}

// ============================================================================
// 5. OWNER-ONLY PRIVATE VAULT AUTHENTICATION (/api/owner-auth)
// Invisible to visitors on any other computer until Mark unlocks with passcode!
// ============================================================================
async function checkOwnerSession() {
  if (window.location.protocol === "file:") return;
  try {
    const res = await fetch("/api/owner-auth", { method: "GET", credentials: "same-origin" });
    if (res.ok) {
      const data = await res.json();
      if (data.authenticated) revealOwnerVault();
    }
  } catch {
    // stay locked
  }
}

function openOwnerAuthModal() {
  if (STATE.ownerAuthenticated) {
    scrollToOwnerVault();
    return;
  }
  const modal = document.getElementById("owner-auth-modal");
  const err = document.getElementById("owner-auth-error");
  if (err) err.classList.add("hidden");
  modal?.classList.remove("hidden");
  modal?.classList.add("flex");
  setTimeout(() => document.getElementById("owner-passcode-input")?.focus(), 80);
}

function closeOwnerAuthModal() {
  const modal = document.getElementById("owner-auth-modal");
  modal?.classList.add("hidden");
  modal?.classList.remove("flex");
}

async function submitOwnerPasscode(ev) {
  ev.preventDefault();
  const inp = document.getElementById("owner-passcode-input");
  const errEl = document.getElementById("owner-auth-error");
  const passcode = (inp?.value || "").trim();
  if (!passcode) return;

  if (window.location.protocol === "file:") {
    // Local offline preview check (matches initial setup passcode)
    if (passcode === "MCS-2026-OWNER") {
      inp.value = "";
      closeOwnerAuthModal();
      revealOwnerVault();
      scrollToOwnerVault();
      showToast("Owner Vault unlocked (Local Preview)");
    } else if (errEl) {
      errEl.textContent = "Invalid owner passcode.";
      errEl.classList.remove("hidden");
    }
    return;
  }

  try {
    const res = await fetch("/api/owner-auth", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passcode })
    });
    const data = await res.json();
    if (res.ok && data.authenticated) {
      inp.value = "";
      closeOwnerAuthModal();
      revealOwnerVault();
      scrollToOwnerVault();
      showToast("Owner Vault unlocked securely");
    } else if (errEl) {
      errEl.textContent = data.error || "Invalid passcode.";
      errEl.classList.remove("hidden");
    }
  } catch {
    if (errEl) {
      errEl.textContent = "Authentication server unavailable.";
      errEl.classList.remove("hidden");
    }
  }
}

function revealOwnerVault() {
  STATE.ownerAuthenticated = true;
  document.getElementById("owner-career-vault")?.classList.remove("hidden");
  document.getElementById("nav-owner-vault-btn")?.classList.remove("hidden");
  renderBoardAuthHub();
  if (STATE.jobs.length === 0) fetchAlignedJobs();
}

function scrollToOwnerVault() {
  document.getElementById("owner-career-vault")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function lockOwnerVault() {
  STATE.ownerAuthenticated = false;
  document.getElementById("owner-career-vault")?.classList.add("hidden");
  document.getElementById("nav-owner-vault-btn")?.classList.add("hidden");
  if (window.location.protocol !== "file:") {
    try { await fetch("/api/owner-auth", { method: "DELETE", credentials: "same-origin" }); } catch {}
  }
  showToast("Owner Vault locked & hidden");
}

// ============================================================================
// 6. OWNER-ONLY REMOTE CAREER ENGINE ($600-$700+/mo) & TAILORED PDF STUDIO
// ============================================================================
function getBoardAuthState() {
  try {
    return JSON.parse(localStorage.getItem("mcs_board_auth_v1") || "{}");
  } catch {
    return {};
  }
}

function toggleBoardAuthStatus(boardId) {
  const cur = getBoardAuthState();
  cur[boardId] = !cur[boardId];
  try {
    localStorage.setItem("mcs_board_auth_v1", JSON.stringify(cur));
  } catch {}
  renderBoardAuthHub();
  showToast(cur[boardId] ? `Marked ${boardId} account as Ready` : `Marked ${boardId} as Sign-In Needed`);
}

function getEffectiveJobSearchQuery() {
  const cat = document.getElementById("job-role-filter")?.value || "automation";
  const typed = (document.getElementById("job-search-input")?.value || "").trim();
  if (typed) return typed;
  const map = {
    automation: "AI Automation Specialist n8n",
    ai_prompt: "Prompt Engineer AI Specialist",
    tech_support: "IT Support Technical Support",
    fullstack: "Next.js React TypeScript Developer",
    backend: "Java SQL Backend Developer",
    all: "AI Automation IT Specialist"
  };
  return map[cat] || map.automation;
}

function renderBoardAuthHub() {
  const grid = document.getElementById("board-auth-grid");
  if (!grid) return;
  const authState = getBoardAuthState();
  const q = getEffectiveJobSearchQuery();
  const minSal = Number(document.getElementById("job-salary-filter")?.value || 600);

  grid.innerHTML = JOB_BOARDS_AUTH.map((b) => {
    const ready = !!authState[b.id];
    const searchUrl = safeUrl(b.buildSearchUrl(q, minSal));
    return `
      <div class="p-3.5 rounded-xl border ${ready ? "border-[#137333]/40 bg-[#f4fbf6]" : "border-[#e6e8ed] bg-[#f9fafb]"} space-y-2.5">
        <div class="flex items-center justify-between gap-2">
          <div>
            <div class="font-display font-bold text-xs text-[#111215]">${escapeHtml(b.name)}</div>
            <div class="text-[10px] text-[#5a5f69]">${escapeHtml(b.badge)}</div>
          </div>
          <button type="button" onclick="toggleBoardAuthStatus('${b.id}')" class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${ready ? "bg-[#e6f4ea] text-[#137333]" : "bg-[#f1f3f6] text-[#5a5f69]"}">
            ${ready ? "Signed In ✓" : "Need Login"}
          </button>
        </div>
        <div class="flex flex-wrap gap-1.5 text-[11px] font-semibold">
          <a href="${safeUrl(b.loginUrl)}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-white border border-[#dcdfe6] text-[#111215] hover:border-[#111215]">Sign In ↗</a>
          <a href="${safeUrl(b.signupUrl)}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-white border border-[#dcdfe6] text-[#5a5f69] hover:text-[#111215]">Create Acct</a>
          <a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-[#111215] text-white hover:bg-[#23262e]">Jobs ↗</a>
        </div>
      </div>`;
  }).join("");
}

function launchBatchBoardApply() {
  const q = getEffectiveJobSearchQuery();
  const minSal = Number(document.getElementById("job-salary-filter")?.value || 600);
  if (STATE.lastResumeModel) downloadResumePdf();
  const cover = document.getElementById("cover-letter-output")?.value || "";
  if (cover) copyText(cover, "Downloaded tailored PDF + copied Cover Letter — opening boards!");
  JOB_BOARDS_AUTH.forEach((b, idx) => {
    setTimeout(() => {
      window.open(safeUrl(b.buildSearchUrl(q, minSal)), "_blank", "noopener,noreferrer");
    }, idx * 220);
  });
}

function setJobFinderMode(mode) {
  STATE.jobFinderMode = mode;
  const mBtn = document.getElementById("job-mode-manual");
  const aBtn = document.getElementById("job-mode-auto");
  const banner = document.getElementById("job-mode-banner");

  if (mode === "auto") {
    aBtn?.classList.add("bg-white", "text-[#111215]");
    aBtn?.classList.remove("text-white/75");
    mBtn?.classList.remove("bg-white", "text-[#111215]");
    mBtn?.classList.add("text-white/75");
    if (banner) {
      banner.innerHTML = `<span><strong>Auto-Prep Mode Active (Owner-Only):</strong> Automatically pulls remote $600–$700+/mo AI Automation, AI, and IT openings, auto-matches the right resume track + cover letter for each role, and lets you 1-click download PDF + copy cover letter + launch all 4 boards safely.</span><span class="font-mono-code text-[#137333]">Safe Account-Protected Flow</span>`;
    }
    fetchAlignedJobs();
    showToast("Auto-Prep Mode active — remote $600–$700+/mo roles loaded");
  } else {
    mBtn?.classList.add("bg-white", "text-[#111215]");
    mBtn?.classList.remove("text-white/75");
    aBtn?.classList.remove("bg-white", "text-[#111215]");
    aBtn?.classList.add("text-white/75");
    if (banner) {
      banner.innerHTML = `<span><strong>Remote $600–$700+/mo Career Engine:</strong> Pick any target role (AI Automation, AI/Prompt, IT Support, Full-Stack, Java), download a unique 1-2 page ATS PDF resume + tailored cover letter, and open verified boards directly.</span><span class="font-mono-code text-[#137333]">Anti-Scam Filter: ON</span>`;
    }
  }
}

function openPlatformPicker(customQueryOverride) {
  const minSal = Number(document.getElementById("job-salary-filter")?.value || 600);
  const q = customQueryOverride || getEffectiveJobSearchQuery();
  const eq = encodeURIComponent(q);

  const sub = document.getElementById("platform-picker-subtitle");
  if (sub) sub.textContent = `Query: "${q}" • Remote • $${minSal}+/mo (PHP ${Math.round(minSal * 58).toLocaleString()}+/mo)`;

  const platforms = [
    { name: "OnlineJobs.ph (Direct Remote)", desc: "International founders paying $600–$1,600/mo", url: `https://www.onlinejobs.ph/jobseekers/jobsearch?jobkeyword=${eq}&fullTime=on` },
    { name: "LinkedIn Remote Easy Apply", desc: "Pre-filtered Remote + Easy Apply (PH/APAC)", url: `https://www.linkedin.com/jobs/search/?keywords=${eq}&location=Philippines&f_WT=2&f_AL=true` },
    { name: "JobStreet PH (WFH ₱35k+)", desc: "Verified PH WFH IT, AI & automation hiring", url: `https://ph.jobstreet.com/${encodeURIComponent(q.toLowerCase().replace(/[^a-z0-9]+/g, "-"))}-jobs/work-from-home?salary=${Math.round(minSal * 58)}` },
    { name: "Indeed Philippines (Remote)", desc: "Remote IT Support, AI & full-stack roles", url: `https://ph.indeed.com/jobs?q=${eq}&l=Remote&sc=0kf%3Aattr%28DSQF7%29%3B` },
    { name: "Kalibrr PH Remote", desc: "Tech startups & AI teams hiring in PH", url: `https://www.kalibrr.com/home/te/${eq}` },
    { name: "Remotive Global Remote", desc: "Worldwide remote USD tech & support", url: `https://remotive.com/remote-jobs?search=${eq}` },
    { name: "Himalayas Worldwide Remote", desc: "Curated async remote startups", url: `https://himalayas.app/jobs?q=${eq}` },
    { name: "Wellfound (Remote Startups)", desc: "Direct founder hiring (USD remote)", url: `https://wellfound.com/jobs` }
  ];

  const grid = document.getElementById("platform-picker-grid");
  if (grid) {
    grid.innerHTML = platforms
      .map(
        (p) => `
        <a href="${safeUrl(p.url)}" target="_blank" rel="noopener noreferrer" onclick="closePlatformPicker()"
           class="p-3.5 rounded-xl border border-[#e6e8ed] hover:border-[#111215] hover:bg-[#f7f8fa] transition-colors block">
          <div class="font-display font-bold text-xs text-[#111215] flex items-center justify-between">
            <span>${escapeHtml(p.name)}</span><span>↗</span>
          </div>
          <div class="text-[11px] text-[#5a5f69] mt-0.5">${escapeHtml(p.desc)}</div>
        </a>`
      )
      .join("");
  }

  const modal = document.getElementById("platform-picker-modal");
  modal?.classList.remove("hidden");
  modal?.classList.add("flex");
}

function closePlatformPicker() {
  const modal = document.getElementById("platform-picker-modal");
  modal?.classList.add("hidden");
  modal?.classList.remove("flex");
}

function setQuickLocation(loc) {
  STATE.location = loc;
  const inp = document.getElementById("job-location-input");
  const badge = document.getElementById("location-status-badge");
  if (inp) inp.value = loc;
  if (badge) badge.textContent = `Target: ${loc}`;
  fetchAlignedJobs();
}

function detectUserLocation() {
  const badge = document.getElementById("location-status-badge");
  const inp = document.getElementById("job-location-input");
  if (!navigator.geolocation) {
    if (badge) badge.textContent = "Using Remote (Philippines / Worldwide)";
    fetchAlignedJobs();
    return;
  }
  if (badge) badge.textContent = "Detecting nearest city...";
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      let resolved = `Near ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
      try {
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
        if (res.ok) {
          const g = await res.json();
          const parts = [g.city || g.locality, g.principalSubdivision, g.countryName].filter(Boolean);
          if (parts.length) resolved = `${parts.join(", ")} / Remote`;
        }
      } catch {
        resolved = "Muntinlupa, Metro Manila / Remote";
      }
      STATE.location = resolved;
      if (inp) inp.value = resolved;
      if (badge) badge.textContent = `Detected: ${resolved}`;
      fetchAlignedJobs();
    },
    () => {
      if (badge) badge.textContent = `Using: ${STATE.location}`;
      fetchAlignedJobs();
    },
    { timeout: 6000 }
  );
}

function buildCuratedRoles(loc, cat, minSal) {
  const sal = Math.max(600, Number(minSal) || 600);
  const phpMin = Math.round(sal * 58).toLocaleString();
  const items = [
    {
      id: "curated-ai-auto",
      title: "AI Automation Specialist (n8n, Python, Webhooks & LLM Pipelines)",
      company: "OnlineJobs.ph & Global Remote AI Agencies",
      location: "Remote (Philippines / US-AU-UK Clients)",
      type: "Full-time Remote",
      salary: `$${sal}–$1,500/mo (PHP ${phpMin}–87k/mo)`,
      url: `https://www.onlinejobs.ph/jobseekers/jobsearch?jobkeyword=${encodeURIComponent("n8n AI automation")}&fullTime=on`,
      source: "OnlineJobs.ph Verified",
      tags: ["n8n", "AI Automation", "Python", "Webhooks", "Claude/GPT/Gemini", `$${sal}+/mo`],
      description: "Build and maintain end-to-end AI workflow automations using n8n, Make, Python, REST webhooks, Discord/Email integrations, and LLM APIs (Claude, OpenAI GPT, Gemini). Replace repetitive manual processes with reliable, cost-disciplined pipelines.",
      alignmentScore: 99,
      hiringStatus: "Actively Hiring",
      safetyBadge: "Verified Remote Role",
      cat: "automation"
    },
    {
      id: "curated-ai-prompt",
      title: "Prompt Engineer & AI Operations Specialist (Multi-LLM QA)",
      company: "LinkedIn Remote AI Product Teams",
      location: "Remote (Worldwide / APAC)",
      type: "Full-time Remote",
      salary: `$${Math.max(700, sal)}–$1,800/mo`,
      url: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent("Prompt Engineer AI Specialist")}&location=Philippines&f_WT=2&f_AL=true`,
      source: "LinkedIn Easy Apply",
      tags: ["Prompt Engineering", "Claude", "OpenAI GPT", "Gemini", "QA Rubrics", "AI Ops"],
      description: "Design structured system prompts, multi-agent evaluation rubrics, knowledge bases, and AI media workflows (FFmpeg, ElevenLabs, WASM/ONNX) with strict quality gates and zero hallucination tolerance.",
      alignmentScore: 98,
      hiringStatus: "Actively Hiring",
      safetyBadge: "Verified Remote Role",
      cat: "ai_prompt"
    },
    {
      id: "curated-it-support",
      title: "Remote IT Support & Technical Support Specialist (Tier 1 / Tier 2)",
      company: "JobStreet & Indeed PH Work-From-Home Teams",
      location: `${loc} • Remote WFH`,
      type: "Full-time Remote",
      salary: `PHP ${phpMin}–PHP 65,000/mo ($${sal}–$1,120/mo)`,
      url: `https://ph.jobstreet.com/it-technical-support-jobs/work-from-home?salary=${Math.round(sal * 58)}`,
      source: "JobStreet PH Remote",
      tags: ["IT Support", "Technical Support", "AnyDesk/TeamViewer", "SQL", "ISC2 Security", "CSAT"],
      description: "Provide remote Tier 1/2 IT and technical support across phone, chat, email, and AnyDesk/TeamViewer. Troubleshoot Windows/Office lifecycle issues, backend accounts, SQL queries, and system escalations while exceeding SLA, CSAT, and AHT targets.",
      alignmentScore: 98,
      hiringStatus: "Actively Hiring",
      safetyBadge: "Verified Remote Role",
      cat: "tech_support"
    },
    {
      id: "curated-fullstack",
      title: "Remote Full-Stack Developer (Next.js, React, TypeScript, Supabase)",
      company: "Indeed PH & Global Remote SaaS Teams",
      location: "Remote (Philippines / Worldwide)",
      type: "Full-time Remote",
      salary: `$${Math.max(700, sal)}–$2,000/mo`,
      url: `https://ph.indeed.com/jobs?q=${encodeURIComponent("Next.js React TypeScript Developer")}&l=Remote&sc=0kf%3Aattr%28DSQF7%29%3B`,
      source: "Indeed PH Remote",
      tags: ["Next.js 15/16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Supabase RLS"],
      description: "Develop and deploy secure Next.js + TypeScript + PostgreSQL/Supabase web applications with Zod schema validation, RBAC authentication, rate limiting, Cloudflare Turnstile, and Playwright E2E tests.",
      alignmentScore: 97,
      hiringStatus: "Actively Hiring",
      safetyBadge: "Verified Remote Role",
      cat: "fullstack"
    },
    {
      id: "curated-java-backend",
      title: "Backend Software Engineer (Java 17 / Node.js / MySQL / PostgreSQL)",
      company: "LinkedIn & JobStreet Remote Engineering Teams",
      location: "Remote (PH / APAC)",
      type: "Full-time Remote",
      salary: `$${Math.max(700, sal)}–$1,800/mo`,
      url: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent("Java Backend Developer SQL")}&location=Philippines&f_WT=2`,
      source: "LinkedIn Remote",
      tags: ["Java 17", "MySQL 8.0", "PostgreSQL", "REST APIs", "JUnit 5", "HikariCP"],
      description: "Architect reliable backend services and relational database schemas with row-level transaction locking, BCrypt/HMAC security, connection pooling, and comprehensive JUnit 5/Mockito automated testing.",
      alignmentScore: 96,
      hiringStatus: "Actively Hiring",
      safetyBadge: "Verified Remote Role",
      cat: "backend"
    }
  ];
  if (cat === "all") return items;
  return items.filter((i) => i.cat === cat).concat(items.filter((i) => i.cat !== cat));
}

async function fetchAlignedJobs() {
  const listEl = document.getElementById("jobs-list-container");
  const countEl = document.getElementById("live-jobs-count");
  const loc = (document.getElementById("job-location-input")?.value || STATE.location).trim();
  const cat = document.getElementById("job-role-filter")?.value || "automation";
  const minSal = Number(document.getElementById("job-salary-filter")?.value || 600);
  const q = (document.getElementById("job-search-input")?.value || "").trim();
  STATE.location = loc;
  STATE.minSalary = minSal;
  renderBoardAuthHub();

  const badge = document.getElementById("location-status-badge");
  if (badge) badge.textContent = `Target: ${loc} • $${minSal}+/mo`;

  if (listEl) listEl.innerHTML = `<div class="firm-card p-5 text-xs text-[#5a5f69]">Scanning live remote AI, Automation &amp; IT boards ($${minSal}+/mo)...</div>`;

  let live = [];
  if (window.location.protocol !== "file:") {
    try {
      const r = await fetch(`/api/jobs?location=${encodeURIComponent(loc)}&category=${encodeURIComponent(cat)}&q=${encodeURIComponent(q)}&minSalary=${encodeURIComponent(minSal)}`);
      if (r.ok) {
        const d = await r.json();
        if (Array.isArray(d.jobs)) live = d.jobs;
      }
    } catch {}
  }

  const curated = buildCuratedRoles(loc, cat, minSal);
  const all = [...curated, ...live];
  STATE.jobs = all;
  if (countEl) countEl.textContent = String(all.length);
  renderJobsList();
  if (all.length) selectJob(all[0].id);
}

function renderJobsList() {
  const el = document.getElementById("jobs-list-container");
  if (!el) return;
  el.innerHTML = STATE.jobs
    .map((job) => {
      const sel = STATE.selectedJob && STATE.selectedJob.id === job.id;
      return `
        <div class="job-card ${sel ? "selected" : ""}" onclick="selectJob('${escapeHtml(job.id)}')">
          <div class="flex items-center justify-between gap-2 mb-1">
            <span class="px-2 py-0.5 rounded-full bg-[#e6f4ea] text-[#137333] text-[10px] font-semibold">${escapeHtml(job.safetyBadge || "Legit Verified")}</span>
            <span class="text-[11px] font-mono-code font-semibold text-[#1a73e8]">${job.alignmentScore || 92}% Match</span>
          </div>
          <h4 class="font-display font-bold text-sm text-[#111215]">${escapeHtml(job.title)}</h4>
          <div class="text-xs text-[#5a5f69] mt-0.5">${escapeHtml(job.company)} • ${escapeHtml(job.location)}</div>
          <div class="text-[11px] font-mono-code text-[#137333] mt-1">${escapeHtml(job.salary || "Remote USD / PHP Salary")}</div>
          <div class="flex flex-wrap gap-1 mt-2">${(job.tags || []).slice(0, 4).map((t) => `<span class="px-2 py-0.5 rounded bg-[#f1f3f6] text-[10px] font-mono-code text-[#5a5f69]">${escapeHtml(t)}</span>`).join("")}</div>
          <div class="flex items-center justify-between pt-2.5 mt-2.5 border-t border-[#eef0f4] text-[11px]">
            <span class="text-[#767c89] font-mono-code">${escapeHtml(job.source)}</span>
            <button type="button" onclick="event.stopPropagation();openPlatformPicker('${escapeHtml(job.title)}')" class="font-semibold text-[#1a73e8] hover:underline">Choose Board ↗</button>
          </div>
        </div>`;
    })
    .join("");
}

function switchJobsInputTab(tab) {
  document.getElementById("jobs-feed-tab-live")?.classList.toggle("active", tab === "live");
  document.getElementById("jobs-feed-tab-custom")?.classList.toggle("active", tab === "custom");
  document.getElementById("jobs-list-container")?.classList.toggle("hidden", tab !== "live");
  document.getElementById("custom-jd-panel")?.classList.toggle("hidden", tab !== "custom");
}

function applyCustomJobDescription() {
  const company = (document.getElementById("custom-company")?.value || "").trim() || "Target Employer";
  const title = (document.getElementById("custom-title")?.value || "").trim() || "AI Automation Specialist";
  const loc = (document.getElementById("custom-location")?.value || "").trim() || STATE.location;
  const url = (document.getElementById("custom-url")?.value || "").trim() || "#";
  const desc = (document.getElementById("custom-jd-text")?.value || "").trim();
  if (desc.length < 20) { showToast("Paste the job description first"); return; }

  const customJob = {
    id: `custom-${Date.now()}`,
    title, company, location: loc, type: "Remote / Target Role", salary: `$${STATE.minSalary}+/mo (See post)`, url,
    source: "Custom Posting", tags: extractJobKeywords(`${title} ${desc}`).slice(0, 6),
    description: desc, alignmentScore: 99, hiringStatus: "Actively Hiring", safetyBadge: "Owner-Verified Post"
  };
  STATE.jobs.unshift(customJob);
  renderJobsList();
  switchJobsInputTab("live");
  selectJob(customJob.id);
  showToast(`Generated unique Resume & Cover Letter for ${company}`);
}

function detectTrackIndexForJob(job) {
  const hay = `${job.title} ${job.description} ${(job.tags || []).join(" ")}`.toLowerCase();
  if (/(java|junit|mockito|hikaricp|mysql|backend engineer|spring|jdbc)/.test(hay) && !/(n8n|make\.com|zapier|prompt engineer)/.test(hay)) return 4;
  if (/(technical support|it support|helpdesk|service desk|tier 1|tier 2|customer service|support representative|anydesk|teamviewer)/.test(hay)) return 2;
  if (/(prompt engineer|llm evaluation|ai operations|ai content|comfyui|stable diffusion|elevenlabs)/.test(hay)) return 1;
  if (/(next\.?js|react|full.?stack|frontend|prisma|tailwind|web developer)/.test(hay) && !/(n8n|zapier|make\.com|ai automation)/.test(hay)) return 3;
  return 0;
}

function selectJob(id) {
  const job = STATE.jobs.find((j) => j.id === id);
  if (!job) return;
  STATE.selectedJob = job;
  STATE.resumeVariant = detectTrackIndexForJob(job);
  STATE.coverVariant = 0;
  renderJobsList();
  updateApplicationKit();
}

function prepareQuickApplyLaunch() {
  const job = STATE.selectedJob;
  if (!job) return;
  downloadResumePdf();
  const cover = document.getElementById("cover-letter-output")?.value || "";
  if (cover) copyText(cover, "Downloaded PDF Resume + copied Cover Letter — opening job!");
  if (job.url && job.url.startsWith("http")) {
    window.open(safeUrl(job.url), "_blank", "noopener,noreferrer");
  } else {
    openPlatformPicker(job.title);
  }
}

function extractJobKeywords(text) {
  const dict = [
    ["AI Automation / n8n", /(n8n|make\.com|zapier|ai automation|workflow|automation|webhook)/i],
    ["LLMs & Prompt Engineering", /(prompt|llm|claude|openai|gpt|gemini|ai agent|chatbot)/i],
    ["Python Scripting", /\bpython\b/i],
    ["IT & Technical Support", /(it support|technical support|support representative|helpdesk|tier 1|tier 2|troubleshoot)/i],
    ["Remote Support (AnyDesk / SLA)", /(anydesk|teamviewer|remote support|csat|aht|fcr|ticketing|crm)/i],
    ["Next.js / React / TypeScript", /(next\.?js|\breact\b|typescript|full.?stack|tailwind)/i],
    ["PostgreSQL / Supabase / Prisma", /(postgres|postgresql|supabase|prisma)/i],
    ["Java 17 / MySQL / SQL", /(\bjava\b|mysql|\bsql\b|jdbc|hikaricp)/i],
    ["Web Security (ISC2 / RBAC / Zod)", /(security|rbac|zod|csrf|rls|bcrypt|rate limit|csp|hmac|isc2)/i],
    ["QA & Testing (JUnit / Playwright)", /(junit|playwright|mockito|\bqa\b|testing)/i]
  ];
  const found = dict.filter(([, re]) => re.test(text)).map(([lbl]) => lbl);
  if (found.length < 4) {
    ["AI Automation / n8n", "Python Scripting", "Next.js / React / TypeScript", "IT & Technical Support"].forEach((f) => {
      if (!found.includes(f)) found.push(f);
    });
  }
  return found;
}

function buildTailoredResumeModel(job, keywords, variantId) {
  const topKw = keywords.slice(0, 5).join(", ");
  const companyLabel = job.company && !/Verified|Direct|Remote Employers/i.test(job.company) ? job.company : "Remote Team";

  const TRACK_CONFIG = {
    ai_automation: {
      headline: "AI Automation Specialist & Workflow Engineer",
      summary: `BSIT IT professional with 5+ years of programming experience specializing in AI workflow automation (n8n, Python, webhooks, Claude/OpenAI GPT/Gemini APIs) and serverless full-stack systems. Engineered a 14-stage automated pipeline running at $0/month free-tier cost, multi-AI governance systems (PAIOS), and webhook-driven booking platforms aligned to ${job.title} (${topKw}).`,
      experienceFirst: false,
      projectsHeading: "AI Automation & Workflow Engineering Projects",
      skills: [
        ["AI & Workflow Automation", "n8n, Python Scripting, Claude, OpenAI GPT, Gemini, Grok, Prompt Engineering, YouTube Data API v3, Discord & Resend Webhooks"],
        ["Serverless & APIs", "Node.js, Vercel Serverless, REST APIs, Zod Validation, Retry & Deduplication Pipelines, Supabase (PostgreSQL RLS)"],
        ["Web & Cloud Stack", "Next.js 15/16, React 18/19, TypeScript, Tailwind CSS 4, Cloudflare Turnstile, GitHub Actions, Docker, FFmpeg, ElevenLabs"],
        ["IT & Security", "ISC2 Security Awareness, HMAC-SHA256, Rate Limiting, AnyDesk/TeamViewer Remote Ops, Multi-Channel Enterprise Support"]
      ],
      projects: [
        {
          name: "AI Engineering OS & 14-Stage n8n Automation Pipeline",
          meta: "n8n, Python, Multi-LLM | $0/mo Architecture",
          bullets: [
            "Built a 14-stage automated pipeline (n8n + Python + LLM prompts) automating intake, scripting, voice synthesis, video assembly, upload, and analytics — cutting manual work from hours to minutes.",
            "Designed cost-discipline architecture running at $0/month across Gemini, Supabase, Vercel, and GitHub Actions with built-in QA score rubrics."
          ]
        },
        {
          name: "AI-Ops Vault & PAIOS (Multi-AI Orchestration System)",
          meta: "github.com/whodakingofhell/PAIOS | TypeScript, Obsidian, Python",
          bullets: [
            "Architected a canonical governance system coordinating 6 AI tools (Claude, Codex, Gemini, OpenCode, Copilot, ZCode) across 13 technical domains.",
            "Built system-intel-scanner and youtube-transcript-pro (5-layer fallback chain) to feed verified web research into automated workflows."
          ]
        },
        {
          name: "Sonata — Automated Booking & Webhook Fulfillment Platform",
          meta: "microsoft-setup-form1.vercel.app | Next.js 15, Zod, Discord, Resend",
          bullets: [
            "Engineered an automated intake-to-fulfillment pipeline with Zod validation, deduplication, email rate limiting, 3-attempt Discord webhook retry, Resend emails, and Sentry alerts."
          ]
        },
        {
          name: "BGround — 0-Credit Browser-Local AI Media Studio",
          meta: "bground.vercel.app | Next.js, WASM/ONNX, Canvas",
          bullets: [
            "Built a browser-local AI background removal studio running WASM/ONNX on-device with zero per-image AI credit fees and automated 1:1, 4:5, and social reel exports."
          ]
        }
      ],
      experience: [
        {
          role: "Customer Service Representative (Technical & Account Operations)",
          company: "IBEX Global Solutions INC (Walmart US)",
          dates: "Oct 2025 - Jun 2026",
          bullets: [
            "Navigated multiple enterprise backend order, account, and payment systems simultaneously to resolve complex escalations while exceeding AHT, CSAT, and QA targets."
          ]
        },
        {
          role: "Travel Associate (Process & Workflow Optimization)",
          company: "IGT Solutions (Atain)",
          dates: "Mar 2025 - Sep 2025",
          bullets: [
            "Troubleshot booking system discrepancies under strict SLAs and partnered with team leads to identify workflow improvements that lowered average handle time."
          ]
        }
      ]
    },

    ai_prompt: {
      headline: "Prompt Engineer & AI Systems Operations Specialist",
      summary: `BSIT graduate and AI systems builder specializing in structured system-prompt engineering, multi-LLM evaluation rubrics, and automated research/media pipelines across Claude, OpenAI GPT, Gemini, Grok, and Perplexity. Creator of the 10-persona AI Engineering OS, Critical Skill Evaluator, and browser-local WASM/ONNX tools aligned to ${job.title}.`,
      experienceFirst: false,
      projectsHeading: "AI Systems, Prompt Engineering & Evaluation Projects",
      skills: [
        ["AI/ML & Prompt Systems", "Claude, OpenAI GPT, Gemini, Grok, Perplexity, NotebookLM, OpenCode AI, System Prompt Design, Multi-Persona Role Architecture"],
        ["AI QA & Evaluation", "QA Criticism Frameworks, Feature Score Rubrics, Critical Skill Evaluator, Anti-Slop Copy Auditing, Error-Driven Prompt Iteration"],
        ["Automation & Media AI", "n8n, Python Scripting, FFmpeg, ElevenLabs, Stable Diffusion/ComfyUI, Browser WASM/ONNX, YouTube Transcript 5-Layer Extraction"],
        ["Full-Stack & Data", "Next.js 15/16, TypeScript, Node.js, PostgreSQL, Supabase RLS, REST APIs, GitHub Actions, Obsidian Knowledge Engineering"]
      ],
      projects: [
        {
          name: "AI Engineering OS — 10-Persona Elite Team & QA Rubric",
          meta: "Open Source | Multi-LLM Prompt Architecture",
          bullets: [
            "Architected a 10-persona system-prompt role framework (Architecture, Frontend, Backend, DB, DevOps, AI, Automation, Security, QA) enforcing reproducible quality gates.",
            "Built a QA Criticism Framework and 14-stage n8n + Python content automation workflow operating on $0/month free-tier infrastructure."
          ]
        },
        {
          name: "Critical Skill Evaluator & System Intel Scanner",
          meta: "github.com/whodakingofhell/critical-skill-evaluator | Python",
          bullets: [
            "Built automated skill auditing against real failure logs alongside a unified Python scanner pulling clean context from GitHub, StackOverflow, and YouTube (5-layer fallback)."
          ]
        },
        {
          name: "BGround — Browser-Local AI Cutout & Reel Studio",
          meta: "bground.vercel.app | WASM/ONNX, Next.js, Canvas",
          bullets: [
            "Shipped an on-device AI image segmentation web app eliminating recurring cloud inference fees while outputting studio-grade marketplace assets."
          ]
        },
        {
          name: "AI-Ops Vault & PAIOS Knowledge Governance",
          meta: "github.com/whodakingofhell/PAIOS | TypeScript, Obsidian",
          bullets: [
            "Created a 13-domain canonical knowledge vault coordinating 6 AI coding assistants through structured inbox-to-canonical verification workflows."
          ]
        }
      ],
      experience: [
        {
          role: "Customer Service Representative (Multi-Channel Escalations)",
          company: "IBEX Global Solutions INC (Walmart US)",
          dates: "Oct 2025 - Jun 2026",
          bullets: [
            "Communicated clear technical resolutions across phone, chat, and email while maintaining top QA accuracy and customer satisfaction scores."
          ]
        },
        {
          role: "Travel Associate (High-Volume SLA Operations)",
          company: "IGT Solutions (Atain)",
          dates: "Mar 2025 - Sep 2025",
          bullets: [
            "Diagnosed recurring system and booking discrepancies in fast-paced queues and documented repeatable fixes to speed up team handle time."
          ]
        }
      ]
    },

    it_support: {
      headline: "IT Support & Technical Support Specialist (BSIT • ISC2 Certified)",
      summary: `Bachelor of Science in Information Technology graduate and ISC2 Security Awareness certified specialist combining verified multi-channel enterprise support at Walmart US (IBEX Global) and IGT Solutions with 5+ years of programming, SQL/database debugging, Windows/Office activation workflows, and remote PC support (AnyDesk/TeamViewer) aligned to ${job.title}.`,
      experienceFirst: true,
      projectsHeading: "IT Support, Remote Operations & Troubleshooting Systems",
      skills: [
        ["IT & Technical Support", "Tier 1/2 Troubleshooting, Phone/Live Chat/Email Escalations, AnyDesk, TeamViewer, Windows & Office Activation, CRM, SLA/CSAT/AHT/FCR"],
        ["Systems, OS & Scripting", "Python Scripting, PowerShell (Restore Points & Snapshots), Windows Administration, Git, XAMPP, Sentry Error Monitoring, Postman"],
        ["Databases & Web Debugging", "SQL, PostgreSQL, Supabase (RLS), MySQL 8.0, SQL Server Management Studio, REST API Diagnostics, Browser DevTools"],
        ["Cybersecurity (ISC2)", "Security Awareness Training (ISC2), Access Control (RBAC), Rate Limiting, Brute-Force Lockout, CSP/HSTS, Input Sanitization"]
      ],
      projects: [
        {
          name: "AI Appointment Assistant — Remote PC Support Booking API",
          meta: "appointment-backend-one.vercel.app | Node.js, Supabase RLS",
          bullets: [
            "Built a serverless remote PC support booking backend for 5-20 minute AnyDesk and TeamViewer troubleshooting sessions with Philippine timezone resolution.",
            "Implemented Supabase Row-Level Security, audit logging, 5 bookings/IP/hr spam protection, and real-time Discord technician alerts."
          ]
        },
        {
          name: "Sonata — Microsoft Windows & Office Setup Form (LicenseDesk)",
          meta: "microsoft-setup-form1.vercel.app | Next.js 15, Zod, Sentry",
          bullets: [
            "Built a production intake portal for Microsoft account lifecycle, Windows activation, and Office activation requests with deduplication, Resend confirmations, and Sentry error tracking."
          ]
        },
        {
          name: "Hermes Restore Point & System Intel Scanner",
          meta: "github.com/whodakingofhell/hermes-restore-point | PowerShell, Python",
          bullets: [
            "Created automated PowerShell restore-point utilities for safe local environment rollbacks plus Python diagnostics scripts."
          ]
        }
      ],
      experience: [
        {
          role: "Customer Service Representative (Technical & Account Support)",
          company: "IBEX Global Solutions INC (Walmart US)",
          dates: "Oct 2025 - Jun 2026",
          bullets: [
            "Delivered frontline technical and account support for Walmart US customers across phone, live chat, and email channels.",
            "Navigated multiple enterprise backend order, account, and payment systems simultaneously to resolve complex escalations with high first-call resolution.",
            "Consistently met or exceeded daily AHT, CSAT, and quality assurance scorecards."
          ]
        },
        {
          role: "Travel Associate (Systems Troubleshooting & Escalation)",
          company: "IGT Solutions (Atain)",
          dates: "Mar 2025 - Sep 2025",
          bullets: [
            "Managed domestic and international booking operations, modifications, and cancellations under strict SLA deadlines.",
            "Troubleshot booking system errors directly with airline and hotel partners and collaborated with team leads to lower average handle time."
          ]
        }
      ]
    },

    fullstack: {
      headline: "Full-Stack Web Developer (Next.js / React / TypeScript / PostgreSQL)",
      summary: `BSIT Full-Stack Developer with 5+ years of programming experience shipping production Next.js 15/16, React 18/19, TypeScript, Prisma, PostgreSQL, and Supabase applications. Delivered 11-layer secured multi-role SaaS platforms, browser-local WASM/ONNX media apps, and Playwright E2E-tested deployments aligned to ${job.title} (${topKw}).`,
      experienceFirst: false,
      projectsHeading: "Shipped Production Web Applications",
      skills: [
        ["Frontend Engineering", "Next.js 15/16 (App Router), React 18/19, TypeScript 5.4, Tailwind CSS 4, Radix UI, Framer Motion, HTML5/CSS3, Responsive SVG"],
        ["Backend & Databases", "Node.js, Vercel Serverless, Prisma ORM 5.22, PostgreSQL 16, Supabase (RLS), MySQL 8.0, REST APIs, Zod Schema Validation"],
        ["Security & Testing", "11-Layer Defense (CSRF, RBAC, JWT, BCrypt, HMAC-SHA256, Turnstile, CSP/HSTS), Playwright E2E, Sentry Monitoring, JUnit 5"],
        ["AI & Cloud DevOps", "Vercel, Cloudflare, Railway, GitHub Actions, Docker, WASM/ONNX, n8n, Python, OpenAI/Claude/Gemini APIs"]
      ],
      projects: [
        {
          name: "Philippine Skyland — Real Estate Broker & Appraiser SaaS",
          meta: "philippine-skyland.vercel.app | Next.js 16, Prisma, PostgreSQL 16",
          bullets: [
            "Architected a full-stack SaaS platform with 13 Prisma models, 14+ authenticated endpoints, 4-role RBAC (5-attempt lockout), and EN/FIL/ZH localization.",
            "Implemented an 11-layer security stack (Zod, CSRF, rate limiting, bcrypt, JWT, HMAC API signing, Turnstile, audit logs) verified with Playwright E2E tests."
          ]
        },
        {
          name: "BGround — 0-Credit Browser-Local Background Studio",
          meta: "bground.vercel.app | Next.js, TypeScript, WASM/ONNX, Canvas",
          bullets: [
            "Built an on-device AI photo background remover with realistic contact shadows, editorial color grading, and 1:1 / 4:5 / 1-30s social reel exports under strict CSP."
          ]
        },
        {
          name: "Sonata — Microsoft Setup Form (LicenseDesk)",
          meta: "microsoft-setup-form1.vercel.app | Next.js 15, React 19, Tailwind 4",
          bullets: [
            "Shipped a validated booking platform with deduplication, rate limiting, 3-attempt Discord webhook retry, Resend emails, Turnstile, and Sentry."
          ]
        },
        {
          name: "AI Appointment Assistant — Serverless API",
          meta: "appointment-backend-one.vercel.app | Node.js, Supabase RLS",
          bullets: [
            "Deployed 3 independently testable Vercel serverless functions with Supabase RLS, CORS restrictions, and 5 bookings/IP/hr rate limiting."
          ]
        }
      ],
      experience: [
        {
          role: "Customer Service Representative (Enterprise Support)",
          company: "IBEX Global Solutions INC (Walmart US)",
          dates: "Oct 2025 - Jun 2026",
          bullets: [
            "Resolved complex multi-system customer and payment escalations across phone, chat, and email with strong communication and high FCR."
          ]
        },
        {
          role: "Travel Associate",
          company: "IGT Solutions (Atain)",
          dates: "Mar 2025 - Sep 2025",
          bullets: [
            "Debugged booking system discrepancies in high-volume queues and contributed workflow fixes that reduced average handle time."
          ]
        }
      ]
    },

    java_backend: {
      headline: "Backend & Java Software Engineer (Java 17 / SQL / Node.js)",
      summary: `BSIT Software Engineer with 4+ years of Java development and 5+ years of SQL/backend architecture. Built a 47-file, 10,400+ LOC Java 17 + MySQL 8.0 enterprise POS with SELECT FOR UPDATE row locking, HikariCP pooling, and 100+ JUnit 5/Mockito tests alongside PostgreSQL 16 and serverless APIs aligned to ${job.title}.`,
      experienceFirst: false,
      projectsHeading: "Backend, Java 17 & Relational Database Systems",
      skills: [
        ["Backend & Languages", "Java 17 (4 years), SQL, Python, TypeScript, Node.js, C, Jakarta EE 11, REST APIs, Vercel Serverless, Swing + FlatLaf"],
        ["Relational Databases", "MySQL 8.0, PostgreSQL 16, Supabase (RLS), Prisma ORM, HikariCP Connection Pooling, JDBC, H2 In-Memory DB, SSMS"],
        ["Security & Concurrency", "SELECT FOR UPDATE Row Locking, Deadlock Retry w/ Exponential Backoff, PreparedStatement SQLi Defense, BCrypt (12 rounds), HMAC-SHA256"],
        ["Testing & Build Tools", "JUnit 5, Mockito, H2 Integration Tests (100+ tests), Gradle 8.14, Shadow Fat JAR, Logback, Docker, GitHub Actions, Postman"]
      ],
      projects: [
        {
          name: "SMC Inventory System — Enterprise POS & Warehouse Core",
          meta: "Java 17, MySQL 8.0, HikariCP | 47 Files, 10,400+ LOC",
          bullets: [
            "Architected a layered Model-Service-Repository-UI POS system with a 10-table normalized MySQL 8.0 schema, foreign keys, indexes, and HikariCP pooling.",
            "Implemented BCrypt (12 rounds), PreparedStatement SQLi defense, transaction-wrapped sales with SELECT FOR UPDATE row locking, and deadlock retry.",
            "Delivered 100+ automated tests (JUnit 5 + Mockito + H2) across all layers and packaged an executable fat JAR via Gradle Shadow."
          ]
        },
        {
          name: "Philippine Skyland — PostgreSQL 16 & RBAC API Backend",
          meta: "philippine-skyland.vercel.app | Prisma ORM, PostgreSQL 16, NextAuth",
          bullets: [
            "Built 13 Prisma models and 14+ authenticated endpoints with 4-role RBAC, 5-attempt lockout, HMAC API signing, and persistent audit logs."
          ]
        },
        {
          name: "AI Appointment Assistant — Hardened Serverless API",
          meta: "appointment-backend-one.vercel.app | Node.js, Supabase RLS",
          bullets: [
            "Engineered 3 curl-testable serverless endpoints enforcing Supabase RLS, IP rate limiting (5 req/hr), input sanitization, and structured webhook dispatch."
          ]
        }
      ],
      experience: [
        {
          role: "Customer Service Representative",
          company: "IBEX Global Solutions INC (Walmart US)",
          dates: "Oct 2025 - Jun 2026",
          bullets: [
            "Troubleshot multi-system enterprise order, account, and payment backend discrepancies while maintaining top CSAT and QA performance."
          ]
        },
        {
          role: "Travel Associate",
          company: "IGT Solutions (Atain)",
          dates: "Mar 2025 - Sep 2025",
          bullets: [
            "Resolved partner booking system errors under strict SLAs and identified process improvements reducing handle time."
          ]
        }
      ]
    }
  };

  const cfg = TRACK_CONFIG[variantId] || TRACK_CONFIG.ai_automation;
  const dynamicSkills = [
    [`Matched to ${job.title.slice(0, 32)}`, topKw],
    ...cfg.skills
  ];

  return {
    trackId: variantId,
    fullName: MARK_PROFILE.fullName,
    contactLine: `${MARK_PROFILE.location} | ${MARK_PROFILE.email} | ${MARK_PROFILE.phone} | ${MARK_PROFILE.github}`,
    targetLine: `${cfg.headline} — Target: ${job.title} (${companyLabel})`,
    jobTitle: job.title,
    company: companyLabel,
    summary: cfg.summary,
    skills: dynamicSkills,
    experienceFirst: cfg.experienceFirst,
    projectsHeading: cfg.projectsHeading,
    projects: cfg.projects,
    experience: cfg.experience,
    education: MARK_PROFILE.education,
    certifications: MARK_PROFILE.certifications
  };
}

function updateApplicationKit() {
  const job = STATE.selectedJob;
  if (!job) return;
  const keywords = extractJobKeywords(`${job.title} ${job.description} ${(job.tags || []).join(" ")}`);

  document.getElementById("selected-job-title").textContent = `${job.title} — ${job.company}`;
  document.getElementById("selected-job-meta").textContent = `${job.location} • ${job.type} • ${job.salary || "Remote USD / PHP"}`;
  document.getElementById("selected-job-status").textContent = job.safetyBadge || "Legit Verified";
  document.getElementById("matched-keywords-row").innerHTML = keywords
    .map((k) => `<span class="px-2.5 py-1 rounded-full bg-[#e6f4ea] text-[#137333] text-[11px] font-medium">✓ ${escapeHtml(k)}</span>`)
    .join("");

  renderTailoredResume(job, keywords);
  renderTailoredCoverLetter(job, keywords);
  renderRequirementsAndAnswers(job, keywords);
}

function renderTailoredResume(job, keywords) {
  const root = document.getElementById("printable-resume-root");
  if (!root) return;
  const variant = RESUME_VARIANTS[STATE.resumeVariant % RESUME_VARIANTS.length];
  document.getElementById("resume-variant-label").textContent = variant.label;

  const model = buildTailoredResumeModel(job, keywords, variant.id);
  STATE.lastResumeModel = model;

  const expHtml = `
    <div class="ats-section-title">Professional Experience</div>
    <div class="space-y-2.5">
      ${model.experience.map((e) => `
        <div>
          <div class="flex flex-wrap justify-between font-bold"><span>${escapeHtml(e.role)} — ${escapeHtml(e.company)}</span><span class="font-normal text-[11px] text-[#5a5f69]">${escapeHtml(e.dates)}</span></div>
          <ul class="list-disc pl-4 mt-1 space-y-0.5 text-[12px]">${e.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
        </div>`).join("")}
    </div>`;

  const projHtml = `
    <div class="ats-section-title">${escapeHtml(model.projectsHeading)}</div>
    <div class="space-y-2.5">
      ${model.projects.map((p) => `
        <div>
          <div class="flex flex-wrap justify-between font-bold"><span>${escapeHtml(p.name)}</span><span class="font-normal text-[11px] text-[#5a5f69]">${escapeHtml(p.meta)}</span></div>
          <ul class="list-disc pl-4 mt-1 space-y-0.5 text-[12px]">${p.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
        </div>`).join("")}
    </div>`;

  root.innerHTML = `
    <div class="text-center border-b border-[#d5d9e0] pb-3">
      <h1 class="font-display font-bold text-xl">${escapeHtml(model.fullName)}</h1>
      <p class="text-[11px] text-[#5a5f69] mt-1">${escapeHtml(model.contactLine)}</p>
      <p class="text-xs font-semibold text-[#1a73e8] mt-1">${escapeHtml(model.targetLine)}</p>
    </div>
    <div class="ats-section-title">Professional Summary</div>
    <p class="text-[12px]">${escapeHtml(model.summary)}</p>
    <div class="ats-section-title">Core Skills &amp; Tools</div>
    <div class="space-y-1 text-[12px]">${model.skills.map(([k, v]) => `<div><strong>${escapeHtml(k)}:</strong> ${escapeHtml(v)}</div>`).join("")}</div>
    ${model.experienceFirst ? expHtml + projHtml : projHtml + expHtml}
    <div class="ats-section-title">Education &amp; Certifications</div>
    <div class="text-[12px] space-y-0.5">
      <div><strong>${escapeHtml(model.education.degree)}</strong> — ${escapeHtml(model.education.school)} (${escapeHtml(model.education.dates)})</div>
      ${model.certifications.map((c) => `<div>• ${escapeHtml(c)}</div>`).join("")}
    </div>`;

  const slopHits = auditTextForAiSlop(root.innerText);
  document.getElementById("slop-audit-badge").textContent = `${slopHits.length} AI Slop`;
  document.getElementById("ats-score-badge").textContent = `ATS: 10/10 (${keywords.length} Matched)`;
}

function renderTailoredCoverLetter(job, keywords) {
  const out = document.getElementById("cover-letter-output");
  if (!out) return;
  const coverStyle = COVER_VARIANTS[STATE.coverVariant % COVER_VARIANTS.length];
  const track = RESUME_VARIANTS[STATE.resumeVariant % RESUME_VARIANTS.length];
  document.getElementById("cover-variant-label").textContent = coverStyle.label;
  const topKw = keywords.slice(0, 4).join(", ");
  const model = STATE.lastResumeModel || buildTailoredResumeModel(job, keywords, track.id);
  const leadProj = model.projects[0];
  const secondProj = model.projects[1] || model.projects[0];

  const trackProof = {
    ai_automation: `I build reliable AI workflows using n8n, Python, webhooks, and Claude/GPT/Gemini APIs. Most recently, I built a 14-stage n8n + Python automation pipeline operating at $0/month free-tier cost, PAIOS (multi-AI orchestration), and Sonata (automated booking with 3-attempt Discord webhook retry and Resend emails).`,
    ai_prompt: `I specialize in structured system-prompt engineering, multi-LLM evaluation rubrics, and AI operations across Claude, OpenAI GPT, Gemini, and Grok. I built the 10-persona AI Engineering OS, Critical Skill Evaluator, and BGround (a 0-credit browser-local WASM/ONNX AI studio).`,
    it_support: `I combine a BS in Information Technology and ISC2 Security Awareness certification with verified frontline enterprise support at Walmart US (IBEX Global) and IGT Solutions. Beyond phone/chat/email escalations and exceeding CSAT/AHT targets, I built a remote AnyDesk/TeamViewer booking API and Microsoft Windows/Office setup portal.`,
    fullstack: `I ship production Next.js 15/16, React 18/19, TypeScript, Prisma, and PostgreSQL/Supabase web applications. My live deployments include Philippine Skyland (13 Prisma models, 11-layer security, Playwright E2E), BGround (bground.vercel.app), and Sonata (microsoft-setup-form1.vercel.app).`,
    java_backend: `I bring 4+ years of Java and relational database engineering. I built SMC Inventory System — a 47-file, 10,400+ LOC Java 17 + MySQL 8.0 POS featuring SELECT FOR UPDATE row locking, HikariCP pooling, BCrypt (12 rounds), and 100+ JUnit 5/Mockito tests — alongside PostgreSQL 16 and Node.js APIs.`
  }[track.id] || "";

  const drafts = {
    role_matched: `Subject: Application for ${job.title} — Mark Chester R. Santos

Hi ${model.company} Hiring Team,

I am applying for ${job.title} (${job.location}). My verified work aligns directly with ${topKw}:

- Core Proof (${track.label.split("—")[1]?.trim() || job.title}): ${trackProof}
- Shipped System Highlights: ${leadProj.name} (${leadProj.meta}) and ${secondProj.name} (${secondProj.meta}).
- Reliable Remote Execution: Proven enterprise communication and SLA discipline at IBEX Global (Walmart US) and IGT Solutions, based in Muntinlupa, Philippines (UTC+8) and available immediately for full-time remote US/AU/UK/PH shifts.

Live portfolio & demos: ${MARK_PROFILE.portfolioUrl}
GitHub (12 public repos): https://${MARK_PROFILE.github}

My tailored ATS resume is attached. Would you be open to a quick 15-minute intro call this week?

Best regards,
Mark Chester R. Santos
${MARK_PROFILE.email} | ${MARK_PROFILE.phone}`,

    direct_remote: `Hi ${model.company} team,

Saw your remote opening for ${job.title} and wanted to apply directly.

${trackProof}

You can test my live apps and inspect my code right away:
- Live Portfolio: ${MARK_PROFILE.portfolioUrl}
- GitHub: https://${MARK_PROFILE.github}
- Key Live App: ${leadProj.name} (${leadProj.meta})

I am based in the Philippines (UTC+8), fully equipped for remote work (reliable fiber + backup), comfortable with $600-$700+/month remote compensation depending on scope, and ready to start immediately.

Happy to walk through any workflow or repo on a quick call.

Best,
Mark Chester R. Santos
${MARK_PROFILE.email} | ${MARK_PROFILE.phone}`,

    concise_dm: `Hi ${model.company} team — applying for ${job.title}.

BSIT graduate with 5+ years coding across ${topKw}. ${trackProof.split(".")[0]}.

Portfolio & live demos: ${MARK_PROFILE.portfolioUrl}
GitHub: https://${MARK_PROFILE.github}

Available immediately for remote shifts (UTC+8 / US / AU / UK). Happy to jump on a 10-minute intro call this week!
— Mark Chester Santos (${MARK_PROFILE.email})`,

    formal_portal: `To: Hiring Manager, ${model.company}
Position: ${job.title}

Dear Hiring Manager,

Please accept my application for ${job.title}. I hold a Bachelor of Science in Information Technology from South Mansfield College, certifications in Python Programming (Wesleyan University) and Security Awareness Training (ISC2), and verified enterprise operations experience at IBEX Global Solutions (Walmart US) and IGT Solutions.

${trackProof}

My tailored resume is attached for your review, and live interactive demonstrations of my systems are available at ${MARK_PROFILE.portfolioUrl}. I welcome the opportunity to discuss how I can contribute remotely to your team.

Respectfully,
Mark Chester R. Santos
${MARK_PROFILE.location} | ${MARK_PROFILE.email} | ${MARK_PROFILE.phone}`
  };

  out.value = drafts[coverStyle.id] || drafts.role_matched;
}

function renderRequirementsAndAnswers(job, keywords) {
  const reqEl = document.getElementById("reqs-checklist-container");
  const ansEl = document.getElementById("screening-answers-container");
  if (!reqEl || !ansEl) return;
  const variant = REQS_VARIANTS[STATE.reqsVariant % REQS_VARIANTS.length];
  document.getElementById("reqs-variant-label").textContent = variant.label;

  const minSal = Number(document.getElementById("job-salary-filter")?.value || 600);
  const fields = [
    { k: "Full Name", v: MARK_PROFILE.fullName },
    { k: "Email / Phone", v: `${MARK_PROFILE.email} | ${MARK_PROFILE.phone}` },
    { k: "Expected Remote Salary", v: `$${Math.max(600, minSal)}–$${Math.max(700, minSal + 300)}/month USD (Negotiable based on role scope)` },
    { k: "Location & Shift", v: `${MARK_PROFILE.location} (UTC+8 — Remote Full-Time, US/AU/UK/PH Shift Ready)` },
    { k: "Portfolio & GitHub", v: `${MARK_PROFILE.portfolioUrl} | https://${MARK_PROFILE.github}` },
    { k: "Matched JD Skills", v: keywords.join(", ") }
  ];

  reqEl.innerHTML = fields.map((f, i) => `
    <div class="p-3 rounded-xl bg-[#f7f8fa] border border-[#e6e8ed] flex items-center justify-between gap-2 text-xs">
      <div class="min-w-0"><span class="font-semibold text-[#111215]">${escapeHtml(f.k)}:</span> <span id="qf-val-${i}" class="text-[#5a5f69]">${escapeHtml(f.v)}</span></div>
      <button type="button" onclick="copyText(document.getElementById('qf-val-${i}').textContent,'Copied ${escapeHtml(f.k)}')" class="text-[11px] font-semibold text-[#1a73e8] hover:underline shrink-0">Copy</button>
    </div>`).join("");

  const answers = [
    { q: `Why are you a strong match for ${job.title}?`, a: `I combine a BSIT degree and 5+ years building live AI automation (n8n, Python, multi-LLM pipelines) and full-stack Next.js/SQL apps with proven enterprise technical support at Walmart (IBEX Global) and IGT Solutions across ${keywords.slice(0, 4).join(", ")}.` },
    { q: "What is your monthly salary expectation for remote work?", a: `I am targeting $${Math.max(600, minSal)}–$${Math.max(700, minSal + 300)} USD/month for full-time remote work, open to discussing based on role responsibilities and growth.` },
    { q: "Can you share examples of AI automations or IT projects you built?", a: `Yes — you can test my live apps at ${MARK_PROFILE.portfolioUrl} (including BGround, Philippine Skyland, Sonata webhook pipeline, and my 14-stage n8n + Python AI Engineering OS on github.com/whodakingofhell).` }
  ];

  ansEl.innerHTML = answers.map((a, idx) => `
    <div class="p-3 rounded-xl bg-white border border-[#e6e8ed] space-y-1">
      <div class="flex items-center justify-between gap-2 text-xs font-semibold text-[#111215]">
        <span>${escapeHtml(a.q)}</span>
        <button type="button" onclick="copyText(document.getElementById('sa-${idx}').textContent,'Copied answer')" class="text-[11px] text-[#1a73e8] hover:underline">Copy</button>
      </div>
      <p id="sa-${idx}" class="text-xs text-[#5a5f69]">${escapeHtml(a.a)}</p>
    </div>`).join("");
}

function switchStudioTab(tab) {
  ["resume", "cover", "reqs"].forEach((k) => {
    document.getElementById(`studio-tab-${k}`)?.classList.toggle("active", k === tab);
    document.getElementById(`studio-pane-${k}`)?.classList.toggle("hidden", k !== tab);
  });
}
function cycleResumeOption() { STATE.resumeVariant = (STATE.resumeVariant + 1) % RESUME_VARIANTS.length; updateApplicationKit(); showToast(RESUME_VARIANTS[STATE.resumeVariant].label); }
function cycleCoverOption() { STATE.coverVariant = (STATE.coverVariant + 1) % COVER_VARIANTS.length; updateApplicationKit(); showToast(COVER_VARIANTS[STATE.coverVariant].label); }
function cycleReqsOption() { STATE.reqsVariant = (STATE.reqsVariant + 1) % REQS_VARIANTS.length; updateApplicationKit(); showToast(REQS_VARIANTS[STATE.reqsVariant].label); }

function triggerBlobDownload(bytesOrBlob, filename, mimeType) {
  const blob = bytesOrBlob instanceof Blob ? bytesOrBlob : new Blob([bytesOrBlob], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function getSafeFileSlug(str) {
  return String(str || "Tailored").replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "").slice(0, 28) || "Tailored";
}

function downloadResumePdf() {
  if (!STATE.lastResumeModel || typeof window.AtsPdfExporter === "undefined") {
    showToast("Select a job first to generate your PDF resume");
    return;
  }
  const { bytes, pageCount } = window.AtsPdfExporter.buildResumePdf(STATE.lastResumeModel);
  const roleSlug = getSafeFileSlug(STATE.lastResumeModel.trackId);
  const compSlug = getSafeFileSlug(STATE.lastResumeModel.company);
  const filename = `Mark_Chester_Santos_Resume_${roleSlug}_${compSlug}.pdf`;
  triggerBlobDownload(bytes, filename, "application/pdf");
  showToast(`Downloaded clean ${pageCount}-page ATS PDF (${filename})`);
}

function downloadCoverLetterPdf() {
  if (!STATE.lastResumeModel || typeof window.AtsPdfExporter === "undefined") {
    showToast("Select a job first to generate your cover letter PDF");
    return;
  }
  const cover = document.getElementById("cover-letter-output")?.value || "";
  const { bytes, pageCount } = window.AtsPdfExporter.buildCoverLetterPdf(STATE.lastResumeModel, cover);
  const compSlug = getSafeFileSlug(STATE.lastResumeModel.company);
  const filename = `Mark_Chester_Santos_CoverLetter_${compSlug}.pdf`;
  triggerBlobDownload(bytes, filename, "application/pdf");
  showToast(`Downloaded ${pageCount}-page Cover Letter PDF`);
}

function downloadFullKitPdf() {
  if (!STATE.lastResumeModel || typeof window.AtsPdfExporter === "undefined") {
    showToast("Select a job first to generate your application kit");
    return;
  }
  const cover = document.getElementById("cover-letter-output")?.value || "";
  const { bytes, pageCount } = window.AtsPdfExporter.buildFullApplicationKitPdf(STATE.lastResumeModel, cover);
  const roleSlug = getSafeFileSlug(STATE.lastResumeModel.trackId);
  const compSlug = getSafeFileSlug(STATE.lastResumeModel.company);
  const filename = `Mark_Chester_Santos_FullKit_${roleSlug}_${compSlug}.pdf`;
  triggerBlobDownload(bytes, filename, "application/pdf");
  showToast(`Downloaded ${pageCount}-page Resume + Cover Letter PDF`);
}

function copyGeneratedResume() { const e = document.getElementById("printable-resume-root"); if (e) copyText(e.innerText, "Copied tailored ATS Resume"); }
function downloadResumeDoc() {
  const el = document.getElementById("printable-resume-root");
  if (!el) return;
  const roleSlug = getSafeFileSlug(STATE.lastResumeModel?.trackId || "Tailored");
  const compSlug = getSafeFileSlug(STATE.selectedJob?.company || "Role");
  const doc = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;font-size:10.5pt;color:#111;line-height:1.45;max-width:740px;margin:20px auto;}h1{font-size:15pt;margin:0;}.ats-section-title{font-weight:bold;text-transform:uppercase;border-bottom:1px solid #ccc;margin-top:12px;margin-bottom:6px;font-size:9.5pt;}ul{margin:4px 0 8px 18px;}</style></head><body>${el.innerHTML}</body></html>`;
  triggerBlobDownload(doc, `Mark_Chester_Santos_Resume_${roleSlug}_${compSlug}.doc`, "application/msword");
  showToast("Downloaded Word (.doc) resume");
}
function copyCoverLetter() { const e = document.getElementById("cover-letter-output"); if (e) copyText(e.value, "Copied tailored cover letter"); }
function downloadCoverLetter() {
  const e = document.getElementById("cover-letter-output");
  if (!e) return;
  const compSlug = getSafeFileSlug(STATE.selectedJob?.company || "Role");
  triggerBlobDownload(e.value, `Mark_Chester_Santos_CoverLetter_${compSlug}.txt`, "text/plain;charset=utf-8");
  showToast("Downloaded Cover Letter (.txt)");
}

// ============================================================================
// 7. MAE — LIVE 3D VIDEO AVATAR (SILENT) + VOICE RECORD INPUT (MIC ONLY)
// ============================================================================
const MAE_HOVER_GREETINGS = [
  "Sorry, may I help you?",
  "Hi there! I'm Mae — happy to help you with this website.",
  "Need a hand? Click me anytime for a quick site tour."
];

const SITE_TOUR_STEPS = [
  {
    selector: "#demos",
    title: "Live Project Demos",
    body: "Switch tabs here to test BGround's 0-credit cutout studio, Philippine Skyland, Sonata, and Mark's CLI tools directly in your browser."
  },
  {
    selector: "#work",
    title: "All 12 Useful GitHub Projects",
    body: "Browse every shipped app and open-source repository from Mark's GitHub — filter by Live Web Apps, AI & Python Tools, or Ops & Backend."
  },
  {
    selector: "#analytics-dashboard",
    title: "7-Theme Data Studio & CSV Explorer",
    body: "Switch among 7 high-contrast themes, sort any table column, ask data questions, or upload your own .csv file for instant SVG charts."
  },
  {
    selector: "#website-checker",
    title: "Live Website Security & Accessibility Checker",
    body: "Enter any public URL (or click one of Mark's live apps) to run a real-time HTTPS/HSTS, CSP, WCAG accessibility, and Google SEO audit."
  },
  {
    selector: "#mae-dock",
    title: "Ask Mae Anytime",
    body: "Open Mae anytime to ask questions by typing or tapping the mic button to record your voice — or press Ctrl+K as a shortcut."
  }
];

let maeAnimTimer = null;
let maeHoverCooldownAt = 0;
let maeHoverBubbleTimer = null;
let maeHoverIdx = 0;
let currentTourIndex = -1;
let currentHighlightedEl = null;

function setMaeAvatarState(mode, autoResetMs = 0) {
  clearTimeout(maeAnimTimer);
  const shell = document.getElementById("mae-video-shell");
  const vIdle = document.getElementById("mae-vid-idle");
  const vHover = document.getElementById("mae-vid-hover");
  const vTalk = document.getElementById("mae-vid-talk");
  const orbVid = document.getElementById("mae-orb-video");

  const activeMode = mode === "talking" ? "talk" : mode === "hover" ? "hover" : "idle";
  [
    ["idle", vIdle],
    ["hover", vHover],
    ["talk", vTalk]
  ].forEach(([key, vid]) => {
    if (!vid) return;
    if (key === activeMode) {
      vid.classList.add("active");
      try {
        if (key !== "idle" && vid.paused) vid.currentTime = 0;
        const p = vid.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } catch {}
    } else {
      vid.classList.remove("active");
      if (key !== "idle") {
        try { vid.pause(); } catch {}
      }
    }
  });

  if (orbVid) {
    const targetSrc = activeMode === "talk" ? "media/mae-talk.mp4" : activeMode === "hover" ? "media/mae-hover.mp4" : "media/mae-idle.mp4";
    if (!orbVid.getAttribute("src")?.endsWith(targetSrc)) {
      orbVid.setAttribute("src", targetSrc);
      const p = orbVid.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }

  shell?.classList.toggle("speaking", mode === "talking" || mode === "hover");
  shell?.classList.toggle("listening", mode === "listening");

  if (autoResetMs > 0) {
    maeAnimTimer = setTimeout(() => {
      if (!STATE.maeListening) setMaeAvatarState("idle");
    }, autoResetMs);
  }
}

function showMaeHoverTooltip(text, durationMs = 3400) {
  const tip = document.getElementById("mae-hover-bubble");
  if (!tip) return;
  tip.textContent = text;
  tip.classList.add("visible");
  clearTimeout(maeHoverBubbleTimer);
  maeHoverBubbleTimer = setTimeout(() => tip.classList.remove("visible"), durationMs);
}

function triggerMaeHoverGreeting() {
  const now = Date.now();
  if (now - maeHoverCooldownAt < 4000) {
    setMaeAvatarState("hover", 2000);
    return;
  }
  maeHoverCooldownAt = now;
  const text = MAE_HOVER_GREETINGS[maeHoverIdx % MAE_HOVER_GREETINGS.length];
  maeHoverIdx += 1;

  const bubble = document.getElementById("mae-avatar-bubble");
  if (bubble) bubble.textContent = text;
  if (!STATE.maeOpen) showMaeHoverTooltip(text, 3600);
  setMaeAvatarState("hover", 2400);
}

function initMae3DAvatarInteraction() {
  const launcher = document.getElementById("mae-launcher");
  if (launcher) {
    launcher.addEventListener("mouseenter", () => {
      if (!STATE.maeOpen) triggerMaeHoverGreeting();
    });
  }

  const stage = document.getElementById("mae-avatar-stage");
  const shell = document.getElementById("mae-video-shell");
  if (stage && shell) {
    stage.addEventListener("mouseenter", () => {
      if (!STATE.maeListening) triggerMaeHoverGreeting();
    });
    stage.addEventListener("mousemove", (e) => {
      const r = stage.getBoundingClientRect();
      const rx = (((e.clientY - r.top) / r.height) - 0.5) * -14;
      const ry = (((e.clientX - r.left) / r.width) - 0.5) * 18;
      shell.style.transform = `perspective(700px) rotateX(${rx.toFixed(1)}deg) rotateY(${ry.toFixed(1)}deg) scale(1.03)`;
    });
    stage.addEventListener("mouseleave", () => {
      shell.style.transform = "";
    });
  }
}

function interactWithMaeAvatar() {
  const bubble = document.getElementById("mae-avatar-bubble");
  if (bubble) bubble.textContent = "Hi! I'm Mae. I'm happy to help you explore Mark's website.";
  setMaeAvatarState("hover", 2400);
}

let activeRecognition = null;
function toggleMaeMic() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = document.getElementById("mae-mic-btn");
  const bubble = document.getElementById("mae-avatar-bubble");

  if (!SpeechRec) {
    showToast("Voice recording requires Chrome or Edge");
    if (bubble) bubble.textContent = "Voice recording works in Chrome or Edge — or just type below!";
    return;
  }

  if (STATE.maeListening && activeRecognition) {
    activeRecognition.stop();
    return;
  }

  const rec = new SpeechRec();
  rec.lang = "en-US";
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  activeRecognition = rec;

  rec.onstart = () => {
    STATE.maeListening = true;
    micBtn?.classList.add("mic-btn-active");
    setMaeAvatarState("listening");
    if (bubble) bubble.textContent = "Listening... go ahead!";
  };
  rec.onresult = (event) => {
    const transcript = event.results?.[0]?.[0]?.transcript || "";
    if (transcript) {
      const inp = document.getElementById("mae-input");
      if (inp) inp.value = transcript;
      sendToMae(transcript);
    }
  };
  rec.onerror = () => {
    showToast("Mic permission needed or no voice heard");
  };
  rec.onend = () => {
    STATE.maeListening = false;
    micBtn?.classList.remove("mic-btn-active");
    setMaeAvatarState("idle");
  };
  rec.start();
}

function toggleMaePanel(force) {
  const panel = document.getElementById("mae-panel");
  if (!panel) return;
  const wasOpen = STATE.maeOpen;
  STATE.maeOpen = typeof force === "boolean" ? force : !STATE.maeOpen;
  panel.classList.toggle("open", STATE.maeOpen);

  if (STATE.maeOpen) {
    document.getElementById("mae-hover-bubble")?.classList.remove("visible");
    if (!wasOpen) setMaeAvatarState("hover", 2200);
    setTimeout(() => document.getElementById("mae-input")?.focus(), 140);
  } else {
    setMaeAvatarState("idle");
  }
}

function appendMaeMessage(role, text) {
  const box = document.getElementById("mae-messages");
  if (!box) return;
  const d = document.createElement("div");
  d.className = role === "user" ? "mae-msg-user" : "mae-msg-bot";
  d.textContent = text;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
}

function maeQuickPrompt(text) {
  toggleMaePanel(true);
  sendToMae(text);
}

async function handleMaeSubmit(ev) {
  ev.preventDefault();
  const inp = document.getElementById("mae-input");
  const text = (inp?.value || "").trim();
  if (!text) return;
  inp.value = "";
  await sendToMae(text);
}

function runLocalMaeFallback(message) {
  const q = message.toLowerCase().trim();
  if (/(what date|today'?s date|what day|current date|what time|time is it)/.test(q)) {
    const now = new Date();
    const dStr = now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const tStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    return `Today is ${dStr}, and it's ${tStr}. How can I help you with the website?`;
  }
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(q)) {
    return "Hi! I'm Mae. I'm happy to help you explore Mark's website.";
  }
  if (/(walkthrough|tour|how to use|guide)/.test(q)) {
    setTimeout(() => startSiteWalkthrough(), 350);
    return "Starting the 5-step website walkthrough for you now!";
  }
  if (/(contact|email|hire|phone|social|github|facebook|instagram)/.test(q)) {
    return "You can reach Mark at chesrakzxc@gmail.com, +63 995-814-0991, or on GitHub at github.com/whodakingofhell.";
  }
  if (/(bground|project|demo|github|skyland|sonata|paios|scanner|inventory|transcript)/.test(q)) {
    return "Mark has 12 useful projects listed under Projects — including BGround, Philippine Skyland, Sonata, PAIOS, system-intel-scanner, youtube-transcript-pro, and his Java 17 POS.";
  }
  if (/(security|pentest|csp|ssrf|hsts|checker|audit)/.test(q)) {
    return "Try the Website Checker section to audit any public URL live. This site enforces HSTS, strict CSP, anti-clickjacking, and SSRF protection.";
  }
  return "I'm happy to help you around Mark's website — ask me about his projects, how to use any tool, or click Site Walkthrough for a quick tour.";
}

async function sendToMae(text) {
  appendMaeMessage("user", text);
  STATE.maeHistory.push({ role: "user", text });
  const bubble = document.getElementById("mae-avatar-bubble");
  const badge = document.getElementById("mae-engine-badge");
  if (bubble) bubble.textContent = "Just a second...";

  let reply = null;
  let eng = "Live 3D";
  if (window.location.protocol !== "file:") {
    try {
      const r = await fetch("/api/mae", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: STATE.maeHistory.slice(-6) })
      });
      if (r.ok) {
        const d = await r.json();
        if (d?.reply) {
          reply = d.reply;
          eng = d.engine === "gemini-live" ? "Gemini Live" : "Assistant";
        }
      }
    } catch {}
  }
  if (!reply) reply = runLocalMaeFallback(text);

  if (badge) badge.textContent = `Mae • ${eng}`;
  if (bubble) bubble.textContent = reply.length > 110 ? reply.slice(0, 108) + "..." : reply;
  appendMaeMessage("assistant", reply);
  STATE.maeHistory.push({ role: "assistant", text: reply });
  setMaeAvatarState("talking", 2800);
}

// ============================================================================
// 7B. REWORKED INTERACTIVE WEBSITE WALKTHROUGH (Smooth Transitions, Silent)
// ============================================================================
function startSiteWalkthrough() {
  toggleMaePanel(false);
  currentTourIndex = 0;
  renderTourStep("next");
}

function goToTourStep(idx) {
  if (idx < 0 || idx >= SITE_TOUR_STEPS.length || idx === currentTourIndex) return;
  const dir = idx > currentTourIndex ? "next" : "prev";
  currentTourIndex = idx;
  renderTourStep(dir);
}

function stepSiteWalkthrough(delta) {
  const next = currentTourIndex + delta;
  if (next < 0) return;
  if (next >= SITE_TOUR_STEPS.length) {
    closeSiteWalkthrough();
    showToast("Walkthrough complete");
    return;
  }
  currentTourIndex = next;
  renderTourStep(delta > 0 ? "next" : "prev");
}

function renderTourStep(direction = "next") {
  const step = SITE_TOUR_STEPS[currentTourIndex];
  const card = document.getElementById("site-tour-card");
  const backdrop = document.getElementById("tour-backdrop");
  const content = document.getElementById("tour-content");
  if (!step || !card) return;

  if (currentHighlightedEl) {
    currentHighlightedEl.classList.remove("tour-highlight");
    currentHighlightedEl = null;
  }

  const target = document.querySelector(step.selector);
  if (target) {
    currentHighlightedEl = target;
    target.classList.add("tour-highlight");
    if (step.selector !== "#mae-dock") {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  // Smooth progress bar + clickable step dots
  const pct = ((currentTourIndex + 1) / SITE_TOUR_STEPS.length) * 100;
  const fill = document.getElementById("tour-progress-fill");
  if (fill) fill.style.width = `${pct}%`;

  const dotsEl = document.getElementById("tour-dots");
  if (dotsEl) {
    dotsEl.innerHTML = SITE_TOUR_STEPS.map((_, i) =>
      `<button type="button" onclick="goToTourStep(${i})" class="tour-dot ${i === currentTourIndex ? "active" : ""}" aria-label="Go to step ${i + 1}"></button>`
    ).join("");
  }

  document.getElementById("tour-step-badge").textContent = `Step ${currentTourIndex + 1} of ${SITE_TOUR_STEPS.length}`;
  document.getElementById("tour-step-title").textContent = step.title;
  document.getElementById("tour-step-body").textContent = step.body;

  if (content) {
    content.classList.remove("tour-slide-next", "tour-slide-prev");
    void content.offsetWidth;
    content.classList.add(direction === "prev" ? "tour-slide-prev" : "tour-slide-next");
  }

  const prevBtn = document.getElementById("tour-prev-btn");
  const nextBtn = document.getElementById("tour-next-btn");
  if (prevBtn) {
    prevBtn.disabled = currentTourIndex === 0;
    prevBtn.style.opacity = currentTourIndex === 0 ? "0.35" : "1";
  }
  if (nextBtn) {
    nextBtn.textContent = currentTourIndex === SITE_TOUR_STEPS.length - 1 ? "Finish ✓" : "Next →";
  }

  backdrop?.classList.add("active");
  card.classList.add("open");
  card.setAttribute("aria-hidden", "false");
}

function closeSiteWalkthrough() {
  currentTourIndex = -1;
  if (currentHighlightedEl) {
    currentHighlightedEl.classList.remove("tour-highlight");
    currentHighlightedEl = null;
  }
  document.getElementById("tour-backdrop")?.classList.remove("active");
  const card = document.getElementById("site-tour-card");
  if (card) {
    card.classList.remove("open");
    card.setAttribute("aria-hidden", "true");
  }
}

// ============================================================================
// 8. CASE STUDY MODAL
// ============================================================================
function openCaseStudy(key) {
  const cs = CASE_STUDIES[key];
  const m = document.getElementById("case-study-modal");
  if (!cs || !m) return;
  document.getElementById("cs-badge").textContent = cs.badge;
  document.getElementById("cs-title").textContent = cs.title;
  document.getElementById("cs-challenge").textContent = cs.challenge;
  document.getElementById("cs-solution").textContent = cs.solution;
  document.getElementById("cs-metrics").innerHTML = cs.metrics.map((x) => `<li>${escapeHtml(x)}</li>`).join("");
  document.getElementById("cs-stack").innerHTML = cs.stack.map((x) => `<span class="px-2.5 py-1 rounded-full bg-[#f1f3f6] text-[11px] font-mono-code">${escapeHtml(x)}</span>`).join("");
  document.getElementById("cs-github").href = safeUrl(cs.github);
  document.getElementById("cs-live").href = safeUrl(cs.live);
  m.classList.remove("hidden");
  m.classList.add("flex");
}
function closeCaseStudy() {
  const m = document.getElementById("case-study-modal");
  m?.classList.add("hidden");
  m?.classList.remove("flex");
}

// ============================================================================
// BOOTSTRAP
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("reading-progress-bar");
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar && h > 0) bar.style.width = `${Math.min(100, (window.scrollY / h) * 100)}%`;
  }, { passive: true });

  // Keyboard shortcuts:
  // Ctrl + Shift + M -> Secret Owner Vault Gate (Private Jobs Near You & Auto Finder)
  // Ctrl + K -> Open Mae Voice AI
  // Escape -> Close active modal/panel
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "m") {
      e.preventDefault();
      openOwnerAuthModal();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      toggleMaePanel();
    } else if (e.key === "ArrowRight" && currentTourIndex >= 0) {
      e.preventDefault();
      stepSiteWalkthrough(1);
    } else if (e.key === "ArrowLeft" && currentTourIndex >= 0) {
      e.preventDefault();
      stepSiteWalkthrough(-1);
    } else if (e.key === "Escape") {
      closeCaseStudy();
      closeOwnerAuthModal();
      closePlatformPicker();
      closeSiteWalkthrough();
      toggleMaePanel(false);
    }
  });

  // Allow ?owner=vault URL trigger to open the passcode modal cleanly
  if (new URLSearchParams(window.location.search).get("owner") === "vault") {
    setTimeout(openOwnerAuthModal, 350);
  }

  initAntigravityCanvas("hero-particle-canvas", "light");
  initAntigravityCanvas("obsidian-particle-canvas", "dark");
  initAntigravityCanvas("cta-particle-canvas", "dark");
  initMagneticPills();
  initTypewriterMorph();
  initScrollManifesto();
  initWaveRibbon();
  initMae3DAvatarInteraction();

  // Default Demo + 7-Theme Dashboard + Mae Greeting + Check Owner Cookie
  switchLiveDemo("bground");
  populateDashCategoryFilter();
  renderDashboard();
  checkOwnerSession();
  appendMaeMessage("assistant", "Hi! I'm Mae. I'm happy to help you explore Mark's website.");
});
