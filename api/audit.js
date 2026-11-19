// Vercel Serverless Function: Website Accessibility, Performance, Security & Anti-Slop Checker
// Inspired by Google AI Studio's bundled website-checker — hardened with strict SSRF protection.

const dns = require("dns").promises;
const net = require("net");

const rateBucket = new Map();
const MAX_REQ_PER_MIN = 12;

function getClientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.length > 0) return fwd.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function isPrivateOrReservedIp(ip) {
  if (!ip) return true;
  if (net.isIPv4(ip)) {
    const parts = ip.split(".").map(Number);
    const [a, b] = parts;
    if (a === 10) return true;
    if (a === 127) return true;
    if (a === 0) return true;
    if (a === 169 && b === 254) return true; // Cloud metadata 169.254.169.254
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 192 && b === 168) return true;
    if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT
    if (a >= 224) return true; // Multicast / reserved
    return false;
  }
  if (net.isIPv6(ip)) {
    const low = ip.toLowerCase();
    if (low === "::1" || low === "::" || low.startsWith("fc") || low.startsWith("fd") || low.startsWith("fe80") || low.includes("::ffff:127.") || low.includes("::ffff:169.254.") || low.includes("::ffff:10.")) {
      return true;
    }
    return false;
  }
  return true;
}

async function validatePublicUrl(rawUrl) {
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new Error("Invalid URL format. Include https://");
  }

  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error("Only http:// and https:// URLs are permitted.");
  }

  const host = parsed.hostname.toLowerCase();
  if (
    host === "localhost" ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    host.endsWith(".localhost") ||
    host === "metadata.google.internal"
  ) {
    throw new Error("Local or internal hostnames are blocked for security.");
  }

  if (net.isIP(host)) {
    if (isPrivateOrReservedIp(host)) {
      throw new Error("Private or reserved IP addresses are blocked (SSRF protection).");
    }
    return parsed.href;
  }

  const records = await dns.lookup(host, { all: true });
  if (!records || records.length === 0) {
    throw new Error("Hostname could not be resolved.");
  }
  for (const rec of records) {
    if (isPrivateOrReservedIp(rec.address)) {
      throw new Error("Resolved IP belongs to a private or reserved network (SSRF protection).");
    }
  }
  return parsed.href;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
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
    return res.status(429).json({ error: "Rate limit exceeded. Try again in one minute." });
  }

  const rawUrl = String(req.query.url || "").trim().slice(0, 300);
  if (!rawUrl) {
    return res.status(400).json({ error: "Missing url query parameter." });
  }

  let safeTarget;
  try {
    safeTarget = await validatePublicUrl(rawUrl);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }

  const started = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6500);

  try {
    const response = await fetch(safeTarget, {
      method: "GET",
      redirect: "manual",
      signal: controller.signal,
      headers: { "User-Agent": "MarkChester-WebsiteChecker/1.0" }
    });
    const ttfbMs = Date.now() - started;

    const html = (await response.text()).slice(0, 450000);
    const hdr = response.headers;

    // 1. Security Headers Audit
    const secChecks = [
      { name: "HTTPS Transport", pass: safeTarget.startsWith("https://") },
      { name: "Strict-Transport-Security (HSTS)", pass: Boolean(hdr.get("strict-transport-security")) },
      { name: "Content-Security-Policy (CSP)", pass: Boolean(hdr.get("content-security-policy")) },
      { name: "X-Content-Type-Options: nosniff", pass: String(hdr.get("x-content-type-options") || "").toLowerCase().includes("nosniff") },
      { name: "Clickjacking Defense (XFO / frame-ancestors)", pass: Boolean(hdr.get("x-frame-options")) || String(hdr.get("content-security-policy") || "").includes("frame-ancestors") },
      { name: "Referrer-Policy", pass: Boolean(hdr.get("referrer-policy")) }
    ];
    const secScore = Math.round((secChecks.filter((c) => c.pass).length / secChecks.length) * 100);

    // 2. Accessibility Audit
    const imgs = html.match(/<img\b[^>]*>/gi) || [];
    const imgsWithAlt = imgs.filter((tag) => /\balt\s*=\s*["'][^"']*["']/i.test(tag)).length;
    const a11yChecks = [
      { name: "HTML lang attribute present", pass: /<html\b[^>]*\blang\s*=/i.test(html) },
      { name: "Primary H1 heading present", pass: /<h1\b/i.test(html) },
      { name: "Viewport allows pinch zoom", pass: !/user-scalable\s*=\s*no/i.test(html) },
      { name: "Semantic landmarks (header/nav/footer/section)", pass: /<(header|nav|main|footer|section)\b/i.test(html) },
      { name: `Image alt coverage (${imgsWithAlt}/${imgs.length})`, pass: imgs.length === 0 || imgsWithAlt / imgs.length >= 0.9 }
    ];
    const a11yScore = Math.round((a11yChecks.filter((c) => c.pass).length / a11yChecks.length) * 100);

    // 3. SEO & Google Indexing Audit
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const titleText = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : "";
    const seoChecks = [
      { name: "Page <title> tag", pass: titleText.length >= 8 },
      { name: "Meta description", pass: /<meta\b[^>]*name=["']description["']/i.test(html) },
      { name: "Open Graph tags (og:title)", pass: /property=["']og:title["']/i.test(html) },
      { name: "Canonical / Search Verification", pass: /rel=["']canonical["']|google-site-verification/i.test(html) },
      { name: "Structured Data (JSON-LD)", pass: /application\/ld\+json/i.test(html) }
    ];
    const seoScore = Math.round((seoChecks.filter((c) => c.pass).length / seoChecks.length) * 100);

    // 4. Performance & Payload
    const kb = Math.round((Buffer.byteLength(html, "utf8") / 1024) * 10) / 10;
    const perfScore = Math.max(45, Math.min(100, 100 - Math.max(0, Math.floor((ttfbMs - 300) / 35)) - (kb > 250 ? 12 : 0)));

    // 5. Anti-Slop Copy Scan
    const cleanText = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ");
    const slopTerms = ["delve", "unlock", "game-changer", "cutting-edge", "next-level", "seamless", "synergy", "testament"];
    const slopFound = slopTerms.filter((t) => new RegExp(`\\b${t}\\b`, "i").test(cleanText));

    return res.status(200).json({
      ok: true,
      url: safeTarget,
      httpStatus: response.status,
      ttfbMs,
      htmlKb: kb,
      title: titleText.slice(0, 120),
      scores: {
        overall: Math.round((secScore + a11yScore + seoScore + perfScore) / 4),
        security: secScore,
        accessibility: a11yScore,
        seo: seoScore,
        performance: perfScore
      },
      checks: {
        security: secChecks,
        accessibility: a11yChecks,
        seo: seoChecks
      },
      slopFound
    });
  } catch (err) {
    return res.status(502).json({ error: "Could not reach target URL within timeout." });
  } finally {
    clearTimeout(timer);
  }
};
