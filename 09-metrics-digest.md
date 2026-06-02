# RunHQ — Metrics Digest

> Weekly read on the funnel vs the goal: **5+ paying customers** in the 2-week push. Newest entry on top. Source: `metrics-dashboard.csv`, `lead-tracker.csv`.

---

## 2026-06-02

**Status: no data yet.** `metrics-dashboard.csv` has targets but **zero actuals**, and `lead-tracker.csv` has only the example row. So this first digest is a baseline + a precise list of what to start logging — next week's digest can then compute real deltas.

### Targets on record (from the dashboard)

| Metric | Wk1 target | Wk2 target | Goal |
|---|---|---|---|
| Outreach messages sent | 125 | 125 | 100–150/wk |
| Demos booked | 8 | 10 | 5–10 wk1, 5–15 wk2 |
| Paid customers closed | 1–2 | 3–4 | **5+ total** |
| Reddit + Meta ads | launched | optimized | — |

### What to paste in (so next week is real)
Fill these columns in `metrics-dashboard.csv` (use `week1_actual` / `week2_actual`):
- `outreach_messages_sent` — running count
- `ad_spend_usd`, `ad_clicks`, `ad_cost_per_click` — from the Reddit/Meta ad dashboards
- `signups`, `demos_booked`, `demos_done`, `trials_started`, `paid_customers_closed`, `mrr_usd`
- `best_performing_angle` — which messaging angle (A–I) is driving qualified clicks/demos
- `best_performing_audience`

And keep `lead-tracker.csv` updated per send/reply (status, dates, replied, demo_booked, etc.) — that's the only way to compute conversion rates.

### Read (with the data we have)
- **Funnel math to hit the goal:** at the booked-demo target (~18 demos over 2 weeks) you need roughly a **~28% demo→paid** rate to clear 5 customers. That's the number to protect — track demo→paid above all.
- **Leading indicator to watch first:** qualified-click rate by angle. The competitor scan surfaced a strong external proof point (the "~17M agent PRs / review overload" story) now baked into the W23 drafts — watch whether angle **B** (after-the-code) and the self-evolve hooks **G–I** out-pull the others.

### Top 2 recommendations
1. **Instrument before you scale spend.** Don't optimize ads blind — get `ad_clicks` + `demos_booked` flowing into the CSV this week so we can kill losing angles fast.
2. **Guard the demo→paid step.** Booked demos are on-target in the plan; the risk is conversion. Make sure every demo ends with the explicit paid-trial ask (Stage 4 in `outreach-followups/`).
