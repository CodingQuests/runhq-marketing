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

## Automation

The recurring work is run by **scheduled cloud agents** — see [`routines/`](routines/) for the runbooks
and schedule. They regenerate four artifacts on a cron and commit to `main`:

- **Daily:** social content (`social-content/` — X/LinkedIn/Reddit/FB/YouTube posts) → lead sourcing (appends real prospects to `lead-tracker.csv`) → `outreach-followups/` (per-lead, date-driven follow-up drafts)
- **Weekly:** `content-drafts/`, the competitor watch log (08), and the metrics digest (09)

Social **content** is generated automatically; **posting** is not (no platform credentials live in this public repo) — see `11-social-playbook.md` §6.

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

All product specifics here are built from the **positioning in the plan doc** (RunHQ = "operations layer for AI coding agents"; feedback → agent-ready tasks → reviewed PRs → preview envs → shipped updates), because runhq.io is JS-rendered and not machine-readable. **Review every product claim for accuracy before publishing.** Anything I'm unsure about is flagged `⚠️ VERIFY`.
