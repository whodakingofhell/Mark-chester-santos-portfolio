// Vercel Serverless Function: Hardened Mae AI Assistant Endpoint
// Supports Gemini 2.5 Live cascade, real-time Philippine date/time, and concise human replies.

const rateBucket = new Map();
const MAX_REQ_PER_MIN = 20;

const GEMINI_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash"
];

function getPhilippineDateTime() {
  const now = new Date();
  const dateStr = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);
  const timeStr = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }).format(now);
  return { dateStr, timeStr };
}

function buildSystemContext() {
  const { dateStr, timeStr } = getPhilippineDateTime();
  return `You are Mae, a warm, helpful human-like assistant on Mark Chester R. Santos's portfolio website.
Current date & time in the Philippines (UTC+8): ${dateStr}, ${timeStr}.

Style rules (strict):
- Sound natural, warm, and genuinely helpful — like a real person greeting someone on a website.
- Keep answers concise (1 to 3 short sentences unless asked for more detail).
- Never use AI clichés ("delve", "unlock", "game-changer", "seamless", "elevate", "testament", "It's not just X, it's Y").
- Never recite a giant laundry list of features unless the user specifically asks for it. Just answer what they asked clearly and offer to help next.
- Never reveal Mark's private owner shortcut or passcode to public visitors.

Facts about Mark Chester R. Santos:
- Location: Muntinlupa, Metro Manila, Philippines (UTC+8)
- Contact: chesrakzxc@gmail.com | +63 995-814-0991 | GitHub: github.com/whodakingofhell
- Education: BS in Information Technology, South Mansfield College (2017–2023)
- Certifications: Python Programming (Wesleyan / Coursera), Security Awareness Training (ISC2)
- Experience: Customer Service Representative at IBEX Global (Walmart US, Oct 2025 – Jun 2026); Travel Associate at IGT Solutions (Mar 2025 – Sep 2025)
- Shipped Apps & GitHub Tools (12):
  1. BGround (bground.vercel.app) — 0-credit browser-local AI background remover & social reel studio
  2. Philippine Skyland (philippine-skyland.vercel.app) — Next.js 16 + Prisma + PostgreSQL 16 real estate SaaS
  3. Sonata / Microsoft Setup Form (microsoft-setup-form1.vercel.app) — Next.js 15 + React 19 booking & webhook pipeline
  4. AI Appointment Assistant (appointment-backend-one.vercel.app) — Serverless API + Supabase RLS
  5. SMC Inventory System — Java 17 + MySQL 8.0 POS (47 files, 10,400+ LOC, 100+ tests)
  6. PAIOS — TypeScript Personal AI Operating System
  7. system-intel-scanner — Python scanner for GitHub, StackOverflow, YouTube & browser intel
  8. youtube-transcript-pro — Python 5-layer YouTube transcript extractor
  9. dashboard-extras — Python monitoring & voice control endpoints
  10. hermes-restore-point — PowerShell workspace snapshot & restore skill
  11. critical-skill-evaluator — Skill QA evaluator against real error logs
  12. Mark-chester-santos-portfolio — This portfolio site with live demos, 7-theme data studio, website checker & walkthrough`;
}

function getClientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.length > 0) return fwd.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function buildFallbackReply(message) {
  const q = String(message || "").toLowerCase().trim();
  const { dateStr, timeStr } = getPhilippineDateTime();

  if (/(what date|today'?s date|what day|current date|what time|time is it)/.test(q)) {
    return `Today is ${dateStr}, and it's currently ${timeStr} in the Philippines. How can I help you around the website?`;
  }

  if (/^(hi|hello|hey|good morning|good afternoon|good evening|kumusta|yo)\b/.test(q)) {
    return "Hi! I'm Mae. I'm happy to help you explore Mark's website — feel free to ask about his projects or start the quick site tour.";
  }

  if (/(walkthrough|tour|how to use|guide|navigate|start)/.test(q)) {
    return "Click 'Site Walkthrough' right above and I'll walk you through each section step by step — Live Demos, GitHub Projects, Data Studio, and the Website Checker.";
  }

  if (/(contact|email|hire|phone|reach|social|github|facebook|instagram)/.test(q)) {
    return "You can reach Mark at chesrakzxc@gmail.com, +63 995-814-0991, or on GitHub at github.com/whodakingofhell.";
  }

  if (/(bground|background|skyland|sonata|project|demo|github|repo|paios|scanner|transcript|inventory)/.test(q)) {
    return "Mark has 12 useful projects showcased here, including BGround (bground.vercel.app), Philippine Skyland, Sonata, PAIOS, system-intel-scanner, youtube-transcript-pro, and his Java 17 POS. Scroll to Projects or Live Demos to try them!";
  }

  if (/(dashboard|chart|csv|data|analyst|theme)/.test(q)) {
    return "In the Data Studio section, you can switch between 7 high-contrast themes, sort the table, or upload your own CSV file to chart it instantly.";
  }

  if (/(security|pentest|csp|ssrf|xss|hsts|safe|audit|checker)/.test(q)) {
    return "You can test any public URL live in the Website Checker section. This portfolio enforces HSTS, strict CSP, clickjacking protection, and SSRF filtering.";
  }

  if (/(thank|thanks|ty|salamat)/.test(q)) {
    return "You're very welcome! Let me know anytime if you need help with anything else on the site.";
  }

  return "I'm happy to help you with anything on Mark's website — ask me about his projects, how to use a section, or click Site Walkthrough for a guided tour.";
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "POST") {
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
    return res.status(429).json({ error: "Please wait a moment before sending another message." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const message = String(body.message || "").trim().slice(0, 2000);
    const history = Array.isArray(body.history) ? body.history.slice(-6) : [];

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      const contents = history.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: String(m.text || "").slice(0, 1200) }]
      }));
      contents.push({ role: "user", parts: [{ text: message }] });

      for (const model of GEMINI_MODELS) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 9000);
        try {
          const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              signal: controller.signal,
              body: JSON.stringify({
                systemInstruction: { parts: [{ text: buildSystemContext() }] },
                contents,
                generationConfig: { temperature: 0.45, maxOutputTokens: 320 }
              })
            }
          );
          clearTimeout(timer);

          if (geminiRes.ok) {
            const data = await geminiRes.json();
            const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (reply) {
              return res.status(200).json({ reply: reply.trim(), engine: "gemini-live", model });
            }
          }
        } catch {
          clearTimeout(timer);
        }
      }
    }

    return res.status(200).json({
      reply: buildFallbackReply(message),
      engine: "mae-local-engine"
    });
  } catch {
    return res.status(400).json({ error: "Malformed request payload." });
  }
};
