# 🎬 60-Second Video Introduction Script (Teleprompter Ready)

When you are ready to record your introduction video (using **Loom.com**, **OBS**, or your webcam), read this script naturally with a warm smile and clear voice.

---

## ⏱️ Part 1: The Hook & Trust Builder (0:00 – 0:20)
> *"Hi! I’m Mark Chester Santos, based in Metro Manila. If you’re looking for a reliable remote operator who can handle your daily customer support and scheduling on Day 1—and build AI automations that save your team hours every week—you’re in the right place.*
>
> *I hold a Bachelor’s degree in Information Technology with over 5 years of programming experience, combined with hands-on enterprise support experience for **Walmart at IBEX Global** and international travel operations at **IGT Solutions**."*

## ⏱️ Part 2: What You Take Off Their Plate (0:20 – 0:40)
> *"What makes me different from a standard Virtual Assistant or a traditional developer is that I bridge both worlds. I’m comfortable jumping on live phone calls, managing support tickets, coordinating international bookings, or troubleshooting client PCs over AnyDesk and TeamViewer—while consistently hitting top CSAT and Handle Time targets.*
>
> *Then, whenever I spot a repetitive task, I use **n8n, Python, and zero-cost tools like Agent-Reach** to automate it—turning hours of manual research, data entry, or content production into a 5-minute workflow at zero extra software cost."*

## ⏱️ Part 3: Live Proof & Call to Action (0:40 – 1:00)
> *"Right below this video, you can test my live production systems—including a Microsoft license booking platform in Next.js 15, a serverless appointment API with Discord alerts, a real estate SaaS with 11 security layers, and my 14-stage AI content pipeline.*
>
> *I am 100% work-from-home ready and flexible across US, UK, and Australian timezones. Click the **Send Email** button below, and let’s chat about how I can help your team right away. Thanks for watching!"*

---

## 🛠️ How to Add Your Video to the Website Later (Takes 10 Seconds)

1. Record your video on **[Loom](https://www.loom.com/)** or upload it to **YouTube (Unlisted)**, or save it as `intro.mp4` inside this folder.
2. Open [`app.js`](./app.js) in **Antigravity IDE**.
3. Look at **Line 8**:
   ```javascript
   INTRO_VIDEO_URL: "",
   ```
4. Paste your link inside the quotes!
   - Example for Loom: `INTRO_VIDEO_URL: "https://www.loom.com/embed/YOUR_VIDEO_ID",`
   - Example for YouTube: `INTRO_VIDEO_URL: "https://www.youtube.com/embed/YOUR_VIDEO_ID",`
   - Example for a local file: `INTRO_VIDEO_URL: "intro.mp4",`
5. Save the file and double-click `DEPLOY_UPDATES.bat`—your live video player will appear automatically!
