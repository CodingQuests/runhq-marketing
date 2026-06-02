# Routine — Content Drafts (WEEKLY)

> **Runbook for the scheduled agent.** Produces a fresh batch of organic + ad copy for the
> current ISO week at `content-drafts/YYYY-Www.md` (e.g. `2026-W23.md`).

## Inputs
- `01-positioning-and-messaging.md` — messaging matrix (angles A–I), voice §8, glossary §9, honesty guardrail §1c.
- The **most recent** `08-competitor-watch-log.md` entry — pull this week's fresh proof points / market signals.
- `04-organic-posts.md` — the baseline posts; new hooks must **differ** from these.
- The **last 1–2** files in `content-drafts/` — do not reuse hooks/titles already shipped.
- `09-metrics-digest.md` (latest) — if a `best_performing_angle` is recorded, weight the batch toward it.

## Steps
1. **Resolve the current ISO week** → filename `content-drafts/YYYY-Www.md`. If it already exists, append a new dated sub-batch under a `## Refresh — <date>` heading rather than overwriting.
2. Read the inputs above. Note which angles + hooks already appeared in the last batch so this one is genuinely fresh.
3. **Produce the batch**, spread across the matrix (cover vision G–I **and** mechanism A–F, B/C proof angles):
   - **Reddit** — 3 value-first posts (title + body). Disclose you're the maker. Make them discussion/learning, not ads.
   - **LinkedIn** — 3 founder-narrative posts.
   - **X/Twitter** — 3 (mix of single hooks + one short thread).
   - **Meta ads** — 2 (headline + primary text + CTA), each pairing a vision hook with a concrete proof line.
4. Where this week's competitor-watch entry surfaced a usable external proof point (e.g. the "~17M agent PRs / kill switch" story), work it into at least one Reddit + one LinkedIn/X piece.
5. **Header note:** one line stating the angles covered and that hooks differ from `04-organic-posts.md` and prior weeks.

## Guardrails (non-negotiable)
- Voice: senior-engineer-direct, lead with pain, concrete > abstract, never overclaim.
- Every **vision** hook ("self-evolving") must be paired with the **feedback → reviewed PR** proof in the same piece.
- **A human reviews/approves every PR** — never imply a fully autonomous loop.
- Flag any product-specific claim that isn't yet verified with `⚠️ VERIFY`.
- For posts needing real numbers (e.g. before/after metrics), insert a `*(fill with real numbers before posting)*` note — don't fabricate stats.

## Finish
Commit with message `Content drafts: YYYY-Www` and push to `main`.
