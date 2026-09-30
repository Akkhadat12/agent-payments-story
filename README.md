# When an AI Spends for Us

## Start here — Web Build agent

Read [WORKFLOW_STATUS.md](WORKFLOW_STATUS.md) first. This branch contains the new Research/Story assignment. Research and planning are complete after final verification; **no new website has been built, deployed or passed QA**. The owner initiates the later Build assignment with this branch link.

**Approved thesis:** Agents are expanding from helping people decide to purchasing consumer goods and production inputs, but scaling depends as much on bounded delegation, spending control and verifying outcomes as on convenient payments.

Audience: general Thai viewers. Spoken target: 8–12 minutes, plan 9:30. Website: true spatial 3D, presenter-controlled, desktop 16:9, minimal English text. The opening shoes/THB3,000 purchase is hypothetical, not a Thai availability claim.

Repository: https://github.com/Akkhadat12/agent-payments-story

Branch: `research/agent-economy-2026-09-30`

Exact branch: https://github.com/Akkhadat12/agent-payments-story/tree/research/agent-economy-2026-09-30

## Read the complete current handoff

1. [04_BUILD_WEB.md](04_BUILD_WEB.md) — full Build requirements, interaction map, composition, motion, assets and delivery contract
2. [03_STORY_STRUCTURE.md](03_STORY_STRUCTURE.md) — approved argument, scene IDs and planned speaking times
3. [02_RESEARCH_AND_ANALYSIS.md](02_RESEARCH_AND_ANALYSIS.md) and [02 PDF](02_RESEARCH_AND_ANALYSIS.pdf) — current thesis, sources, contrary evidence and claim boundaries
4. [01_KNOWLEDGE_SUMMARY.md](01_KNOWLEDGE_SUMMARY.md) and [01 PDF](01_KNOWLEDGE_SUMMARY.pdf) — accessible Thai background
5. [03A_NARRATION_SCRIPT](https://docs.google.com/document/d/1tjlO_rdYaBgW_E0yoKX0npM3uBPfVRGMOLgUJ88OsQI) — full Thai speaking script, visual cues and source links
6. [05_QA.md](05_QA.md) — independent acceptance plan, not a result
7. [references](references/README.md) — [authentic Google published checkout image](references/google-universal-cart-checkout-2026-05.webp) and [TRM source data](references/trm-x402-measurement.json)
8. [Research verification](RESEARCH_VERIFICATION.md) — provenance, artifact checks and their limits

Markdown on this branch is authoritative; its PDFs are canonical reading copies. [Matching Drive folder](https://drive.google.com/drive/folders/1zn9OOvbbDFCXQeYLbgWeQW0CBjglDrwZ) holds the [01 PDF mirror](https://drive.google.com/file/d/1heAYpAuv9h477h1Ti7InbAPAWGLPYc43/view), [02 PDF mirror](https://drive.google.com/file/d/1CNxgfy_U81Bm_lPD3H7u0YfqPcCm2GJE/view) and current native narration script. It is also the destination for the later scene-rationale document, not an alternate source for code or instructions.

## Next Build deliverables

Implement on this same branch, with genuine depth and purposeful camera-led transitions into stable narration holds. Follow evidence and authentic-asset boundaries. Use the scene's meaningful object or Space to advance; R returns to cover. No persistent navigation/help chrome in the recording view. These instructions belong here, not over the cover.

Choose final colors through at least two browser-tested directions; Research did not choose a palette. Commit source and BUILD_NOTES.md, deploy to **Vercel at a publicly accessible production URL without login**, and verify the new assignment/commit. A local build, preview or old site is insufficient.

Create one current Thai **06_SCENE_RATIONALE** Google Doc or **06_SCENE_RATIONALE.docx** Word document in the linked Drive folder, with final public scene screenshots, reasoning, sources and departures from the plan. Return its exact link. Independent QA then delivers **07_WEB_QA_REPORT.md** on this branch. Follow full requirements in 04 and 05.

## Agent communication and next handoff

The shared working branch and committed files are the durable communication channel. Fetch latest before writing. Build records URL, commit, notes, script/rationale links and `READY_FOR_QA` in status. QA independently tests that exact build, commits stable findings/report and records pass/fail/blocker. Build responds with fix commits; QA retests. Build does not overwrite QA's report or mark itself `QA_PASS`.

Research/Story owns spoken factual wording. Build may update documented visual cues/timing; substantive factual changes return to Research/Story, followed by independent QA. The owner starts later agents with the branch link and need not copy findings between chats. No extra routine approval gate is added for fixes/retests.

## Legacy preservation and documented cleanup exception

Branch base: `ab61555714ddf61f4744c6b50c67ded434ddfa48`. The old README is retained in Git history. Main and the prior public 2D site https://akkhadat12.github.io/agent-payments-story/ remain untouched.

Root `index.html`, `app.js`, `scenes.js`, `style.css`, `fonts/` and `.nojekyll` are **legacy**, not current research or a Build template. Unrelated `seed-to-canopy/` is preserved and must remain intact.

Master v5.25 normally resets old-project files on the working branch. Here cleanup remains deliberately deferred because external auto-production hooks could not be fully verified. The inspected tree has no tracked `.github/` workflow or `.vercel/` configuration; the base commit has no returned status checks; Vercel team listing returned no teams. None of those observations proves the absence of external deployment wiring. Preserve the live site first: before later Build, inspect actual hosting connections, safely reconcile legacy files on this working branch, and record exact removals/replacements. Do not delete unrelated work, modify main, force-push or present an old deployment as the new result.

This is a disclosed preservation exception, not a claim that the master's branch reset was completed. All new numbered handoff files and selected references are distinct and linked above.
