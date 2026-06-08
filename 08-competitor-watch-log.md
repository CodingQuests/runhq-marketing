# RunHQ — Competitor Watch Log

> Running log of competitor/market changes. Newest entry on top. See `02-competitor-research.md` for the full baseline teardown.

---

## 2026-06-08

**GitHub Agent HQ / Copilot — now reaching onto our preview + ship turf**
- **June 2, 2026:** GitHub launched the **GitHub Copilot desktop app** ("agent-native") with two features that touch the back end we claim as ours:
  - **Agent Merge** — Copilot now *monitors CI, tracks reviewers, addresses failing checks, and autonomously merges the PR* once your configured trust level is met. That is movement past "review the PR" toward **shipping** it.
  - **Agentic browsing** — the agent drives an integrated browser (click, type, screenshot) to **verify its own UI changes end-to-end** before opening the PR — a self-service stand-in for "exercise the change in a preview."
  - Also: **cloud sandboxes** (ephemeral Linux envs per session), `/security-review` + `/rubberduck` skills, and medium-tier code review routed to higher-reasoning models.
- **June 2, 2026:** the **Copilot SDK went GA** across six languages (embed Copilot's agentic engine in your own tools), and the **Copilot CLI** was redesigned with voice input and scheduled tasks (`/every`).
- *Implication:* this is the most direct encroachment yet. GitHub now gestures at **both** of our "back-end" differentiators — *verify in a preview* (agentic browsing) and *ship it* (Agent Merge). Two caveats keep our wedge intact for now: (a) Agent Merge **merges**, it doesn't spin up a **per-PR preview environment with its own URL** the way we do, and agentic browsing verifies inside the agent run, not a shareable live env a human can exercise; (b) GitHub still **starts from a repo/issue, not user feedback**, and is GitHub-locked. But the "review the PR" box we already conceded is now widening toward merge+verify — lean even harder on **starts-from-feedback**, **cross-stack**, **real preview envs**, and the **self-evolve loop** rather than any single downstream step.
- Sources: [GitHub blog — Copilot app (agent-native desktop), Jun 2 2026](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) · [Copilot SDK GA, Jun 2 2026](https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/) · [Copilot CLI + JetBrains agentic enhancements, Jun 2 2026](https://github.blog/changelog/2026-06-02-introducing-copilot-cli-and-agentic-capabilities-enhancements-in-jetbrains-ides/)

**Linear — agents get "shared skills"; "ship code from Linear" framing hardens**
- **June 4, 2026:** changelog shipped **Shared skills for Linear Agent** (teams standardize agent workflows), **Team documents**, and issue-description comments. This follows **Linear Diffs** (May 27) — "review diffs from any issue with a PR, iterate with agents, and **ship code from Linear**" — and **Releases** (Apr 30), which tracks deploy environment/version/status via your CI/CD and auto-updates issue status when code hits production.
- *Implication:* Linear keeps tightening the orchestration narrative and now literally says "ship code from Linear." Important nuance for our wedge: **Releases *tracks* deployments from your existing CI/CD — it doesn't itself create preview environments or deploy.** So our "**per-PR preview env → shipped**" back end is still distinct, but the *language* gap is closing. Keep treating Linear as **integrate-not-fight** (MCP/agent into it) while differentiating on actual execution (preview env + ship) and the feedback-origin of the loop. Watch the next cycle for any Linear-native preview/deploy — that's the line that would narrow the wedge for real.
- Sources: [Linear changelog](https://linear.app/changelog) · [Linear Diffs, May 27 2026](https://linear.app/changelog/2026-05-27-linear-diffs) · [Linear Releases, Apr 30 2026](https://linear.app/changelog/2026-04-30-releases)

**ClickUp — catch-up: it moved into coding agents in May (missed last cycle)**
- Last cycle logged ClickUp as "no material change." Correcting that: in **May 2026** ClickUp shipped **Brain²** (agentic Brain that executes multi-step work, auto-routes across models, persistent memory) and — off its **late-2025 Codegen acquisition** — now ships a **Codegen Agent** purpose-built for engineering that can be **assigned coding tasks and create PRs**, plus **MCP** support so external agents (Claude, ChatGPT) act on the workspace.
- *Implication:* the "PM tools just track tickets" line needs a footnote — ClickUp can now *produce PRs* via Codegen. But it's still **work-management-rooted**, general-purpose, and starts from a human task, not **user feedback**, and there's no preview-env/ship loop. Our angle sharpens to: *"ClickUp bolted a coding agent onto a PM tool. RunHQ is the purpose-built loop — feedback in, reviewed PR, preview, shipped."* Re-verify whether Codegen-in-ClickUp gains preview/deploy.
- Sources: [SiliconANGLE — ClickUp Brain² agentic, May 12 2026](https://siliconangle.com/2026/05/12/exclusive-clickup-endows-brain-assistant-agentic-capabilities/) · [ClickUp blog — Codegen acquisition / coding agents](https://clickup.com/blog/clickup-codegen-acquisition/)

**Paperclip — mindshare still compounding (~69k stars)**
- GitHub stars now **~69.4k** (12.9k forks), up from the ~40k baseline; repo active as of **June 7, 2026** with new **execution/project workspaces** (workspace lifecycle for agent runs). Launched Mar 4, 2026 — one of the year's fastest-growing OSS AI projects.
- *Implication:* big distribution flywheel, but still **general agent management** ("run a zero-human company"), not the coding feedback→ship loop. No wedge change; useful as a study object for OSS-driven distribution. *"Paperclip manages any agent doing any job; RunHQ is purpose-built for shipping code."*
- Sources: [Paperclip GitHub](https://github.com/paperclipai/paperclip) · [Paperclip](https://paperclip.ing/)

**Tembo, Superset, CrewAI, Qodo:** no material change this cycle (re-verify next run). Tembo's public changelog still ends **Apr 24, 2026** (macros, "tasks→sessions / automations→agents" rename, GPT-5.5) — no move toward feedback-intake or preview/ship. Superset holds at **~11k stars**, no new launch in-window. CrewAI unchanged from last entry (~47.8k stars, ~$44.5M raised, ~2B executions). Qodo's **2.1 "Rules System" (beta)** follows the Feb 2026 2.0 multi-agent review release but has no firm in-window date — ⚠️ unverified.
- Sources: [Tembo changelog](https://www.tembo.io/changelog) · [Superset GitHub](https://github.com/superset-sh/superset) · [CrewAI stats](https://www.getpanto.ai/blog/crewai-platform-statistics) · [Qodo](https://www.qodo.ai/)

**Market signal — the review-overload thesis keeps gaining hard proof**
- Beyond the ~17M agent-PRs/month "kill switch" story logged last cycle, the volume is now cited at a **~325% jump in six months** (≈4M → ≈17M PRs/mo, Sep 2025 → Mar 2026), with **~91% longer review time** and a widely-repeated "**only ~1 in 10 AI PRs is legitimate**." Academic corroboration is accumulating (arXiv studies on how humans (under)review AI PRs; "More Code, Less Reuse," Jan 2026, on AI-generated redundancy/tech debt).
- *Implication:* our core thesis ("the bottleneck moved past writing code") keeps getting third-party and now academic backing. Ad/organic hook still strong — pair the volume stat with the **human-in-the-loop honesty** ("reviewed, not just generated") and the self-evolve vision.
- Sources: [danilchenko.dev — 17M PRs / kill switch](https://www.danilchenko.dev/posts/2026-04-11-github-ai-agents-pull-requests/) · [arXiv — how humans review AI-generated PRs](https://arxiv.org/html/2605.02273v1)

### Implications for RunHQ positioning
1. **The back end is no longer uncontested — get specific.** GitHub's Agent Merge (ship) + agentic browsing (verify) and Linear's "ship code from Linear" both gesture at our turf. Stop saying "we own preview + ship" loosely; say the **specific** thing they don't do: **a per-PR live preview environment with its own URL that a human can exercise before merge, started from user feedback, across any stack.**
2. **Double down on "starts from user feedback."** Every encroacher this cycle (GitHub, Linear, ClickUp/Codegen) still begins from a repo/issue/human task. That origin is the cleanest white space we have left — make it the headline, not a feature.
3. **"Cross-stack / not locked-in" is rising in value.** GitHub is consolidating the whole loop *inside GitHub*; the more it does, the more "works across your existing stack, with any agent" is a real buyer concern, not a nicety.
4. **Update the ClickUp objection.** "PM tools just track tickets" is now stale — ClickUp ships PRs via Codegen. Reframe to **purpose-built loop vs. coding-agent-bolted-onto-PM**.
5. **Ride the review-overload proof.** The 325% / 91% / "1-in-10" stats plus academic studies are external validation for the whole pitch — keep them in ads and outreach, paired with the honesty guardrail.

---

## 2026-06-02

**CrewAI**
- Total funding now reported at **~$44.5M** (up from the ~$18M Series A led by Insight Partners in Oct 2024) — they've raised additional rounds since. Mindshare still climbing: **47.8k GitHub stars** (Apr 2026), 27M+ PyPI downloads, and a claim of **~2B agentic executions** in the trailing 12 months as of Jan 2026.
- Pricing unchanged in shape: Free (50 workflow executions/mo), **Professional $25/mo** (100 executions, then $0.50/execution overage), Enterprise custom (SOC2/SSO/SLAs).
- *Implication:* still a **framework to build agents**, now with serious capital and enterprise motion. Doesn't narrow toward the coding feedback→ship loop — our wedge holds. Watch the overage-priced execution model; it's a talking point ("RunHQ isn't metered per agent run").
- Sources: [Panto stats](https://www.getpanto.ai/blog/crewai-platform-statistics) · [PitchBook profile](https://pitchbook.com/profiles/company/590845-78) · [CrewAI pricing](https://crewai.com/pricing)

**GitHub Agent HQ — biggest strategic threat, moving fast**
- **Agentic code review shipped March 2026:** Copilot now gathers full project context, suggests changes, and can hand fixes to the coding agent to auto-generate fix PRs. The coding agent even **reviews its own changes before opening the PR**.
- Multi-agent: Agent HQ now runs **Claude, Codex, Jules, Grok, Devin** etc. directly inside GitHub issues/PRs, from one Copilot Pro+ sub. Repo-level "Agent HQ" tab next to Issues/PRs/Actions.
- Now runs code scanning, secret scanning, and dependency checks inside the agent workflow pre-PR.
- *Implication:* GitHub is aggressively colonizing the "review agent PRs" box — **we cannot win on PR-review-inside-GitHub.** Our differentiation must lean harder on (a) starting from **user feedback** (GitHub starts from an issue/repo), (b) being **cross-stack** (not GitHub-locked), and (c) the **self-evolve loop** framing GitHub doesn't tell. Reposition "reviewed PR" as one step in our loop, not the headline.
- Sources: [GitHub blog — reviewing agent PRs](https://github.blog/ai-and-ml/generative-ai/agent-pull-requests-are-everywhere-heres-how-to-review-them/) · [Help Net Security — multi-agent in repos](https://www.helpnetsecurity.com/2026/02/05/github-enables-coding-agents/) · [How to use Agent HQ (2026)](https://andrew.ooo/answers/how-to-use-github-agent-hq-2026/)

**Market signal worth a campaign**
- Report of **~17M agent PRs, five outages, and a "kill switch"** on GitHub's AI agents (Apr 2026) — i.e. agent output volume is overwhelming review/ship capacity at scale. This is *our exact thesis* ("the bottleneck moved past writing code") with third-party proof.
- *Implication:* strong organic/ad hook — "17 million agent PRs. Who's reviewing yours?" Pair with the self-evolve vision + human-in-the-loop honesty.
- Source: [danilchenko.dev — GitHub AI agents](https://www.danilchenko.dev/posts/2026-04-11-github-ai-agents-pull-requests/)

**ClickUp / Paperclip / Qodo:** no material change found this cycle (re-verify next run).

### Implications for RunHQ positioning
1. **Lean into the vision tier.** As GitHub commoditizes "review the PR," our durable difference is the **self-evolving product loop starting from user feedback** — not a single review step. Push angle G–I harder.
2. **Own "cross-stack" and "starts from feedback."** Both are things the GitHub-native incumbent structurally can't claim.
3. **Use the 17M-PRs / review-overload story as proof** that the bottleneck is real and getting worse — it's external validation for our core message.
