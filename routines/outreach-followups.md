# Routine — Outreach Follow-ups (DAILY)

> **Runbook for the scheduled agent.** Produces/refreshes `outreach-followups/YYYY-MM-DD.md`:
> a per-lead list of which outreach action is **due today**, with a personalized draft for each.
> This is the only routine that runs daily, because follow-ups are date-driven (+3 / +7 days).

## Inputs
- `lead-tracker.csv` — the source of truth for leads and their stage/dates.
- `05-outreach-kit.md` — cold templates (1–4), follow-up cadence, demo flow.
- `outreach-followups/` — prior days' files (for context; don't repeat an identical draft you sent yesterday).
- `01-positioning-and-messaging.md` §8 voice & §9 glossary.

## Steps
1. **Resolve today's date** → output file is `outreach-followups/YYYY-MM-DD.md`. If it already exists, overwrite it with a fresh computation (idempotent).
2. **Parse `lead-tracker.csv`.** Skip the header, the `#` comment lines, and the "Example row" (`Jane Doe`). If **no real leads remain**, write the reusable stage-by-stage template (mirror the structure of `outreach-followups/2026-06-02.md`) plus a one-line note that there are no live leads yet, and stop.
3. **For each real lead, compute the due stage** from `status` + dates vs. today:

   | Condition | Action |
   |---|---|
   | `status` = prospect/contacted **and** no `outreach_sent_date` | **Stage 0** cold intro — pick variant by `segment`/`signal_personalization` (0a pain-led default; 0b feedback; 0c indie; 0d community) |
   | contacted, `outreach_sent_date` + **3d** ≤ today, `replied`=no, no `followup_1_date` | **Stage 1** bump (15-sec demo) |
   | contacted, `outreach_sent_date` + **7d** ≤ today, `replied`=no, no `followup_2_date` | **Stage 2** final bump → then mark to move to `nurture` |
   | `replied`=yes, no `demo_booked_date` | **Stage 3** demo nudge (offer 2 slots) |
   | `demo_done`=yes, no `trial_started`, demo was **today** | **Stage 4** post-demo recap + paid-trial ask |
   | `demo_done`=yes, no `trial_started`, demo + **3d** ≤ today | **Stage 5** trial nudge |
   | `trialing`, `trial_started` + **7d** ≤ today | **Stage 6** trial → paid |

   A lead with no due action today is omitted (don't pad the file).
4. **Draft each due message.** Use the exact stage copy from `outreach-followups/2026-06-02.md` / `05-outreach-kit.md` as the base, then **fill every `{placeholder}` from the CSV** (`name`→first name, `company`, `signal_personalization`→specific signal, `channel`, etc.). Any placeholder you can't fill from the data, leave as `{placeholder}` and list it under a per-lead **"Fill before sending"** line. Personalize the first line — never a generic mass-blast.
5. **Top of file:** a short "Due today" summary table — `name · company · channel · stage · why-now (date math)`. Then one section per lead with the ready-to-send draft.
6. **End of file:** the per-lead tracking reminder (which CSV columns to update after sending), and flag any leads whose dates look stale/inconsistent.

## Guardrails (non-negotiable)
- Voice: founder-to-founder, direct, no fluff, lead with the pain.
- Pair the **self-evolve** vision with the **feedback → reviewed PR** proof.
- **A human reviews and approves every PR** — never imply a fully unattended/autonomous loop.
- Quality > volume. Never invent a `{specific_signal}` — if it's not in the CSV, leave the placeholder.

## Finish
Commit with message `Outreach follow-ups: YYYY-MM-DD (N leads due)` and push to `main`.
If nothing changed vs. the existing file, still commit only if content differs; otherwise skip the commit and log "no change."
