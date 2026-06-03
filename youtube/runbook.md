# Runbook — YouTube Content (Higgsfield via MCP)

> The in-session operating procedure. Because the Higgsfield MCP needs an interactive login, **generation is
> driven by Claude in a live session — it does NOT run as a headless cloud routine.** Only the brief-writing
> half is automatable (§5).

## Preconditions
- Higgsfield account on **Creator+** (no watermark, commercial rights) with **credits available**.
- MCP connector live: `Higgsfield` → `https://mcp.higgsfield.ai/mcp` (claude.ai → Connectors). See `README.md` §setup.
- Briefs/prompts/metadata staged: `content-plan.md`, `higgsfield-prompts.md`, `metadata-templates.md`.

## Per-session steps (Claude drives)
1. **Confirm tools** are reachable via the connector; if absent, stop and tell the user to reconnect.
2. **Pick the batch** from `content-plan.md` §2/§3 (respect freshness — no near-duplicate hooks back-to-back).
3. **Generate, one item at a time** (credit discipline): paste each spec from `higgsfield-prompts.md` into the matching MCP tool.
4. **Poll** each job to completion (`queued → processing → completed/failed`). On `failed`: retry **once**; if it fails again, log it and move on — don't burn credits looping.
5. **Run Virality prediction** on Shorts; keep the top-scoring variant only.
6. **Stage outputs** to `youtube/renders/<item-slug>/` (gitignored) and record what was made + credits spent in a session note.
7. **Hand off:** point the user to `metadata-templates.md` for each clip's upload metadata and the upload checklist.

## Credit budget (Creator ≈ 500 credits/mo)
- Target **~1–2 finished videos/week**; reserve credits for one regeneration per item, not endless retries.
- Prefer **short durations + standard resolution** for drafts; only upscale a clip you've decided to publish.
- If a session would exceed ~⅓ of monthly credits, pause and confirm with the user first.

## Guardrails (non-negotiable — same as `01` §1c/§8)
- Never ship a clip with **fabricated product UI or metrics**; any rendered "UI" is `⚠️ VERIFY` until the user confirms it matches the real product.
- Every **vision** hook paired with the **feedback → reviewed PR** proof; **a human approves every PR** — never imply full autonomy.
- The user reviews **every** clip before upload. Claude never uploads (manual-upload model).

## §5 — Automating the brief-writing half (optional, later)
The generation can't be a cloud routine, but **drafting the briefs** (new video concepts + Higgsfield prompts + metadata) can — exactly like `routines/social-content.md`. If wanted:
- Add `routines/youtube-briefs.md` that reads `content-plan.md`, the latest `08-competitor-watch-log.md`, and `09-metrics-digest.md`, then appends a fresh weekly batch of specs/metadata here for the next live generation session.
- ⚠️ Wire it to the schedule **only after** the known cloud-routine push blocker is resolved (Claude GitHub App + branch-push permission — see the `marketing-automation-routines` memory). Until then it would generate but fail to push, same as the others.
