# RunHQ — Outreach Kit

> Cold outreach + follow-up sequences. Target: 100–150 messages/week (Week 1 + Week 2).
> Channels: email, LinkedIn DM, X DM, relevant community DMs. Personalize the first line — never mass-blast.

---

## Who to target (build the list first)

From the ICP in the plan:
- Technical founders of small SaaS / AI-native products
- Indie hackers with **active** products (shipping regularly)
- Teams visibly using Claude Code, Cursor, Codex, Devin, GitHub, Vercel, Linear
- People active in r/ClaudeCode and similar AI-coding communities

**Sourcing ideas:** GitHub (active repos using agent tooling), X/LinkedIn posts about Claude Code/Cursor, Reddit commenters in AI-coding subs, indie hacker communities, "building in public" founders, recent Show HN / launch posts.

**Qualify before sending:** they ship software AND show signs of using AI coding agents. Quality > volume.

---

## Email / DM templates

### Template 1 — Founder, pain-led (primary)
> **Subject:** the part after your agent writes the code
>
> Hi {First name},
>
> Saw {specific signal — your post on Cursor / your repo / your launch}. Quick one.
>
> We keep hearing the same thing from teams using coding agents: the agent writes the code fast, but reviewing it, getting a preview up, and shipping it safely is now the slow part.
>
> We built RunHQ to run that loop — feedback → agent-ready task → reviewed PR → preview → shipped. Curious if that's a pain for {Company}?
>
> Happy to show you a 10-min demo if it's relevant — no pressure either way.
>
> {Your name}

### Template 2 — "Stop translating feedback" angle
> **Subject:** turning feedback into dev tasks by hand?
>
> Hi {First name},
>
> Do you (or someone on the team) still manually turn user feedback and bug reports into dev tasks? That's the bit RunHQ automates — paste the feedback, get an agent-ready task and a reviewed PR back.
>
> Worth a quick look for {Company}? I can send a 15-sec demo video or do a live walkthrough.
>
> {Your name}

### Template 3 — Indie hacker / build-in-public (casual)
> Hey {First name} — love what you're building with {Product}. We made RunHQ for solo/small teams shipping fast with AI agents: it handles the review + preview + ship loop after the agent writes the code. Want early access? Genuinely want feedback from people like you.

### Template 4 — Community / Reddit DM (ultra-light)
> Hey — saw your comment in {sub} about {topic}. We're building RunHQ for exactly that (the ops layer after a coding agent finishes). Mind if I send a link? Would love your take.

### Template 5 — Parallel agents / "you're the bottleneck" (matrix angle J)
> **Subject:** you're the bottleneck, not your agent
>
> Hi {First name} — saw {specific signal}.
>
> When you run a coding agent, you end up babysitting it: watch each step, confirm it works, *then* start the next task. One at a time, with you as the bottleneck.
>
> RunHQ runs your agents in parallel and brings the finished work back as clean PRs to review together — so you approve output instead of supervising every step. One team went from **5 shipped to 19 on the same feedback volume**.
>
> Worth a 10-min look for {Company}?
>
> {Your name}

> **Use Template 5 when:** the lead visibly runs a single-agent loop (one Cursor/Claude Code session, serial PRs). The throughput stat (5→19) is the close — pair it with the parallel-runs mechanism, never imply zero review.

---

## Follow-up sequences

**Rule:** 2–3 follow-ups max, spaced out, each adds value. Then stop. No guilt-trips.

| Touch | Day | Message |
|-------|-----|---------|
| 1 | 0 | Template 1–4 (initial) |
| 2 | +3 | "Quick bump — here's the 15-sec demo so you can judge in 15 seconds: {link}. Worth a chat?" |
| 3 | +7 | "Last one from me — if the 'after the agent writes code' problem ever gets loud, we're here: {link}. Happy to help anytime." |

> **Angle-J (Template 5) bump variant for touch 2:** "Quick bump — the number that surprised me: same feedback volume, **5 shipped → 19** once the agents run in parallel instead of one at a time. 15-sec demo: {link}. Worth a chat?"

**Warm-lead follow-up (they replied / showed interest):**
- Reply within the hour. Offer 2 concrete demo time slots.
- After demo: send recap + clear next step (trial / paid onboarding) + ask directly for the close.
- Push warm leads toward **paid onboarding** (Week 2 priority).

---

## Demo flow (10–15 min)
1. (1 min) Their current workflow — where does it hurt?
2. (8 min) Live: paste real feedback → agent-ready task → reviewed PR → preview env → ship.
3. (2 min) Map it to their stack (Claude Code / Cursor / GitHub / Vercel / Linear).
4. (2 min) Pricing + clear ask: "Want to start a paid trial this week?"

---

## Logging
Log every send and reply in `lead-tracker.csv` immediately. Outreach that isn't tracked can't be optimized.
