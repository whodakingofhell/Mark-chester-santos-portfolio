---
name: no-ai-slop
description: Detect and eliminate 20+ AI-writing clichés, binary contrasts, throat-clearing openers, faux-insight setups, and corporate puffery from portfolio copy, resumes, and cover letters while preserving an authentic human voice. Adapted from petergyang/no-ai-slop.
---

# No AI Slop (`no-ai-slop`)

Adapted from [petergyang/no-ai-slop](https://github.com/petergyang/no-ai-slop). Strips predictable LLM writing tics from websites, resumes, cover letters, and technical documentation so prose reads like a real engineer wrote it.

## 20+ Patterns to Detect & Eliminate

1. **Binary Contrasts:** "It's not just X — it's Y." / "Not only X, but also Y."
2. **Throat-Clearing Openers:** "Here's the thing:", "Let me be clear:", "In today's fast-paced digital landscape..."
3. **Faux-Insight Setups:** "What nobody tells you...", "The part everyone misses...", "Here's the quiet truth..."
4. **Colon Reveals:** "The best part: it scales." / "The result: effortless growth."
5. **Dramatic Fragments:** "That's it. That's the whole thing." / "Simple. Fast. Powerful."
6. **Empty Buzzword Stacking:** *unlock, elevate, empower, delve, showcase, testament, landscape, journey, robust, game-changer, next-level, seamless, cutting-edge, revolutionary, synergy, leverage*.
7. **Significance Inflation:** "marking a pivotal moment", "ushering in a new era", "redefining the future of".
8. **Corporate Cover-Letter Clichés:** "I am writing to express my strong interest", "passionate self-starter", "hit the ground running", "proven track record of excellence", "thrilled to apply".
9. **Forced Rule of Three:** Forcing every sentence into three abstract nouns ("speed, scale, and precision").
10. **Inanimate Subject + Human Verb:** "The system understands your needs", "The architecture believes in simplicity".
11. **Weasel Attributions:** "Industry experts agree", "Studies show" without a concrete source.
12. **Fake-Profound Closers:** "Because great software isn't built overnight — it's crafted."
13. **Emoji Decoration:** Scattering rocket/sparkle/fire emojis in headings, bullets, and CTA buttons.
14. **Actorless Passive Voice:** "Improvements were made" instead of "I cut response latency from 420ms to 110ms."

## Modes of Operation
- **Edit Mode:** Rewrite copy with minimal, surgical changes. Replace vague abstractions with real numbers, tools, and actions from the author's verified history.
- **Audit / Detect Mode:** Scan any paragraph, resume, or cover letter and flag exact quoted matches of the patterns above with concrete human replacements.
