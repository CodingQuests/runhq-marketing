# Routines — Automation for the RunHQ marketing workspace

These runbooks define the **recurring, automatable work** in this workspace. Each is executed by a
**scheduled cloud agent** (a cron routine) that reads the runbook, regenerates its artifact, commits,
and pushes to `main`. The runbook is the source of truth — edit the `.md` here to change what the
agent does; no need to touch the schedule.

## Schedule

| Routine | File | Cadence | Output |
|---|---|---|---|
| Outreach follow-ups | [`outreach-followups.md`](outreach-followups.md) | **Daily** | `outreach-followups/YYYY-MM-DD.md` |
| Content drafts | [`content-drafts.md`](content-drafts.md) | **Weekly (Mon)** | `content-drafts/YYYY-Www.md` |
| Competitor watch | [`competitor-watch.md`](competitor-watch.md) | **Weekly (Mon)** | prepend to `08-competitor-watch-log.md` |
| Metrics digest | [`metrics-digest.md`](metrics-digest.md) | **Weekly (Fri)** | prepend to `09-metrics-digest.md` |

Outreach runs daily because follow-ups are date-driven (+3 / +7 days). The other three change on a
weekly rhythm, so daily runs would just produce noise.

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
