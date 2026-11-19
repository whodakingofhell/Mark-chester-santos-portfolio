// Vercel Serverless Function: Mae — Technical & Career AI Assistant
// Uses GEMINI_API_KEY when configured on Vercel, with a reliable built-in technical & career reasoning fallback.

const MAE_SYSTEM_CONTEXT = `You are Mae, the personal technical and career AI assistant inside Mark Chester R. Santos's portfolio website.
Be direct, accurate, practical, and free of AI clichés (follow no-ai-slop rules: never use "delve", "unlock", "game-changer", "seamless", "It's not just X, it's Y").

Verified Facts about Mark Chester R. Santos:
- Location: Muntinlupa, Metro Manila, Philippines 1772 (UTC+8, available for local PH + US/UK/AU remote shifts)
- Email: chesrakzxc@gmail.com | Phone: +63995-814-0991 | GitHub: https://github.com/whodakingofhell
- Education: BS in Information Technology, South Mansfield College (July 2017 – August 2023)
- Certifications: Python Programming (Wesleyan University / Coursera, Apr 2023), Security Awareness Training (ISC2 / Coursera, Aug 2023)
- Experience:
  1. Customer Service Representative at IBEX Global Solutions INC (Walmart account), Oct 2025 – Jun 2026 (phone/chat/email technical & account support, multi-backend troubleshooting, top CSAT/AHT/QA)
  2. Travel Associate at IGT Solutions (Atain), Mar 2025 – Sep 2025 (end-to-end domestic/international travel bookings, airline/hotel discrepancy resolution)
- Production Projects:
  1. Philippine Skyland (philippine-skyland.vercel.app) — Next.js 16, React 18, TypeScript, Prisma, PostgreSQL 16, 13 models, 14+ endpoints, 11-layer security stack, EN/FIL/ZH, Playwright E2E
  2. Sonata / LicenseDesk — Next.js 15, React 19, Tailwind CSS 4, Zod, Discord webhook retry (3 attempts), Resend, Sentry, Cloudflare Turnstile, Supabase
  3. AI Appointment Assistant (appointment-backend-one.vercel.app) — Vercel Serverless API (book-appointment, list-appointments, health), Supabase RLS, 5 bookings/IP/hr rate limiting, Discord alerts
  4. AI Engineering OS & 14-Stage YouTube Content Pipeline — n8n, Python, multi-LLM orchestration, $0/mo free-tier architecture, QA Criticism Framework
  5. SMC Inventory System — Java 17, 47 source files, 10,400+ LOC, MySQL 8.0, SELECT FOR UPDATE locking, HikariCP, BCrypt, 100+ JUnit 5/Mockito tests
  6. AI-Ops Vault & Autonomous File Organizer — Obsidian PAIOS governance across 6 AI tools + SHA-256 deduplication catalog

You help with:
1. Technical troubleshooting (Next.js, Vercel deployments, Git, Supabase RLS, n8n webhooks, Python, Java, CSS/Tailwind, FFmpeg).
2. Job hunting, ATS resume tailoring, cover letters, and interview prep using the Jobs Near You studio.
3. Auditing text for AI slop patterns (petergyang/no-ai-slop).
4. Answering recruiter or visitor questions about Mark's verified work.`;

function buildFallbackReply(message) {
  const q = String(message || "").toLowerCase();

  if (/(slop|audit|check text|rewrite|clich)/.test(q)) {
    const patterns = [
      ["delve", "replace with 'examine' or 'check'"],
      ["unlock", "replace with a specific action"],
      ["elevate", "replace with a concrete improvement"],
      ["seamless", "describe how the steps actually connect"],
      ["game-changer", "state the measurable result instead"],
      ["cutting-edge", "name the actual tool or version"],
      ["it's not just", "cut the binary contrast and state the fact directly"],
      ["here's the thing", "delete the throat-clearing opener"],
      ["i am writing to express", "open directly with the problem you solve for the team"],
      ["passionate self-starter", "show a shipped project or verified metric instead"]
    ];
    const hits = patterns.filter(([p]) => q.includes(p));
    if (hits.length > 0) {
      return `No-AI-Slop Audit found ${hits.length} pattern(s):\n` +
        hits.map(([p, fix]) => `• "${p}" — ${fix}`).join("\n") +
        `\n\nPaste your full paragraph and I will give you a cleaner rewrite.`;
    }
    return "Paste any cover letter, bio, or headline and I will scan it against the 20+ petergyang/no-ai-slop patterns (buzzwords, binary contrasts, throat-clearing openers, corporate clichés) and tell you what to cut.";
  }

  if (/(job|hire|hiring|near|location|resume|cv|cover letter|apply)/.test(q)) {
    return "Open the **Jobs Near You** workspace (top bar or hero button) to:\n1. Detect your nearest city or pick a target region (Muntinlupa/Alabang, BGC/Makati, or Global Remote).\n2. Pull live aligned hiring posts and jump straight to the company career page.\n3. Generate a tailored 10/10 ATS Resume, Cover Letter, and Requirements Checklist for any job—and click **Change Option** anytime to cycle through 4 different formats or strategic angles.";
  }

  if (/(vercel|deploy|404|500|cors|env|build|error|bug|debug)/.test(q)) {
    return "Quick Vercel & Web Debug Checklist:\n• **API 500 / CORS error:** Check `vercel logs` and confirm `api/*.js` exports `module.exports = async function handler(req, res)` with `Access-Control-Allow-Origin`.\n• **404 on static assets:** Verify case-sensitive filenames on Linux/Vercel (e.g., `styles.css` vs `Styles.css`).\n• **Env vars missing:** Add keys in Vercel Dashboard → Project Settings → Environment Variables, then redeploy (`npx vercel --prod`).\nTell me the exact error line or stack trace and I will pinpoint the fix.";
  }

  if (/(supabase|rls|sql|postgres|prisma|mysql|database)/.test(q)) {
    return "Database & Supabase Troubleshooting:\n• **Empty query result in Supabase:** Check if Row-Level Security (RLS) is enabled without a matching `SELECT` policy for `anon` or `authenticated`.\n• **Connection pool exhaustion:** Use Transaction Pooler port `6543` (`?pgbouncer=true`) for Prisma/Serverless functions.\n• **MySQL deadlocks:** Wrap writes in transactions with `SELECT ... FOR UPDATE` in deterministic ID order and exponential retry (just like Mark's SMC Inventory System).";
  }

  if (/(n8n|webhook|discord|automation|python|ffmpeg)/.test(q)) {
    return "Automation & Pipeline Help:\n• **Webhook drops:** Add 3-attempt exponential backoff retry + payload deduplication hash.\n• **Discord 429 rate limit:** Respect the `Retry-After` header and batch embeds.\n• **FFmpeg compatibility:** Always encode web MP4s with `-c:v libx264 -pix_fmt yuv420p -movflags +faststart` so Safari, Chrome, and mobile devices play cleanly.";
  }

  if (/(who|mark|experience|skill|project|contact|email|social|github)/.test(q)) {
    return "Mark Chester R. Santos is an IT graduate (BSIT, South Mansfield College) based in Muntinlupa, Philippines with 5+ years of programming experience and enterprise customer/booking operations at **Walmart (IBEX Global)** and **IGT Solutions**. Key shipped systems include **Philippine Skyland** (Next.js 16 + PostgreSQL + 11-layer security), **Sonata LicenseDesk** (Next.js 15 + Zod + Discord/Resend/Sentry), **AI Appointment Assistant**, **AI Engineering OS** (14-stage n8n/Python pipeline), and **SMC Inventory System** (Java 17, 10,400+ LOC). Contact: `chesrakzxc@gmail.com` or `github.com/whodakingofhell`.";
  }

  return "Hi, I'm **Mae** — Mark's built-in technical and career assistant. I can help you:\n• Troubleshoot code, Vercel deploys, Supabase RLS, n8n webhooks, or FFmpeg\n• Run a **Jobs Near You** search and tailor a 10/10 ATS resume & cover letter\n• Audit any draft for **AI slop** patterns\n• Answer questions about Mark's verified projects and availability.\nWhat are you working on right now?";
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const message = String(body.message || "").trim().slice(0, 3000);
    const history = Array.isArray(body.history) ? body.history.slice(-6) : [];

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        const contents = history.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: String(m.text || "").slice(0, 1500) }]
        }));
        contents.push({ role: "user", parts: [{ text: message }] });

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              systemInstruction: { parts: [{ text: MAE_SYSTEM_CONTEXT }] },
              contents,
              generationConfig: { temperature: 0.4, maxOutputTokens: 600 }
            })
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) {
            return res.status(200).json({ reply, engine: "gemini-live" });
          }
        }
      } catch {
        // Fall through cleanly to built-in Mae engine
      }
    }

    return res.status(200).json({
      reply: buildFallbackReply(message),
      engine: "mae-local-engine"
    });
  } catch (err) {
    return res.status(500).json({ error: "Mae encountered a request parsing error." });
  }
};
