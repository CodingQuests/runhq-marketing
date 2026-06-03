# Routine — LinkedIn Content (DAILY)

> **Runbook for the scheduled agent.** Owns the **RunHQ company page** channel: each day it drafts that day's
> LinkedIn-native posts **and** the engagement plan, and writes a scheduler-ready import file. It **stages
> content only — it never posts** (no platform credentials live in this public repo). LinkedIn is handled here,
> NOT in `social-content.md` (that routine now skips LinkedIn). Strategy: [`13-linkedin-growth.md`](../13-linkedin-growth.md).

## Inputs
- [`13-linkedin-growth.md`](../13-linkedin-growth.md) — pillars (§3), formats (§4), the **weekly slot grid (§5)**, the engagement engine (§6), guardrails (§9).
- [`01-positioning-and-messaging.md`](../01-positioning-and-messaging.md) — messaging matrix (A–J), voice §8, glossary §9, honesty guardrail §1c.
- The **most recent** [`08-competitor-watch-log.md`](../08-competitor-watch-log.md) entry — fresh, shareable market-proof hooks.
- The **last 3–5** files in `linkedin/` — so today's hooks/openers don't repeat recent ones.
- [`lead-tracker.csv`](../lead-tracker.csv) — to build the day's engagement target list (warm list, §6 step 3).
- Optional: `WebSearch`/`WebFetch` for one timely, *real, verifiable* news hook (never invent).

## Steps
1. Run `date +%F` for today's `<DATE>` and `date +%u` for the weekday (1=Mon … 7=Sun). Output → `linkedin/<DATE>.md` and `linkedin/import/<DATE>.csv`. If they exist, overwrite (idempotent for the day).
2. Read the inputs. From `13-linkedin-growth.md` §5, pick **today's slot row** by weekday. Note hooks used in the last 3–5 days so today is fresh (no repeated openers).
3. Draft **today's single page post** per the slot grid, LinkedIn-native (apply §4 format rules):
   - **The post (1/day).** Strong scroll-stopping hook line; one idea; whitespace; **no link in body** (link goes in `first_comment`); 3–5 specific hashtags; a `media_hint` (carousel slide copy + cover brief / screenshot idea / clip from `youtube/`). Pair any vision hook with concrete proof. Use the day's pillar from §5; ~1×/wk make the post a **poll** (give the question + 3–4 options).
   - **Personal reshare angle** (NOT a second post — free amplification): the 1-line take the founder adds when resharing that page post to their **personal** profile within ~15 min (see §0).
4. Write the **"Engage today (45 min)"** block — concrete, real targets per `13-linkedin-growth.md` §6:
   - 5–8 fresh high-traffic posts/creators in the AI-coding niche to comment on (name them / give the search to find them; prefer real, current threads via WebSearch).
   - 3–5 warm-list people from `lead-tracker.csv` to engage value-first (no pitch).
   - A reminder: reply to every comment on RunHQ posts within 2h; reshare the page post from personal within 15 min; ≤20–25 connects/day, manual only.
5. Build `linkedin/import/<DATE>.csv` with header `date,time,page_or_personal,text,first_comment,media_hint,hashtags` — the page post → `page`, plus a `personal` row for the reshare angle. Quote/escape fields with commas. Use a weekday-morning time in the audience timezone. Keep `text` as the final post body (newlines as `\n` if the scheduler needs single-line).
6. Header note in the `.md`: today's slot row + pillars covered + confirmation the openers differ from recent days.

## Guardrails (non-negotiable)
- Voice: senior-engineer-direct, lead with the pain, concrete > abstract, never overclaim (`01` §8).
- Every **vision** hook paired with the **feedback → reviewed PR** proof; **a human approves every PR** — never imply full autonomy (`01` §1c).
- **Never fabricate** metrics, testimonials, customers, or news — insert `*(fill with real number before posting)*` where needed.
- Company-page reality: **don't over-stuff the page feed** — ≤1 strong page post/day in the prime slot; extra reach comes from the personal reshare + engagement, not more page posts (`13` §0, §5).
- No ToS-violating growth tactics (no auto-connect/DM tools, pods, follow churn). The routine only *drafts suggestions*; a human sends.
- Flag any unverified product claim with `⚠️ VERIFY`.

## Finish
`git add linkedin/<DATE>.md linkedin/import/<DATE>.csv`, commit `LinkedIn content: <DATE>`, push to `origin main`.
(Run `git pull --rebase origin main` before pushing; if rejected, pull --rebase and retry once.)

> ⚠️ **Known blocker (see memory `marketing-automation-routines`):** cloud routines currently 403 on push to
> `main`. Until the Claude GitHub App + unrestricted-branch-push fix is applied (or the routine is switched to a
> `claude/*` branch + PR), this runbook will generate locally but the artifact won't reach GitHub from the
> cloud — run it from an authenticated local session, or apply the fix.
