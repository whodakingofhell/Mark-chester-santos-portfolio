// Vercel Serverless Function: Natural Human Neural TTS for Mae
// Uses Gemini 2.5 Flash Native TTS (Leda / Aoede) and returns standard audio/wav (24kHz PCM).

const rateBucket = new Map();
const MAX_REQ_PER_MIN = 25;

function getClientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.length > 0) return fwd.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function pcm16ToWav(pcmBuffer, sampleRate = 24000, channels = 1, bitsPerSample = 16) {
  const byteRate = (sampleRate * channels * bitsPerSample) / 8;
  const blockAlign = (channels * bitsPerSample) / 8;
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + pcmBuffer.length, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16); // PCM chunk size
  header.writeUInt16LE(1, 20);  // PCM format
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(pcmBuffer.length, 40);
  return Buffer.concat([header, pcmBuffer]);
}

function parseRateFromMime(mime) {
  const m = String(mime || "").match(/rate=(\d+)/i);
  const parsed = m ? Number(m[1]) : 24000;
  return parsed >= 8000 && parsed <= 48000 ? parsed : 24000;
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
    return res.status(429).json({ error: "Too many voice requests. Please wait a moment." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "Neural voice key not configured" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const rawText = String(body.text || "")
      .replace(/[*_`#<>]/g, "")
      .replace(/\bMae\b/g, "May")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 480);

    if (!rawText) {
      return res.status(400).json({ error: "Text is required" });
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);

    try {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${encodeURIComponent(apiKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Speak warmly, naturally, and gently like a friendly young woman helping a website visitor: ${rawText}`
                  }
                ]
              }
            ],
            generationConfig: {
              responseModalities: ["AUDIO"],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: {
                    voiceName: "Leda"
                  }
                }
              }
            }
          })
        }
      );

      clearTimeout(timer);
      if (!geminiRes.ok) {
        return res.status(502).json({ error: "Voice synthesis unavailable" });
      }

      const data = await geminiRes.json();
      const part = data?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data || p.inline_data?.data);
      const inline = part?.inlineData || part?.inline_data;

      if (!inline?.data) {
        return res.status(502).json({ error: "No audio returned" });
      }

      const mime = String(inline.mimeType || inline.mime_type || "audio/L16;rate=24000");
      const rawBuf = Buffer.from(inline.data, "base64");

      if (/audio\/(wav|mpeg|mp3|ogg|mp4)/i.test(mime)) {
        res.setHeader("Content-Type", mime.split(";")[0]);
        return res.status(200).send(rawBuf);
      }

      const sampleRate = parseRateFromMime(mime);
      const wavBuffer = pcm16ToWav(rawBuf, sampleRate, 1, 16);
      res.setHeader("Content-Type", "audio/wav");
      return res.status(200).send(wavBuffer);
    } catch {
      clearTimeout(timer);
      return res.status(504).json({ error: "Voice request timed out" });
    }
  } catch {
    return res.status(400).json({ error: "Malformed request payload." });
  }
};
