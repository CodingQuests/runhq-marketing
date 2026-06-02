# RunHQ — Competitor Watch Log

> Running log of competitor/market changes. Newest entry on top. See `02-competitor-research.md` for the full baseline teardown.

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
