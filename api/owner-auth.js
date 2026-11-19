// Vercel Serverless Function: Owner-Only Private Vault Authentication
// Issues HMAC-SHA256 signed HttpOnly; Secure; SameSite=Strict session cookies
// Protects the private Jobs Near You & Auto Job Finder workspace so ONLY Mark can see or use it.

const crypto = require("crypto");

const COOKIE_NAME = "mcs_owner_session";
const SESSION_TTL_SEC = 60 * 60 * 12; // 12 hours
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

// In-memory sliding-window brute-force limiter (per warm serverless instance)
const attemptLog = new Map();

function getClientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.length > 0) return fwd.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function getSigningSecret() {
  return process.env.OWNER_SESSION_SECRET || process.env.OWNER_PASSCODE || "mcs-vault-rotate-in-vercel-env-2026";
}

// Default bootstrap hash (SHA-256 of initial passcode) if OWNER_PASSCODE env var is not yet set on Vercel.
// Mark should set OWNER_PASSCODE + OWNER_SESSION_SECRET in Vercel Project Settings -> Environment Variables.
function verifyPasscode(candidate) {
  const input = String(candidate || "");
  if (input.length < 4 || input.length > 128) return false;

  const envPass = process.env.OWNER_PASSCODE;
  const expectedHash = envPass
    ? crypto.createHash("sha256").update(envPass).digest()
    : Buffer.from("8c4d9f1b929d3f3548449d273c46109e2a4a81d803331b0e112349c7e2f8f8f8", "hex");

  // If OWNER_PASSCODE is configured, strictly verify against it via timingSafeEqual
  if (envPass) {
    const candHash = crypto.createHash("sha256").update(input).digest();
    return crypto.timingSafeEqual(candHash, expectedHash);
  }

  // Fallback initial owner PIN hash ("MCS-2026-OWNER") until Mark sets OWNER_PASSCODE in Vercel
  const fallbackHash = crypto.createHash("sha256").update("MCS-2026-OWNER").digest();
  const candHash = crypto.createHash("sha256").update(input).digest();
  return crypto.timingSafeEqual(candHash, fallbackHash);
}

function signSession(payloadObj) {
  const payloadB64 = Buffer.from(JSON.stringify(payloadObj)).toString("base64url");
  const sig = crypto.createHmac("sha256", getSigningSecret()).update(payloadB64).digest("base64url");
  return `${payloadB64}.${sig}`;
}

function verifySessionCookie(cookieHeader) {
  if (!cookieHeader || typeof cookieHeader !== "string") return false;
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  if (!match) return false;
  const token = match[1];
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [payloadB64, sig] = parts;
  const expectedSig = crypto.createHmac("sha256", getSigningSecret()).update(payloadB64).digest("base64url");
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expectedSig);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8"));
    return Boolean(payload && payload.role === "owner" && typeof payload.exp === "number" && Date.now() < payload.exp);
  } catch {
    return false;
  }
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method === "GET") {
    const authenticated = verifySessionCookie(req.headers.cookie || "");
    return res.status(200).json({
      authenticated,
      envConfigured: Boolean(process.env.OWNER_PASSCODE)
    });
  }

  if (req.method === "DELETE") {
    res.setHeader(
      "Set-Cookie",
      `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`
    );
    return res.status(200).json({ authenticated: false, message: "Owner vault locked." });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const entry = attemptLog.get(ip) || { count: 0, resetAt: now + LOCKOUT_MS };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + LOCKOUT_MS;
  }

  if (entry.count >= MAX_ATTEMPTS) {
    const retrySec = Math.ceil((entry.resetAt - now) / 1000);
    res.setHeader("Retry-After", String(retrySec));
    return res.status(429).json({
      authenticated: false,
      error: `Too many failed attempts. Locked for ${Math.ceil(retrySec / 60)} minute(s).`
    });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const passcode = String(body.passcode || "").trim();

    if (!verifyPasscode(passcode)) {
      entry.count += 1;
      attemptLog.set(ip, entry);
      return res.status(401).json({
        authenticated: false,
        error: "Invalid owner passcode.",
        attemptsRemaining: Math.max(0, MAX_ATTEMPTS - entry.count)
      });
    }

    // Success: reset failure count & set signed HttpOnly cookie
    attemptLog.delete(ip);
    const token = signSession({
      role: "owner",
      iat: now,
      exp: now + SESSION_TTL_SEC * 1000
    });

    const isLocal = String(req.headers.host || "").includes("localhost");
    const cookieFlags = isLocal
      ? `${COOKIE_NAME}=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${SESSION_TTL_SEC}`
      : `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${SESSION_TTL_SEC}`;

    res.setHeader("Set-Cookie", cookieFlags);
    return res.status(200).json({
      authenticated: true,
      envConfigured: Boolean(process.env.OWNER_PASSCODE)
    });
  } catch {
    return res.status(400).json({ authenticated: false, error: "Malformed request body." });
  }
};
