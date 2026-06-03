# RunHQ — YouTube Content Plan

> The recurring slate. Maps the **4 Higgsfield content types** to the social pillars (`11-social-playbook.md` §1)
> and a realistic cadence, then lists a **starter batch** of concrete concepts to generate first.
> Voice + guardrails inherit from `01-positioning-and-messaging.md`.

---

## 1. Content types → pillar → cadence

| Type | Serves pillar | Higgsfield tool(s) | Cadence | Notes |
|---|---|---|---|---|
| **Ad/promo clips** | Thesis / Loop (1,2) | Marketing video generator (from runhq.io URL) · text-to-video | 1–2/mo | AI cut of the 15-sec script (`06-video-script.md`); also reframe 1:1 / 9:16 for Meta + Shorts |
| **Intros + b-roll** | Brand wrapper | text-to-video · Cinematic image-to-video (animate the logo) | Once, then reuse | A 3–5s branded intro sting + a small b-roll library to top/tail screen demos |
| **AI avatar explainers** | Founder POV / Loop (2,4) | Soul character training → generate | 1–2/mo | A consistent "host" delivering an idea from the messaging matrix — no on-camera filming |
| **Vertical Shorts** | Thesis / Build-in-public (1,3) | Viral clip generator + Virality prediction | 1–2/wk | Hook-first ≤60s, auto-captioned; repurpose a demo moment or a hot take |

> The **demo** itself (screen capture) stays a human production task. Higgsfield content frames and amplifies it.

## 2. Starter batch (generate these first)

Each maps to an approved angle (`01` §5) and has a full spec in `higgsfield-prompts.md` + metadata in `metadata-templates.md`.

1. **Intro sting** — "RunHQ" logo reveal, 4s, modern/minimal. *(reusable asset, make once)*
2. **Ad/promo — "After the code"** (angle B) — AI promo from runhq.io: *"Your AI agent finished the code. Now who reviews, tests, and ships it?"* → RunHQ. 16:9 + 9:16.
3. **Ad/promo — "Self-evolve + proof"** (angle H) — vision hook + the feedback→reviewed-PR mechanism line. ⚠️ pair vision with proof.
4. **Avatar explainer — "The bottleneck moved"** (angle A) — host delivers the §2 core insight (code isn't the slow part anymore) in ~45–60s.
5. **Short — "17M agent PRs"** (pillar 1) — market-proof hook from the latest `08-competitor-watch-log.md`; *(use only the verified number)*.
6. **Short — "Who reviews the agent's PR?"** (angle B) — punchy vertical, ends on RunHQ + early-access CTA.
7. **B-roll pack** — 3–4 abstract loops (flowing code, a PR merging, a "loop" motif) to underlay demos/explainers.
8. **Avatar explainer — "Stop translating feedback into tasks"** (angle D) — host, pain-first, ~45s.

## 3. Sequencing

- **Week 1:** items 1 + 7 (reusable assets) + item 2 (first real ad). Validate quality/voice before scaling.
- **Ongoing:** rotate 1–2 Shorts/wk (items 5,6 + new hooks from competitor-watch) and 1–2 explainers/mo (items 4,8), refreshing ads against whichever angle `09-metrics-digest.md` flags as best-performing.
- Never ship two near-identical hooks back-to-back; mirror the social-content freshness rule.

## 4. Guardrails (non-negotiable)

- Lead with the pain; senior-engineer-direct; concrete > abstract.
- Every **vision** hook ("self-evolving") paired with the **feedback → reviewed PR** proof in the same clip; **a human approves every PR** — never imply full autonomy.
- **Never fabricate** metrics/testimonials — where a number is needed, hold for a real one (`⚠️ fill before publishing`).
- Flag any product-specific visual/claim not yet verified with `⚠️ VERIFY` (the AI may render UI that doesn't match the real product — that's a publish-blocker).
