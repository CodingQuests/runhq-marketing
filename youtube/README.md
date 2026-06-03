# RunHQ — YouTube Content System (Higgsfield-driven)

> Goal: feed the channel with AI-generated **ad/promo clips, intros + b-roll, avatar explainers, and vertical Shorts**
> using **Higgsfield** — *complementing* (not replacing) the real screen-recorded product demos that YouTube's
> SEO/compounding role still depends on (`11-social-playbook.md` §2). Created 2026-06-03.

---

## The model (chosen 2026-06-03)

- **Generation = Higgsfield via its MCP connector**, driven **interactively in a Claude Code session** (I run the MCP tools; you trigger the session). The MCP needs an interactive login, so it **cannot run in the headless cloud routines** — only the *brief-writing* half can be automated (see `runbook.md` §5).
- **Plan = stay cheap.** MCP works on any Higgsfield plan with credits; **Creator (~$19–29/mo)** is the floor for **no watermark + commercial rights** (Free watermarks everything and grants no commercial use). API/CLI/batch needs **Studio (~$79–99/mo)** — *not* required for this MCP path.
- **Publishing = manual upload.** I generate + stage the video files and `metadata-templates.md` (title/description/tags/end-card); **you upload to YouTube.** Nothing here posts on its own.

## Hard caveats (read once)

1. **Higgsfield is not a screen recorder.** It cannot film the RunHQ UI. The core "feedback → reviewed PR → shipped" *demo* (`06-video-script.md`) must still be captured with OBS / Loom / Screen Studio. Higgsfield makes the **wrapper**: intros, b-roll, ad cuts, avatar explainers, Shorts.
2. **Credit-aware.** Every generation burns credits (cost scales with model/resolution/duration). At ~500 credits/mo (Creator) plan for **~1–2 finished videos/week** and regenerate sparingly. `runbook.md` tracks a per-session budget.
3. **Same honesty guardrails as everything else** (`01-positioning-and-messaging.md` §1c, §8): never imply a fully unattended loop (a human approves every PR), never fabricate metrics, flag unverified product claims `⚠️ VERIFY`.

## One-time setup (your actions — I can't do these)

1. **Higgsfield account + plan.** Sign up at `cloud.higgsfield.ai`; pick **Creator** (kills the watermark + grants commercial rights). Free is fine only to test.
2. **Add the MCP connector** in claude.ai → **Settings → Connectors → Add custom connector**: name `Higgsfield`, URL `https://mcp.higgsfield.ai/mcp`, then **Connect** and log in with your Higgsfield account. No API key needed.
3. Tell me it's connected — I'll confirm the tools are visible (`Marketing video generator`, `Soul character training`, `Cinematic image to video`, `Viral clip generator`, `Virality prediction`, `Video analyzer`, `Image & Video Generation`) and run a 1-clip test before any batch.

## Files in this folder

| File | What it is |
|---|---|
| `content-plan.md` | The recurring slate: 4 content types → pillars/cadence + a starter batch of concrete video concepts |
| `higgsfield-prompts.md` | Ready-to-run Higgsfield specs per type (which MCP tool, prompt, params) — what I paste into the tools |
| `metadata-templates.md` | Title / description / tags / thumbnail text / end-card for **manual upload** |
| `runbook.md` | The in-session operating procedure (drive MCP → poll → stage files), credit budget, and how to later automate the brief-writing half |
| `renders/` | Where finished video files land (gitignored — binaries don't belong in the repo) |

## Division of labor

**I produce:** the briefs, the Higgsfield prompts, the per-video upload metadata, and — once the connector is live — the actual generations driven through the MCP in-session.

**You execute:** create the Higgsfield account/plan, add the MCP connector, trigger the generation session, **review every clip for accuracy/quality**, and **upload to YouTube**.
