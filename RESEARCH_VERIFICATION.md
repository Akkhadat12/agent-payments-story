# Research verification and provenance

Date: 30 September 2026 UTC. This is Research/Story handoff and artifact verification, not website QA.

## Provenance

- Governing source: MASTER_PROMPT_RESEARCH_STORY_PLANNING_v5.25.md, version 5.25, 29 September 2026, https://drive.google.com/file/d/1NQSC-ndk5kgGl3dskytE4dZQimrIw-la/view
- Approved research scope is stated in README. Thesis 1 was approved on 30 September 2026
- Existing main base: `ab61555714ddf61f4744c6b50c67ded434ddfa48`
- Prior README's discovery-control thesis was read as historical context and was not adopted as fact
- Fresh source checks cover dated primary announcements, current provider documentation, original empirical analyses and policy research. Source dates, limits and URLs are in both reading packs; document 02 contains 18 claim records
- Visa's direct June 10 release returned 403. A verified unedited Visa release syndicated via Publicnow/MarketScreener is used only for the fact of the announcement, with this limitation disclosed
- No paid API, wallet, financial transaction, exploit, survey or new empirical market test was performed
- All research synthesis and review for this trial used OpenAI assistants. No Claude or Hermes model calls were made

## Scope of separate source review

A separate spot review read the summary, main analysis and claim ledger and independently opened OpenAI's March 24 update, Google's September 16 update, Adobe's April 16 report, TRM's September 9 report and Browserbase's gateway. Sampled claims C02, C03, Browserbase in C06, C09 and C10 were supported with the stated limitations. This was not a complete independent audit of all claims or all source material.

## PDF generation and validation

- MD authored first, transformed with Pandoc to HTML, then rendered to PDF with WeasyPrint 70
- Same source text, order, references and facts in MD and PDF; no summarization during conversion
- Narrow 135 × 210 mm portrait, one column, 12 pt body, generous line spacing
- Thai-capable Noto fonts embedded and Unicode mapping present, checked with `pdffonts`
- All pages rendered to images; full-pack contact sheets inspected for margins, clipping, line overlap, reference continuity and hierarchy; representative body, claim-ledger and decision pages inspected at approximately phone width
- A separate reviewer inspected summary page 1 and analysis page 17 at phone width and found the Thai readable with no visible clipping or overlap in those sampled pages
- Knowledge summary: 11 pages, 52 PDF links
- Research and analysis: 26 pages, 105 PDF links
- Every expected source-link destination appears in PDF annotations; every reference ID appears in extracted text
- Automated text-block bounding checks found no overflow; no replacement characters found
- Text extraction comparison is above 99.6% after whitespace/punctuation normalization; remaining Thai extraction differences include shaped sara-am/nikhahit decomposition. Visual Thai glyph checks remain the authority for readable output
- No wide tables, tiny source footnotes or scene-ready artwork are included

## Publication and preservation checks

Publication readback and the verified artifact commit are recorded in WORKFLOW_STATUS. Main/site code, unrelated demo and repository history must remain unchanged. Drive PDFs must match GitHub canonical bytes. The two Library PDFs are separate owner reading copies; filename suffixes in Library resolve prior-name collisions and do not represent additional current repository versions.

No website `QA_PASS` or public 3D build is claimed. `READY_FOR_BUILD` means the documentation handoff is ready, with the explicit LEG-01 preservation exception; it does not mean a website exists.

## Post Gate 2 story and script checks

- Owner approved thesis 1, using production-input examples from option 2 in the middle. Publication to the assignment Drive folder and public working branch was explicitly authorized separately
- Story S00–S08 totals 570 seconds (9:30), with 6,232 spoken characters and rehearsal-dependent timing. It starts from a hypothetical THB3,000 shoe purchase; it does not assert Thai availability
- Full Thai narration was prepared as DOCX, title sanitized, rendered with the shared document renderer, and visually checked. Mixed Thai/Latin font fallback defects were corrected before native import
- The native Google Doc was read back, confirming all nine scene IDs, complete speech/cues, source hyperlinks and owner-folder placement. Its actual PDF export was downloaded and all 15 pages rendered/visually checked; pagination differs from the local DOCX but content remains complete and readable
- 04 and 05 include a complete matching interaction map, scene-specific composition/edge checks, meaningful 3D travel and stable holds, minimal English text, no persistent navigation chrome, desktop-only scope, Space/R behavior, motion/reduced-motion tests, public Vercel production delivery, accepted Google Doc or Word 06_SCENE_RATIONALE formats, 07_WEB_QA_REPORT.md, factual script ownership, and the durable Build–QA fix/retest exchange
- One real source image is selected, downloaded at 1000×562 and opened to check identity/legibility. It is a dated Google published product illustration, not a live screenshot; source and crop limits are in references and 04
- TRM chart JSON contains exact source values, denominator and uncertainty limits. No generated scene artwork or website code was created for this assignment
- Parent sampled 03 and 05 and found them coherent with the approved thesis and independent acceptance criteria. This is a limited handoff review, not web QA

## Legacy safety exception

No old website code or assets were removed or changed. Main is preserved at its original commit; unrelated seed-to-canopy remains unchanged. Read-only checks found no tracked .github/.vercel configuration and no status checks on the base commit; Vercel returned no teams. Because this does not conclusively rule out external production hooks, legacy cleanup is deferred and labeled LEG-01 for the later builder to reconcile safely. This is an explicit exception to the master's early branch reset requirement, not a completed reset.
