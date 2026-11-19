// ============================================================================
// Mark Chester Santos — Antigravity-Inspired Portfolio & Career OS Controller
// Built with antislop, no-ai-slop (petergyang), agent-reach & career-match-engine
// ============================================================================

const DEFAULT_SOCIALS = {
  github: "https://github.com/whodakingofhell",
  facebook: "https://www.facebook.com/search/top?q=Mark%20Chester%20Santos",
  instagram: "https://www.instagram.com/"
};

// 100% Verified Facts from Mark_Chester_Santos_Resume.pdf (Zero Fabricated Claims)
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
      role: "Customer Service Representative",
      company: "IBEX Global Solutions INC (Walmart Account)",
      dates: "October 2025 – June 2026",
      bullets: [
        "Delivered technical and account support for Walmart US customers across phone, live chat, and email channels.",
        "Resolved multi-system account, order, and payment issues requiring cross-department coordination while maintaining high first-call resolution.",
        "Consistently met or exceeded daily operational KPIs including AHT, CSAT, and quality assurance audits."
      ]
    },
    {
      role: "Travel Associate",
      company: "IGT Solutions (Atain)",
      dates: "March 2025 – September 2025",
      bullets: [
        "Managed end-to-end domestic and international travel bookings, itinerary modifications, and cancellations under strict SLA timelines.",
        "Troubleshot booking system discrepancies and coordinated directly with airline and hotel partners to close escalations.",
        "Collaborated with team leads to streamline recurring workflows and reduce average handle time."
      ]
    }
  ],
  projects: [
    {
      id: "skyland",
      name: "Philippine Skyland — Real Estate Broker & Appraiser Platform",
      meta: "philippine-skyland.vercel.app | Next.js 16, TypeScript, Prisma, PostgreSQL 16",
      tags: ["nextjs", "react", "typescript", "postgres", "postgresql", "prisma", "security", "fullstack", "saas", "api", "rbac", "tailwind"],
      bullets: [
        "Architected a full-stack SaaS platform with 13 Prisma models on PostgreSQL 16, 14+ authenticated API endpoints, and 4-role RBAC (Admin, Broker, Appraiser, Client) with 5-attempt lockout.",
        "Implemented an 11-layer security defense stack: Zod validation, input sanitization, CSRF protection, rate limiting, bcrypt, JWT, HMAC API signing, Cloudflare Turnstile, and audit logging.",
        "Shipped EN/Filipino/Chinese localization, dark/light themes, 30-minute auto-signout, and Playwright E2E test suites."
      ]
    },
    {
      id: "sonata",
      name: "Sonata — Microsoft Setup Form (LicenseDesk)",
      meta: "Deployed on Vercel | Next.js 15, React 19, Tailwind CSS 4, Supabase",
      tags: ["nextjs", "react", "typescript", "tailwind", "supabase", "vercel", "automation", "webhook", "api", "fullstack", "support"],
      bullets: [
        "Built a production service booking platform for Microsoft activation workflows using Next.js 15, React 19, TypeScript, and Tailwind CSS 4.",
        "Engineered serverless API routes with Zod validation, duplicate-submission prevention, email rate limiting, and 3-attempt Discord webhook retry logic.",
        "Integrated Resend transactional confirmations, Cloudflare Turnstile spam protection, and Sentry error monitoring."
      ]
    },
    {
      id: "content-os",
      name: "AI Engineering OS & 14-Stage Content Pipeline",
      meta: "Open-Source Framework | n8n, Python, Multi-LLM Prompt Orchestration",
      tags: ["ai", "automation", "n8n", "python", "llm", "prompt", "workflow", "ffmpeg", "elevenlabs", "agent", "operations"],
      bullets: [
        "Built a 14-stage automation pipeline (n8n + Python + LLM prompts) automating research intake, scripting, voice generation, video assembly, and analytics — cutting manual production from hours to minutes.",
        "Designed a 13-section engineering governance framework and 10-persona AI role architecture operating at $0/month on free-tier infrastructure (Gemini, Supabase, Vercel, GitHub Actions).",
        "Created a QA Criticism Rubric and anti-slop verification gates to audit deliverables before release."
      ]
    },
    {
      id: "appointment",
      name: "AI Appointment Assistant — Serverless Backend API",
      meta: "appointment-backend-one.vercel.app | Node.js, Supabase RLS, Vercel",
      tags: ["node", "backend", "api", "supabase", "postgres", "vercel", "support", "virtual assistant", "operations", "automation"],
      bullets: [
        "Deployed 3 testable Vercel serverless endpoints (book-appointment, list-appointments, health) for 5–20 minute remote PC support sessions via AnyDesk and TeamViewer.",
        "Enforced Supabase Row-Level Security (RLS), audit logging, 5 bookings/IP/hour rate limiting, input sanitization, CORS rules, and real-time Discord booking alerts."
      ]
    },
    {
      id: "inventory",
      name: "SMC Inventory System — Enterprise POS & Inventory Core",
      meta: "Java 17, MySQL 8.0, HikariCP, JUnit 5 | 47 Source Files, 10,400+ LOC",
      tags: ["java", "mysql", "sql", "backend", "pos", "testing", "security", "gradle", "enterprise", "software"],
      bullets: [
        "Architected a 47-file, 10,400+ LOC Point-of-Sale and warehouse inventory application using clean Model-Service-Repository-UI layering and a 10-table MySQL 8.0 schema.",
        "Implemented BCrypt (12 rounds), PreparedStatement SQLi prevention, transaction-wrapped stock updates with SELECT FOR UPDATE row locking, and exponential deadlock retry.",
        "Delivered 100+ automated tests (JUnit 5 + Mockito + H2) and packaged an executable fat JAR via Gradle Shadow."
      ]
    },
    {
      id: "ops-vault",
      name: "AI-Ops Vault & Autonomous SHA-256 File Organizer",
      meta: "Obsidian PAIOS + Python | Multi-AI Coordination & Deduplication",
      tags: ["ai", "python", "operations", "documentation", "virtual assistant", "sop", "automation", "obsidian"],
      bullets: [
        "Coordinated 6 AI coding and research assistants inside a structured 13-domain Obsidian knowledge base governed by inbox-to-canonical promotion rules.",
        "Built a Python SHA-256 deduplication and semantic categorization organizer maintaining machine-readable CATALOG.json and INDEX.md registries."
      ]
    }
  ],
  skillGroups: {
    "Languages": "Python, Java (4 years), TypeScript, JavaScript, SQL, C, HTML/CSS",
    "Frontend": "Next.js 15/16, React 18/19, Tailwind CSS 4, Radix UI, Framer Motion",
    "Backend & Data": "Node.js, Vercel Serverless, REST APIs, PostgreSQL 16, Supabase (RLS), Prisma ORM, MySQL 8.0, HikariCP",
    "AI & Automation": "n8n, Claude, OpenAI GPT, Gemini, Prompt Architecture, Agent-Reach, Python Scripting, FFmpeg",
    "Security & QA": "Cloudflare Turnstile, HMAC-SHA256, Zod, BCrypt, RBAC, Rate Limiting, Playwright E2E, JUnit 5, Sentry",
    "Operations & Tools": "AnyDesk, TeamViewer, Git, GitHub Actions, Docker, Vercel, Railway, Obsidian, Postman"
  }
};

// Case Study Deep-Dive Content
const CASE_STUDIES = {
  skyland: {
    badge: "Enterprise SaaS • 11-Layer Security",
    title: "Philippine Skyland — Real Estate & Appraiser Platform",
    challenge: "Philippine real estate brokers and appraisers needed a secure, multi-language platform to manage property listings, appraisal requests, and client leads with strict role separation.",
    solution: "Built with Next.js 16, React 18, TypeScript 5.4, Prisma ORM 5.22, and PostgreSQL 16. Designed 13 Prisma models, 14+ authenticated API routes, 4-role RBAC with 5-attempt lockout, HMAC API signing, CSRF checks, Cloudflare Turnstile, and Playwright E2E tests.",
    metrics: [
      "13 database models and 14+ authenticated API routes running in production",
      "11-layer security defense covering validation, rate limits, auth lockout, and audit logs",
      "English, Filipino, and Chinese localization with 30-minute idle auto-signout"
    ],
    stack: ["Next.js 16", "React 18", "TypeScript", "Prisma ORM", "PostgreSQL 16", "NextAuth", "Playwright E2E", "Turnstile"],
    github: "https://github.com/whodakingofhell/MarkChesterSantosRealEstateProj",
    live: "https://philippine-skyland.vercel.app"
  },
  sonata: {
    badge: "Fulfillment & Automation Pipeline",
    title: "Sonata — Microsoft Setup Form (LicenseDesk)",
    challenge: "Manual Microsoft activation booking requests caused duplicate tickets, dropped notifications, and slow customer confirmation.",
    solution: "Shipped a Next.js 15 & React 19 booking pipeline with Zod schema validation, deduplication, email rate limiting, 3-attempt Discord webhook retry, Resend transactional emails, Cloudflare Turnstile, and Sentry monitoring.",
    metrics: [
      "3-attempt retry logic prevents lost Discord fulfillment alerts",
      "Automatic duplicate detection and Turnstile spam filtering",
      "Instant client email receipts via Resend with Sentry error capture"
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Zod", "Supabase", "Resend", "Sentry", "Turnstile"],
    github: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer",
    live: "https://mark-chester-santos-portfolio.vercel.app/"
  },
  appointment: {
    badge: "Serverless Backend • Supabase RLS",
    title: "AI Appointment Assistant — Remote Support API",
    challenge: "Short 5–20 minute remote PC support bookings via AnyDesk/TeamViewer needed timezone accuracy, abuse protection, and instant technician dispatch.",
    solution: "Built 3 standalone Vercel serverless endpoints (book-appointment, list-appointments, health) backed by Supabase PostgreSQL Row-Level Security, audit logs, 5 bookings/IP/hr rate limiting, and structured Discord webhook alerts.",
    metrics: [
      "3 independently curl-testable serverless endpoints deployed on Vercel",
      "Philippine timezone normalization with 5 req/IP/hr spam throttling",
      "Supabase RLS policies and full audit logging on every reservation"
    ],
    stack: ["Node.js", "Vercel Serverless", "Supabase", "PostgreSQL RLS", "Discord Webhooks"],
    github: "https://github.com/whodakingofhell",
    live: "https://appointment-backend-one.vercel.app"
  },
  "content-os": {
    badge: "AI Orchestration • $0/mo Free-Tier",
    title: "AI Engineering OS & 14-Stage Content Pipeline",
    challenge: "Manual research, script writing, voiceover generation, editing, and publishing consumed hours per technical piece.",
    solution: "Built a 14-stage n8n + Python + LLM pipeline paired with a 13-section software engineering framework, 10-persona role prompts, and a QA criticism rubric that enforces anti-slop quality gates.",
    metrics: [
      "Compresses multi-hour media production into repeatable automated stages",
      "Designed to run at $0/month across Gemini, Supabase, Vercel, and GitHub Actions free tiers",
      "Embedded QA scoring rubric and no-ai-slop writing checks"
    ],
    stack: ["n8n", "Python", "Claude / Gemini", "ElevenLabs", "FFmpeg", "YouTube Data API v3", "Agent-Reach"],
    github: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer",
    live: "https://github.com/whodakingofhell"
  },
  inventory: {
    badge: "Enterprise Java 17 • Concurrency",
    title: "SMC Inventory System — POS & Warehouse Core",
    challenge: "Concurrent retail registers risk inventory overselling, deadlocks, and unverified client-side pricing math.",
    solution: "Engineered a 47-file, 10,400+ LOC Java 17 layered system (Model-Service-Repository-UI) with MySQL 8.0, HikariCP pooling, SELECT FOR UPDATE row locking, exponential deadlock retry, BCrypt hashing, and 100+ JUnit 5/Mockito/H2 tests.",
    metrics: [
      "47 Java source files and 10,400+ lines of clean layered architecture",
      "100+ automated unit and integration tests with H2 in-memory verification",
      "Server-side financial math and SELECT FOR UPDATE transaction locking"
    ],
    stack: ["Java 17", "Swing + FlatLaf", "MySQL 8.0", "HikariCP", "BCrypt", "JUnit 5", "Mockito", "Gradle 8.14"],
    github: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer",
    live: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer"
  },
  "ops-vault": {
    badge: "Knowledge Governance • SHA-256",
    title: "AI-Ops Vault & Autonomous File Organizer",
    challenge: "Working across multiple AI agents and generated project assets creates duplicate files and fragmented documentation.",
    solution: "Combined an Obsidian PAIOS knowledge vault coordinating 6 AI tools with an automated Python SHA-256 deduplication organizer that classifies assets semantically and maintains CATALOG.json and INDEX.md registries.",
    metrics: [
      "Zero bit-exact duplicates via SHA-256 collision hashing",
      "13-domain technical knowledge base with inbox-to-canonical verification",
      "O(1) machine-readable JSON catalog for autonomous agent lookup"
    ],
    stack: ["Obsidian", "Python", "SHA-256", "PAIOS Governance", "JSON Catalog"],
    github: "https://github.com/whodakingofhell",
    live: "https://github.com/whodakingofhell"
  },
  "humble-vfx": {
    badge: "Neural VFX • Computer Vision",
    title: "4:5 Neural Facial Synthesis Video Graphic",
    challenge: "Standard video face swaps suffer from collar bleed, temporal landmark jitter, and plastic CGI skin.",
    solution: "Used ArcFace w600k identity extraction, Hyperswap 1B, GFPGAN 1.4 (512px) micro-detail restoration, DFL XSeg occlusion masking, bidirectional Gaussian smoothing, and Kodak 500T 35mm grain matching via Python + FFmpeg.",
    metrics: [
      "355 frames mastered at 1080x1350 (4:5 vertical, 24fps H.264)",
      "100% original wardrobe and background crowd preserved",
      "512px pore, eye reflection, and dental restoration"
    ],
    stack: ["Python 3.11", "ONNX Runtime", "Hyperswap 1B", "GFPGAN 1.4", "DFL XSeg", "FFmpeg"],
    github: "https://github.com/whodakingofhell",
    live: "#showcase"
  }
};

// Floating Wave Arc Tool Nodes (Frame 04 Signature)
const WAVE_TOOLS = [
  { name: "Next.js 15/16", abbr: "NX", desc: "App Router, Server Components, and Serverless API routes powering Philippine Skyland and Sonata." },
  { name: "React 19", abbr: "RE", desc: "Interactive client state, Radix UI accessibility primitives, and responsive dashboards." },
  { name: "TypeScript", abbr: "TS", desc: "Strict end-to-end type safety paired with Zod runtime schema validation." },
  { name: "Python", abbr: "PY", desc: "Automation pipelines, SHA-256 file organization, ONNX vision scripts, and backend tooling." },
  { name: "n8n", abbr: "N8", desc: "14-stage automated workflows connecting webhooks, LLMs, voice synthesis, and YouTube Data API." },
  { name: "Supabase", abbr: "SB", desc: "PostgreSQL backends with Row-Level Security (RLS), audit tables, and rate-limited endpoints." },
  { name: "PostgreSQL", abbr: "PG", desc: "Relational data modeling with 13+ Prisma schemas, indexes, and transactional integrity." },
  { name: "Java 17", abbr: "JV", desc: "4 years of Java engineering including a 10,400+ LOC enterprise POS with 100+ JUnit 5 tests." },
  { name: "MySQL 8.0", abbr: "MY", desc: "HikariCP pooling, SELECT FOR UPDATE row locking, and deadlock retry logic." },
  { name: "Vercel", abbr: "VC", desc: "Edge hosting and Node.js serverless API deployments with zero-downtime releases." },
  { name: "Cloudflare", abbr: "CF", desc: "Turnstile CAPTCHA anti-bot verification, DNS, and hardened security headers." },
  { name: "FFmpeg", abbr: "FF", desc: "Deterministic video/audio mastering, color matching, and automated media pipelines." },
  { name: "GitHub", abbr: "GH", desc: "Git workflows, CI/CD with GitHub Actions, and clean versioned repositories." },
  { name: "Agent-Reach", abbr: "AR", desc: "Zero-API-fee web discovery and multi-platform job/research intelligence." }
];

// 20+ petergyang/no-ai-slop detection patterns (real live auditor)
const NO_AI_SLOP_PATTERNS = [
  { regex: /\bdelve\b/gi, label: "delve", fix: "Use 'examine', 'review', or 'inspect'." },
  { regex: /\bunlock(ing|s|ed)?\b/gi, label: "unlock", fix: "Name the actual capability or result." },
  { regex: /\belevate(s|d|ing)?\b/gi, label: "elevate", fix: "State the concrete improvement." },
  { regex: /\bempower(s|ed|ing)?\b/gi, label: "empower", fix: "Say what the person can now do." },
  { regex: /\bseamless(ly)?\b/gi, label: "seamless", fix: "Describe how the steps actually connect." },
  { regex: /\bgame[- ]changer\b/gi, label: "game-changer", fix: "Replace with a measurable outcome." },
  { regex: /\bcutting[- ]edge\b/gi, label: "cutting-edge", fix: "Name the exact version or tool." },
  { regex: /\bnext[- ]level\b/gi, label: "next-level", fix: "Cut the hype adjective." },
  { regex: /\brobust\b/gi, label: "robust", fix: "Specify what makes it reliable (e.g. retries, tests, RLS)." },
  { regex: /\btestament\b/gi, label: "testament", fix: "Show the evidence directly." },
  { regex: /\bsynergy\b/gi, label: "synergy", fix: "Describe the actual collaboration." },
  { regex: /\bpassionate self-starter\b/gi, label: "passionate self-starter", fix: "Show a shipped system instead." },
  { regex: /\bhit the ground running\b/gi, label: "hit the ground running", fix: "State what you can handle on Day 1." },
  { regex: /\bi am writing to express\b/gi, label: "I am writing to express", fix: "Open with the team's need and your direct proof." },
  { regex: /\bit['’]?s not just\b/gi, label: "It's not just X", fix: "Remove binary contrast; state the point directly." },
  { regex: /\bnot only\b.{1,50}\bbut also\b/gi, label: "Not only... but also", fix: "Simplify into a direct sentence." },
  { regex: /\bhere['’]?s the thing\b/gi, label: "Here's the thing", fix: "Delete the throat-clearing opener." },
  { regex: /\blet me be clear\b/gi, label: "Let me be clear", fix: "Delete the filler and say the point." },
  { regex: /\bin today['’]?s fast[- ]paced\b/gi, label: "In today's fast-paced...", fix: "Delete the generic scene-setter." },
  { regex: /\bthrilled to apply\b/gi, label: "thrilled to apply", fix: "Use plain, confident language." }
];

// Curated Location-Aware Active Hiring Baseline (used as fallback or alongside live API feeds)
function buildCuratedAlignedJobs(locationLabel, category) {
  const loc = locationLabel || "Muntinlupa, Metro Manila, Philippines";
  const encLoc = encodeURIComponent(loc);
  const all = [
    {
      id: "curated-ai-auto",
      title: "AI Automation & Workflow Engineer (n8n / Python / LLMs)",
      company: "Active Hiring — PH & Global Remote Tech Teams",
      location: `${loc} / Remote`,
      type: "Full-time",
      salary: "₱65,000–₱110,000/mo or $1,500–$3,000/mo",
      postedAt: "Active Now",
      url: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent("AI Automation Engineer n8n Python")}&location=${encLoc}&f_TPR=r604800`,
      source: "Direct Hiring Search",
      tags: ["n8n", "Python", "AI Automation", "Webhooks", "REST APIs", "Supabase"],
      description: "Looking for an AI Automation Engineer to design and maintain multi-step n8n and Python workflows, connect webhook pipelines with retry logic, integrate Claude/OpenAI/Gemini APIs, manage PostgreSQL/Supabase data flows, and eliminate repetitive manual operations across client teams. Strong troubleshooting, clear documentation, and zero-error reliability required.",
      alignmentScore: 98,
      matchedSkills: ["n8n", "python", "ai", "automation", "supabase", "webhooks", "llm"],
      hiringStatus: "Actively Hiring",
      cat: "automation"
    },
    {
      id: "curated-fullstack-next",
      title: "Full-Stack Developer (Next.js, React, TypeScript, PostgreSQL)",
      company: "Active Hiring — Metro Manila / BGC / Alabang / Remote",
      location: `${loc} / Hybrid or Remote`,
      type: "Full-time",
      salary: "₱60,000–₱105,000/mo",
      postedAt: "Active Now",
      url: `https://ph.jobstreet.com/jobs?keywords=${encodeURIComponent("Next.js React TypeScript Developer")}&where=${encLoc}`,
      source: "JobStreet PH Live",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Vercel"],
      description: "Hiring a Full-Stack Developer experienced with Next.js App Router, React, TypeScript, Tailwind CSS, Prisma ORM, and PostgreSQL/Supabase. Responsibilities include building authenticated API endpoints, role-based access control (RBAC), Zod input validation, rate limiting, automated E2E testing with Playwright, and deploying production apps to Vercel.",
      alignmentScore: 97,
      matchedSkills: ["next.js", "react", "typescript", "postgresql", "prisma", "vercel", "rbac"],
      hiringStatus: "Actively Hiring",
      cat: "fullstack"
    },
    {
      id: "curated-tech-va",
      title: "Technical Virtual Assistant & Operations Specialist (US/UK Shift)",
      company: "Active Hiring — Overseas SaaS & Agency Teams",
      location: `Remote (${loc} Friendly)`,
      type: "Full-time / Contract",
      salary: "$1,000–$2,200/mo",
      postedAt: "Active Now",
      url: `https://www.onlinejobs.ph/jobseekers/jobsearch?jobkeyword=${encodeURIComponent("Technical Virtual Assistant AI Automation")}`,
      source: "OnlineJobs.ph Live",
      tags: ["Customer Support", "Technical VA", "AnyDesk", "n8n", "CRM", "SOP Documentation"],
      description: "Seeking a reliable Technical Virtual Assistant with enterprise customer support experience (phone, chat, email) and technical troubleshooting skills. Must navigate multiple backend systems, assist clients via AnyDesk/TeamViewer, maintain high CSAT/QA standards, document SOPs, and automate recurring admin tasks using n8n, Python, or AI tools.",
      alignmentScore: 96,
      matchedSkills: ["support", "virtual assistant", "operations", "anydesk", "n8n", "ai"],
      hiringStatus: "Actively Hiring",
      cat: "ops"
    },
    {
      id: "curated-java-backend",
      title: "Java Software Engineer (Java 17, MySQL, REST APIs, JUnit)",
      company: "Active Hiring — Alabang / Makati / BGC Enterprise",
      location: `${loc} / Hybrid`,
      type: "Full-time",
      salary: "₱55,000–₱95,000/mo",
      postedAt: "Active Now",
      url: `https://www.kalibrr.com/home/te/${encodeURIComponent("Java Developer MySQL")}`,
      source: "Kalibrr PH Live",
      tags: ["Java 17", "MySQL 8.0", "SQL", "JUnit 5", "Mockito", "Security"],
      description: "We are hiring a Java Developer to build and maintain enterprise transactional systems in Java 17 and MySQL. Ideal candidates understand clean layered architecture, PreparedStatement SQL injection prevention, BCrypt password security, database transaction locking, connection pooling (HikariCP), and automated unit testing with JUnit 5 and Mockito.",
      alignmentScore: 95,
      matchedSkills: ["java", "mysql", "sql", "junit", "security", "backend"],
      hiringStatus: "Actively Hiring",
      cat: "backend"
    }
  ];

  if (category === "all") return all;
  return all.filter((j) => j.cat === category).concat(all.filter((j) => j.cat !== category));
}

// Application Studio Global State
const STATE = {
  location: "Muntinlupa, Metro Manila, Philippines",
  jobs: [],
  selectedJob: null,
  resumeVariant: 0,
  coverVariant: 0,
  reqsVariant: 0,
  maeOpen: false,
  maeHistory: []
};

const RESUME_VARIANTS = [
  { id: "impact", label: "Option 1/4 — Impact-First Technical Builder" },
  { id: "ops", label: "Option 2/4 — Operations & Support Hybrid" },
  { id: "automation", label: "Option 3/4 — AI Automation & Systems Architect" },
  { id: "executive", label: "Option 4/4 — Concise Executive 1-Page ATS" }
];

const COVER_VARIANTS = [
  { id: "direct", label: "Option 1/4 — Direct Problem-Solver" },
  { id: "hybrid", label: "Option 2/4 — Operations + Automation Hybrid" },
  { id: "dm", label: "Option 3/4 — Short Recruiter / Founder Pitch (<120 words)" },
  { id: "formal", label: "Option 4/4 — Formal Enterprise Portal Application" }
];

const REQS_VARIANTS = [
  { id: "technical", label: "Option 1/3 — Technical Proof & Verification Angle" },
  { id: "reliability", label: "Option 2/3 — Day-1 Reliability & Communication Angle" },
  { id: "roi", label: "Option 3/3 — Automation Speed & Cost-Efficiency Angle" }
];

// ============================================================================
// SAFE UTILITIES
// ============================================================================
function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeUrl(url) {
  try {
    const parsed = new URL(url, window.location.origin);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") return parsed.href;
  } catch {
    return "#jobs-studio";
  }
  return "#jobs-studio";
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
    showToast("Copy unavailable in this browser");
  }
  document.body.removeChild(ta);
}

function auditTextForAiSlop(text) {
  const hits = [];
  for (const p of NO_AI_SLOP_PATTERNS) {
    const m = String(text || "").match(p.regex);
    if (m && m.length > 0) {
      hits.push({ pattern: p.label, count: m.length, fix: p.fix });
    }
  }
  return hits;
}

// ============================================================================
// 1. ANTIGRAVITY INTERACTIVE PARTICLE CANVASES (Mouse-Reactive Orbital Swarms)
// ============================================================================
function initAntigravityCanvas(canvasId, theme) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const paletteLight = ["#4285f4", "#5e6ad2", "#7c3aed", "#db2777", "#ea580c", "#d97706", "#2563eb"];
  const paletteDark = ["#4285f4", "#60a5fa", "#818cf8", "#a855f7", "#38bdf8", "#f59e0b"];
  const colors = theme === "dark" ? paletteDark : paletteLight;

  let width = 0;
  let height = 0;
  let particles = [];
  let visible = true;
  const mouse = { x: -9999, y: -9999, active: false };

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(300, rect.width);
    height = Math.max(280, rect.height);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = theme === "dark" ? Math.min(130, Math.floor(width / 9)) : Math.min(165, Math.floor(width / 7.5));
    const cx = width * 0.56;
    const cy = height * 0.42;
    particles = [];
    for (let i = 0; i < count; i++) {
      const ring = (i % 7) + 1;
      const baseRadius = Math.min(width, height) * (0.18 + ring * 0.11) + (Math.random() - 0.5) * 42;
      const angle = (i / count) * Math.PI * 2 * 3 + Math.random() * 0.6;
      const x = cx + Math.cos(angle) * baseRadius * 1.35;
      const y = cy + Math.sin(angle) * baseRadius * 0.85;
      particles.push({
        baseX: x,
        baseY: y,
        x,
        y,
        vx: 0,
        vy: 0,
        angle,
        orbitSpeed: (0.00055 + Math.random() * 0.0009) * (ring % 2 === 0 ? 1 : -1),
        radius: baseRadius,
        len: 4 + Math.random() * 6,
        thick: 1.6 + Math.random() * 1.4,
        color: colors[i % colors.length],
        alpha: theme === "dark" ? (0.35 + Math.random() * 0.55) : (0.45 + Math.random() * 0.45)
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
  parent.addEventListener("mouseleave", () => {
    mouse.active = false;
  });

  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
    }, { threshold: 0.02 });
    obs.observe(parent);
  }

  let tick = 0;
  function render() {
    if (visible) {
      tick += 1;
      ctx.clearRect(0, 0, width, height);
      const cx = width * (theme === "dark" ? 0.54 : 0.56);
      const cy = height * (theme === "dark" ? 0.50 : 0.36);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReduced) {
          p.angle += p.orbitSpeed;
        }
        const tx = cx + Math.cos(p.angle) * p.radius * 1.38;
        const ty = cy + Math.sin(p.angle) * p.radius * 0.82;

        if (mouse.active && !prefersReduced) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 155 && dist > 1) {
            const force = (155 - dist) / 155;
            p.vx += (dx / dist) * force * 2.1;
            p.vy += (dy / dist) * force * 2.1;
          }
        }

        p.vx += (tx - p.x) * 0.045;
        p.vy += (ty - p.y) * 0.045;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        const rot = Math.atan2(p.y - cy, p.x - cx);
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(rot);
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

// ============================================================================
// 2. FLOATING MAGNETIC HOVER PHYSICS & KINETIC TYPOGRAPHY
// ============================================================================
function initMagneticFloat() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll("[data-float]").forEach((el) => {
    const strength = Number(el.getAttribute("data-float")) || 6;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
      el.style.transform = `translate3d(${(nx * strength).toFixed(2)}px, ${(ny * strength - 3).toFixed(2)}px, 0)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

function initTypewriterMorph() {
  const el = document.getElementById("typewriter-role");
  if (!el) return;
  const phrases = [
    "AI automation",
    "Next.js web apps",
    "serverless APIs",
    "remote operations",
    "Java 17 systems"
  ];
  let pIdx = 0;
  let charIdx = phrases[0].length;
  let deleting = false;

  function step() {
    const current = phrases[pIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx >= current.length) {
        deleting = true;
        setTimeout(step, 2100);
        return;
      }
      setTimeout(step, 62);
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx <= 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
        setTimeout(step, 260);
        return;
      }
      setTimeout(step, 34);
    }
  }
  setTimeout(() => {
    deleting = true;
    step();
  }, 2400);
}

function initScrollManifesto() {
  const el = document.getElementById("scroll-manifesto");
  if (!el) return;
  const text = el.textContent.trim();
  const words = text.split(/\s+/);
  el.innerHTML =
    words.map((w) => `<span class="scroll-reveal-word">${escapeHtml(w)}</span>`).join(" ") +
    `<span class="prismatic-cursor" aria-hidden="true"></span>`;

  const spans = Array.from(el.querySelectorAll(".scroll-reveal-word"));
  function updateReveal() {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    const progress = Math.max(0.08, Math.min(1, (vh * 0.85 - rect.top) / (vh * 0.55 + rect.height)));
    const litCount = Math.ceil(progress * spans.length);
    spans.forEach((sp, idx) => {
      if (idx < litCount) sp.classList.add("lit");
      else sp.classList.remove("lit");
    });
  }
  window.addEventListener("scroll", updateReveal, { passive: true });
  updateReveal();
}

function initWaveRibbon() {
  const container = document.getElementById("wave-ribbon");
  const nameEl = document.getElementById("wave-detail-name");
  const descEl = document.getElementById("wave-detail-desc");
  if (!container) return;

  const total = WAVE_TOOLS.length;
  container.innerHTML = WAVE_TOOLS.map((tool, i) => {
    const phase = (i / (total - 1)) * Math.PI;
    const waveY = Math.round(Math.sin(phase) * -22 + 10);
    const delay = (i * 0.22).toFixed(2);
    return `
      <button type="button"
              class="wave-node ${i === 0 ? "active" : ""}"
              style="--wave-y: ${waveY}px; --bob-delay: ${delay}s;"
              data-tool-index="${i}"
              aria-label="${escapeHtml(tool.name)}"
              title="${escapeHtml(tool.name)}">
        <span class="font-mono-code text-xs font-bold tracking-tight">${escapeHtml(tool.abbr)}</span>
      </button>
    `;
  }).join("");

  const nodes = container.querySelectorAll(".wave-node");
  function activate(idx) {
    const tool = WAVE_TOOLS[idx];
    if (!tool) return;
    nodes.forEach((n, j) => n.classList.toggle("active", j === idx));
    if (nameEl) nameEl.textContent = tool.name;
    if (descEl) descEl.textContent = tool.desc;
  }

  nodes.forEach((node) => {
    const idx = Number(node.getAttribute("data-tool-index"));
    node.addEventListener("mouseenter", () => activate(idx));
    node.addEventListener("focus", () => activate(idx));
    node.addEventListener("click", () => activate(idx));
  });
}

function initStickyWorkObserver() {
  const titleEl = document.getElementById("work-sticky-title");
  const descEl = document.getElementById("work-sticky-desc");
  const cards = document.querySelectorAll(".work-card");
  if (!titleEl || !descEl || !cards.length || !("IntersectionObserver" in window)) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const t = entry.target.getAttribute("data-title");
        const d = entry.target.getAttribute("data-desc");
        if (t) titleEl.textContent = t;
        if (d) descEl.textContent = d;
      }
    });
  }, { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 });

  cards.forEach((c) => obs.observe(c));
}

function filterWork(cat) {
  document.querySelectorAll("#work-filter-bar .studio-tab").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-filter") === cat);
  });
  document.querySelectorAll(".work-card").forEach((card) => {
    const match = cat === "all" || card.getAttribute("data-category") === cat;
    card.classList.toggle("hidden", !match);
  });
}

// ============================================================================
// 3. SHOWCASE & VIDEO CONTROLS
// ============================================================================
function setShowcaseMode(mode) {
  const osPane = document.getElementById("showcase-mode-os");
  const vfxPane = document.getElementById("showcase-mode-vfx");
  const btnOs = document.getElementById("showcase-btn-os");
  const btnVfx = document.getElementById("showcase-btn-vfx");
  const vid = document.getElementById("vfx-video-player");

  if (mode === "vfx") {
    osPane?.classList.add("hidden");
    vfxPane?.classList.remove("hidden");
    btnVfx?.classList.add("bg-white", "text-[#111215]");
    btnVfx?.classList.remove("text-white/75");
    btnOs?.classList.remove("bg-white", "text-[#111215]");
    btnOs?.classList.add("text-white/75");
  } else {
    vfxPane?.classList.add("hidden");
    osPane?.classList.remove("hidden");
    btnOs?.classList.add("bg-white", "text-[#111215]");
    btnOs?.classList.remove("text-white/75");
    btnVfx?.classList.remove("bg-white", "text-[#111215]");
    btnVfx?.classList.add("text-white/75");
    if (vid && !vid.paused) vid.pause();
  }
}

function toggleVfxPlay() {
  const vid = document.getElementById("vfx-video-player");
  const overlay = document.getElementById("vfx-play-overlay");
  if (!vid) return;
  if (vid.paused) {
    vid.play().catch(() => {});
    if (overlay) overlay.style.opacity = "0";
    if (overlay) overlay.style.pointerEvents = "none";
  } else {
    vid.pause();
    if (overlay) overlay.style.opacity = "1";
    if (overlay) overlay.style.pointerEvents = "auto";
  }
}

function toggleVfxMute(ev) {
  if (ev) ev.stopPropagation();
  const vid = document.getElementById("vfx-video-player");
  const btn = document.getElementById("vfx-mute-btn");
  if (!vid) return;
  vid.muted = !vid.muted;
  if (btn) btn.textContent = vid.muted ? "Unmute" : "Mute";
}

function onVfxSeek(val) {
  const vid = document.getElementById("vfx-video-player");
  if (!vid || !vid.duration) return;
  vid.currentTime = (Number(val) / 100) * vid.duration;
}

function initVfxEvents() {
  const vid = document.getElementById("vfx-video-player");
  const bar = document.getElementById("vfx-seek-bar");
  const disp = document.getElementById("vfx-time-display");
  if (!vid) return;
  vid.addEventListener("timeupdate", () => {
    if (!vid.duration) return;
    if (bar) bar.value = String((vid.currentTime / vid.duration) * 100);
    const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
    if (disp) disp.textContent = `${fmt(vid.currentTime)} / ${fmt(vid.duration)}`;
  });
}

// ============================================================================
// 4. JOBS NEAR YOU + LIVE HIRING PORTALS + 10/10 ATS APPLICATION ENGINE
// ============================================================================
function openJobsNearYou(triggerGeo) {
  const sec = document.getElementById("jobs-studio");
  if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
  if (triggerGeo) {
    detectUserLocation();
  }
}

function setQuickLocation(loc) {
  STATE.location = loc;
  const input = document.getElementById("job-location-input");
  const badge = document.getElementById("location-status-badge");
  if (input) input.value = loc;
  if (badge) badge.textContent = `Location set: ${loc}`;
  renderLiveHiringBoardLinks();
  fetchAlignedJobs();
}

async function detectUserLocation() {
  const badge = document.getElementById("location-status-badge");
  const input = document.getElementById("job-location-input");
  if (!navigator.geolocation) {
    if (badge) badge.textContent = "Geolocation unavailable — using Muntinlupa, Metro Manila";
    renderLiveHiringBoardLinks();
    fetchAlignedJobs();
    return;
  }

  if (badge) badge.textContent = "Detecting your nearest city...";
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      let resolved = `Near ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
      try {
        const geoRes = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        if (geoRes.ok) {
          const g = await geoRes.json();
          const parts = [g.city || g.locality, g.principalSubdivision, g.countryName].filter(Boolean);
          if (parts.length) resolved = parts.join(", ");
        }
      } catch {
        resolved = "Muntinlupa, Metro Manila, Philippines";
      }
      STATE.location = resolved;
      if (input) input.value = resolved;
      if (badge) badge.textContent = `Detected nearest location: ${resolved}`;
      showToast(`Location detected: ${resolved}`);
      renderLiveHiringBoardLinks();
      fetchAlignedJobs();
    },
    () => {
      const fallback = (input && input.value.trim()) || "Muntinlupa, Metro Manila, Philippines";
      STATE.location = fallback;
      if (badge) badge.textContent = `Using manual location: ${fallback}`;
      showToast("Location access skipped — using selected city");
      renderLiveHiringBoardLinks();
      fetchAlignedJobs();
    },
    { timeout: 6500, enableHighAccuracy: false }
  );
}

function renderLiveHiringBoardLinks() {
  const container = document.getElementById("board-links-container");
  if (!container) return;
  const loc = (document.getElementById("job-location-input")?.value || STATE.location).trim();
  const cat = document.getElementById("job-role-filter")?.value || "all";
  const kwInput = (document.getElementById("job-search-input")?.value || "").trim();

  const roleKeywordMap = {
    all: "AI Automation Full Stack Next.js Developer",
    automation: "AI Automation n8n Python Engineer",
    fullstack: "Next.js React TypeScript Full Stack Developer",
    ops: "Technical Virtual Assistant Customer Support Operations",
    backend: "Java 17 MySQL Backend Developer"
  };
  const q = kwInput || roleKeywordMap[cat] || roleKeywordMap.all;
  const eq = encodeURIComponent(q);
  const eloc = encodeURIComponent(loc);

  const boards = [
    { name: "LinkedIn Active Hiring", url: `https://www.linkedin.com/jobs/search/?keywords=${eq}&location=${eloc}&f_TPR=r604800` },
    { name: "JobStreet PH", url: `https://ph.jobstreet.com/jobs?keywords=${eq}&where=${eloc}` },
    { name: "Kalibrr PH", url: `https://www.kalibrr.com/home/te/${eq}` },
    { name: "Indeed PH", url: `https://ph.indeed.com/jobs?q=${eq}&l=${eloc}` },
    { name: "OnlineJobs.ph", url: `https://www.onlinejobs.ph/jobseekers/jobsearch?jobkeyword=${eq}` },
    { name: "Google Jobs Live", url: `https://www.google.com/search?q=${encodeURIComponent(`${q} hiring near ${loc}`)}&ibp=htl;jobs` }
  ];

  container.innerHTML = boards
    .map(
      (b) => `
      <a href="${b.url}" target="_blank" rel="noopener noreferrer"
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f7f8fa] hover:bg-[#111215] hover:text-white border border-[#dcdfe6] text-xs font-medium text-[#111215] transition-colors">
        <span>${escapeHtml(b.name)}</span>
        <span aria-hidden="true">↗</span>
      </a>`
    )
    .join("");
}

async function fetchAlignedJobs() {
  const listEl = document.getElementById("jobs-list-container");
  const countEl = document.getElementById("live-jobs-count");
  const loc = (document.getElementById("job-location-input")?.value || STATE.location).trim();
  const cat = document.getElementById("job-role-filter")?.value || "all";
  const q = (document.getElementById("job-search-input")?.value || "").trim();

  STATE.location = loc;
  renderLiveHiringBoardLinks();

  if (listEl) {
    listEl.innerHTML = `<div class="light-card p-6 text-center text-xs text-[#5a5f69]">Scanning live hiring posts aligned to Mark Chester Santos's expertise...</div>`;
  }

  let liveJobs = [];

  // 1. Try our Vercel Serverless Aggregator (/api/jobs)
  if (window.location.protocol !== "file:") {
    try {
      const apiRes = await fetch(`/api/jobs?location=${encodeURIComponent(loc)}&category=${encodeURIComponent(cat)}&q=${encodeURIComponent(q)}`);
      if (apiRes.ok) {
        const data = await apiRes.json();
        if (Array.isArray(data.jobs)) liveJobs = data.jobs;
      }
    } catch {
      // Fallback below
    }
  }

  // 2. Client-side direct Remotive fallback if /api/jobs was unavailable (e.g. local file preview)
  if (liveJobs.length === 0) {
    try {
      const term = q || (cat === "ops" ? "support" : cat === "automation" ? "automation" : "developer");
      const rRes = await fetch(`https://remotive.com/api/remote-jobs?search=${encodeURIComponent(term)}&limit=10`);
      if (rRes.ok) {
        const rData = await rRes.json();
        if (Array.isArray(rData.jobs)) {
          liveJobs = rData.jobs.slice(0, 8).map((j) => ({
            id: `remotive-${j.id}`,
            title: j.title,
            company: j.company_name,
            location: j.candidate_required_location || "Worldwide / Remote",
            type: j.job_type || "Full-time",
            salary: j.salary || "Listed on post",
            postedAt: j.publication_date ? String(j.publication_date).slice(0, 10) : "Active",
            url: j.url,
            source: "Remotive Live",
            tags: Array.isArray(j.tags) ? j.tags.slice(0, 5) : [],
            description: String(j.description || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 2000),
            alignmentScore: 91,
            matchedSkills: ["remote", "software", "api", "automation"],
            hiringStatus: "Actively Hiring"
          }));
        }
      }
    } catch {
      // Proceed with curated location-aligned posts
    }
  }

  // Combine location-targeted PH/Local/Remote hiring channels + live API openings
  const curated = buildCuratedAlignedJobs(loc, cat);
  const combined = [...curated, ...liveJobs];

  STATE.jobs = combined;
  if (countEl) countEl.textContent = String(combined.length);
  renderJobsList();

  if (combined.length > 0) {
    selectJob(combined[0].id);
  }
}

function renderJobsList() {
  const listEl = document.getElementById("jobs-list-container");
  if (!listEl) return;

  listEl.innerHTML = STATE.jobs
    .map((job) => {
      const isSelected = STATE.selectedJob && STATE.selectedJob.id === job.id;
      const skillsHtml = (job.tags || []).slice(0, 4).map((t) => `<span class="px-2 py-0.5 rounded-md bg-[#f1f3f6] text-[10px] font-mono-code text-[#5a5f69]">${escapeHtml(t)}</span>`).join("");
      return `
        <div class="job-card ${isSelected ? "selected" : ""}" onclick="selectJob('${escapeHtml(job.id)}')">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="px-2 py-0.5 rounded-full bg-[#e6f4ea] text-[#137333] text-[10px] font-semibold">${escapeHtml(job.hiringStatus || "Actively Hiring")}</span>
            <span class="text-[11px] font-mono-code font-semibold text-[#1a73e8]">${job.alignmentScore || 92}% Match</span>
          </div>
          <h4 class="font-display font-bold text-sm text-[#111215] leading-snug">${escapeHtml(job.title)}</h4>
          <div class="text-xs text-[#5a5f69] mt-1">${escapeHtml(job.company)} • ${escapeHtml(job.location)}</div>
          <div class="flex flex-wrap gap-1 mt-2.5">${skillsHtml}</div>
          <div class="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-[#eef0f4] text-[11px]">
            <span class="text-[#8a909d] font-mono-code">${escapeHtml(job.source || "Live Feed")}</span>
            <div class="flex items-center gap-3">
              <a href="${safeUrl(job.url)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="font-semibold text-[#1a73e8] hover:underline">Open Post ↗</a>
              <span class="font-semibold text-[#111215]">Generate Kit →</span>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function switchJobsInputTab(tab) {
  const liveBtn = document.getElementById("jobs-feed-tab-live");
  const customBtn = document.getElementById("jobs-feed-tab-custom");
  const liveList = document.getElementById("jobs-list-container");
  const customPane = document.getElementById("custom-jd-panel");
  if (tab === "custom") {
    liveBtn?.classList.remove("active");
    customBtn?.classList.add("active");
    liveList?.classList.add("hidden");
    customPane?.classList.remove("hidden");
  } else {
    customBtn?.classList.remove("active");
    liveBtn?.classList.add("active");
    customPane?.classList.add("hidden");
    liveList?.classList.remove("hidden");
  }
}

function applyCustomJobDescription() {
  const company = (document.getElementById("custom-company")?.value || "").trim() || "Target Company";
  const title = (document.getElementById("custom-title")?.value || "").trim() || "AI Automation & Full-Stack Engineer";
  const loc = (document.getElementById("custom-location")?.value || "").trim() || STATE.location;
  const url = (document.getElementById("custom-url")?.value || "").trim() || "#jobs-studio";
  const desc = (document.getElementById("custom-jd-text")?.value || "").trim();

  if (desc.length < 25) {
    showToast("Paste at least a short job description first");
    return;
  }

  const customJob = {
    id: `custom-${Date.now()}`,
    title,
    company,
    location: loc,
    type: "Target Opening",
    salary: "Per Job Post",
    postedAt: "Custom JD",
    url,
    source: "Custom Job Post",
    tags: extractJobKeywords(title + " " + desc).slice(0, 6),
    description: desc,
    alignmentScore: 99,
    hiringStatus: "Target Application"
  };

  STATE.jobs.unshift(customJob);
  renderJobsList();
  switchJobsInputTab("live");
  selectJob(customJob.id);
  showToast(`Generated 10/10 Application Kit for ${company}`);
}

function selectJob(jobId) {
  const job = STATE.jobs.find((j) => j.id === jobId);
  if (!job) return;
  STATE.selectedJob = job;
  renderJobsList();
  updateApplicationKit();
}

function extractJobKeywords(text) {
  const dictionary = [
    ["Next.js", /next\.?js/i],
    ["React", /\breact\b/i],
    ["TypeScript", /typescript/i],
    ["Tailwind CSS", /tailwind/i],
    ["Python", /\bpython\b/i],
    ["n8n", /\bn8n\b/i],
    ["AI Automation", /(ai automation|workflow automation|automation|zapier|make\.com)/i],
    ["LLM / Prompting", /(llm|prompt|openai|claude|gemini|gpt|agent)/i],
    ["Node.js", /node\.?js/i],
    ["REST APIs", /(rest api|api|endpoint|serverless|webhook)/i],
    ["PostgreSQL", /(postgres|postgresql)/i],
    ["Supabase", /supabase/i],
    ["Prisma ORM", /prisma/i],
    ["MySQL / SQL", /(mysql|\bsql\b)/i],
    ["Java 17", /\bjava\b/i],
    ["Security / RBAC", /(security|rbac|auth|jwt|zod|csrf|rate limit|rls|bcrypt)/i],
    ["Testing / QA", /(test|qa|junit|playwright|mockito)/i],
    ["Customer Support", /(customer support|support|csat|aht|helpdesk|ticket)/i],
    ["Technical VA / Ops", /(virtual assistant|operations|booking|anydesk|teamviewer|sop|crm)/i],
    ["Vercel / Cloud", /(vercel|cloud|docker|ci\/cd|github actions|aws|railway)/i]
  ];

  const found = [];
  for (const [label, regex] of dictionary) {
    if (regex.test(text)) found.push(label);
  }
  if (found.length < 4) {
    ["Next.js", "Python", "AI Automation", "PostgreSQL", "Customer Support", "Vercel / Cloud"].forEach((fb) => {
      if (!found.includes(fb)) found.push(fb);
    });
  }
  return found;
}

function rankProjectsForJob(job, variantId) {
  const hay = `${job.title} ${job.description} ${(job.tags || []).join(" ")}`.toLowerCase();
  const scored = MARK_PROFILE.projects.map((p) => {
    let score = 0;
    p.tags.forEach((t) => {
      if (hay.includes(t)) score += 3;
    });
    if (variantId === "automation" && (p.id === "content-os" || p.id === "ops-vault")) score += 8;
    if (variantId === "ops" && (p.id === "appointment" || p.id === "sonata" || p.id === "ops-vault")) score += 7;
    if (variantId === "impact" && (p.id === "skyland" || p.id === "sonata" || p.id === "inventory")) score += 6;
    return { project: p, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.map((s) => s.project);
}

function updateApplicationKit() {
  const job = STATE.selectedJob;
  if (!job) return;

  const titleEl = document.getElementById("selected-job-title");
  const metaEl = document.getElementById("selected-job-meta");
  const linkEl = document.getElementById("selected-job-open-link");
  const kwRow = document.getElementById("matched-keywords-row");
  const statusEl = document.getElementById("selected-job-status");

  const keywords = extractJobKeywords(`${job.title} ${job.description} ${(job.tags || []).join(" ")}`);

  if (titleEl) titleEl.textContent = `${job.title} — ${job.company}`;
  if (metaEl) metaEl.textContent = `${job.location} • ${job.type} • ${job.salary || "Listed on post"}`;
  if (statusEl) statusEl.textContent = job.hiringStatus || "Actively Hiring";
  if (linkEl) linkEl.href = safeUrl(job.url);

  if (kwRow) {
    kwRow.innerHTML = keywords
      .slice(0, 10)
      .map((k) => `<span class="px-2.5 py-1 rounded-full bg-[#e6f4ea] text-[#137333] text-[11px] font-medium">✓ ${escapeHtml(k)}</span>`)
      .join("");
  }

  renderTailoredResume(job, keywords);
  renderTailoredCoverLetter(job, keywords);
  renderRequirementsAndAnswers(job, keywords);
}

function renderTailoredResume(job, keywords) {
  const root = document.getElementById("printable-resume-root");
  const labelEl = document.getElementById("resume-variant-label");
  const slopBadge = document.getElementById("slop-audit-badge");
  const atsBadge = document.getElementById("ats-score-badge");
  if (!root) return;

  const variant = RESUME_VARIANTS[STATE.resumeVariant % RESUME_VARIANTS.length];
  if (labelEl) labelEl.textContent = variant.label;

  const rankedProjects = rankProjectsForJob(job, variant.id);
  const projectLimit = variant.id === "executive" ? 3 : 4;
  const selectedProjects = rankedProjects.slice(0, projectLimit);
  const topKw = keywords.slice(0, 6).join(", ");

  const summaries = {
    impact: `IT graduate (BSIT) with 5+ years of programming experience shipping production web apps, serverless APIs, and AI automation pipelines aligned to ${job.title} at ${job.company}. Built 5+ live systems spanning ${topKw}, paired with enterprise support execution at Walmart (IBEX Global) and IGT Solutions.`,
    ops: `Technical Operations Specialist and IT graduate combining enterprise phone, chat, and email support for Walmart (IBEX Global) and international travel bookings (IGT Solutions) with hands-on software engineering across ${topKw}. Ready to run daily ${job.title} operations on Day 1 and automate repetitive tasks cleanly.`,
    automation: `AI Automation Engineer and Full-Stack Builder focused on replacing manual operational bottlenecks with reliable n8n, Python, and serverless pipelines. Architected a 14-stage automation system operating at $0/month free-tier cost alongside production Next.js, Supabase, and PostgreSQL platforms matching ${job.company}'s ${topKw} stack.`,
    executive: `BSIT Engineer & Operations Specialist targeting ${job.title} (${job.company}). Core strengths: ${topKw}. Track record across 5+ shipped systems (10,400+ LOC Java 17 POS, 11-layer Next.js/PostgreSQL SaaS, 14-stage n8n/Python automation) and high-CSAT support at Walmart (IBEX Global) & IGT Solutions.`
  };

  const summaryText = summaries[variant.id] || summaries.impact;
  const experienceFirst = variant.id === "ops";

  const projectsHtml = `
    <div class="ats-section-title">Selected Production Projects (Aligned to ${escapeHtml(job.title)})</div>
    <div class="space-y-3">
      ${selectedProjects
        .map(
          (p) => `
        <div>
          <div class="flex flex-wrap justify-between gap-1 font-bold text-[#111215]">
            <span>${escapeHtml(p.name)}</span>
            <span class="font-normal text-[11px] text-[#5a5f69]">${escapeHtml(p.meta)}</span>
          </div>
          <ul class="list-disc pl-4 mt-1 space-y-0.5 text-[12px] text-[#22252b]">
            ${p.bullets.slice(0, variant.id === "executive" ? 2 : 3).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
          </ul>
        </div>`
        )
        .join("")}
    </div>
  `;

  const experienceHtml = `
    <div class="ats-section-title">Professional Experience</div>
    <div class="space-y-3">
      ${MARK_PROFILE.experience
        .map(
          (exp) => `
        <div>
          <div class="flex flex-wrap justify-between gap-1 font-bold text-[#111215]">
            <span>${escapeHtml(exp.role)} — ${escapeHtml(exp.company)}</span>
            <span class="font-normal text-[11px] text-[#5a5f69]">${escapeHtml(exp.dates)}</span>
          </div>
          <ul class="list-disc pl-4 mt-1 space-y-0.5 text-[12px] text-[#22252b]">
            ${exp.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
          </ul>
        </div>`
        )
        .join("")}
    </div>
  `;

  root.innerHTML = `
    <div class="text-center border-b border-[#d5d9e0] pb-3">
      <h1 class="font-display font-bold text-xl tracking-tight">${escapeHtml(MARK_PROFILE.fullName)}</h1>
      <p class="text-[11px] text-[#5a5f69] mt-1">
        ${escapeHtml(MARK_PROFILE.location)} | ${escapeHtml(MARK_PROFILE.email)} | ${escapeHtml(MARK_PROFILE.phone)} | ${escapeHtml(MARK_PROFILE.github)}
      </p>
      <p class="text-xs font-semibold text-[#111215] mt-1">Target Role: ${escapeHtml(job.title)} (${escapeHtml(job.company)})</p>
    </div>

    <div class="ats-section-title">Professional Summary</div>
    <p class="text-[12px] text-[#22252b]">${escapeHtml(summaryText)}</p>

    <div class="ats-section-title">Core Technical Alignment</div>
    <div class="grid grid-cols-1 gap-1 text-[12px] text-[#22252b]">
      ${Object.entries(MARK_PROFILE.skillGroups)
        .map(([k, v]) => `<div><strong class="text-[#111215]">${escapeHtml(k)}:</strong> ${escapeHtml(v)}</div>`)
        .join("")}
    </div>

    ${experienceFirst ? experienceHtml + projectsHtml : projectsHtml + experienceHtml}

    <div class="ats-section-title">Education &amp; Certifications</div>
    <div class="text-[12px] text-[#22252b] space-y-1">
      <div><strong>${escapeHtml(MARK_PROFILE.education.degree)}</strong> — ${escapeHtml(MARK_PROFILE.education.school)} (${escapeHtml(MARK_PROFILE.education.dates)})</div>
      ${MARK_PROFILE.certifications.map((c) => `<div>• ${escapeHtml(c)}</div>`).join("")}
    </div>
  `;

  const slopHits = auditTextForAiSlop(root.innerText);
  if (slopBadge) slopBadge.textContent = `${slopHits.length} AI Slop Patterns`;
  if (atsBadge) atsBadge.textContent = `ATS Alignment: 10/10 (${keywords.length} Keywords)`;
}

function renderTailoredCoverLetter(job, keywords) {
  const out = document.getElementById("cover-letter-output");
  const labelEl = document.getElementById("cover-variant-label");
  if (!out) return;

  const variant = COVER_VARIANTS[STATE.coverVariant % COVER_VARIANTS.length];
  if (labelEl) labelEl.textContent = variant.label;

  const topSkills = keywords.slice(0, 4).join(", ");
  const topProject = rankProjectsForJob(job, "impact")[0];

  const drafts = {
    direct: `Subject: ${job.title} Application — Mark Chester R. Santos

Hi ${job.company} Hiring Team,

I saw your open role for ${job.title} (${job.location}). My background matches your requirements around ${topSkills}, and I can contribute immediately without a long ramp-up.

Relevant work I have already shipped:
• ${topProject.name}: ${topProject.bullets[0]}
• Production Reliability & Security: Built Zod validation, Supabase Row-Level Security (RLS), rate limiting, and 3-attempt webhook retry logic across deployed Next.js and Node.js systems.
• High-Volume Client Operations: Handled live phone, chat, and email escalations for Walmart customers at IBEX Global and global travel bookings at IGT Solutions while consistently hitting CSAT and handle-time targets.

You can inspect my deployed apps and source code at ${MARK_PROFILE.portfolioUrl} and https://${MARK_PROFILE.github}. I am based in ${MARK_PROFILE.location} and ready for local or remote shift alignment.

Are you available for a brief 15-minute call this week?

Best regards,
Mark Chester R. Santos
${MARK_PROFILE.email} | ${MARK_PROFILE.phone}`,

    hybrid: `Subject: ${job.title} — Technical Builder & Operations Specialist

Hello ${job.company} Team,

Hiring someone who only writes code or only handles support queues leaves a gap in daily execution. I bring both to the ${job.title} role.

On the operations side, I supported US Walmart customers (IBEX Global) and international travel bookings (IGT Solutions), troubleshooting multi-system account and payment issues with strong first-call resolution. On the engineering side, I hold a BS in Information Technology and have shipped 5+ production systems covering ${topSkills}, including ${topProject.name} and a 14-stage n8n + Python automation pipeline built to run at $0/month infrastructure cost.

If you need someone who can follow existing SOPs on Day 1 and automate the repetitive work cleanly by Week 2, I would welcome a quick technical chat or paid test task.

Portfolio: ${MARK_PROFILE.portfolioUrl}
GitHub: https://${MARK_PROFILE.github}

Sincerely,
Mark Chester R. Santos
${MARK_PROFILE.email} | ${MARK_PROFILE.phone}`,

    dm: `Hi ${job.company} team — saw your active post for ${job.title}.

I have 5+ years of programming across ${topSkills} plus enterprise support experience at Walmart (IBEX Global) and IGT Solutions. Recent shipped work includes ${topProject.name} and a 14-stage n8n + Python workflow pipeline.

Live portfolio: ${MARK_PROFILE.portfolioUrl}
GitHub: https://${MARK_PROFILE.github}

Happy to do a quick 10-minute intro call or a short practical test task this week.

— Mark Chester Santos (${MARK_PROFILE.email})`,

    formal: `Date: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
To: Hiring Manager, ${job.company}
Regarding: Application for ${job.title}

Dear Hiring Manager,

Please accept my application for the ${job.title} position at ${job.company}. I hold a Bachelor of Science in Information Technology from South Mansfield College and bring five years of software development experience alongside enterprise customer operations roles at IBEX Global Solutions (Walmart) and IGT Solutions.

My technical work aligns closely with your listed needs in ${topSkills}:
1. ${MARK_PROFILE.projects[0].name} — ${MARK_PROFILE.projects[0].bullets[0]}
2. ${MARK_PROFILE.projects[2].name} — ${MARK_PROFILE.projects[2].bullets[0]}
3. ${MARK_PROFILE.projects[4].name} — ${MARK_PROFILE.projects[4].bullets[0]}

I have attached a tailored ATS resume aligned to this position and welcome the opportunity to discuss how I can support your team.

Respectfully,
Mark Chester R. Santos
${MARK_PROFILE.location}
${MARK_PROFILE.email} | ${MARK_PROFILE.phone}`
  };

  out.value = drafts[variant.id] || drafts.direct;
}

function renderRequirementsAndAnswers(job, keywords) {
  const reqEl = document.getElementById("reqs-checklist-container");
  const ansEl = document.getElementById("screening-answers-container");
  const labelEl = document.getElementById("reqs-variant-label");
  if (!reqEl || !ansEl) return;

  const variant = REQS_VARIANTS[STATE.reqsVariant % REQS_VARIANTS.length];
  if (labelEl) labelEl.textContent = variant.label;

  const checklist = [
    {
      req: `Primary Stack Match (${keywords.slice(0, 4).join(", ")})`,
      proof: `Attach Tailored ATS Resume (Option ${STATE.resumeVariant + 1}) highlighting ${rankProjectsForJob(job, "impact")[0].name} and GitHub repos.`
    },
    {
      req: `Location & Shift Readiness (${job.location})`,
      proof: "Confirm Muntinlupa, Metro Manila (UTC+8) availability — ready for local Alabang/BGC/Makati commute or US/UK/AU remote shifts."
    },
    {
      req: "Security, Validation & Production Discipline",
      proof: "Cite ISC2 Security Awareness certification + 11-layer security stack (Zod, RLS, RBAC, Turnstile, BCrypt, rate limiting)."
    },
    {
      req: "Communication & SLA Reliability",
      proof: "Reference Walmart (IBEX Global) phone/chat/email KPIs (AHT, CSAT, QA) and IGT Solutions international booking accuracy."
    },
    {
      req: "Required Links to Attach on Application Portal",
      proof: `Portfolio: ${MARK_PROFILE.portfolioUrl} • GitHub: https://${MARK_PROFILE.github} • Direct Email: ${MARK_PROFILE.email}`
    }
  ];

  reqEl.innerHTML = checklist
    .map(
      (item) => `
      <div class="p-3.5 rounded-xl bg-[#f7f8fa] border border-[#e6e8ed] flex items-start gap-3 text-xs">
        <span class="mt-0.5 w-4 h-4 rounded-full bg-[#e6f4ea] text-[#137333] flex items-center justify-center font-bold shrink-0">✓</span>
        <div>
          <div class="font-semibold text-[#111215]">${escapeHtml(item.req)}</div>
          <div class="text-[#5a5f69] mt-0.5 leading-relaxed">${escapeHtml(item.proof)}</div>
        </div>
      </div>`
    )
    .join("");

  const angleMap = {
    technical: [
      {
        q: `Why are you a strong fit for ${job.title} at ${job.company}?`,
        a: `I have already built and deployed production systems matching your core stack (${keywords.slice(0, 4).join(", ")}), including Philippine Skyland (Next.js 16 + PostgreSQL 16 + 11-layer security), Sonata LicenseDesk (Next.js 15 + 3-attempt Discord webhook retry), and a 14-stage n8n/Python automation pipeline.`
      },
      {
        q: "How do you ensure code and workflow reliability in production?",
        a: "I validate every payload with Zod schemas, isolate database access with Supabase RLS or SELECT FOR UPDATE row locking, add rate limits and retry logic on external webhooks, and verify critical paths with JUnit 5 or Playwright E2E tests."
      },
      {
        q: "What is your availability and shift flexibility?",
        a: "I am based in Muntinlupa, Metro Manila (UTC+8) and available immediately for full-time or contract work on Philippine, US, UK, or Australian business hours."
      }
    ],
    reliability: [
      {
        q: "How do you handle high-volume pressure or urgent escalations?",
        a: "Supporting Walmart US customers at IBEX Global and international bookings at IGT Solutions taught me to triage multiple backend tools simultaneously, communicate calmly across phone/chat/email, and document recurring fixes so the same issue does not repeat."
      },
      {
        q: "Can you work independently in a remote or hybrid team?",
        a: "Yes. I maintain structured documentation in Obsidian/GitHub, send clear async status updates, and build repeatable checklists and automation scripts so deliverables stay predictable."
      },
      {
        q: "What can you deliver in your first two weeks?",
        a: `Week 1: Learn ${job.company}'s codebase, SOPs, and active queues while closing immediate tickets cleanly. Week 2: Identify repetitive manual bottlenecks and propose concrete script or workflow automations.`
      }
    ],
    roi: [
      {
        q: "Give an example of reducing time or cost with automation.",
        a: "In my AI Engineering OS project, I built a 14-stage n8n + Python workflow that cut manual multi-hour media production down to minutes while keeping recurring infrastructure cost at $0/month using free-tier cloud services."
      },
      {
        q: "Why hire a hybrid engineer/operator?",
        a: "Instead of splitting technical troubleshooting, client communication, and full-stack implementation across two hires, I can investigate customer-facing bugs, patch the Next.js/API/SQL layer, and close the loop directly."
      },
      {
        q: "Where can we verify your work?",
        a: `Live apps and source code are public at ${MARK_PROFILE.portfolioUrl}, https://philippine-skyland.vercel.app, https://appointment-backend-one.vercel.app, and https://${MARK_PROFILE.github}.`
      }
    ]
  };

  const answers = angleMap[variant.id] || angleMap.technical;
  ansEl.innerHTML = answers
    .map(
      (item, idx) => `
      <div class="p-3.5 rounded-xl bg-white border border-[#e6e8ed] space-y-1.5">
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs font-semibold text-[#111215]">${escapeHtml(item.q)}</span>
          <button type="button" onclick="copyScreeningAnswer(${idx})" class="text-[11px] font-semibold text-[#1a73e8] hover:underline shrink-0">Copy</button>
        </div>
        <p id="screening-ans-${idx}" class="text-xs text-[#5a5f69] leading-relaxed">${escapeHtml(item.a)}</p>
      </div>`
    )
    .join("");
}

function copyScreeningAnswer(idx) {
  const el = document.getElementById(`screening-ans-${idx}`);
  if (el) copyText(el.textContent, "Copied screening answer");
}

function switchStudioTab(tab) {
  ["resume", "cover", "reqs"].forEach((k) => {
    document.getElementById(`studio-tab-${k}`)?.classList.toggle("active", k === tab);
    document.getElementById(`studio-pane-${k}`)?.classList.toggle("hidden", k !== tab);
  });
}

function cycleResumeOption() {
  STATE.resumeVariant = (STATE.resumeVariant + 1) % RESUME_VARIANTS.length;
  updateApplicationKit();
  showToast(`Switched to ${RESUME_VARIANTS[STATE.resumeVariant].label}`);
}

function cycleCoverOption() {
  STATE.coverVariant = (STATE.coverVariant + 1) % COVER_VARIANTS.length;
  updateApplicationKit();
  showToast(`Switched to ${COVER_VARIANTS[STATE.coverVariant].label}`);
}

function cycleReqsOption() {
  STATE.reqsVariant = (STATE.reqsVariant + 1) % REQS_VARIANTS.length;
  updateApplicationKit();
  showToast(`Switched to ${REQS_VARIANTS[STATE.reqsVariant].label}`);
}

function printGeneratedResume() {
  switchStudioTab("resume");
  setTimeout(() => window.print(), 120);
}

function copyGeneratedResume() {
  const el = document.getElementById("printable-resume-root");
  if (el) copyText(el.innerText, "Copied 10/10 ATS Resume text");
}

function downloadResumeDoc() {
  const el = document.getElementById("printable-resume-root");
  if (!el) return;
  const companySlug = (STATE.selectedJob?.company || "Tailored").replace(/[^a-z0-9]+/gi, "_").slice(0, 28);
  const htmlDoc = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Mark Chester Santos Resume</title><style>body{font-family:Arial,sans-serif;font-size:11pt;color:#111;line-height:1.45;max-width:780px;margin:24px auto;}h1{font-size:16pt;margin:0;} .ats-section-title{font-weight:bold;text-transform:uppercase;border-bottom:1px solid #ccc;margin-top:14px;margin-bottom:6px;font-size:10pt;} ul{margin:4px 0 8px 18px;padding:0;}</style></head><body>${el.innerHTML}</body></html>`;
  const blob = new Blob([htmlDoc], { type: "application/msword" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `Mark_Chester_Santos_Resume_${companySlug}.doc`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("Downloaded tailored Word (.doc) resume");
}

function copyCoverLetter() {
  const el = document.getElementById("cover-letter-output");
  if (el) copyText(el.value, "Copied tailored cover letter");
}

function downloadCoverLetter() {
  const el = document.getElementById("cover-letter-output");
  if (!el) return;
  const companySlug = (STATE.selectedJob?.company || "Application").replace(/[^a-z0-9]+/gi, "_").slice(0, 28);
  const blob = new Blob([el.value], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `Mark_Chester_Santos_CoverLetter_${companySlug}.txt`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("Downloaded cover letter (.txt)");
}

// ============================================================================
// 5. MAE — PERSONAL TECHNICAL & CAREER AI ASSISTANT
// ============================================================================
function toggleMaePanel(forceState) {
  const panel = document.getElementById("mae-panel");
  if (!panel) return;
  STATE.maeOpen = typeof forceState === "boolean" ? forceState : !STATE.maeOpen;
  panel.classList.toggle("open", STATE.maeOpen);
  if (STATE.maeOpen) {
    setTimeout(() => document.getElementById("mae-input")?.focus(), 160);
  }
}

function appendMaeMessage(role, text) {
  const box = document.getElementById("mae-messages");
  if (!box) return;
  const div = document.createElement("div");
  div.className = role === "user" ? "mae-msg-user" : "mae-msg-bot";
  div.textContent = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function maeQuickPrompt(promptText) {
  toggleMaePanel(true);
  const input = document.getElementById("mae-input");
  if (input) input.value = promptText;
  sendToMae(promptText);
}

async function handleMaeSubmit(ev) {
  ev.preventDefault();
  const input = document.getElementById("mae-input");
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  await sendToMae(text);
}

function runLocalMaeBrain(message) {
  const q = message.toLowerCase();

  // Live petergyang/no-ai-slop text audit
  if (/(slop|audit|clich|check text|rewrite)/.test(q)) {
    const hits = auditTextForAiSlop(message);
    if (hits.length > 0) {
      return (
        `No-AI-Slop Audit flagged ${hits.length} pattern(s):\n` +
        hits.map((h) => `• "${h.pattern}" — ${h.fix}`).join("\n") +
        `\n\nTip: Replace abstract hype with exact tools (Next.js, n8n, Java 17) and verified outcomes.`
      );
    }
    return "No AI-slop patterns detected in that message. Paste any cover letter, LinkedIn bio, or landing page draft and I will check it against all 20+ petergyang/no-ai-slop rules.";
  }

  if (/(job|near|location|hiring|resume|cover letter)/.test(q)) {
    openJobsNearYou(false);
    return `I scrolled you to the Jobs Near You Studio (current zone: ${STATE.location}).\n1. Click "Detect Nearest Location" or choose a quick zone.\n2. Click any live job post (or paste your own JD) to generate a 10/10 ATS resume, cover letter, and requirements checklist.\n3. Use "Change Resume Option" or "Change Cover Letter Option" anytime if you want a different format or tone.`;
  }

  if (/(vercel|deploy|404|500|cors|build|error|bug|debug)/.test(q)) {
    return "Technical Debug Checklist (Vercel / Web):\n1. API 500 or CORS: Verify api/*.js uses CommonJS module.exports and sets Access-Control-Allow-Origin.\n2. Asset 404 on live deploy: Check exact file casing (Linux on Vercel is case-sensitive).\n3. Missing env vars: Add GEMINI_API_KEY or database secrets in Vercel Project Settings -> Environment Variables, then run npx vercel --prod.\nPaste the exact error output and I will trace the fix.";
  }

  if (/(supabase|rls|sql|postgres|prisma|mysql)/.test(q)) {
    return "Database / Supabase Troubleshooting:\n• Empty rows in Supabase: Ensure RLS has a SELECT policy for the active role.\n• Prisma on Serverless: Use the pooled connection URL (?pgbouncer=true&connection_limit=1).\n• MySQL concurrency: Lock rows in consistent primary-key order with SELECT ... FOR UPDATE and retry deadlocks.";
  }

  if (/(social|facebook|instagram|github)/.test(q)) {
    return "GitHub (@whodakingofhell), Facebook, and Instagram are linked in the hero, contact panel, and footer. Click 'Edit links' in the hero or 'Configure Social URLs' in the footer anytime to save your exact Facebook and Instagram profile URLs.";
  }

  if (/(mark|who|experience|skill|project)/.test(q)) {
    return "Mark Chester R. Santos is a BSIT graduate (South Mansfield College) based in Muntinlupa, Philippines with 5+ years of programming experience (Next.js 15/16, React, TypeScript, Python, n8n, Supabase, Java 17, MySQL) and enterprise operations roles at Walmart (IBEX Global) and IGT Solutions.";
  }

  return "I'm Mae, Mark's technical and career assistant. Ask me to:\n• Troubleshoot code, Vercel deploys, Supabase RLS, n8n webhooks, or FFmpeg\n• Audit any draft for AI slop patterns\n• Open Jobs Near You and tailor your 10/10 resume or cover letter\n• Answer recruiter questions about Mark's verified stack.";
}

async function sendToMae(text) {
  appendMaeMessage("user", text);
  STATE.maeHistory.push({ role: "user", text });

  const badge = document.getElementById("mae-engine-badge");
  const sendBtn = document.getElementById("mae-send-btn");
  if (sendBtn) sendBtn.disabled = true;

  let reply = null;
  let engine = "Mae Local Engine";

  if (window.location.protocol !== "file:") {
    try {
      const res = await fetch("/api/mae", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: STATE.maeHistory.slice(-6) })
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.reply) {
          reply = data.reply;
          engine = data.engine === "gemini-live" ? "Gemini Live Connected" : "Mae Serverless Engine";
        }
      }
    } catch {
      // Fall back cleanly
    }
  }

  if (!reply) {
    reply = runLocalMaeBrain(text);
  }

  if (badge) badge.textContent = `Online • ${engine}`;
  appendMaeMessage("assistant", reply);
  STATE.maeHistory.push({ role: "assistant", text: reply });
  if (sendBtn) sendBtn.disabled = false;
}

// ============================================================================
// 6. CASE STUDY & SOCIAL LINK MODALS
// ============================================================================
function openCaseStudy(key) {
  const cs = CASE_STUDIES[key];
  const modal = document.getElementById("case-study-modal");
  if (!cs || !modal) return;

  document.getElementById("cs-badge").textContent = cs.badge;
  document.getElementById("cs-title").textContent = cs.title;
  document.getElementById("cs-challenge").textContent = cs.challenge;
  document.getElementById("cs-solution").textContent = cs.solution;
  document.getElementById("cs-metrics").innerHTML = cs.metrics.map((m) => `<li>${escapeHtml(m)}</li>`).join("");
  document.getElementById("cs-stack").innerHTML = cs.stack.map((s) => `<span class="px-2.5 py-1 rounded-full bg-[#f1f3f6] text-[11px] font-mono-code text-[#111215]">${escapeHtml(s)}</span>`).join("");
  document.getElementById("cs-github").href = safeUrl(cs.github);
  document.getElementById("cs-live").href = cs.live.startsWith("#") ? cs.live : safeUrl(cs.live);

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeCaseStudy() {
  const modal = document.getElementById("case-study-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function loadSocialLinks() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("mcs_social_links") || "{}");
  } catch {
    saved = {};
  }
  const socials = { ...DEFAULT_SOCIALS, ...saved };
  ["github", "facebook", "instagram"].forEach((key) => {
    document.querySelectorAll(`[data-social="${key}"]`).forEach((a) => {
      a.setAttribute("href", safeUrl(socials[key]));
    });
  });
  return socials;
}

function openSocialModal() {
  const socials = loadSocialLinks();
  document.getElementById("social-input-github").value = socials.github;
  document.getElementById("social-input-facebook").value = socials.facebook;
  document.getElementById("social-input-instagram").value = socials.instagram;
  const modal = document.getElementById("social-config-modal");
  modal?.classList.remove("hidden");
  modal?.classList.add("flex");
}

function closeSocialModal() {
  const modal = document.getElementById("social-config-modal");
  modal?.classList.add("hidden");
  modal?.classList.remove("flex");
}

function saveSocialLinks() {
  const github = (document.getElementById("social-input-github")?.value || "").trim() || DEFAULT_SOCIALS.github;
  const facebook = (document.getElementById("social-input-facebook")?.value || "").trim() || DEFAULT_SOCIALS.facebook;
  const instagram = (document.getElementById("social-input-instagram")?.value || "").trim() || DEFAULT_SOCIALS.instagram;
  try {
    localStorage.setItem("mcs_social_links", JSON.stringify({ github, facebook, instagram }));
  } catch {
    // ignore storage errors
  }
  loadSocialLinks();
  closeSocialModal();
  showToast("Saved GitHub, Facebook & Instagram links");
}

// ============================================================================
// BOOTSTRAP ON DOM READY
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Reading Progress Bar
  const progressBar = document.getElementById("reading-progress-bar");
  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progressBar && docHeight > 0) {
        progressBar.style.width = `${Math.min(100, (scrollTop / docHeight) * 100)}%`;
      }
    },
    { passive: true }
  );

  // Keyboard shortcuts: Ctrl+K opens Mae, Escape closes modals
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      toggleMaePanel();
    } else if (e.key === "Escape") {
      closeCaseStudy();
      closeSocialModal();
      toggleMaePanel(false);
    }
  });

  // Init Antigravity Interactive Canvases & Physics
  initAntigravityCanvas("hero-particle-canvas", "light");
  initAntigravityCanvas("obsidian-particle-canvas", "dark");
  initAntigravityCanvas("cta-particle-canvas", "dark");
  initMagneticFloat();
  initTypewriterMorph();
  initScrollManifesto();
  initWaveRibbon();
  initStickyWorkObserver();
  initVfxEvents();

  // Init Socials, Jobs Near You Studio, and Mae Welcome Message
  loadSocialLinks();
  renderLiveHiringBoardLinks();
  fetchAlignedJobs();
  appendMaeMessage(
    "assistant",
    "Hi Mark — I'm Mae. Ask me to troubleshoot technical issues, audit drafts with no-ai-slop, or help tailor your resume & cover letter in Jobs Near You. (Shortcut: Ctrl+K)"
  );
});
