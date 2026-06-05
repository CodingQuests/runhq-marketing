# RunHQ — Metrics Digest

> Weekly read on the funnel vs the goal: **5+ paying customers** in the 2-week push. Newest entry on top. Source: `metrics-dashboard.csv`, `lead-tracker.csv`.

---

## 2026-06-05

**Status: pipeline built, funnel still at zero.** Big change since last week — `lead-tracker.csv` went from 1 example row to **22 verified prospects** (all agent-sourced from HN/community). But every one is still at status `prospect`: **0 outreach sent, 0 replies, 0 demos, 0 trials, 0 paid.** And `metrics-dashboard.csv` actuals are still entirely blank. So we sourced the top of the funnel but haven't pushed anyone into it yet — no conversion rates to compute. The gate moved from *finding leads* to *sending the first touch*.

### Week 1 targets vs. actual (we're ~3 days into the 2-week push)

| Metric | Wk1 target | Actual to date | Status |
|---|---|---|---|
| Prospects sourced (tracker) | — | **22** (1 → 22, **+21 WoW**) | ✅ pipeline built |
| Outreach messages sent | 125 | **0 sent** (no data — fill `outreach_sent_date` / `outreach_messages_sent`) | 🔴 off-pace |
| Replies | — | 0 | ⚪ none yet |
| Demos booked | 8 | 0 | 🔴 off-pace |
| Demos done | — | 0 | ⚪ |
| Trials started | — | 0 | ⚪ |
| Paid customers closed | 1–2 | 0 | 🔴 (GOAL = 5+ total) |
| Reddit + Meta ads | launched | no data (`ad_spend_usd` / `ad_clicks` blank) | ⚪ unknown |
| Best angle / audience | — | no data yet (fill `best_performing_angle` / `_audience`) | ⚪ |

### The pipeline we built (raw funnel, top only)
- **Volume:** 22 prospects (3 added 06-02, 10 on 06-03, 4 on 06-04, 5 on 06-05). 100% `source=community`, 100% `utm_campaign=agent_sourced`.
- **Segment mix:** indie **11 (50%)**, ai-native **8 (36%)**, founder **3 (14%)**.
- **Contactability (the thing that gates sends):** email **6 (27%)**, hn-reply **9 (41%)**, x-dm **6 (27%)**, linkedin **1**. Only the 6 email contacts are reachable *today* without a profile/handle verification step — Ferris Lucas, Jake Gold, hemezh (Farfield), azurewraith (Statewright), thomask1995 (Terse), theahura (Nori).

### Read (tied to the goal)
- **The binding constraint this week is sends, not sourcing.** 22 prospects is enough raw material to hit the ~18-demo target *if* they convert — but 0 of 125 planned wk1 outreach has gone out and 0 of 8 wk1 demos are booked. Every day at 0 sends pushes the whole funnel (and the 5+ paid goal) right.
- **Demo→paid is still the number to protect downstream**, but we can't measure it yet — no demos done. The funnel math is unchanged: ~18 booked demos × **~28% demo→paid** clears 5 customers. Nothing to flag here until demos start landing.
- **No performance signal yet on angle/audience.** `best_performing_angle` is blank and no `ad_clicks` exist, so we can't say which of A–I is pulling. The 50/36/14 indie/ai-native/founder split is a *sourcing* mix, not a *conversion* signal — don't read it as "indie wins" until replies/demos exist.
- **Ad efficiency: no data yet** — `ad_spend_usd` and `ad_clicks` are blank, so cost-per-click and cost-per-demo are uncomputable. Fill those two columns to unlock it.
- **WoW delta:** prospects +21 (1 → 22); outreach sent 0 → 0; demos 0 → 0; paid 0 → 0. The improvement is entirely at the top of the funnel.

### Top 3 recommendations
1. **Send this week — start with the 6 emailable prospects.** Pipeline is no longer the bottleneck; the first touch is. Verify and send to Ferris, Jake, hemezh, azurewraith, thomask1995, theahura (Stage-1 in `outreach-followups/`), then log `outreach_sent_date` per lead so next digest computes a real reply rate. Goal for the week: move ≥15 of the 22 from `prospect` → `contacted`.
2. **Instrument before scaling.** Get `ad_spend_usd` + `ad_clicks` and `demos_booked` flowing into `metrics-dashboard.csv`, and tag `best_performing_angle` as soon as the first qualified clicks land — so we can kill losing angles fast instead of optimizing blind.
3. **Pre-load the demo→paid guard.** No demos yet, but bake the explicit paid-trial ask (Stage 4) into the booking flow now, so the first demos don't leak at the step that actually decides the 5+ goal.

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
