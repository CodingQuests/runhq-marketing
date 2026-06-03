# RunHQ — 2-Week Marketing Workspace

Working assets for the 2-week roadmap (goal: **5 paying customers**, set up first repeatable acquisition channels).
Source plan: `2 week plan RunHq.docx`.

## Index

| # | File | What it is | Status |
|---|------|-----------|--------|
| 01 | `01-positioning-and-messaging.md` | Positioning statement, messaging matrix, value props, objection handling | ✅ Drafted |
| 02 | `02-competitor-research.md` | Teardown of ClickUp, CrewAI, Paperclip + differentiation table | ✅ Drafted |
| 03 | `03-ad-creatives.md` | Reddit + Meta ad concepts (headline/body/CTA variations) | ⏳ Next |
| 04 | `04-organic-posts.md` | Reddit / LinkedIn / X post drafts | ⏳ |
| 05 | `05-outreach-kit.md` | Cold outreach templates + follow-up sequences | ⏳ |
| 05 | `lead-tracker.csv` | Lead / metrics tracking sheet | ⏳ |
| 06 | `06-video-script.md` | 15-sec homepage video script + shot list | ⏳ |
| 07 | `07-capterra-listing.md` | Capterra listing copy + category research | ⏳ |
| 08 | `08-competitor-watch-log.md` | Running competitor/market watch (newest on top) | 🔁 Automated (weekly) |
| 09 | `09-metrics-digest.md` | Weekly funnel read vs. the 5-customer goal | 🔁 Automated (weekly) |
| 10 | `10-outreach-comparison.md` | Our outreach vs. Tembo / Superset / Linear + what to steal | ✅ Drafted |
| 11 | `11-social-playbook.md` | Social growth strategy: pillars, per-platform cadence, subreddit playbook | 🔁 Feeds daily social routine |
| 12 | [`youtube/`](youtube/) | YouTube content system — Higgsfield-generated ad/promo, intros, avatar explainers, Shorts (MCP-driven, manual upload) | 🆕 Drafted |
| 13 | `13-linkedin-growth.md` | LinkedIn company-page growth playbook: page setup, pillars, weekly slot grid, 45-min engagement engine, scheduler publishing | 🔁 Feeds daily LinkedIn routine |
| — | [`linkedin/`](linkedin/) | Daily LinkedIn output: ready-to-post pieces + engagement plan + scheduler import CSV (`linkedin/import/`) | 🔁 Automated (daily) |

## Automation

The recurring work is run by **scheduled cloud agents** — see [`routines/`](routines/) for the runbooks
and schedule. They regenerate four artifacts on a cron and commit to `main`:

- **Daily:** social content (`social-content/` — X/Reddit/FB/YouTube posts) → **LinkedIn content** (`linkedin/` — 1 company-page post/day + personal reshare + engagement plan + scheduler import) → lead sourcing (appends real prospects to `lead-tracker.csv`) → `outreach-followups/` (per-lead, date-driven follow-up drafts)
- **Weekly:** `content-drafts/`, the competitor watch log (08), and the metrics digest (09)

Social/LinkedIn **content** is generated automatically; **posting** is not (no platform credentials live in this public repo). LinkedIn publishes via a **scheduler you connect once** (Typefully/Buffer/Publer) — see `13-linkedin-growth.md` §7; other platforms see `11-social-playbook.md` §6.

**YouTube** content uses **Higgsfield** via its MCP connector — driven **interactively in a session** (the MCP needs an interactive login, so it can't run as a headless routine) and **uploaded manually**. It *complements* the screen-recorded demos, it doesn't replace them. System + setup: [`youtube/`](youtube/).

Agents run on **Opus 4.8** and produce/stage the assets; **you still verify each sourced lead before
contacting**, keep `metrics-dashboard.csv` current, run the ads, send the outreach, and run the demos.

## Division of labor

**I produce (in this workspace):** all written assets above — copy, scripts, templates, research, trackers.

**You execute (needs your accounts / human action):**
- Launch the Reddit & Meta ad campaigns (ad account + budget + billing)
- Send the 100–150 outreach messages (your email / LinkedIn / DMs)
- Book and run demos
- Record the 15-sec video (I write the script & shot list)
- Create the Capterra vendor account & submit the listing

## Important caveat

Product specifics here were originally built from the **positioning in the plan doc** (RunHQ = "operations layer for AI coding agents"; feedback → agent-ready tasks → reviewed PRs → preview envs → shipped updates), because runhq.io is JS-rendered and not machine-readable.

**Verified against the live homepage 2026-06-03.** The reconstruction held up: the site's "Every release walks the same loop" maps 1:1 to our 01→04 loop (Collect feedback → Assign agents *in parallel* → Review PRs → Test + Deploy preview envs), it's a hosted SaaS ("Start free" / "live in 60 minutes" / cancel anytime), and BYO agent = Claude Code / Cursor / Codex on GitHub + Vercel. Product-claim `⚠️ VERIFY` flags in `01`, `02`, `10` have been cleared accordingly.

**Still unconfirmed / internal-only:** the live site does **not** use the "self-evolving" vision line (keep it internal for now); Devin / Linear integrations are not shown on the site (drop unless confirmed). **Real customer logos on the site** (usable as social proof, light verification recommended): **jeju.com, smartbid.ai, socialrealtr.com**. Hero stat to reuse: **5 → 19 shipped** on the same feedback volume with parallel agents.

The other `⚠️ VERIFY` / "VERIFY before sending" markers in `youtube/`, `lead-tracker.csv`, and `outreach-followups/` are a **different rule** (don't fabricate UI in generated video; confirm a lead's identity before contacting) and stay in place.
