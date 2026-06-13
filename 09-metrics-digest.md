# RunHQ — Metrics Digest

> Weekly read on the funnel vs the goal: **5+ paying customers** in the 2-week push. Newest entry on top. Source: `metrics-dashboard.csv`, `lead-tracker.csv`.

---

## 2026-06-13

**Status: pipeline doubled again, funnel still flat at zero — and the clock is now the story.** `lead-tracker.csv` grew from **22 → 43 prospects** (+21 WoW, all agent-sourced from HN/community). But every single one is still `prospect`: **0 outreach sent, 0 replies, 0 demos booked, 0 demos done, 0 trials, 0 paid.** `metrics-dashboard.csv` actuals remain entirely blank. We are now ~11 days into a 2-week push and the funnel has not moved past sourcing for a second straight week. The bottleneck hasn't changed since 06-05 (it's still *the first send*) — what's changed is that we've spent another week not clearing it, and the window to hit 5+ paid is nearly gone.

### Week 2 targets vs. actual (~11 days into the 2-week push)

| Metric | Target (cumulative) | Actual to date | Status |
|---|---|---|---|
| Prospects sourced (tracker) | — | **43** (22 → 43, **+21 WoW**) | ✅ pipeline over-built |
| Outreach messages sent | ~250 (125 wk1 + 125 wk2) | **0 sent** (no data — fill `outreach_sent_date` / `outreach_messages_sent`) | 🔴 critically off-pace |
| Replies | — | 0 | ⚪ none yet |
| Demos booked | ~18 (8 wk1 + 10 wk2) | 0 | 🔴 critically off-pace |
| Demos done | — | 0 | ⚪ |
| Trials started | — | 0 | ⚪ |
| Paid customers closed | **5+ total** | 0 | 🔴 (GOAL = 5+; runway nearly out) |
| Reddit + Meta ads | launched → optimized | no data (`ad_spend_usd` / `ad_clicks` blank) | ⚪ unknown |
| Best angle / audience | — | no data yet (fill `best_performing_angle` / `_audience`) | ⚪ |

### The pipeline we built (raw funnel, top only)
- **Volume:** 43 prospects, +21 this week (06-08 through 06-12 adds). 100% `source=community`, 100% `utm_campaign=agent_sourced` — still zero ad-driven leads.
- **Segment mix:** indie **23 (53%)**, ai-native **16 (37%)**, founder **4 (9%)**. The mix tilted further toward indie/ai-native makers building agent-ops and PR-review tooling — well-matched to RunHQ's wedge, but this is a *sourcing* mix, not a conversion signal.
- **Contactability (the thing that gates sends):** email **8 (19%)**, hn-reply **16 (37%)**, x-dm **12 (28%)**, github **5 (12%)**, linkedin **2**. The 8 email contacts are reachable *today* without a handle-verification step: Ferris Lucas, Jake Gold, hemezh (Farfield), azurewraith (Statewright), thomask1995 (Terse), theahura (Tilework/Nori), B. Mert (Context Mode), Jimmy & Ray (Command Center) — up from 6 last week (+Context Mode, +Command Center).

### Read (tied to the goal)
- **The binding constraint is unchanged and now overdue: sends.** Sourcing is not the problem — 43 prospects is more than enough raw material for the ~18-demo target. The problem is that 0 of ~250 planned outreach has gone out across the *entire* push. Every metric downstream is 0 because the funnel was never opened. Doubling the prospect list a second week running adds no expected customers; it's motion at the top with no flow-through.
- **Demo→paid (the number to protect) is still unmeasurable** — 0 demos done. The math is unchanged: ~18 booked demos × **~28% demo→paid** clears 5 customers. But with 0 demos booked and ~3 days of the window left, the gating risk has shifted *upstream* of demo→paid: we can't protect a conversion step we haven't reached. Right now the goal is at risk from inactivity, not from leakage.
- **No performance signal on angle/audience.** `best_performing_angle` is blank and there are still 0 `ad_clicks`, so none of A–I can be ranked. All 43 leads share `utm_campaign=agent_sourced`; there's no campaign-level differentiation to read.
- **Ad efficiency: no data yet** — `ad_spend_usd` and `ad_clicks` blank, so cost-per-click and cost-per-demo are uncomputable. Fill those two columns to unlock it.
- **WoW delta:** prospects +21 (22 → 43); emailable contacts +2 (6 → 8); outreach sent 0 → 0; demos 0 → 0; paid 0 → 0. For the second week straight, the only movement is at the top of the funnel.

### Top 3 recommendations
1. **Stop sourcing. Send today — this is now urgent, not "this week."** The pipeline has been the non-bottleneck for two weeks; the first touch is the whole game. Send the 8 emailable prospects (Stage-1 in `outreach-followups/`) before adding a single new lead, then log `outreach_sent_date` per row so the next digest can finally compute a real reply rate. With ~3 days left, even a strong funnel can realistically only convert a handful — every day at 0 sends forecloses the 5+ goal further.
2. **Instrument the moment the first touch lands.** Get `outreach_messages_sent`, `ad_spend_usd` + `ad_clicks`, and `demos_booked` flowing into `metrics-dashboard.csv`, and tag `best_performing_angle` on the first qualified reply — so we can read what's working instead of optimizing blind. Right now we have zero observability past "prospect added."
3. **Pre-load the demo→paid guard now, before demos exist.** Bake the explicit paid-trial ask (Stage 4) into the booking/demo flow today, so the first demos — whenever they land — don't leak at the step that actually decides the 5+ goal.

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
