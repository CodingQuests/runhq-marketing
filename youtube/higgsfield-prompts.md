# RunHQ — Higgsfield Generation Specs

> The exact specs I feed Higgsfield's MCP tools for each starter-batch item (`content-plan.md` §2).
> ⚠️ **Tool/parameter names are from Higgsfield's published MCP tool list — confirm the live names/params
> once the connector is connected; adjust prompts to match.** Keep generations short to conserve credits.

---

## Conventions

- **Aspect ratios:** 16:9 (main channel), 9:16 (Shorts / Meta Stories), 1:1 (Meta feed). Generate 16:9 first; reframe.
- **Captions:** burn-in on-screen text — assume muted autoplay (mirror `06-video-script.md`).
- **No fake UI:** when a shot implies the RunHQ product, prefer abstract/motion-graphic treatment over a fabricated screen. Real UI = screen capture, spliced in later. Any rendered "UI" is `⚠️ VERIFY`.
- **End card:** every clip ends on the RunHQ logo + a CTA from `metadata-templates.md`.

---

## 1. Intro sting (reusable) — `Cinematic image to video` (or text-to-video)
- **Input:** RunHQ logo PNG (transparent), if available; else text-to-video.
- **Prompt:** `Minimal, modern logo reveal for a developer tool called "RunHQ". Clean dark background, subtle motion, a single converging "loop" motif resolving into the logo. Crisp, premium, no clutter. 4 seconds.`
- **Params:** duration 4s · 16:9 · also export 9:16 · no audio (add music in edit).

## 2. Ad/promo — "After the code" (angle B) — `Marketing video generator`
- **Product URL:** `https://runhq.io`
- **Brief/prompt:** `B2B SaaS promo for RunHQ, the operations layer for AI coding agents. Hook: "Your AI agent finished the code. Now who reviews, tests, and ships it?" Show the after-the-code pain (a pile of unreviewed PRs), then RunHQ handling review → preview → ship. Technical, credible, fast cuts, on-screen captions, ends on logo + "Start free → runhq.io". Tone: senior-engineer-direct, no hype.`
- **Params:** ~15–20s · 16:9 + 9:16. ⚠️ VERIFY any product UI the tool renders.

## 3. Ad/promo — "Self-evolve + proof" (angle H) — text-to-video / `Marketing video generator`
- **Prompt:** `Promo for RunHQ. Open on the vision line "Your product, self-evolving." Immediately ground it with the mechanism: user feedback → agent-ready task → reviewed pull request → preview → shipped. Emphasize "reviewed, not just generated — a human approves every PR." Modern, confident, captioned. End: logo + "From feedback to shipped. runhq.io".`
- **Params:** ~15–20s · 16:9 + 9:16. **Guardrail:** the proof line is mandatory — never let the vision hook stand alone.

## 4. Avatar explainer — "The bottleneck moved" (angle A) — `Soul character training` → generate
- **Step A — train host (once):** create a Soul character from reference photos (your own, or a licensed/AI presenter you have rights to). Keep it consistent across all explainers.
- **Step B — script (≤60s, host VO):**
  > "Here's what changed: writing code stopped being the slow part. Claude Code, Cursor, Codex — they generate faster than any team can review, test, and ship. So the bottleneck moved *past* the code — to the work around the agent. That's the layer RunHQ runs: messy feedback becomes an agent-ready task, the agent's PR comes back reviewed, you preview it live, and you ship — you approving every step. Your AI writes the code. RunHQ runs everything around it."
- **Params:** 45–60s · 16:9 · captions on. ⚠️ ensure claims match shipped product before publish.

## 5. Short — "17M agent PRs" (pillar 1) — `Viral clip generator` + `Virality prediction`
- **Prompt:** `Vertical 9:16 hook clip for developers. Hook text on screen: "AI agents opened ~17M pull requests. Who's reviewing them?" Punchy, fast, captioned, builds to RunHQ as the answer (review → ship). 30–45s.`
- **After generating:** run **Virality prediction** on it; keep the top-scoring variant. **Only use the ~17M figure if the latest `08-competitor-watch-log.md` still cites it as verified** — else swap for a current verified stat or drop the number.
- **Params:** ≤60s · 9:16 · captions on.

## 6. Short — "Who reviews the agent's PR?" (angle B) — `Viral clip generator`
- **Prompt:** `9:16 hook clip. On-screen: "Your agent finished the code." → "Now who reviews, tests, and ships it?" → reveal RunHQ doing review + preview + ship. Snappy, captioned, ends on logo + "Early access → runhq.io". 20–30s.`
- **Params:** ≤30s · 9:16. Run Virality prediction; keep best.

## 7. B-roll pack — text-to-video (`Image & Video Generation`)
- **Prompts (one per clip, 3–4 loops):**
  - `Abstract flowing lines of code, dark theme, slow seamless loop, no text. 5s.`
  - `Two branches of a git graph merging into one, glowing node, minimal, loopable. 5s.`
  - `A soft "loop"/cycle motif — arrows completing a circle — modern, subtle, loopable. 5s.`
  - `Calm data/particle flow converging to a single point, premium tech aesthetic. 5s.`
- **Params:** 5s each · 16:9 · no text · no audio. Reusable underlay for demos/explainers.

## 8. Avatar explainer — "Stop translating feedback into tasks" (angle D) — reuse Soul host
- **Script (≤45s):**
  > "How many hours do you spend turning bug reports and user messages into dev-ready tasks? That translation is dead time. Paste the feedback into RunHQ — it produces an agent-ready task spec, your agent writes the fix, and the PR comes back reviewed and ready to preview. You stop translating. You start shipping."
- **Params:** ~45s · 16:9 · captions. ⚠️ VERIFY "paste feedback → task spec" reflects the real feature before publishing.
