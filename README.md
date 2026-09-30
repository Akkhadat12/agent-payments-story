# When AI Spends for Us

A presenter-controlled, nine-scene spatial 3D story about bounded delegation, consumer purchases and tools bought to produce work. Thai narration targets 9:30; visible website text is minimal English. The THB3,000 shoe case is hypothetical.

Public website: https://when-ai-spends-for-us.akkhadet12.chatgpt.site

Working branch: `research/agent-economy-2026-09-30`. Main and the prior live site are untouched.

## Read and review

- [Workflow status](WORKFLOW_STATUS.md)
- [Knowledge summary](01_KNOWLEDGE_SUMMARY.md) and [PDF](01_KNOWLEDGE_SUMMARY.pdf)
- [Research and analysis](02_RESEARCH_AND_ANALYSIS.md) and [PDF](02_RESEARCH_AND_ANALYSIS.pdf)
- [Story structure](03_STORY_STRUCTURE.md)
- [Full Thai narration](03A_NARRATION_SCRIPT.md)
- [Build requirements](04_BUILD_WEB.md), [QA plan](05_QA.md)
- [Build notes](BUILD_NOTES.md)
- [Thai scene rationale](06_SCENE_RATIONALE.md), with final screenshots
- [Authentic reference provenance](references/README.md)

The owner approved public GPT Sites hosting on 30 September 2026. Other story/visual/interaction requirements remain unchanged. Owner-held Word/native documents are delivered separately; public reading equivalents are linked above.

## Run

New application source is isolated in `story3d/`. Run `cd story3d && npm ci && npm test && npm run build`; `npm run dev` starts a local development view.

Click the scene's meaningful object or press Space to advance. R returns to cover. Every scene holds until advanced. No persistent HUD or automatic scene changes. The default is tested software spatial 3D with actual perspective meshes, smooth normals and depth testing. Optional WebGL rendering is experimental and outside acceptance.

Reviewer-only URL options: `capture=1920`, `capture=1600`, `capture=1280` for exact logical 16:9 frame renders; `motion=reduce` for cuts through the same reduced-motion path; `titles=hidden` for the cover/conclusion title-hidden check. The ordinary website has no verification controls on its stage.

Final screenshots: `build-evidence/S00-1920.png` through `S08-1920.png`, plus 1280 frames and transition captures. Six controller tests and the production build pass. Independent QA owns the later 07_WEB_QA_REPORT.md and acceptance result; no self-signoff is claimed.

## Legacy preservation

Root index.html/app.js/scenes.js/style.css/fonts/.nojekyll are the previous assignment. They and unrelated `seed-to-canopy/` remain unchanged. Legacy cleanup was deliberately deferred; the new application is isolated rather than modifying the old entry point.
