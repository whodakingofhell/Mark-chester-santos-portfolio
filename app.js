// ============================================================================
// Mark Chester Santos Portfolio — Interactive Controller
// High-Conversion Personal Portfolio • Zero AI Slop • 100% Privacy-Protected
// ============================================================================

const PORTFOLIO_CONFIG = {
  CONTACT_EMAIL: "chesrakzxc@gmail.com",
  SITE_NAME: "Mark Chester Santos Portfolio"
};

// Role Lens Data — Tailors Hero & Highlights to Employer's Exact Need
const ROLE_LENSES = {
  hybrid: {
    badge: "Available for Immediate Full-Time / Contract Remote Work • US/UK Shift Ready",
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
    stat4Label: "Zero-Fee Agent-Reach & Free Tier"
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
  "humble-vfx": {
    title: "Kendrick Lamar 'HUMBLE.' — Photorealistic Facial Synthesis Video Graphic",
    badge: "Neural VFX & Computer Graphics (Example Graphic)",
    challenge: "Traditional face replacement suffers from obvious flaws: floating hoodie collars, blurred dental shapes during vocal choruses, muddy AI skin textures lacking 35mm film grain, and noticeable edge jitter when music plays.",
    solution: "Engineered a production-grade 4:5 vertical neural VFX video graphic. Extracted Mark Chester's inner facial features via ArcFace w600k and aligned with 5-point similarity affine transforms onto Kendrick Lamar's head using Hyperswap 1B. De-bearded the jawline and mustache, restored high-definition human skin pores, iris reflections, and crisp tooth enamel geometry with GFPGAN 1.4 (512px), matched Kodak Vision3 500T 35mm film grain, and stabilized 355 frames using bidirectional Gaussian landmark tracking.",
    stack: ["Hyperswap 1B (ONNX)", "GFPGAN 1.4 (512px)", "ArcFace w600k", "DFL XSeg Occlusion", "BiSeNet ResNet-34", "Python 3.11", "FFmpeg", "OpenCV"],
    metrics: [
      "0% hoodie bleed or floating collars (Kendrick's crewneck t-shirt and crowd remain 100% untouched original pixels)",
      "512px human pore and tooth enamel restoration eliminating artificial CGI smoothing",
      "Exact 355-frame master synchronization at 24fps with zero frame-to-frame jitter"
    ],
    liveUrl: "#video-vfx",
    githubUrl: "https://github.com/whodakingofhell"
  },
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

// Switch Employer Role Lens with Smooth Fluid Cross-Fade
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

  const heroHeadline = document.getElementById("hero-headline");
  const heroSubheadline = document.getElementById("hero-subheadline");
  const heroBadge = document.getElementById("hero-badge-text");

  // Animate out
  [heroHeadline, heroSubheadline, heroBadge].forEach((el) => {
    if (el) el.classList.add("fade-transition", "is-fading");
  });

  setTimeout(() => {
    if (heroBadge) heroBadge.textContent = data.badge;
    if (heroHeadline) heroHeadline.innerHTML = data.headline;
    if (heroSubheadline) heroSubheadline.innerHTML = data.subheadline;

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

    // Animate in
    [heroHeadline, heroSubheadline, heroBadge].forEach((el) => {
      if (el) el.classList.remove("is-fading");
    });
  }, 140);

  const lensNames = {
    hybrid: "Viewing: Hybrid Remote Builder & Tech VA Profile",
    va: "Viewing: Executive & Technical VA / Remote Ops Profile",
    engineer: "Viewing: AI Automation & Full-Stack Engineering Profile"
  };
  showToast(lensNames[lensKey] || "Profile updated");
}

// Switch Skills in Action / Problem-Solving Playbook Tab with Smooth Fade
function switchPlaybookTab(tabKey) {
  const tabs = ["support", "logistics", "automation", "security"];
  tabs.forEach((t) => {
    const content = document.getElementById("playbook-content-" + t);
    const btn = document.getElementById("playbook-tab-" + t);
    if (content && btn) {
      if (t === tabKey) {
        content.classList.remove("hidden");
        content.classList.add("fade-transition", "is-fading");
        setTimeout(() => content.classList.remove("is-fading"), 30);
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

// Filter Featured Projects with Smooth Staggered Animation
function filterProjects(category) {
  const buttons = ["all", "vfx", "ops", "web", "systems"];
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
  cards.forEach((card, index) => {
    const cats = (card.getAttribute("data-category") || "").split(" ");
    const matches = (category === "all" || cats.includes(category));
    
    if (matches) {
      card.classList.remove("is-hidden");
      card.style.display = "flex";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";
      }, index * 30);
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(8px) scale(0.96)";
      setTimeout(() => {
        if (!matches) {
          card.classList.add("is-hidden");
          card.style.display = "none";
        }
      }, 200);
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

// Case Study Deep-Dive Modal
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

// ATS Clean Resume Modal & 1-Click Print
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

// Share Portfolio Link Helper
function sharePortfolio() {
  const url = "https://mark-chester-santos-portfolio.vercel.app/";
  if (navigator.share) {
    navigator
      .share({
        title: "Mark Chester Santos Portfolio",
        text: "Remote Technical Virtual Assistant, AI Automation Specialist & Full-Stack Developer",
        url: url
      })
      .catch(() => copyText(url, "Portfolio link copied to clipboard!"));
  } else {
    copyText(url, "Portfolio link copied to clipboard!");
  }
}

// Bento Grid Feature: Direct Quick Note to Mark
function sendBentoQuickNote() {
  const input = document.getElementById("bento-quick-input");
  const statusEl = document.getElementById("bento-quick-status");
  const text = (input?.value || "").trim();

  if (!text) {
    showToast("Please enter a short message first!");
    return;
  }

  const subject = encodeURIComponent("Quick Note from Mark Chester Santos Portfolio");
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

// Direct Client Briefing & Timezone Sync
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

  const previewEl = document.getElementById("briefing-live-preview");
  if (previewEl) {
    previewEl.innerHTML = `<strong>Role:</strong> ${roleSelect} • <strong>TZ:</strong> ${tzSelect} • <strong>Notes:</strong> ${notes ? notes : "Direct collaboration inquiry"} • <strong>Direct:</strong> ${PORTFOLIO_CONFIG.CONTACT_EMAIL}`;
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
// Interactive Neural VFX Video Player Controller
// ============================================================================
let vfxVideo = null;
let vfxPlayOverlay = null;
let vfxCenterIcon = null;
let vfxBottomIcon = null;
let vfxSeekBar = null;
let vfxTimeDisplay = null;
let vfxMuteBadge = null;
let vfxMuteIcon = null;
let vfxMuteLabel = null;

function initVfxVideoPlayer() {
  vfxVideo = document.getElementById("vfx-video-player");
  vfxPlayOverlay = document.getElementById("vfx-play-overlay");
  vfxCenterIcon = document.getElementById("vfx-center-play-icon");
  vfxBottomIcon = document.getElementById("vfx-bottom-play-icon");
  vfxSeekBar = document.getElementById("vfx-seek-bar");
  vfxTimeDisplay = document.getElementById("vfx-time-display");
  vfxMuteBadge = document.getElementById("vfx-mute-badge");
  vfxMuteIcon = document.getElementById("vfx-mute-icon");
  vfxMuteLabel = document.getElementById("vfx-mute-label");

  if (!vfxVideo) return;

  vfxVideo.addEventListener("timeupdate", () => {
    if (!vfxVideo.duration) return;
    const pct = (vfxVideo.currentTime / vfxVideo.duration) * 100;
    if (vfxSeekBar) vfxSeekBar.value = pct;
    if (vfxTimeDisplay) {
      const cur = formatVideoTime(vfxVideo.currentTime);
      const dur = formatVideoTime(vfxVideo.duration);
      vfxTimeDisplay.textContent = `${cur} / ${dur}`;
    }
  });

  vfxVideo.addEventListener("play", () => {
    if (vfxPlayOverlay) {
      vfxPlayOverlay.style.opacity = "0";
      vfxPlayOverlay.style.pointerEvents = "none";
    }
    updatePlayIcons(true);
  });

  vfxVideo.addEventListener("pause", () => {
    if (vfxPlayOverlay) {
      vfxPlayOverlay.style.opacity = "1";
      vfxPlayOverlay.style.pointerEvents = "auto";
    }
    updatePlayIcons(false);
  });

  vfxVideo.addEventListener("ended", () => {
    updatePlayIcons(false);
  });
}

function formatVideoTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function updatePlayIcons(isPlaying) {
  const playPath = "M8 5v14l11-7z";
  const pausePath = "M6 19h4V5H6v14zm8-14v14h4V5h-4z";
  const path = isPlaying ? pausePath : playPath;
  if (vfxBottomIcon) vfxBottomIcon.innerHTML = `<path d="${path}" />`;
  if (vfxCenterIcon) vfxCenterIcon.innerHTML = `<path d="${path}" />`;
}

function toggleVfxPlay() {
  if (!vfxVideo) return;
  if (vfxVideo.paused) {
    vfxVideo.play().catch(() => {});
  } else {
    vfxVideo.pause();
  }
}

function toggleVfxMute(event) {
  if (event) event.stopPropagation();
  if (!vfxVideo) return;
  vfxVideo.muted = !vfxVideo.muted;
  if (vfxMuteIcon) vfxMuteIcon.textContent = vfxVideo.muted ? "🔇" : "🔊";
  if (vfxMuteLabel) vfxMuteLabel.textContent = vfxVideo.muted ? "Unmute" : "Mute";
  showToast(vfxVideo.muted ? "Audio Muted" : "Master Audio Enabled 🎵");
}

function onVfxSeek(val) {
  if (!vfxVideo || !vfxVideo.duration) return;
  vfxVideo.currentTime = (val / 100) * vfxVideo.duration;
}

function restartVfxVideo() {
  if (!vfxVideo) return;
  vfxVideo.currentTime = 0;
  vfxVideo.play().catch(() => {});
}

function toggleVfxFullscreen() {
  if (!vfxVideo) return;
  if (vfxVideo.requestFullscreen) {
    vfxVideo.requestFullscreen();
  } else if (vfxVideo.webkitRequestFullscreen) {
    vfxVideo.webkitRequestFullscreen();
  }
}

// Switch VFX Tab
function switchVfxTab(tabName) {
  const tabs = ["comparison", "architecture", "breakdown"];
  tabs.forEach((t) => {
    const pane = document.getElementById("vfx-tab-" + t);
    const btn = document.getElementById("vfx-tab-btn-" + t);
    if (pane && btn) {
      if (t === tabName) {
        pane.classList.remove("hidden");
        btn.classList.add("active");
        btn.classList.remove("text-[#a1a6b4]");
      } else {
        pane.classList.add("hidden");
        btn.classList.remove("active");
        btn.classList.add("text-[#a1a6b4]");
      }
    }
  });
}

// Image Lightbox Modal
function openImageModal(imgSrc, title) {
  const modal = document.getElementById("image-lightbox-modal");
  const imgEl = document.getElementById("image-modal-img");
  const titleEl = document.getElementById("image-modal-title");
  if (!modal || !imgEl) return;
  imgEl.src = imgSrc;
  if (titleEl) titleEl.textContent = title || "High-Resolution Image Inspection";
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  const modal = document.getElementById("image-lightbox-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Mouse-following Spotlight Glow on Bento Cards (Throttled via RAF)
function initSpotlightGlow() {
  const cards = document.querySelectorAll(".bento-card");
  if (!cards.length) return;

  let mouseX = -9999;
  let mouseY = -9999;
  let isTicking = false;

  window.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isTicking) {
        window.requestAnimationFrame(() => {
          cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = mouseX - rect.left;
            const y = mouseY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          });
          isTicking = false;
        });
        isTicking = true;
      }
    },
    { passive: true }
  );
}

// Reading Progress Bar
function initReadingProgressBar() {
  const bar = document.getElementById("reading-progress-bar");
  if (!bar) return;

  window.addEventListener(
    "scroll",
    () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = `${progress}%`;
    },
    { passive: true }
  );
}

// Reveal on Scroll with IntersectionObserver
function initRevealOnScroll() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

// Global Modal Esc Key Listener
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCaseStudy();
    closeResumeModal();
    closeImageModal();
  }
});

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js-ready");
  updateWorldClocks();
  setInterval(updateWorldClocks, 30000);

  // Setup client brief sync
  ["client-tz-select", "client-role-select", "client-notes-input"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", updateClientBriefingLink);
  });
  updateClientBriefingLink();

  // Initialize interactive features
  initVfxVideoPlayer();
  initSpotlightGlow();
  initReadingProgressBar();
  initRevealOnScroll();
});
