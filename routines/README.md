# Routines — Automation for the RunHQ marketing workspace

These runbooks define the **recurring, automatable work** in this workspace. Each is executed by a
**scheduled cloud agent** (a cron routine) that reads the runbook, regenerates its artifact, commits,
and pushes to `main`. The runbook is the source of truth — edit the `.md` here to change what the
agent does; no need to touch the schedule.

## Schedule

All routines run as remote cloud agents on **Opus 4.8** (`claude-opus-4-8`).

| Routine | File | Cadence | Output |
|---|---|---|---|
| Lead sourcing | [`lead-sourcing.md`](lead-sourcing.md) | **Daily 7:00 AM** | append real prospects to `lead-tracker.csv` |
| Outreach follow-ups | [`outreach-followups.md`](outreach-followups.md) | **Daily 8:00 AM** | `outreach-followups/YYYY-MM-DD.md` |
| Content drafts | [`content-drafts.md`](content-drafts.md) | **Weekly (Mon)** | `content-drafts/YYYY-Www.md` |
| Competitor watch | [`competitor-watch.md`](competitor-watch.md) | **Weekly (Mon)** | prepend to `08-competitor-watch-log.md` |
| Metrics digest | [`metrics-digest.md`](metrics-digest.md) | **Weekly (Fri)** | prepend to `09-metrics-digest.md` |

Lead sourcing runs at 7 AM so fresh prospects exist when outreach drafts run at 8 AM. Outreach is daily
because follow-ups are date-driven (+3 / +7 days). The other three change on a weekly rhythm, so daily runs
would just produce noise.

> ⚠️ **This repo is public** — anything the agents commit (including sourced leads' names/handles) is
> publicly visible. Sourced leads are public-signal-only, capped, cited, and flagged for human verification
> before contact. Consider making the repo private if you'd rather not expose the lead list.

## What still needs you (not automatable)

The agents produce the **written assets**. These steps need your accounts / human action:
- **Keep the data current** — the routines are only as good as the inputs:
  - Log every send + reply in `lead-tracker.csv` → powers the daily outreach routine.
  - Paste ad + funnel actuals into `metrics-dashboard.csv` → powers the weekly digest.
- Launch / optimize the Reddit + Meta ad campaigns (ad account, budget, billing).
- Actually send the outreach messages and book/run demos.
- Record the 15-sec video; create the Capterra vendor account + submit the listing.

## Managing the routines

- **List / pause / edit / delete** scheduled agents: use the `/schedule` command (or ask Claude).
- **Change behavior:** edit the runbook `.md` in this folder and push — the next run picks it up.
- **Run one now (manual):** trigger the routine from `/schedule`, or open the workspace in Claude Code
  and say e.g. "run the metrics-digest routine."
