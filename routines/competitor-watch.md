# Routine — Competitor Watch (WEEKLY)

> **Runbook for the scheduled agent.** Prepends a new dated entry to the top of
> `08-competitor-watch-log.md` (newest-first log) summarizing real, cited changes since the last entry.

## Inputs
- `08-competitor-watch-log.md` — read the **most recent entry's date**; that's the "since" boundary.
- `02-competitor-research.md` — the baseline teardown (what we already know per competitor).
- `01-positioning-and-messaging.md` — to frame implications against our wedge.
- **Live web research** (WebSearch / WebFetch) — this routine requires the network.

## Who to scan each run
1. **GitHub Agent HQ / Copilot coding agents** — the biggest strategic threat. New agentic-review / multi-agent / pre-PR scanning features.
2. **CrewAI** — funding, pricing, mindshare (GitHub stars, downloads), enterprise motion.
3. **ClickUp** — any move toward AI/agent dev workflows.
4. **Paperclip** and **Qodo** — feature/positioning changes.
5. **Market signals** — agent-PR-volume / review-overload stories usable as external proof for our thesis.

## Steps
1. Resolve today's date. Read the last log entry to know what's already captured.
2. For each target, web-search for changes **since the last entry's date**: funding rounds, pricing changes, new features, notable mindshare numbers, strategic announcements. Prefer primary/dated sources.
3. **Verify before writing.** Only include changes you can cite with a working link. If nothing material changed for a competitor, say so explicitly ("no material change this cycle; re-verify next run") — don't pad.
4. **Prepend** a new `## YYYY-MM-DD` section to the top of `08-competitor-watch-log.md`, matching the existing format: bolded competitor name → bullet of the change → `*Implication:*` line → `Sources:` with markdown links.
5. End the entry with an updated **"Implications for RunHQ positioning"** list (what to push/avoid given what changed).

## Guardrails
- Cite every factual claim with a link. Mark anything uncertain as `⚠️ unverified`.
- Keep the strategic lens: how does each change affect our wedge (starts-from-**feedback**, **cross-stack**, the **self-evolve loop**)?
- Don't rewrite or delete older entries — append-on-top only.

## Finish
Commit with message `Competitor watch: YYYY-MM-DD` and push to `main`.
