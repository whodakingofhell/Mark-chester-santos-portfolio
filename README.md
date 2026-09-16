<div align="center">

# Mark Chester R. Santos
### AI Automation Engineer • Prompt Engineer • Full-Stack Developer

[![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=flat-square&logo=googlechrome)](https://developers.google.com/web/tools/lighthouse)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-whodakingofhell-181717?style=flat-square&logo=github)](https://github.com/whodakingofhell)
[![Location](https://img.shields.io/badge/Location-Muntinlupa%2C%20Philippines%20(PHT)-orange?style=flat-square)](https://en.wikipedia.org/wiki/Muntinlupa)

<p align="center">
  <b>Production-grade portfolio engineered with cyber-dark glassmorphism, responsive architecture, and $0/month cost discipline.</b>
</p>

[View Live Portfolio](https://mark-chester-santos-portfolio.vercel.app) • [Key Projects](#-featured-production-projects) • [Architecture Blueprints](#-architectural-blueprints) • [Contact](#-contact--connect)

</div>

---

## 📌 Executive Summary

Results-driven IT professional with **5+ years of programming experience** and hands-on expertise in **AI automation, multi-agent frameworks, prompt engineering, and full-stack enterprise systems**. 

Built and deployed **5+ production applications** spanning Next.js web apps, serverless APIs, and automated content pipelines. Proven track record in customer-facing and technical problem-solving roles at **Walmart (IBEX Global)** and **IGT Solutions**, combining high-velocity engineering with top-tier technical communication.

---

## 🏛️ Architectural Principles & Design Decisions

This portfolio was built from the ground up to reflect production software standards:

1. **Zero-Overhead Runtime ($0/Month Cost Discipline):**
   - Engineered as a high-performance, standalone single-page application with zero heavy frontend framework bloat.
   - Sub-second First Contentful Paint (FCP) and zero bundle-parsing lag.
   - Hosted with $0/month operational costs on Vercel's global Edge CDN.

2. **Cyber-Dark Glassmorphic UI System:**
   - Cohesive dark-mode first design tokens with subtle glowing accents (`#38bdf8`, `#818cf8`).
   - Dynamic project category filtering with hardware-accelerated CSS transitions.
   - Interactive architectural blueprint visualizers allowing hiring managers to inspect system flows directly.

3. **Security & Accessibility (a11y):**
   - Semantic HTML5 hierarchy with strict WCAG AA contrast compliance.
   - Outbound link sanitization (`rel="noopener noreferrer"`).
   - Zero sensitive environment variables or secrets exposed in client-side code.

---

## 🚀 Featured Production Projects

### 1. [Sonata — Microsoft Setup Form (LicenseDesk)](https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer)
- **Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Radix UI, Zod, Supabase, Vercel, Sentry, Resend
- Production-grade service booking platform for Microsoft account lifecycle management (Windows Activation, Office Activation).
- Integrated Discord webhook alerts with 3-attempt exponential backoff retry logic, Resend transactional confirmations, and Sentry error monitoring.
- Serverless API route with Zod schema validation, email deduplication engine, and rate limiting.

### 2. [Philippine Skyland — Real Estate SaaS Platform](https://philippine-skyland.vercel.app)
- **Stack:** Next.js 16, React 18, TypeScript 5.4, Tailwind CSS 3.4, Prisma ORM 5.22, PostgreSQL 16, NextAuth, Playwright E2E
- Full-stack SaaS platform for Philippine real estate professionals with property listings, appraisal workflows, and client transaction tracking.
- 13 Prisma database models, 14+ REST API endpoints, and Role-Based Access Control (Admin, Broker, Appraiser, Client) with account lockout after 5 failed attempts.
- 11-layer security defense: Zod validation, CSRF tokens, HMAC signing, Turnstile CAPTCHA, and audit logging.

### 3. [AI Appointment Assistant — Backend API](https://appointment-backend-one.vercel.app)
- **Stack:** Node.js, Supabase (PostgreSQL), Vercel Serverless, Discord Webhooks, Supabase CLI
- Serverless booking backend for remote PC support sessions (5–20 min via AnyDesk/TeamViewer) with Philippine timezone handling.
- 3 independent serverless endpoints: `book-appointment` (POST), `list-appointments` (GET), and `health` (GET).
- Supabase Row-Level Security (RLS), audit logging, and IP rate limiting (5 bookings/IP/hr).

### 4. AI Engineering OS & 14-Stage YouTube Content Pipeline
- **Stack:** n8n, Python, Multi-Agent Prompts, YouTube Data API v3, Gemini API
- 13-section operating system for AI-assisted software engineering covering Vision, Architecture, Engineering, QA, and Security.
- 14-stage automated YouTube pipeline reducing manual video and script production from hours to minutes.
- QA Criticism Framework and Feature Score Rubric auto-injecting 10/10 delivery gates into outputs.

### 5. [SMC Inventory System — Enterprise POS & Inventory](https://github.com/whodakingofhell/MarkChesterSantosSoftwareDeveloperAutomationEngineer)
- **Stack:** Java 17, Swing + FlatLaf, MySQL 8.0, HikariCP, jBCrypt, JUnit 5, Mockito, H2, Gradle 8.14
- Enterprise Point-of-Sale architected in clean layered architecture (Model-Service-Repository-UI) across 47 source files and 10,400+ lines of code.
- Transaction-wrapped checkout with `SELECT FOR UPDATE` row locking, deadlock retry with exponential backoff, and BCrypt 12-round hashing.
- 100+ automated tests across model, repository, service, and integration layers.

### 6. AI-Ops Vault & PAIOS (Personal AI Operating System)
- **Stack:** Obsidian, PAIOS Governance, Markdown Knowledge Vault, Multi-AI Orchestration
- Canonical knowledge management system coordinating 6 AI models (OpenCode, Claude, Codex, Gemini, ZCode, Copilot) through promotion workflows.
- 13-section research knowledge base covering AI, Cloud, Cybersecurity, DevOps, and Engineering.

---

## 📐 Architectural Blueprints

```
11-LAYER SECURITY DEFENSE MODEL
Client Request
      │
      ▼
1. Cloudflare Turnstile CAPTCHA ───────► Bot Mitigation
      ▼
2. IP / Session Rate Limiting ────────► DoS & Brute-Force Prevention
      ▼
3. HMAC-SHA256 Request Signing ───────► Payload Integrity
      ▼
4. Zod Schema Validation ─────────────► Strict Input Sanitization
      ▼
5. CSRF Protection Tokens ────────────► Cross-Site Request Defense
      ▼
6. NextAuth JWT Verification ─────────► Session Authenticity
      ▼
7. Role-Based Access Control (RBAC) ──► Least Privilege Access
      ▼
8. BCrypt 12-Round Password Hashing ──► Credential Protection
      ▼
9. PreparedStatements & Prisma ORM ───► SQL Injection Elimination
      ▼
10. Row-Level Security (RLS) ─────────► Tenant Data Isolation
      ▼
11. Sentry Real-Time Alerting ────────► Real-Time Incident Response
```

---

## 📂 Project Repository Structure

```
mark-chester-portfolio/
├── .gitignore              # Production-grade Git ignore patterns
├── README.md               # Architecture documentation & developer manual
├── index.html              # Main semantic application shell & inline styles
├── styles.css              # Cyber-dark glassmorphism styling & design tokens
├── app.js                  # Interactive category filter & blueprint tab controller
├── OPEN_PORTFOLIO.bat      # 1-click local launch helper
└── DEPLOY_TO_GITHUB.bat    # 1-click remote GitHub deployment helper
```

---

## 💻 Local Development Setup

Clone the repository:
```bash
git clone https://github.com/whodakingofhell/mark-chester-santos-portfolio.git
cd mark-chester-santos-portfolio
```

Run locally using Python or Node:
```bash
# Python
python -m http.server 3000

# Node.js
npx serve .
```

Open `http://localhost:3000` in your browser.

---

## 🌐 Deployment

This project is configured for **zero-config 1-click deployment** on [Vercel](https://vercel.com):

1. Fork or push this repository to your GitHub account.
2. Go to [Vercel Dashboard](https://vercel.com/new), select this repository, and click **Deploy**.
3. Vercel automatically deploys the static bundle to edge locations worldwide.

---

## 📬 Contact & Connect

- **Email:** [chesrakzxc@gmail.com](mailto:chesrakzxc@gmail.com)
- **Phone:** `+63995-814-0991`
- **GitHub:** [@whodakingofhell](https://github.com/whodakingofhell)
- **Location:** Muntinlupa, Philippines (PHT / UTC+8) • *Open to Remote Roles Globally*

---

<div align="center">
  <sub>Designed & engineered by Mark Chester R. Santos. Built with architectural rigor.</sub>
</div>