---
name: autonomous-file-organizer
description: Intelligently categorizes and sorts AI-generated assets by semantic niche while guaranteeing zero duplicates via SHA-256 hashing and maintaining machine-readable CATALOG.json and INDEX.md registries. Imported from AI Files Hub.
---

# Autonomous File Organizer & Deduplication Protocol

Imported from `C:\Users\chesr\Desktop\AI Files\_System_and_Skills\skills\autonomous-file-organizer\SKILL.md`.

## Core Capabilities
1. **Semantic Categorization:** Routes assets into clean niches (`01_Media_Production`, `02_AI_Intelligence`, `03_Apps_and_Launchers`, `04_Career_and_Profile`) without cluttering project roots.
2. **Zero-Duplicate SHA-256 Engine:** Computes SHA-256 checksums before moving or indexing files and quarantines exact duplicates into `_Archive_and_Duplicates/`.
3. **Structured Agent Registries:** Maintains `CATALOG.json` for O(1) lookup and `INDEX.md` for human browsing.
4. **Media Isolation Rule:** Never auto-generates or mixes game/demo video assets from `AI Files` into unrelated career deliverables unless explicitly instructed.
