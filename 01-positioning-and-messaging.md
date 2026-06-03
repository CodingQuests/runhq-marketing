# RunHQ — Positioning & Messaging

> Originally built from the plan's positioning; **product claims verified against the live runhq.io homepage on 2026-06-03** (the 01→04 loop, parallel agents, preview envs, BYO agent, hosted SaaS). VERIFY flags removed where the site confirms the claim. Note: the live site does **not** use the "self-evolving" vision line — that tier is internal-only for now.

---

## 1. Positioning — two tiers

We lead with **vision** to earn attention, and land on **mechanism** to earn belief. Use the right tier for the right surface (see §1c).

### 1a. Vision line (hero / narrative / investor / press)

**RunHQ makes your product self-evolve** — user feedback comes in, agents turn it into reviewed, shipped code, and your product improves on its own loop.

> **Hero stack (homepage):**
> **Your product, self-evolving.**
> Feedback in → agents turn it into reviewed, shipped code → your product gets better on its own loop.

### 1b. Mechanism line (the proof, sits directly under the vision)

**RunHQ is the operations layer for AI coding agents** — it turns product feedback into agent-ready coding tasks, reviewed pull requests, preview environments, and shipped updates.

**Shorter (ads / outreach):**
> Your AI agents write the code. RunHQ runs everything around it — from feedback to shipped PR.

### 1c. Which tier, which surface

| Use the **vision** line ("self-evolve") for | Use the **mechanism** line ("ops layer / feedback→PR") for |
|---|---|
| Homepage hero, tagline, "what we're building" narrative | Reddit / Meta ads, cold outreach, demo bookings |
| Investor / press / category creation | Capterra listing, objection handling |
| Long-term brand | The 2-week, 5-paying-customer push |

> ⚠️ **Honesty guardrail:** "self-evolve" implies autonomy. If a human reviews/approves PRs (and they do — that's the trust feature), never imply the loop is fully unattended. Pair the vision with "reviewed, not just generated" so the claim stays credible to skeptical engineers. The demo must show a real feedback→shipped loop before the headline promises one.

## 2. The core insight (why now)

The bottleneck in software has moved. Writing code is no longer the slow part — **AI agents (Claude Code, Cursor, Codex, Devin) generate it faster than teams can review, test, and ship it.** The new bottleneck is the *operations around the agent*: turning messy feedback into clear tasks, reviewing agent output, spinning up preview environments, and shipping safely.

RunHQ owns that layer.

## 3. Positioning statement (classic format)

> **For** technical founders and small AI-native dev teams
> **who** use AI coding agents but drown in the work *around* them (triaging feedback, reviewing agent PRs, shipping safely),
> **RunHQ is** an operations layer for AI coding agents
> **that** turns product feedback into agent-ready tasks, reviewed PRs, preview environments, and shipped updates.
> **Unlike** generic project management (ClickUp) or raw agent frameworks (CrewAI, Paperclip),
> **RunHQ** is purpose-built for the coding-agent workflow end to end — feedback in, shipped product out.

## 4. The pain points (ranked)

1. **"My agent finished the code — now who reviews, tests, and ships it?"** The work didn't disappear, it moved downstream.
2. **Manual feedback → task translation.** Founders spend hours turning bug reports, support tickets, and user feedback into dev-ready tasks.
3. **Review bottleneck.** Agent PRs pile up; reviewing them is now the constraint.
4. **Shipping safely.** No safe path from "agent wrote it" to "it's live" — preview envs, checks, rollback.
5. **No operations layer.** Teams duct-tape Linear + GitHub + Vercel + spreadsheets around their agents.

## 5. Messaging matrix (angles to test)

| # | Angle | Hook | Best channel | Pain targeted |
|---|-------|------|--------------|---------------|
| A | The new bottleneck | "The bottleneck isn't writing code anymore." | Reddit, X | #1, #3 |
| B | After-the-code | "Your AI agent finished the code. Now who reviews, tests, and ships it?" | Meta, Reddit | #1 |
| C | Feedback → PR | "From bug report to reviewed pull request in minutes." | Meta, LinkedIn | #2 |
| D | Stop translating | "Stop manually turning user feedback into dev tasks." | Reddit, LinkedIn | #2 |
| E | Ship safely | "AI agents can write code. RunHQ helps you ship it safely." | Meta | #4 |
| F | Ops layer | "Your AI coding agents need an operations layer." | X, LinkedIn | #5 |
| G | Self-evolve (vision) | "Your product, self-evolving." | Homepage, X, LinkedIn | #1, #2, #5 |
| H | Self-evolve + proof | "A product that ships its own improvements — from user feedback to reviewed PR." | LinkedIn, X | #1, #2 |
| I | Self-evolve (outcome) | "Stop shipping updates. Let your product evolve into them." | Meta, Reddit | #2, #4 |
| J | Parallel agents / you're the bottleneck | "Running coding agents one at a time? You're the bottleneck." | Outreach, X, Reddit | #1, #3 |

> **Angle J proof point (from the homepage):** same feedback rate, **5 shipped → 19 shipped** with RunHQ's parallel agents — "parallel coding agents drain the queue as fast as it arrives." Lead with the bottleneck pain, land on the throughput stat. The honesty pairing: you parallelize the *work*, then review the *finished PRs together* — you don't stop reviewing, you stop babysitting each agent step-by-step.

**How to test:** run A–I as ad headline variants and organic post hooks; track which drives the most qualified clicks / demo bookings. Promote the winner in Week 2.

> **Read on the vision angles (G–I):** higher ceiling on attention/shareability, higher risk of "vaporware" pattern-matching with skeptical engineers. Always pair a vision hook with a concrete proof line in the body (the feedback→PR mechanism), and watch *qualified*-click rate, not raw CTR — vision hooks can pull curious-but-unqualified clicks.

## 6. Value propositions (proof-oriented)

> ✅ Verified against the live homepage 2026-06-03. The 01→04 loop is the site's own "Every release walks the same loop" section.

- **Feedback in, no login wall.** Users send feedback through one embedded widget — no separate account — and it lands with the page, the user, and repro context attached. *(homepage step 01)*
- **Run agents in parallel, not one at a time.** RunHQ spawns your agents as parallel processes on the queue, with a full audit log — so throughput isn't capped at one agent's pace. Proof: **5 → 19 shipped** on the same feedback volume. *(homepage step 02 + hero stat)*
- **Reviewed, not just generated.** Every run lands as a clean GitHub PR with diff, summary, and provenance — scan, comment, approve in the flow you already use, with one-click revert. *(homepage step 03)*
- **Preview before you ship.** Every PR gets its own live preview environment (own URL, own env) so you can exercise the change end-to-end before merge; ships via your existing CD. *(homepage step 04)*
- **Bring your own agent, your own stack.** Works with Claude Code, Cursor, Codex, or your own agent, on GitHub + Vercel. *(homepage step 02; Devin/Linear not shown on the live site — drop unless confirmed)*

## 7. Objection handling

| Objection | Response |
|-----------|----------|
| "I already use Linear + GitHub." | RunHQ sits *across* them, automating the agent workflow they don't cover — feedback triage → agent task → reviewed PR → preview. |
| "Isn't this just ClickUp/PM software?" | PM tools track human work. RunHQ operates the *agent* loop and produces actual code artifacts (tasks, PRs, previews), not tickets. |
| "Why not just CrewAI / build my own agents?" | Those are frameworks for *building* agents. RunHQ is the ops layer for *running* the coding workflow — you keep your agents, RunHQ runs the process around them. |
| "We're too small." | Small AI-native teams feel the review/ship bottleneck hardest — that's exactly the ICP. |

## 8. Voice & tone

- Direct, technical, no fluff. Talk like a senior engineer, not a marketer.
- Lead with the pain, not the feature.
- Concrete > abstract: "from bug report to PR" beats "streamline your workflow."
- Credible: never overclaim. Founder-to-founder honesty converts this audience.

## 9. Glossary of approved phrases (use consistently)

**Vision tier:**
- "your product, self-evolving"
- "products that self-evolve"
- "from user feedback to shipped improvement, on its own loop"

**Mechanism tier (proof — pair with vision, never overclaim autonomy):**
- "operations layer for AI coding agents"
- "from feedback to reviewed PR"
- "reviewed, not just generated"
- "the bottleneck isn't writing code anymore"
- "ship safely"
