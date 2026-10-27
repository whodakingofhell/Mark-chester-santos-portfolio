// ============================================================================
// Mark Chester Santos Portfolio — Interactive Controller
// High-Conversion Bento Grid • Zero AI Slop • 100% Privacy-Protected
// ============================================================================

const PORTFOLIO_CONFIG = {
  CONTACT_EMAIL: "chesrakzxc@gmail.com",
  SITE_NAME: "Mark Chester Santos Portfolio"
};

// Role Lens Data — Tailors the Hero & Highlights to the Employer's Exact Need
const ROLE_LENSES = {
  hybrid: {
    badge: "100% Remote & WFH Ready • US / UK / AU / APAC Shift Coverage",
    headline: "Your Remote Technical Operator,<br class='hidden sm:inline' /> AI Automator & Full-Stack Builder.",
    subheadline:
      "I combine enterprise customer support & booking operations (<strong class='text-white font-medium'>Walmart / IBEX Global</strong> & <strong class='text-white font-medium'>IGT Solutions</strong>) with production <strong class='text-white font-medium'>AI workflow automation (n8n, Python, Agent-Reach)</strong> and <strong class='text-white font-medium'>Next.js / Supabase engineering</strong>—so I can run your daily operations on Day 1 and automate the repetitive work by Week 2.",
    stat1Val: "2+ Enterprises",
    stat1Label: "Walmart (IBEX) & IGT Travel Ops",
    stat2Val: "5+ Live Apps",
    stat2Label: "Next.js, Supabase & Java 17 POS",
    stat3Val: "14-Stage",
    stat3Label: "n8n + Python AI Automation",
    stat4Val: "$0/mo",
    stat4Label: "Zero-Fee Agent-Reach & Free-Tier Stack"
  },
  va: {
    badge: "Executive & Technical Virtual Assistant • Client Support & Operations",
    headline: "Reliable Daily Operations.<br class='hidden sm:inline' /> Supercharged by AI Automation.",
    subheadline:
      "Proven track record handling high-volume phone, live chat, email, and international booking operations at <strong class='text-white font-medium'>Walmart (IBEX Global)</strong> and <strong class='text-white font-medium'>IGT Solutions</strong>. I manage calendars, troubleshoot live client systems via AnyDesk/TeamViewer, maintain top CSAT/AHT scores, and build zero-cost AI automations that save your team hours every day.",
    stat1Val: "Top CSAT",
    stat1Label: "Phone, Chat & Email Support KPI",
    stat2Val: "End-to-End",
    stat2Label: "Booking, Calendar & CRM Management",
    stat3Val: "Zero-Cost",
    stat3Label: "Agent-Reach Web & Lead Research",
    stat4Val: "BSIT Degree",
    stat4Label: "5+ Yrs Technical Troubleshooting"
  },
  engineer: {
    badge: "AI Automation Engineer • Prompt Architect • Full-Stack Developer",
    headline: "Production Web Systems &<br class='hidden sm:inline' /> Autonomous AI Workflows.",
    subheadline:
      "IT Bachelor's graduate with 5+ years of programming experience shipping production Next.js 15/16 SaaS platforms, Supabase/PostgreSQL backends with 11-layer defense, 10,400+ LOC Java 17 enterprise POS systems, and multi-LLM pipelines orchestrated with n8n, Python, and Agent-Reach.",
    stat1Val: "10,400+ LOC",
    stat1Label: "Java 17 & MySQL 8.0 POS Core",
    stat2Val: "11-Layer",
    stat2Label: "Production Security Architecture",
    stat3Val: "14-Stage",
    stat3Label: "Autonomous Content & QA Pipeline",
    stat4Val: "100+ Tests",
    stat4Label: "JUnit 5, Mockito & Playwright E2E"
  }
};

// Detailed Case Studies for Interactive Deep-Dive Modal
const CASE_STUDIES = {
  sonata: {
    title: "Sonata — Microsoft Setup Form (LicenseDesk)",
    badge: "SaaS & Fulfillment Pipeline",
    challenge: "Handling manual Microsoft account and license activation requests resulted in missed submissions, slow manual triage, and lack of client confirmations.",
    solution: "Engineered a Next.js 15 & React 19 booking platform with a serverless API pipeline. Added strict Zod schema validation, an automatic deduplication engine, and a Discord webhook alert system with 3-attempt exponential backoff retry. Integrated Resend for immediate transactional email confirmation and Sentry for real-time error telemetry.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "Cloudflare Turnstile", "Sentry", "Resend", "Discord Webhooks"],
    metrics: [
      "100% automated intake-to-fulfillment dispatch without manual operator intervention",
      "3-attempt retry logic with zero dropped webhook notifications under network blips",
      "Spam protection enforced via Cloudflare Turnstile & IP-based rate limiting"
    ],
    liveUrl: "https://mark-chester-santos-portfolio.vercel.app/",
    githubUrl: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer"
  },
  appointment: {
    title: "AI Appointment Assistant — Backend API",
    badge: "Serverless PC Support Scheduler",
    challenge: "Remote PC support sessions (5–20 min via AnyDesk/TeamViewer) suffered from double-booking conflicts across disparate timezones and abuse from spam bots.",
    solution: "Designed and deployed 3 independent serverless endpoints (book-appointment, list-appointments, health) on Vercel with Node.js. Integrated Supabase Row-Level Security (RLS) with audit logging, IP rate limiting (5 bookings/IP/hr), input sanitization, and structured Discord embed alerts for instant technician dispatch.",
    stack: ["Node.js", "Supabase (PostgreSQL)", "Vercel Serverless", "Discord Webhooks", "Supabase CLI"],
    metrics: [
      "Zero double-bookings with automated Philippine and overseas timezone resolution",
      "5 req/hr IP rate limit completely eliminates spam bot reservation flooding",
      "100% testable endpoints via curl with sub-120ms response latency"
    ],
    liveUrl: "https://appointment-backend-one.vercel.app",
    githubUrl: "https://github.com/whodakingofhell"
  },
  skyland: {
    title: "Philippine Skyland — Real Estate Broker & Appraiser Platform",
    badge: "Enterprise SaaS & 11-Layer Defense",
    challenge: "Real estate brokers and appraisers in the Philippines lacked a centralized, authenticated platform to track property listings, appraisal requests, and client leads with bank-grade security.",
    solution: "Architected a full-stack SaaS platform utilizing Next.js 16, TypeScript, and Prisma ORM on PostgreSQL 16. Constructed an 11-layer security defense stack: Zod validation, input sanitization, CSRF tokens, rate limiting, bcrypt (12 rounds), JWT sessions with account lockout after 5 failed attempts, RBAC (4 roles), HMAC API signing, Cloudflare Turnstile CAPTCHA, audit logging, and database transaction isolation.",
    stack: ["Next.js 16", "React 18", "TypeScript 5.4", "Prisma ORM", "PostgreSQL 16", "NextAuth", "Playwright E2E", "Cloudinary", "Cloudflare Turnstile"],
    metrics: [
      "13 Prisma models & 14+ authenticated API endpoints operating with zero vulnerabilities",
      "Multi-language support (English, Filipino, Chinese) with dark/light mode toggle",
      "Playwright E2E test coverage verifying appraisal and booking workflows"
    ],
    liveUrl: "https://philippine-skyland.vercel.app",
    githubUrl: "https://github.com/whodakingofhell/MarkChesterSantosRealEstateProj"
  },
  "content-os": {
    title: "AI Engineering OS & 14-Stage Content Engine",
    badge: "Autonomous Media & SOP Automation",
    challenge: "Producing technical video documentation and YouTube content manually required 4 to 5 hours per video across research, scripting, recording, voiceover, and publishing.",
    solution: "Built a 14-stage automated pipeline connecting n8n, Python, and LLM prompt chains. Integrated Agent-Reach for zero-API-fee multi-platform source gathering, Claude for script structuring, ElevenLabs for voiceover synthesis, FFmpeg for automated visual rendering, and YouTube Data API v3 for scheduled metadata publishing.",
    stack: ["n8n", "Python 3.12", "Agent-Reach CLI", "Claude 3.5 Sonnet", "ElevenLabs", "FFmpeg", "YouTube Data API v3"],
    metrics: [
      "Reduced manual media production time from 4.5 hours down to 6 minutes",
      "Cost-discipline architecture operating at $0/month using free-tier quotas",
      "Embedded QA Criticism Framework ensuring consistent 10/10 content delivery"
    ],
    liveUrl: "https://github.com/whodakingofhell",
    githubUrl: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer"
  },
  inventory: {
    title: "SMC Inventory System — Java 17 POS Core",
    badge: "Enterprise Desktop & POS Architecture",
    challenge: "Multi-register retail checkout environments frequently suffer from inventory race conditions, deadlock crashes, and inaccurate audit trails during peak sales volume.",
    solution: "Architected a 47-source-file, 10,400+ LOC POS and warehouse inventory management system using clean layered architecture (Model-Service-Repository-UI). Enforced database transaction isolation with SELECT FOR UPDATE row locking, automatic deadlock retry with exponential backoff, HikariCP connection pooling, and BCrypt password hashing.",
    stack: ["Java 17", "MySQL 8.0", "Swing + FlatLaf", "HikariCP", "jBCrypt", "JUnit 5", "Mockito", "H2 Database", "Gradle 8.14"],
    metrics: [
      "100+ automated JUnit 5 & Mockito tests covering repository and service layers",
      "Zero inventory oversells under simulated 12-register concurrent checkout stress",
      "Executable fat JAR built via Gradle Shadow Plugin for plug-and-play desktop deployment"
    ],
    liveUrl: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer",
    githubUrl: "https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer"
  },
  "ops-vault": {
    title: "AI-Ops Vault & PAIOS Knowledge Governance",
    badge: "Multi-AI Knowledge & SOP System",
    challenge: "Coordinating multiple AI coding and research assistants (Claude, GPT, Gemini, Copilot) frequently led to fragmented notes, hallucinated instructions, and lost project context.",
    solution: "Designed an Obsidian-based document management vault governed by PAIOS (Personal AI Operating System). Implemented a 13-section research database and strict inbox-to-canonical promotion workflows that require verification before any documentation is accepted as standard operating procedure.",
    stack: ["Obsidian Markdown", "PAIOS Protocol", "Multi-LLM Mesh", "Git Versioning", "Bash Automation"],
    metrics: [
      "13-domain knowledge base spanning AI, Cloud, Cybersecurity, DevOps, and Business Ops",
      "Zero-hallucination promotion gate requiring verification against official documentation",
      "Instant context injection into any AI agent session in seconds"
    ],
    liveUrl: "https://github.com/whodakingofhell",
    githubUrl: "https://github.com/whodakingofhell"
  }
};

// Agent-Reach Live Simulation Outputs
const AGENT_REACH_SIMULATIONS = {
  doctor: [
    { text: "$ agent-reach doctor --json", color: "text-white" },
    { text: "[INFO] Initializing Agent-Reach diagnostic scanner...", color: "text-[#a1a6b4]" },
    { text: "[OK] Channel: web (Jina Reader)      -> Connected (Zero API Key Required)", color: "text-[#30d158]" },
    { text: "[OK] Channel: github (GitHub CLI)    -> Connected (Authenticated via gh CLI)", color: "text-[#30d158]" },
    { text: "[OK] Channel: youtube (yt-dlp)       -> Connected (Transcript diarization ready)", color: "text-[#30d158]" },
    { text: "[OK] Channel: reddit (rdt-cli)       -> Connected (Public subreddits readable)", color: "text-[#30d158]" },
    { text: "[OK] Channel: x-twitter (syndication) -> Connected (Read-only feed active)", color: "text-[#30d158]" },
    { text: "[OK] Channel: rss-aggregator         -> Connected (14 tech/startup feeds listening)", color: "text-[#30d158]" },
    { text: "✓ Diagnostic Summary: 6/6 channels healthy. 100% zero-API-cost research online.", color: "text-[#2997ff]" }
  ],
  radar: [
    { text: "$ agent-reach search --sources=reddit,github \"hiring remote technical assistant\"", color: "text-white" },
    { text: "[INFO] Querying r/forhire, r/VirtualAssistant & GitHub discussions...", color: "text-[#a1a6b4]" },
    { text: "[MATCH 1] US SaaS Founder: \"Looking for a Tech VA to manage AnyDesk PC setup + Zendesk tickets\"", color: "text-[#30d158]" },
    { text: "          Location: 100% Remote (US EST Hours) | Budget: $20-30/hr | Skill: AnyDesk, Customer Ops", color: "text-[#d1d5db]" },
    { text: "[MATCH 2] UK E-commerce Agency: \"Need n8n workflow specialist to sync Shopify with Discord\"", color: "text-[#30d158]" },
    { text: "          Location: Remote (UK GMT) | Scope: Weekly retainer | Skill: n8n, Webhooks, APIs", color: "text-[#d1d5db]" },
    { text: "[MATCH 3] AI Startup: \"Seeking Technical Operator to draft SOPs and monitor bug reports\"", color: "text-[#30d158]" },
    { text: "          Location: Remote Global | Skill: Obsidian, Git, QA Verification, Next.js", color: "text-[#d1d5db]" },
    { text: "✓ Discovered 3 high-intent overseas hiring leads in 1.4 seconds (API Cost: $0.00).", color: "text-[#2997ff]" }
  ],
  transcribe: [
    { text: "$ agent-reach youtube https://youtube.com/watch?v=demo --extract-sop", color: "text-white" },
    { text: "[1/3] Downloading high-fidelity audio stream via yt-dlp...", color: "text-[#a1a6b4]" },
    { text: "[2/3] Extracting synchronized English captions & timestamp segments...", color: "text-[#a1a6b4]" },
    { text: "[3/3] Generating clean Standard Operating Procedure (SOP) Checklist:", color: "text-[#2997ff]" },
    { text: "      - Step 1: Initialize Cloudflare Turnstile token on client submission", color: "text-[#d1d5db]" },
    { text: "      - Step 2: Validate payload through Zod schema before DB insertion", color: "text-[#d1d5db]" },
    { text: "      - Step 3: Trigger Discord webhook with 3-attempt exponential backoff", color: "text-[#d1d5db]" },
    { text: "✓ Output saved to ./sop/deployment-guide.md (Production Ready SOP).", color: "text-[#30d158]" }
  ],
  github: [
    { text: "$ agent-reach github --repo=whodakingofhell/mark-chester-santos-portfolio", color: "text-white" },
    { text: "[INFO] Fetching repository health and deployment status...", color: "text-[#a1a6b4]" },
    { text: "[STATUS] Branch: main (Commit: 256f396) -> Clean tree", color: "text-[#30d158]" },
    { text: "[STATUS] Vercel Deploy Hook: Triggered automatically via GitHub push", color: "text-[#30d158]" },
    { text: "[AUDIT] Sensitive data scan: 0 leaks, 0 exposed keys, 0 phone numbers", color: "text-[#30d158]" },
    { text: "[AUDIT] Security headers: Strict CSP, HSTS, and X-Content-Type-Options active", color: "text-[#30d158]" },
    { text: "✓ Repository verified 10/10 production standard.", color: "text-[#2997ff]" }
  ]
};

// Toast Notification Helper
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// Clipboard Helper
function copyText(text, label) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast(label || "Copied to clipboard"))
      .catch(() => fallbackCopyText(text, label));
  } else {
    fallbackCopyText(text, label);
  }
}

function fallbackCopyText(text, label) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    showToast(label || "Copied to clipboard");
  } catch (err) {
    showToast(text);
  }
  document.body.removeChild(textarea);
}

// Switch Employer Role Lens (Hybrid / VA & Ops / AI & Full-Stack)
function setRoleLens(lensKey) {
  const data = ROLE_LENSES[lensKey] || ROLE_LENSES.hybrid;

  ["hybrid", "va", "engineer"].forEach((key) => {
    const btn = document.getElementById("lens-btn-" + key);
    if (btn) {
      if (key === lensKey) {
        btn.classList.add("active");
        btn.classList.remove("text-[#a1a6b4]");
      } else {
        btn.classList.remove("active");
        btn.classList.add("text-[#a1a6b4]");
      }
    }
  });

  const badgeEl = document.getElementById("hero-badge-text");
  const headlineEl = document.getElementById("hero-headline");
  const subEl = document.getElementById("hero-subheadline");

  if (badgeEl) badgeEl.textContent = data.badge;
  if (headlineEl) headlineEl.innerHTML = data.headline;
  if (subEl) subEl.innerHTML = data.subheadline;

  const s1v = document.getElementById("stat-1-val");
  const s1l = document.getElementById("stat-1-label");
  const s2v = document.getElementById("stat-2-val");
  const s2l = document.getElementById("stat-2-label");
  const s3v = document.getElementById("stat-3-val");
  const s3l = document.getElementById("stat-3-label");
  const s4v = document.getElementById("stat-4-val");
  const s4l = document.getElementById("stat-4-label");

  if (s1v) s1v.textContent = data.stat1Val;
  if (s1l) s1l.textContent = data.stat1Label;
  if (s2v) s2v.textContent = data.stat2Val;
  if (s2l) s2l.textContent = data.stat2Label;
  if (s3v) s3v.textContent = data.stat3Val;
  if (s3l) s3l.textContent = data.stat3Label;
  if (s4v) s4v.textContent = data.stat4Val;
  if (s4l) s4l.textContent = data.stat4Label;

  const lensNames = {
    hybrid: "Viewing: Hybrid Remote Builder & Tech VA Profile",
    va: "Viewing: Executive & Technical VA / Remote Ops Profile",
    engineer: "Viewing: AI Automation & Full-Stack Engineering Profile"
  };
  showToast(lensNames[lensKey] || "Profile updated");
}

// Switch Architecture / Automation Blueprints Tab
function switchBlueprintTab(tabKey) {
  const tabs = ["agent-reach", "sonata-api", "content-pipeline", "pos-security"];
  tabs.forEach((t) => {
    const content = document.getElementById("bp-content-" + t);
    const btn = document.getElementById("bp-tab-" + t);
    if (content && btn) {
      if (t === tabKey) {
        content.classList.remove("hidden");
        btn.classList.add("bg-[#25293a]", "text-white", "border-white/15");
        btn.classList.remove("text-[#a1a6b4]", "border-transparent");
      } else {
        content.classList.add("hidden");
        btn.classList.remove("bg-[#25293a]", "text-white", "border-white/15");
        btn.classList.add("text-[#a1a6b4]", "border-transparent");
      }
    }
  });
}

// Filter Featured Projects
function filterProjects(category) {
  const buttons = ["all", "ops", "web", "systems"];
  buttons.forEach((b) => {
    const btn = document.getElementById("btn-filter-" + b);
    if (btn) {
      if (b === category) {
        btn.classList.add("segmented-active");
        btn.classList.remove("text-[#a1a6b4]");
      } else {
        btn.classList.remove("segmented-active");
        btn.classList.add("text-[#a1a6b4]");
      }
    }
  });

  const cards = document.querySelectorAll(".project-item");
  cards.forEach((card) => {
    const cats = (card.getAttribute("data-category") || "").split(" ");
    if (category === "all" || cats.includes(category)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Live Multi-Timezone Clock (Manila + US EST + UK GMT + AU AEST)
function updateWorldClocks() {
  const now = new Date();
  const formatTime = (tz) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      }).format(now);
    } catch (e) {
      return "--:--";
    }
  };

  const phEl = document.getElementById("clock-ph");
  const usEl = document.getElementById("clock-us");
  const ukEl = document.getElementById("clock-uk");
  const auEl = document.getElementById("clock-au");

  if (phEl) phEl.textContent = formatTime("Asia/Manila");
  if (usEl) usEl.textContent = formatTime("America/New_York");
  if (ukEl) ukEl.textContent = formatTime("Europe/London");
  if (auEl) auEl.textContent = formatTime("Australia/Sydney");
}

// ============================================================================
// ROI Calculator
// ============================================================================
function calculateROI() {
  const supportHours = parseFloat(document.getElementById("calc-support-input")?.value || 15);
  const adminHours = parseFloat(document.getElementById("calc-admin-input")?.value || 10);
  const researchHours = parseFloat(document.getElementById("calc-research-input")?.value || 12);
  const hourlyRate = parseFloat(document.getElementById("calc-rate-input")?.value || 35);

  const supLabel = document.getElementById("calc-support-label");
  const admLabel = document.getElementById("calc-admin-label");
  const resLabel = document.getElementById("calc-research-label");
  const rateLabel = document.getElementById("calc-rate-label");

  if (supLabel) supLabel.textContent = supportHours + " hrs/wk";
  if (admLabel) admLabel.textContent = adminHours + " hrs/wk";
  if (resLabel) resLabel.textContent = researchHours + " hrs/wk";
  if (rateLabel) rateLabel.textContent = "$" + hourlyRate + "/hr";

  const weeklyHoursSaved = supportHours * 0.7 + adminHours * 0.8 + researchHours * 0.75;
  const monthlyHoursSaved = Math.round(weeklyHoursSaved * 4.2);
  const monthlyDollarsSaved = Math.round(monthlyHoursSaved * hourlyRate);
  const annualDollarsSaved = monthlyDollarsSaved * 12;

  const hEl = document.getElementById("calc-monthly-hours");
  const dEl = document.getElementById("calc-monthly-dollars");
  const aEl = document.getElementById("calc-annual-dollars");

  if (hEl) hEl.textContent = monthlyHoursSaved + " hrs";
  if (dEl) dEl.textContent = "$" + monthlyDollarsSaved.toLocaleString();
  if (aEl) aEl.textContent = "$" + annualDollarsSaved.toLocaleString();
}

function copyROIAuditToEmail() {
  const supportHours = document.getElementById("calc-support-input")?.value || 15;
  const adminHours = document.getElementById("calc-admin-input")?.value || 10;
  const researchHours = document.getElementById("calc-research-input")?.value || 12;
  const monthlyHours = document.getElementById("calc-monthly-hours")?.textContent || "98 hrs";
  const monthlyDollars = document.getElementById("calc-monthly-dollars")?.textContent || "$3,430";

  const subject = encodeURIComponent("Inquiry: Remote Operations & AI Workflow Audit");
  const body = encodeURIComponent(
    `Hi Mark,\n\nI reviewed your portfolio and ran the Remote Operations ROI calculator for our business:\n` +
    `- Weekly Support Tasks: ${supportHours} hrs/wk\n` +
    `- Weekly Scheduling & Admin: ${adminHours} hrs/wk\n` +
    `- Weekly Research & Content: ${researchHours} hrs/wk\n` +
    `- Estimated Hours to Save: ${monthlyHours}/month (Estimated Savings: ${monthlyDollars}/month)\n\n` +
    `Let's schedule a 15-minute intro call to discuss how you can help take these bottlenecks off our plate.\n\nBest,\n`
  );

  window.location.href = `mailto:${PORTFOLIO_CONFIG.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

// ============================================================================
// Agent-Reach Live Simulation
// ============================================================================
let simInterval = null;
function runAgentReachSim(scenarioKey) {
  const terminalScreen = document.getElementById("agent-reach-sim-screen");
  if (!terminalScreen) return;

  ["doctor", "radar", "transcribe", "github"].forEach((k) => {
    const btn = document.getElementById("sim-btn-" + k);
    if (btn) {
      if (k === scenarioKey) {
        btn.classList.add("bg-[#2997ff]", "text-white");
        btn.classList.remove("bg-[#181b26]", "text-[#a1a6b4]");
      } else {
        btn.classList.remove("bg-[#2997ff]", "text-white");
        btn.classList.add("bg-[#181b26]", "text-[#a1a6b4]");
      }
    }
  });

  const lines = AGENT_REACH_SIMULATIONS[scenarioKey] || AGENT_REACH_SIMULATIONS.doctor;
  terminalScreen.innerHTML = "";

  if (simInterval) clearInterval(simInterval);

  let i = 0;
  terminalScreen.innerHTML = `<div class="text-[#a1a6b4] mb-2 font-mono text-xs">[Executing Agent-Reach CLI pipeline...]</div>`;

  simInterval = setInterval(() => {
    if (i < lines.length) {
      const lineData = lines[i];
      const p = document.createElement("p");
      p.className = `${lineData.color} font-mono text-xs sm:text-sm leading-relaxed`;
      p.textContent = lineData.text;
      terminalScreen.appendChild(p);
      terminalScreen.scrollTop = terminalScreen.scrollHeight;
      i++;
    } else {
      clearInterval(simInterval);
      const cursor = document.createElement("div");
      cursor.className = "mt-3 flex items-center gap-1 text-xs text-[#30d158] font-mono";
      cursor.innerHTML = `<span>mark@agent-reach:~$</span> <span class="terminal-cursor"></span>`;
      terminalScreen.appendChild(cursor);
    }
  }, 160);
}

// ============================================================================
// Case Study Deep-Dive Modal
// ============================================================================
function openCaseStudy(caseKey) {
  const data = CASE_STUDIES[caseKey];
  if (!data) return;

  const modal = document.getElementById("case-study-modal");
  const titleEl = document.getElementById("cs-modal-title");
  const badgeEl = document.getElementById("cs-modal-badge");
  const challengeEl = document.getElementById("cs-modal-challenge");
  const solutionEl = document.getElementById("cs-modal-solution");
  const stackEl = document.getElementById("cs-modal-stack");
  const metricsEl = document.getElementById("cs-modal-metrics");
  const liveLink = document.getElementById("cs-modal-livelink");
  const ghLink = document.getElementById("cs-modal-ghlink");

  if (titleEl) titleEl.textContent = data.title;
  if (badgeEl) badgeEl.textContent = data.badge;
  if (challengeEl) challengeEl.textContent = data.challenge;
  if (solutionEl) solutionEl.textContent = data.solution;

  if (stackEl) {
    stackEl.innerHTML = data.stack
      .map((s) => `<span class="px-2.5 py-1 rounded-md bg-[#181b26] border border-white/10 text-xs text-[#d1d5db]">${s}</span>`)
      .join("");
  }

  if (metricsEl) {
    metricsEl.innerHTML = data.metrics
      .map((m) => `<li class="flex items-start gap-2.5 text-xs sm:text-sm text-[#f5f5f7]"><span class="text-[#30d158] font-bold">✓</span><span>${m}</span></li>`)
      .join("");
  }

  if (liveLink) liveLink.href = data.liveUrl;
  if (ghLink) ghLink.href = data.githubUrl;

  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCaseStudy() {
  const modal = document.getElementById("case-study-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ============================================================================
// ATS Clean Resume Modal & 1-Click Print
// ============================================================================
function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function printCleanResume() {
  window.print();
}

// ============================================================================
// Bento Grid Feature: Direct Quick Note to Mark (Card 2 from reference concept)
// ============================================================================
function sendBentoQuickNote() {
  const input = document.getElementById("bento-quick-input");
  const statusEl = document.getElementById("bento-quick-status");
  const text = (input?.value || "").trim();

  if (!text) {
    showToast("Please enter a short message first!");
    return;
  }

  const subject = encodeURIComponent("Quick Message from Mark Chester Santos Portfolio");
  const body = encodeURIComponent(
    `Hi Mark,\n\nI visited your portfolio and wanted to reach out regarding:\n\n"${text}"\n\nLet's connect!\n`
  );

  if (statusEl) {
    statusEl.innerHTML = `<span class="text-[#30d158] font-medium">✓ Opening email client...</span>`;
    setTimeout(() => {
      statusEl.innerHTML = "";
    }, 4000);
  }

  window.location.href = `mailto:${PORTFOLIO_CONFIG.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  showToast("Opening email composer with your note!");
}

// ============================================================================
// Bento Grid Feature: Deep Focus Flow Toggle
// ============================================================================
let focusFlowActive = true;
function toggleFocusFlow() {
  focusFlowActive = !focusFlowActive;
  const bars = document.querySelectorAll(".eq-bar");
  const stateText = document.getElementById("focus-flow-state");

  bars.forEach((b) => {
    b.style.animationPlayState = focusFlowActive ? "running" : "paused";
  });

  if (stateText) {
    stateText.textContent = focusFlowActive ? "Deep Flow: Active (Low-Latency Ops)" : "Flow Paused (Ready for Sync)";
    stateText.className = focusFlowActive ? "text-[11px] font-mono text-[#30d158]" : "text-[11px] font-mono text-[#a1a6b4]";
  }

  showToast(focusFlowActive ? "Focus Flow Mode: Active" : "Focus Flow: Paused");
}

// ============================================================================
// Direct Client Briefing & Timezone Sync
// ============================================================================
function updateClientBriefingLink() {
  const tzSelect = document.getElementById("client-tz-select")?.value || "US Eastern (EST)";
  const roleSelect = document.getElementById("client-role-select")?.value || "Full-Time Remote VA & Operations";
  const notes = document.getElementById("client-notes-input")?.value || "";

  const subject = encodeURIComponent(`Remote Opportunity: ${roleSelect} (${tzSelect})`);
  const body = encodeURIComponent(
    `Hi Mark,\n\nI'm reaching out from your portfolio regarding an overseas remote position:\n\n` +
    `• Target Role: ${roleSelect}\n` +
    `• Company / Timezone: ${tzSelect}\n` +
    `• Start Date: Immediate / Flexible\n` +
    (notes ? `• Additional Details: ${notes}\n\n` : `\n`) +
    `Let's schedule a 15-minute video interview on Zoom or Google Meet.\n\nBest,\n`
  );

  const emailBtn = document.getElementById("client-submit-email-btn");
  if (emailBtn) {
    emailBtn.href = `mailto:${PORTFOLIO_CONFIG.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }
}

function copyStructuredBriefing() {
  const tzSelect = document.getElementById("client-tz-select")?.value || "US Eastern (EST)";
  const roleSelect = document.getElementById("client-role-select")?.value || "Full-Time Remote VA & Operations";
  const notes = document.getElementById("client-notes-input")?.value || "Ready to discuss remote collaboration.";

  const text =
    `Hello Mark,\n\nWe'd like to discuss an overseas remote role:\n` +
    `Role: ${roleSelect}\n` +
    `Client Timezone: ${tzSelect}\n` +
    `Details: ${notes}\n` +
    `Contact: ${PORTFOLIO_CONFIG.CONTACT_EMAIL}`;

  copyText(text, "Structured briefing copied! You can paste it into an email or message.");
}

// ============================================================================
// Ambient Canvas Background (Subtle Interactive Light Atmosphere)
// ============================================================================
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 28;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.4 + 0.15
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(41, 151, 255, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

// Global Modal Esc Key Listener
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCaseStudy();
    closeResumeModal();
  }
});

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  initAmbientCanvas();
  updateWorldClocks();
  setInterval(updateWorldClocks, 30000);

  // Setup ROI calculator listeners
  ["calc-support-input", "calc-admin-input", "calc-research-input", "calc-rate-input"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", calculateROI);
  });
  calculateROI();

  // Run initial Agent-Reach simulation
  runAgentReachSim("doctor");

  // Setup client brief sync
  ["client-tz-select", "client-role-select", "client-notes-input"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", updateClientBriefingLink);
  });
  updateClientBriefingLink();
});
