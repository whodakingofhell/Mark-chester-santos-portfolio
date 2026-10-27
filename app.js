// ============================================================================
// Mark Chester R. Santos — Interactive Portfolio Controller
// Zero AI Slop • Privacy Hardened • Remote Employer Conversion Focused
// ============================================================================

const PORTFOLIO_CONFIG = {
  // Paste your Loom, YouTube embed, or direct .mp4 link here when ready!
  // Example: "https://www.loom.com/embed/YOUR_VIDEO_ID" or "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  INTRO_VIDEO_URL: "",
  CONTACT_EMAIL: "chesrakzxc@gmail.com"
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

// Interactive Video Pitch Chapters (Used before & alongside recorded video)
const VIDEO_CHAPTERS = {
  1: {
    duration: "0:00 – 0:20",
    title: "1. Who I Am & Why Overseas Teams Trust Me",
    summary:
      "\"Hi, I'm Mark Chester Santos based in Metro Manila. Unlike traditional developers who only write code in isolation—or traditional VAs who get stuck when technical tools break—I bridge both worlds. I've supported enterprise customers for Walmart (IBEX Global) and international travel clients at IGT Solutions, while holding a BS in Information Technology and 5+ years of building real software.\"",
    takeaways: [
      "Clear, empathetic English communication across voice, live chat, and email",
      "Battle-tested under strict SLA, Average Handle Time (AHT), and CSAT metrics",
      "Fully equipped home office ready for US, UK, Australian, or APAC shifts"
    ]
  },
  2: {
    duration: "0:20 – 0:40",
    title: "2. What I Take Off Your Plate in Week 1",
    summary:
      "\"On Day 1, I can step straight into your customer support queues, appointment bookings, CRM updates, technical onboarding, or multi-platform market research. Then, instead of doing repetitive tasks manually forever, I use tools like n8n, Python, and Agent-Reach to automate data collection, Discord/Slack alerts, and content pipelines at $0 extra software cost.\"",
    takeaways: [
      "Day-1 execution: Customer tickets, travel/service scheduling, remote PC support",
      "Agent-Reach integration: Zero-API-fee research across GitHub, Reddit, YouTube & Web",
      "Turns 4-hour manual admin or content workflows into 5-minute automated pipelines"
    ]
  },
  3: {
    duration: "0:40 – 1:00",
    title: "3. Live Proof: 5+ Deployed Systems You Can Test Today",
    summary:
      "\"Everything on my resume is backed by live, verifiable systems: Sonata (a Next.js 15 Microsoft licensing & booking platform), an AI Appointment Assistant API with rate-limiting and Discord alerts, Philippine Skyland (a real estate SaaS with 11 security layers), a 10,400-line Java 17 POS system, and my open-source AI Engineering OS. Let's hop on a quick call and see how I can help your team immediately.\"",
    takeaways: [
      "Live Vercel deployments & public GitHub repositories ready for inspection",
      "Built with enterprise security (Row-Level Security, Zod validation, Turnstile, RBAC)",
      "Available for immediate full-time or contract remote onboarding"
    ]
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

// Switch Video Introduction Chapter
function selectVideoChapter(chapterNum) {
  const chapter = VIDEO_CHAPTERS[chapterNum];
  if (!chapter) return;

  [1, 2, 3].forEach((n) => {
    const btn = document.getElementById("chapter-btn-" + n);
    if (btn) {
      if (n === chapterNum) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    }
  });

  const durationEl = document.getElementById("video-chapter-duration");
  const titleEl = document.getElementById("video-chapter-title");
  const summaryEl = document.getElementById("video-chapter-summary");
  const listEl = document.getElementById("video-chapter-list");

  if (durationEl) durationEl.textContent = chapter.duration;
  if (titleEl) titleEl.textContent = chapter.title;
  if (summaryEl) summaryEl.textContent = chapter.summary;
  if (listEl) {
    listEl.innerHTML = chapter.takeaways
      .map(
        (item) =>
          `<li class="flex items-start gap-2.5 text-xs sm:text-sm text-[#d1d5db]">
            <span class="text-[#30d158] font-bold mt-0.5">✓</span>
            <span>${item}</span>
          </li>`
      )
      .join("");
  }
}

// Initialize Video Section (Automatically embeds video if INTRO_VIDEO_URL is set)
function initVideoSection() {
  const videoContainer = document.getElementById("video-embed-container");
  const pitchStage = document.getElementById("video-pitch-stage");
  if (!videoContainer || !pitchStage) return;

  const url = (PORTFOLIO_CONFIG.INTRO_VIDEO_URL || "").trim();
  if (url.length > 0) {
    pitchStage.classList.add("hidden");
    videoContainer.classList.remove("hidden");
    if (url.endsWith(".mp4") || url.endsWith(".webm")) {
      videoContainer.innerHTML = `
        <video controls class="w-full aspect-video rounded-2xl bg-black border border-white/10 shadow-2xl">
          <source src="${url}" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>`;
    } else {
      videoContainer.innerHTML = `
        <iframe
          src="${url}"
          title="Mark Chester Santos — Video Introduction"
          class="w-full aspect-video rounded-2xl bg-black border border-white/10 shadow-2xl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>`;
    }
  }
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

document.addEventListener("DOMContentLoaded", () => {
  initVideoSection();
  selectVideoChapter(1);
  updateWorldClocks();
  setInterval(updateWorldClocks, 30000);
});
