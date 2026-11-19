---
name: agent-reach
description: Multi-platform zero-cost web exploration across Twitter/X, Reddit, YouTube, GitHub, Bilibili, and XiaoHongShu without paid API keys. Use for broad social intelligence, trend discovery, developer feedback, and deep research.
triggers:
  - "agent reach"
  - "search reddit"
  - "search twitter"
  - "search github"
  - "search youtube"
  - "multi-platform research"
---

# Agent-Reach: Multi-Platform Zero-Cost Research Protocol

Empowers the agent to query, extract, and synthesize real-time discussions, developer sentiment, code repositories, and educational video transcripts across 13+ platforms without paid API fees.

## Supported Platforms
- **GitHub**: Code, issues, pull requests, trending developer repositories (`reach_github`).
- **Reddit**: Subreddit discussions, real developer troubleshooting, sentiment (`reach_reddit`).
- **Twitter/X**: Fast-breaking tech announcements, paper discussions, releases (`reach_twitter`).
- **YouTube**: Video metadata, chapter outlines, speech-to-text transcripts (`reach_youtube`).
- **ArXiv & Web**: Paper releases, open citations, technical blogs.

## Core Directives
1. **Zero API Cost Rule:** Prioritize lightweight scraping and public APIs (`agent-reach`) over rate-limited or paid proprietary endpoints.
2. **Local Session Privacy:** Store cookies and local tokens only in `~/.hermes/data/sessions/`—never leak credentials in logs or public commits.
3. **Health Diagnostics:** Run `agent-reach doctor` if an upstream platform changes its DOM structure or search endpoints.
4. **Synthesis Over Dumping:** Filter extracted threads using in-situ regex/python scripts. Return only actionable conclusions, source links, and direct citations.

## Cross-Fleet Usage
- **Hermes Admin:** Track trending multi-agent frameworks on X & GitHub.
- **Doctor:** Search Reddit (e.g., r/Python, r/DevOps) for undocumented bug workarounds.
- **QA Specialist:** Harvest real-world edge cases from GitHub issues.
- **Skills Bot:** Scan GitHub for newly published agent toolkits and open-source skills.