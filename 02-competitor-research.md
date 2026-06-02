# RunHQ — Competitor Research & Differentiation

> Researched June 2026. **Updated 2026-06-02:** added Tembo, Superset (superset.sh), and Linear (the "coding-agent orchestration" cluster). Pricing/features change fast — re-verify before quoting publicly.

---

## TL;DR positioning gap

The market splits into five buckets, and **none owns the loop that starts from user feedback and ends at a shipped, previewed update**:

1. **Work management** (ClickUp) — tracks *human* work, bolts AI on top. Not built for code artifacts.
2. **General agent frameworks/orchestration** (CrewAI, Paperclip) — help you *build and run* agents in general. Not specific to the feedback→PR→ship coding workflow.
3. **Coding-agent orchestration layer** (Tembo, Superset) — *closest peers.* Route work to coding agents and produce reviewed PRs, but they trigger from **engineering-internal sources** (tickets, Sentry, a dev-authored task in an IDE) — not user feedback — and stop at the PR (no preview env / ship).
4. **Code-review point tools** (Qodo, GitHub Agent HQ) — review agent PRs but don't start from feedback or own the full loop.
5. **Product-dev system converging on agents** (Linear) — system-of-record that now makes agents first-class teammates (delegate issues, MCP into Claude Code/Cursor/Codex, AI triage + diff review). Integrates agents; doesn't itself run them, preview, or ship.

**RunHQ's wedge:** the *whole loop* for coding agents specifically, **starting from user feedback** → agent-ready task → reviewed PR → **preview env → shipped** — for technical founders and small teams. The three sharpest differentiators against the cluster above:
- **Starts from user feedback** (product *evolution*), not dev-internal tickets / IDE tasks (maintenance & execution).
- **Owns the back end** — preview environment + shipped update — where the orchestration peers stop at the PR.
- **Founder / small-team ICP** and founder-to-founder motion, where the peers trend enterprise (Tembo, Linear) or hands-on-IDE (Superset).

---

## 1. ClickUp

- **What it is:** All-in-one work management / project management platform (tasks, docs, goals) with "ClickUp Brain" AI layer.
- **Positioning:** "One app to replace them all" — horizontal productivity for any team.
- **Pricing:** Free; paid tiers roughly $7–$12+/user/mo; AI add-on.
- **Strengths:** Massive feature surface, brand, integrations, cheap entry.
- **Weakness vs RunHQ:** Built for *human* task tracking. It doesn't turn feedback into agent-ready specs, doesn't review PRs, doesn't manage preview environments. Generic, not for the coding-agent loop.
- **RunHQ angle against it:** *"PM tools track tickets. RunHQ produces PRs."*

## 2. CrewAI

- **What it is:** Leading multi-agent orchestration platform — open-source framework + AMP Cloud for building/deploying/scaling agent teams.
- **Positioning:** "The leading multi-agent platform." Builder-focused; 47K+ GitHub stars, used across the Fortune 500.
- **Pricing:** Free; Professional from ~$25/mo (limited workflow executions); Enterprise ~$60K–$120K/yr.
- **Strengths:** Huge developer mindshare, flexible, general-purpose orchestration.
- **Weakness vs RunHQ:** It's a *framework to build agents*, not an opinionated ops layer for the coding workflow. You assemble everything yourself; there's no built-in feedback→task→reviewed-PR→ship loop.
- **RunHQ angle against it:** *"CrewAI helps you build agents. RunHQ runs the workflow around the ones you already use."*

## 3. Paperclip

- **What it is:** Open-source, self-hosted app to manage AI agents "for work" — org charts, budgets, governance, full tracing; the "run a zero-human company with agents" framing. Exploded to 40K+ GitHub stars in 2026.
- **Positioning:** "The app everyone uses to manage agents at work." Broad: any business function, not just engineering.
- **Pricing:** Open-source / self-hosted (bring your own infra & agents).
- **Strengths:** Huge momentum, generality, governance/observability story, free.
- **Weakness vs RunHQ:** General-purpose agent management; requires meaningful technical setup (Node, CLI, env config). Not specialized in the coding feedback→ship pipeline, no opinionated PR-review/preview-env workflow.
- **RunHQ angle against it:** *"Paperclip manages any agent doing any job. RunHQ is purpose-built for shipping code: feedback in, reviewed PR out — no self-hosting required."* *(⚠️ VERIFY RunHQ is hosted/SaaS)*

## 4. Tembo (tembo.io) — closest peer ⭐

- **What it is:** A **coding-agent orchestration platform** (pivoted from managed Postgres in May 2025). "The platform for every coding agent" — routes work to Claude Code / Cursor / Codex / Amp via an **`@tembo` tag** in Slack, Linear, GitHub, or PR comments; agents run in isolated sandboxes and open **PRs for human review**. Rule-based **Automations** (e.g. *Sentry error → investigate + fix PR*, *weekly dependency scan → PRs*) and **multi-repo coordination**. Cloud or self-host in your VPC. Founder: Ry Walker (ex-Astronomer).
- **Positioning:** "The platform for every coding agent." Anti-lock-in ("agents should be orchestrated, not operated"); enterprise-trust framing (guardrails, VPC, SSO, BYOK).
- **Pricing:** Free ($0, 10 credits/wk, 1 repo); **Pro $60/mo** (100 credits); **Max $200/mo** (400 credits); Enterprise custom (SSO/SLA/BYOK). Credit-based.
- **Strengths:** Closest "orchestration-layer" peer; multi-repo; deep workflow integrations; free tier + formal **OSS program**; a strong **SEO comparison-content + founder-thought-leadership** engine; funded (~$14–20M).
- **Weakness vs RunHQ:** Triggers are **engineering-internal** (Sentry, tickets, dependency scans) — *maintenance inward*, not **user feedback** *outward*. Verified scope ends at the **PR** (no preview env / ship). Gravity is **enterprise** ("enterprises cannot adopt easily"), not founders/small teams.
- **RunHQ angle against it:** *"Tembo orchestrates agents off your bug tracker and Sentry. RunHQ starts from your users' feedback and carries it through preview to shipped — product evolution, not just maintenance."* Also note Tembo isn't metered the way framework tools are, but it **is** credit-metered — a talking point.

## 5. Superset (superset.sh) — adjacent / watch ⭐

- **What it is:** YC S26 startup. **"The Code Editor for AI Agents"** — a desktop IDE/terminal to **orchestrate 100+ CLI coding agents in parallel**, each in its own **isolated git worktree** (no merge conflicts). Agent-agnostic (Claude Code, Codex, Cursor, Gemini…), built-in diff/review viewer, runs **locally** with **BYO API keys**. Source-available (Elastic License 2.0), ~**11.5k GitHub stars**, 3-person SF team.
- **Positioning:** "Orchestrate 100+ coding agents in parallel. Works for any agents. Built for the AI era." Category framing: *"you don't need another agent — you need an orchestrator."*
- **Pricing:** Free ($0, 1 user, local); **Pro $20/user/mo** (unlimited users, remote workspaces, Linear integration); Enterprise custom (SSO/audit/SLA).
- **Strengths:** Powerful **open-source distribution**; repeated **Show HN / Launch HN** + **#1 Product Hunt** launches; authentic, testimonial-driven founder/community motion in *exactly* RunHQ's ICP; fast-growing mindshare.
- **Weakness vs RunHQ:** It's an **IDE where a human engineer drives the swarm** — an execution layer, hands-on. Starts from a **dev-authored task**, not user feedback. Local desktop app, not a hosted ops loop; no feedback-intake / preview-env / ship loop.
- **RunHQ angle against it:** *"Superset is where an engineer drives 100 agents by hand. RunHQ is the loop that turns user feedback into a reviewed, shipped change with light human-in-the-loop — a different altitude."* Largely **complementary** at the workflow level, but competes for the *"operate your AI coding agents"* narrative. **Study their distribution machine** (OSS + launches + testimonials) for our own outreach — see `10-outreach-comparison.md`.

## 6. Linear (linear.app) — complementary but converging ⭐

- **What it is:** "The product development system for teams **and agents**." Issue tracking / projects / cycles, now with **agents as first-class members**: **Linear for Agents** (May 2025) lets you assign/@mention agents (Cursor, Copilot, Codex, Devin, Tembo…), a **delegation model** ("delegate issues, but not accountability"), an official **MCP server** (Claude Code / Cursor / Codex), plus **Triage Intelligence**, **Code Intelligence**, and **Linear Diffs** (structural PR review).
- **Positioning:** "Designed for the AI era." Opinionated **craft** brand (*The Linear Method*). 33,000+ teams; OpenAI / Ramp / Opendoor as proof.
- **Pricing:** Free; **Basic $10/user/mo**; **Business $16/user/mo** (Triage/Code Intelligence, agent automations); Enterprise custom. AI features **gated by tier, not separately metered**.
- **Strengths:** Legendary brand + PLG; enormous install base in **exactly RunHQ's ICP**; agents now native; **MCP into the same agents RunHQ targets**; grew to a ~$1.25B valuation on **~$35K total paid spend**.
- **Weakness vs RunHQ:** It's the **system-of-record where agents act *inside* Linear**; it integrates third-party agents but **doesn't itself run the coding agent, spin up preview environments, or ship**. Framing is "agents as teammates *augmenting a product team*," not RunHQ's "your product, self-evolving" closed loop.
- **RunHQ angle:** *"Complementary but converging."* Still a tool the ICP loves — **integrate into it** (ship a RunHQ agent / MCP into Linear) rather than fight it — but its triage→issue→delegate→diff features now compete for the **ops-layer narrative**. Differentiate hard on **end-to-end execution (task → PR → preview → ship)** and the **autonomy/self-evolve** framing, where Linear stops at orchestration. *Watch whether Linear adds preview-env/deploy — that would narrow the gap.*

## 7. Adjacent watch-list

- **GitHub Agent HQ / Copilot** — GitHub is building an orchestration/control layer for multiple coding agents + PR review. **Biggest strategic threat** (owns the repo). RunHQ angle: cross-tool, starts from *feedback* (not just the repo), works with any agent/stack. (See `08-competitor-watch-log.md` for the latest moves.)
- **Qodo** — "AI agents for code, review & workflows," focused on code quality/review. RunHQ angle: broader loop than review-only.

---

## 8. Differentiation tables

### 8a. Orchestration-layer cluster (the closest peers)

| Capability | RunHQ | Tembo | Superset | Linear |
|---|---|---|---|---|
| **Starts from user feedback** | ✅ ⚠️ | ❌ (Sentry/tickets/scans) | ❌ (dev-authored task) | ➖ (AI triage of inbound → issue) |
| Feedback/intake → agent-ready task | ✅ ⚠️ | ➖ (from tickets) | ➖ (manual) | ➖ |
| Orchestrates coding agents | ✅ ⚠️ | ✅ | ✅ (100s, parallel) | ➖ (assign/delegate to agents) |
| Reviewed PRs for agent output | ✅ ⚠️ | ✅ | ✅ (built-in diff) | ✅ (Linear Diffs) |
| **Preview environments** | ✅ ⚠️ | ❌ | ❌ | ❌ |
| **Ships / deploys the update** | ✅ ⚠️ | ❌ (stops at PR) | ❌ | ❌ |
| Agent-agnostic / cross-stack | ✅ ⚠️ | ✅ | ✅ | ✅ (via MCP/integrations) |
| Hosted, no local/setup burden | ✅ ⚠️ | ✅ (or VPC) | ❌ (desktop app, local) | ✅ |
| Built for founders / small teams | ✅ | ➖ (trends enterprise) | ➖ (power-user/eng) | ➖ (startups→enterprise) |

✅ = strength · ➖ = partial/possible · ❌ = not the focus · ⚠️ = verify RunHQ actually does this

### 8b. Broader market

| Capability | RunHQ | ClickUp | CrewAI | Paperclip | GitHub Agent HQ |
|---|---|---|---|---|---|
| Feedback → agent-ready task | ✅ ⚠️ | ➖ manual | ➖ DIY | ➖ DIY | ➖ |
| Reviewed PRs for agent output | ✅ ⚠️ | ❌ | ➖ DIY | ➖ | ✅ |
| Preview environments | ✅ ⚠️ | ❌ | ❌ | ❌ | ➖ |
| Purpose-built for *coding* agents | ✅ | ❌ | ➖ general | ➖ general | ✅ |
| Works across your existing stack | ✅ ⚠️ | ➖ | ➖ | ➖ | ❌ (GitHub-centric) |
| No self-hosting / setup burden | ✅ ⚠️ | ✅ | ➖ | ❌ | ✅ |
| Built for small teams / founders | ✅ | ✅ | ➖ enterprise | ➖ technical | ➖ |

## 9. Messaging takeaways

1. **Own "starts from user feedback."** The closest peers (Tembo, Superset) trigger from engineering-internal sources or a dev typing a task. RunHQ's loop begins with the *user's voice* — that's the cleanest white space.
2. **Own the back end: preview + ship.** Tembo, Superset, and Linear all stop at the reviewed PR. "From feedback to **shipped, previewed** update" is a claim only RunHQ makes here. *(⚠️ verify preview-env + deploy are real before leaning on this.)*
3. **Own "for coding agents specifically," for founders/small teams.** The cluster is going enterprise (Tembo, Linear) or deep-IDE/power-user (Superset). Founder-scale + founder-to-founder is open.
4. **Treat Linear as integrate-not-fight.** It owns the ICP's system-of-record and now speaks "agents." Plug into it (MCP / a RunHQ agent) and differentiate on execution + autonomy.
5. **The convergence is real — keep the watch log hot.** Tembo, Superset, and Linear are all moving toward "operate your coding agents." Re-verify monthly; if Linear/Tembo add preview-env or deploy, the wedge narrows.

## Sources
- ClickUp — clickup.com (general knowledge, verify current pricing)
- [CrewAI](https://crewai.com/) · [CrewAI pricing](https://crewai.com/pricing)
- [Paperclip](https://paperclip.ing/) · [Paperclip GitHub](https://github.com/paperclipai/paperclip)
- [Qodo](https://www.qodo.ai/) · [GitHub: Agent PRs / Agent HQ](https://github.blog/ai-and-ml/generative-ai/agent-pull-requests-are-everywhere-heres-how-to-review-them/)
- **Tembo:** [tembo.io](https://www.tembo.io/) · [pricing](https://www.tembo.io/pricing) · [about](https://www.tembo.io/about) · [pivot announcement (May 2025)](https://www.tembo.io/blog/autonomous-software-maintenance-has-arrived) · [OSS program](https://www.tembo.io/oss) · [founder essays](https://rywalker.com/)
- **Superset:** [superset.sh](https://superset.sh/) · [pricing](https://superset.sh/pricing) · [GitHub](https://github.com/superset-sh/superset) · [YC profile](https://www.ycombinator.com/companies/superset) · [Launch HN](https://news.ycombinator.com/item?id=48236770) · [Product Hunt](https://www.producthunt.com/products/superset-5)
- **Linear:** [linear.app](https://linear.app/) · [Linear for Agents](https://linear.app/agents) · [MCP docs](https://linear.app/docs/mcp) · [pricing](https://linear.app/pricing) · [The Linear Method](https://linear.app/method/introduction) · [how Linear grew on ~$35K spend](https://www.ideaplan.io/blog/how-linear-grew-to-1-billion-with-35k-marketing-spend)
