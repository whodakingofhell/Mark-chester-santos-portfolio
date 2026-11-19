// Vercel Serverless Function: Hardened Mae AI Assistant Endpoint
// Supports voice-friendly responses, rate limiting, and Gemini Live when GEMINI_API_KEY is configured.

const rateBucket = new Map();
const MAX_REQ_PER_MIN = 20;

const MAE_SYSTEM_CONTEXT = `You are Mae, Mark Chester R. Santos's interactive AI assistant on his portfolio website.
Keep replies clear, warm, concise, and free of AI clichés (never use "delve", "unlock", "game-changer", "seamless", or "It's not just X, it's Y").

Verified Facts about Mark Chester R. Santos:
- Location: Muntinlupa, Metro Manila, Philippines 1772 (UTC+8, available for PH local & US/UK/AU remote shifts)
- Email: chesrakzxc@gmail.com | Phone: +63995-814-0991 | GitHub: https://github.com/whodakingofhell
- Education: BS in Information Technology, South Mansfield College (2017–2023)
- Certifications: Python Programming (Wesleyan / Coursera, 2023), Security Awareness Training (ISC2 / Coursera, 2023)
- Experience:
  1. Customer Service Representative at IBEX Global Solutions (Walmart US account), Oct 2025 – Jun 2026
  2. Travel Associate at IGT Solutions (Atain), Mar 2025 – Sep 2025
- Shipped Projects & Live Demos:
  1. BGround (bground.vercel.app) — Browser-local 0-credit AI background remover, studio shadows, color grades, and 1-30s social reels
  2. Philippine Skyland (philippine-skyland.vercel.app) — Next.js 16 + Prisma + PostgreSQL 16 real estate SaaS with 11-layer security
  3. Sonata / Microsoft Setup Form (microsoft-setup-form1.vercel.app) — Next.js 15 + React 19 + Zod + 3-attempt Discord webhook retry
  4. AI Appointment Assistant (appointment-backend-one.vercel.app) — Vercel Serverless API + Supabase RLS + rate limiting
  5. SMC Inventory System — Java 17 + MySQL 8.0 POS, 47 files, 10,400+ LOC, 100+ JUnit 5/Mockito tests
  6. PAIOS, system-intel-scanner, youtube-transcript-pro, dashboard-extras, AI Engineering OS (14-stage n8n/Python pipeline)`;

function getClientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.length > 0) return fwd.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function buildFallbackReply(message) {
  const q = String(message || "").toLowerCase();

  if (/(slop|audit|check text|rewrite|clich)/.test(q)) {
    const patterns = [
      ["delve", "replace with 'examine' or 'review'"],
      ["unlock", "name the exact capability instead"],
      ["seamless", "explain how the steps connect"],
      ["game-changer", "state the measurable result"],
      ["cutting-edge", "name the actual tool or version"],
      ["it's not just", "cut the binary contrast"],
      ["i am writing to express", "lead with the problem you solve"]
    ];
    const hits = patterns.filter(([p]) => q.includes(p));
    if (hits.length > 0) {
      return `No-AI-Slop Audit found ${hits.length} pattern(s): ` +
        hits.map(([p, fix]) => `"${p}" (${fix})`).join("; ") + ".";
    }
    return "Paste any paragraph, cover letter, or headline and I will scan it against the 20+ no-ai-slop patterns.";
  }

  if (/(bground|background|skyland|sonata|project|demo|github|repo)/.test(q)) {
    return "Mark's latest live apps include BGround (bground.vercel.app — 0-credit browser-local background removal and 1 to 30s social reels), Philippine Skyland (philippine-skyland.vercel.app), Sonata Microsoft Setup Form (microsoft-setup-form1.vercel.app), AI Appointment Assistant (appointment-backend-one.vercel.app), plus open-source tools like PAIOS, system-intel-scanner, and youtube-transcript-pro on GitHub (@whodakingofhell).";
  }

  if (/(owner|vault|job|career|resume|apply|auto)/.test(q)) {
    return "The Jobs Near You & Auto Job Finder Studio is protected inside Mark's private Owner Vault so visitors cannot accidentally apply to jobs. If you are Mark, press Ctrl+Shift+M to unlock the Owner Vault with your private passcode.";
  }

  if (/(security|pentest|csp|ssrf|xss|hsts|safe)/.test(q)) {
    return "This site enforces strict HSTS, Content-Security-Policy, X-Frame-Options DENY, timing-safe HttpOnly HMAC authentication for the Owner Vault, rate limiting, and DNS-checked SSRF protection on the live Website Checker API.";
  }

  if (/(dashboard|chart|csv|data|analyst|theme)/.test(q)) {
    return "Scroll to the Interactive Editorial Dashboard to switch across 7 high-contrast accessible themes, inspect responsive SVG charts of Mark's real engineering and support data, or drop your own CSV file to visualize and analyze it live.";
  }

  if (/(vercel|deploy|404|500|cors|supabase|rls|sql|n8n|debug|bug|error)/.test(q)) {
    return "For quick debugging: check Vercel function logs for API 500s, verify Supabase RLS SELECT policies if queries return empty arrays, and confirm exact file casing for Linux deployments. Share the exact error message and I will walk you through the fix.";
  }

  return "Hi! I'm Mae, Mark's voice-enabled AI assistant. You can type or click the microphone to talk to me about Mark's projects like BGround and Philippine Skyland, test any URL in the Website Checker, analyze CSV data in the Dashboard, or debug code issues.";
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
    return res.status(429).json({ error: "Rate limit exceeded. Wait a moment before asking again." });
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
      try {
        const contents = history.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: String(m.text || "").slice(0, 1200) }]
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
              generationConfig: { temperature: 0.4, maxOutputTokens: 500 }
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
        // Clean fallback
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
