# Routine — Social Content (DAILY)

> **Runbook for the scheduled agent.** Generates that day's platform-native social posts for **X, LinkedIn,
> Reddit, Facebook, and (when due) YouTube** into `social-content/YYYY-MM-DD.md`, ready for a human or a
> connected publisher to post. This routine **stages content only — it never posts** (no platform credentials
> live in this public repo). See `11-social-playbook.md` for strategy and `routines/README.md` for the schedule.

## Inputs
- `11-social-playbook.md` — content pillars, per-platform cadence/format, the subreddit playbook, growth tactics.
- `01-positioning-and-messaging.md` — messaging matrix (A–I), voice §8, glossary §9, honesty guardrail §1c.
- The **most recent** `08-competitor-watch-log.md` entry — fresh, shareable market-proof hooks.
- The **last 3–5** files in `social-content/` and the latest `content-drafts/` — so today's posts don't repeat recent hooks.
- Optional: `WebSearch`/`WebFetch` for a timely, real news hook (only cite real, verifiable items — never invent).

## Steps
1. Run `date +%F` for today → output `social-content/<DATE>.md`. If it exists, overwrite (idempotent for the day).
2. Read the inputs; note hooks/angles used in the last few days so today is fresh.
3. Produce **today's posts**, platform-native (see playbook §1–2):
   - **X** — 1–2 posts (and ~1 thread every few days). Hook-first, ≤280 chars/post, build-in-public or thesis/POV; pair vision with proof.
   - **LinkedIn** — 1 founder-narrative post (longer-form, story-led).
   - **Reddit** — 1 *value-first* post for **one** subreddit, **rotating** across r/ClaudeCode, r/SaaS, r/startups, r/indiehackers, r/SideProject, r/webdev, r/programming (pick the best fit for today's angle; respect that r/webdev & r/programming are promo-strict and r/startups wants the "Share Your Startup" thread). Include: target subreddit, a maker-disclosure line, and a one-line rules reminder. **Submissions stay sparse** — if the same sub was posted to in the last few days, prefer a comment/engagement suggestion instead of a new submission.
   - **Facebook (Page)** — 1 short post, repurposed from the X/LinkedIn angle.
   - **YouTube** — only when due (~1–2×/wk): a short demo idea + title + 1-paragraph description + tags + a 5–8 line script outline. Otherwise note "no YouTube today."
4. **★ X Engagement Queue (the growth centerpiece — replies drive follower growth more than posting).** Produce **4–6 ranked, real reply opportunities** for today. For each: the **target** (account/handle or thread), the **source link**, **why it's worth a reply** (relevance/size), and a **drafted, ready-to-personalize reply** (1–3 sentences, value-first, no link, opinion or genuine question — NOT a pitch). Source targets from, in priority order:
   - **Hacker News** (fetch-friendly): query the Algolia API for today's/this-week's active threads on Claude Code, Cursor, coding agents, code review, "verification debt" (e.g. `https://hn.algolia.com/api/v1/search_by_date?query=claude%20code&tags=story`); verify the item is real + recent.
   - **The watchlist in `11-social-playbook.md` §7** (accounts + keyword searches): for X targets you can't fetch, output the **exact X search to run** + the account + a drafted reply angle, so the human opens X and replies in seconds.
   - **`lead-tracker.csv`** — 1–2 leads whose recent public work is worth a genuine (non-pitch) reply to build the relationship.
   Rank by opportunity (relevance × reach). Label each `[HN]`, `[X]`, or `[lead]`. **Never fabricate a post, handle, or quote** — if you can't verify a target, give the *search to run* instead of inventing one. Note that the human personalizes + posts manually (we never auto-post replies).
5. Header note: the angle(s) covered + confirmation hooks differ from recent days.

## Guardrails (non-negotiable)
- Voice: senior-engineer-direct, lead with the pain, concrete > abstract, never overclaim.
- Every **vision** hook paired with the **feedback → reviewed PR** proof; **a human approves every PR** — never imply full autonomy.
- **Never fabricate** metrics, testimonials, or news — insert `*(fill with real numbers before posting)*` where needed.
- Maker-disclosed + value-first on Reddit; never the same copy across subs/platforms.
- Flag unverified product claims with `⚠️ VERIFY`.

## Finish
`git add social-content/<DATE>.md`, commit `Social content: <DATE>`, push to `origin main`.
(Run `git pull --rebase origin main` before pushing; if rejected, pull --rebase and retry once.)
