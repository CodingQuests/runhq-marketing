# Routine — Metrics Digest (WEEKLY)

> **Runbook for the scheduled agent.** Prepends a new dated read to the top of
> `09-metrics-digest.md` (newest-first), measuring the funnel against the goal: **5+ paying customers**.

## Inputs
- `metrics-dashboard.csv` — targets + actuals (`week1_actual` / `week2_actual` / `running_total`).
- `lead-tracker.csv` — per-lead statuses/dates (the raw funnel).
- The **previous** `09-metrics-digest.md` entry — to compute week-over-week deltas.

## Steps
1. Resolve today's date. Read both CSVs and the prior digest.
2. **If there are still no actuals** (dashboard actuals blank + only the example lead): write a baseline entry — restate targets, list exactly which columns to start logging, and the funnel math to hit the goal. (Mirror the `2026-06-02` entry.)
3. **If actuals exist**, compute and report:
   - **Funnel:** outreach sent → replies → demos booked → demos done → trials → paid. Show counts + conversion rate at each step.
   - **Vs. target:** actual vs. `week1_target`/`week2_target` for each metric; flag anything off-pace.
   - **The number to protect:** demo→paid rate vs. the **~28%** needed to clear 5 customers from ~18 demos. Call out if it's below.
   - **Best-performing angle/audience** from the dashboard fields and lead `utm_campaign` — which messaging angle (A–I) is driving qualified clicks/demos.
   - **Ad efficiency** if `ad_spend`/`ad_clicks` present: cost-per-click, and cost-per-demo if derivable.
   - **Week-over-week deltas** vs. the prior digest.
4. **Prepend** a `## YYYY-MM-DD` section matching the existing format: a targets/status table, a "Read" narrative, and **Top 2–3 recommendations** (concrete, prioritized).

## Guardrails
- Don't invent numbers. If a field is blank, say "no data yet" and name the column to fill.
- Always tie the read back to the goal (5+ paid) and the binding constraint (usually demo→paid).
- Recommendations must be actionable this week (e.g. "kill angle X", "guard the paid-trial ask in Stage 4").

## Finish
Commit with message `Metrics digest: YYYY-MM-DD` and push to `main`.
