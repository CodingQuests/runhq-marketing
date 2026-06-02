# Routine — Lead Sourcing (DAILY)

> **Runbook for the scheduled agent.** Finds **real, public, ICP-matching** prospects and appends them
> to `lead-tracker.csv` as `status=prospect`, each with a genuine personalization signal, a public
> contact channel, and a **source URL**. Runs daily at 7:00 AM (before the 8:00 AM outreach routine), so
> fresh prospects get a Stage 0 draft the same morning.
>
> ⚠️ **This repo is public.** Every lead added here becomes publicly visible. Source only from
> publicly self-published activity, cap volume, and flag every lead for human verification before contact.

## Inputs
- `lead-tracker.csv` — existing leads (for dedupe + the column schema).
- `05-outreach-kit.md` — the ICP definition + "who to target / sourcing ideas / qualify before sending".
- `01-positioning-and-messaging.md` — to judge fit and pick the angle that will resonate.
- **Live web research** (WebSearch / WebFetch) — this routine requires the network.

## ICP (qualify hard)
A prospect must show **both**: (a) they ship software, and (b) signs of using/feeling the pain of AI coding agents
(Claude Code, Cursor, Codex, Devin) or the review/ship bottleneck. Segments: technical founders of small
SaaS/AI-native products, indie hackers with active products, small AI-native teams, active members of
r/ClaudeCode and similar.

## Sources to sweep (vary across runs)
Reddit (r/ClaudeCode, r/cursor, r/ExperiencedDevs, r/SaaS, r/indiehackers), X/Twitter (posts about Claude
Code / Cursor / agent workflows, build-in-public founders), GitHub (active repos using agent tooling),
Show HN / Hacker News launches, Product Hunt launches, indie-hacker communities.

> **Prioritise reliably-fetchable sources** for a higher hit-rate: **Hacker News** (Show HN, "Who wants to
> be hired", launch threads + comments), **GitHub** (profiles, repos, READMEs), **Product Hunt**, and
> personal sites/blogs. Reddit / X / LinkedIn frequently **block automated fetching from a server**, so
> treat them as secondary and don't drop a real candidate just because its page won't fetch (see step 4).

## Steps
1. Run `date +%F` for today. Read `lead-tracker.csv`; build a dedupe set from existing `name`, `company`, `contact`, and any handle in `signal_personalization`/`notes`.
2. Read `05-outreach-kit.md` (ICP + sourcing) and `01-positioning-and-messaging.md`.
3. Web-search the sources above for **recent (last ~60 days)** public posts/profiles matching the ICP. For each candidate, try to **WebFetch the source URL** to confirm it's real and read the signal. **If the platform blocks the fetch** (common for Reddit / X / LinkedIn from a server), it is OK to rely on the **WebSearch result that surfaced the real URL** as evidence — but the lead MUST trace to a **real, linkable public item you actually found** (never a guessed or constructed URL/handle). Extract: name/handle, company/product, role, segment, the **specific public signal** (short quote/paraphrase + the URL), and the best **public** contact channel (`x-dm @handle`, `reddit-dm u/user`, `linkedin <profile-url>`, or an openly-listed public email — note the handle alone is usually enough to define the channel).
4. **Qualify + verify.** Include a lead ONLY if: it clearly matches the ICP, the signal is recent and genuinely personalizable, it **traces to a real public item you actually found** via search or fetch (not a constructed URL), and there is a usable public contact channel. Skip otherwise. **Never invent** a name, handle, company, signal, or email. Do **not** guess or hunt for private emails. Aim to return **at least 2–3** solid leads per run from the fetch-friendly sources; only return zero if you genuinely couldn't verify anyone.
5. **Dedupe** against existing rows. Drop anyone already in the tracker.
6. **Cap at 5 new leads per run** (quality > volume). Better 2 excellent leads than 5 weak ones. If fewer than 5 qualify, add fewer.
7. **Append** rows to `lead-tracker.csv` (do not rewrite existing rows). Column order:
   `date_added,name,company,role,segment,source,channel,contact,signal_personalization,status,outreach_sent_date,followup_1_date,followup_2_date,replied,demo_booked_date,demo_done,trial_started,paid_customer,mrr,utm_campaign,notes`
   - `date_added`=today · `status`=`prospect` · `replied`=`no` · `demo_done`=`no` · `trial_started`=`no` · `paid_customer`=`no` · `mrr`=`0` · `utm_campaign`=`agent_sourced`
   - leave the date columns blank
   - `notes` = `agent-sourced via <source> <today>; VERIFY identity + contact before sending; src: <url>`
   - **Quote any field that contains a comma** (e.g. the signal and notes) so the CSV stays valid.
8. Write a short run summary at the end of your turn: how many candidates considered, how many added, and why any were rejected.

## Guardrails (non-negotiable)
- Real, publicly-verifiable people only — if the source URL didn't resolve, don't add the lead.
- Never fabricate any field. Public contact channels only; never guess private emails.
- Quality > volume; hard cap 5/run.
- This routine **stages** leads only — it never sends outreach. A human verifies each before contact.

## Finish
`git add lead-tracker.csv`, commit as `Lead sourcing: <today> (+N prospects)`, then push to `origin main`.
Before pushing, run `git pull --rebase origin main` to avoid clobbering a concurrent routine; if the push is
rejected, `git pull --rebase origin main` and retry once. If zero leads qualified, skip the commit and log "no new leads."
