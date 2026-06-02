# RunHQ — Competitor Research & Differentiation

> Researched June 2026. Pricing/features change fast — re-verify before quoting publicly.

---

## TL;DR positioning gap

The market splits into three buckets, and **none owns the coding-agent operations loop end to end**:

1. **Work management** (ClickUp) — tracks *human* work, bolts AI on top. Not built for code artifacts.
2. **Agent frameworks/orchestration** (CrewAI, Paperclip) — help you *build and run* agents in general. Not specific to the feedback→PR→ship coding workflow.
3. **Code-review point tools** (Qodo, GitHub Agent HQ) — review agent PRs but don't start from feedback or own the full loop.

**RunHQ's wedge:** the *whole loop* for coding agents specifically — feedback → agent-ready task → reviewed PR → preview env → shipped — for technical founders and small teams.

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

## 4. Adjacent watch-list (not named in plan, but you'll be compared to them)

- **GitHub Agent HQ / Copilot** — GitHub is building an orchestration/control layer for multiple coding agents + PR review. **Biggest strategic threat** (owns the repo). RunHQ angle: cross-tool, starts from *feedback* (not just the repo), works with any agent/stack.
- **Qodo** — "AI agents for code, review & workflows," focused on code quality/review. RunHQ angle: broader loop than review-only.
- **Linear** — issue tracking the ICP already uses. Position RunHQ as *complementary* (sits across Linear + GitHub + Vercel), not a replacement.

---

## 5. Differentiation table

| Capability | RunHQ | ClickUp | CrewAI | Paperclip | GitHub Agent HQ |
|---|---|---|---|---|---|
| Feedback → agent-ready task | ✅ ⚠️ | ➖ manual | ➖ DIY | ➖ DIY | ➖ |
| Reviewed PRs for agent output | ✅ ⚠️ | ❌ | ➖ DIY | ➖ | ✅ |
| Preview environments | ✅ ⚠️ | ❌ | ❌ | ❌ | ➖ |
| Purpose-built for *coding* agents | ✅ | ❌ | ➖ general | ➖ general | ✅ |
| Works across your existing stack | ✅ ⚠️ | ➖ | ➖ | ➖ | ❌ (GitHub-centric) |
| No self-hosting / setup burden | ✅ ⚠️ | ✅ | ➖ | ❌ | ✅ |
| Built for small teams / founders | ✅ | ✅ | ➖ enterprise | ➖ technical | ➖ |

✅ = strength · ➖ = partial/possible · ❌ = not the focus · ⚠️ = verify RunHQ actually does this

## 6. Messaging takeaways

1. **Own "for coding agents specifically."** Everyone else is general; specialization is the wedge.
2. **Own the full loop.** Competitors do pieces (review, or orchestration, or PM). RunHQ does feedback → ship.
3. **Lead with "after the agent writes code."** That's the unsolved, painful part no incumbent owns cleanly.
4. **Position as complementary to Linear/GitHub/Vercel, competitive to ClickUp/CrewAI/Paperclip.**

## Sources
- ClickUp — clickup.com (general knowledge, verify current pricing)
- [CrewAI](https://crewai.com/) · [CrewAI pricing](https://crewai.com/pricing)
- [Paperclip](https://paperclip.ing/) · [Paperclip GitHub](https://github.com/paperclipai/paperclip)
- [Qodo](https://www.qodo.ai/) · [GitHub: Agent PRs / Agent HQ](https://github.blog/ai-and-ml/generative-ai/agent-pull-requests-are-everywhere-heres-how-to-review-them/)
