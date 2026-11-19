---
name: career-match-engine
description: Location-aware live job discovery, ATS keyword alignment scoring, 10/10 factual resume generation, automatic cover letter & requirements builder, and multi-variant regeneration without AI slop.
---

# Career Match & Application Engine (`career-match-engine`)

Turns a developer portfolio into a daily-use career operating system.

## Workflow
1. **Location Detection:** Resolve the user's nearest city/region via browser Geolocation + reverse geocoding (with instant manual override for local Metro Manila / Cavite / BGC / Makati or Global Remote US/UK/AU shifts).
2. **Aligned Job Discovery:** Fetch live open positions from real job feeds (`/api/jobs` aggregating Remotive, Arbeitnow, Jobicy, plus pre-filtered live search links to JobStreet PH, Kalibrr, LinkedIn, Indeed, and OnlineJobs.ph) and rank strictly against Mark Chester Santos's verified stack (AI Automation, n8n, Python, Next.js/React/TypeScript, Supabase/PostgreSQL, Java 17/MySQL, Technical VA & Enterprise Support Ops).
3. **10/10 ATS Resume Tailoring:** Parse target job description requirements and keywords, map ONLY verified facts from Mark's real background (zero fabricated jobs, degrees, or metrics), score ATS keyword coverage, and offer one-click variant regeneration across 4 strategic formats.
4. **Automatic Cover Letter & Requirements Extraction:** Generate a human, `no-ai-slop`-verified cover letter + concrete application requirements checklist, with one-click option cycling if the user prefers another angle.
