# RunHQ — Social Growth Playbook

> Goal: build followers + presence across **Reddit, X, LinkedIn, Facebook, YouTube** to feed the funnel (early-access signups, demos). Content is **generated daily by the `social-content` routine**; publishing is via a publisher you control (see §6). Voice + guardrails inherit from `01-positioning-and-messaging.md`. Created 2026-06-03.

---

## 1. Content pillars (rotate these)

1. **The thesis** — "the bottleneck moved past writing code." Market proof (e.g. the ~17M-agent-PRs story), hot takes.
2. **The loop / vision** — "your product, self-evolving": feedback → agent-ready task → reviewed PR → preview → shipped (human approves every PR).
3. **Build-in-public** — what we shipped, demos of the real feedback→PR loop, lessons, metrics (*real numbers only*).
4. **Founder POV** — opinionated takes on AI-coding workflows, review/ship at scale, agent ops.
5. **Engage > broadcast** — reply to others in the niche; that's where follower growth actually comes from.

Pair every **vision** hook with a **concrete proof** line. Never imply a fully unattended loop (a human reviews PRs). Never fabricate metrics.

## 2. Per-platform plan & cadence

| Platform | Role | Realistic cadence | Format |
|---|---|---|---|
| **X** | Primary — the ICP lives here | 1–3 posts/day + replies | Hooks, threads, build-in-public, hot takes |
| **LinkedIn** | Founder narrative, credibility | 1/day (or 4–5/wk) | Longer-form posts, story-led |
| **Reddit** | Community trust (highest care) | **Comment/engage daily; *submit* 1–2×/wk per sub, rotated** | Value-first, maker-disclosed |
| **Facebook (Page)** | Low fit for devs — repurpose | 1/day, recycled from X/LI | Page posts |
| **YouTube** | Demos / SEO compounding | 1–2/wk (video is a production lift) | Screen-recorded demos (human) **+ Higgsfield-generated** ad/promo, intros/b-roll, avatar explainers, Shorts → see [`youtube/`](youtube/) |

> ⚠️ "1/day per platform" is the *aim*, but **Reddit submissions must stay below that** — daily promo posts get accounts banned. Engage daily, submit sparingly.

## 3. Subreddit playbook (your 7)

| Subreddit | Fit | Self-promo tolerance | What to post |
|---|---|---|---|
| **r/ClaudeCode** | 🎯 bullseye — exact ICP | Moderate (be useful) | Agent-workflow discussion, "how do you handle review/ship after the agent?", maker-disclosed insights |
| **r/SaaS** | High (founders) | OK in context / weekly threads | Build-in-public, lessons, occasional show |
| **r/startups** | Medium | **Low** — promo only in "Share Your Startup" thread | Value posts; use the dedicated promo thread for launches |
| **r/indiehackers** | High | Tolerant of build-in-public | Founder narrative, milestones, demos |
| **r/SideProject** | High | Built for showing projects | Launches, demos, "I built…" posts |
| **r/webdev** | Medium-tech | **Strict** — promo removed | Technical/value only; no pitching |
| **r/programming** | Reach, but **strict** | **Very strict** — blatant promo banned | Only substantive technical writeups; rare |

**Rule for all:** read each sub's rules + recent top posts first; lead with value; disclose you're the maker; never copy-paste the same post across subs; respond to every comment.

## 4. Follower-growth tactics (legit only)

- **Consistency** beats bursts — show up daily.
- **Engage genuinely** — reply to others building in the space (many are in `lead-tracker.csv`); thoughtful replies grow followers faster than broadcasting.
- **Repurpose** — one idea → X post → LinkedIn post → FB → a Reddit value version (reworded per sub).
- **Hooks + a soft CTA** — end posts with a reason to follow / early-access link.
- **Leverage proof** — the competitor-watch market signals (`08-competitor-watch-log.md`) make strong, shareable hooks.

> 🚫 **Not doing:** follow/unfollow bots, engagement pods, auto-DM blasts, mass cross-posting. They violate platform ToS, get accounts banned, and don't build a real audience.

## 5. The automated half (what runs on its own)

The **`social-content` routine** (daily, Opus 4.8) generates `social-content/YYYY-MM-DD.md` — that day's posts for each platform (X, LinkedIn, Reddit w/ target sub, Facebook, + a YouTube idea when due), drawing on positioning, the latest competitor-watch proof points, and recent posts (to avoid repetition). It stages content in the repo; it does **not** post. See `routines/social-content.md`.

## 6. The publishing half (needs your credentials — see chat)

Posting can't run from the cloud routine (no safe secret storage in a public repo). Options, easiest → most control:
- **Scheduler** (Buffer / Publer / Typefully): connect your accounts once; we output an import file. Handles X/LinkedIn/FB Page (+ some YouTube). Lowest friction; no app review.
- **Self-hosted poster script** (you run it with your own `.env`): true direct-API posting; we scaffold it. Requires creating a developer app per platform (X paid tier; LinkedIn/FB app review; YouTube Google Cloud + video files).
- **Reddit:** human-posted, value-first, always.

Per-platform setup checklist lives with the poster scaffold (to be added once you pick a path). **Current choice: posting is manual.**

---

## 7. X growth playbook (reply-first)

Growth on X comes from **engagement, not broadcasting** — especially cold-start. The daily `social-content`
routine now produces a **★ X Engagement Queue** (4–6 ranked reply targets + a drafted reply each). You
**personalize and post manually** — we never auto-post replies (ToS + ban risk + generic replies convert no one).

### The daily 15-minute routine
1. Open today's `social-content/<date>.md` → **X Engagement Queue**. Reply (in your words) to 3–6 targets. *This is the growth engine — do it first.*
2. Post 1–2 of the day's X posts. Put any **link in a reply, not the main post** (links suppress reach).
3. Reply to everyone who replies to you in the first hour (engagement velocity → reach).

### Watchlist (seed — add the accounts you admire)
**Accounts** (peers / leads / thought-leaders in the niche): `@rywalker` (Tembo), `@superset_sh`, `@StageReviewApp`,
`@cloudflavor_io`, `@Jolliai`, + AI-coding / dev-tool founders you respect. *(Grow to 10–20 over time.)*
**Keyword searches to monitor:** `"Claude Code"`, `"Cursor" agents`, `"agent PRs"`, `"code review" AI`,
`"verification debt"`, `"shipping AI code"`, `"AI slop" PR`.

### Your profile = the conversion page (set this once)
A great reply earns a profile click; the profile earns the follow. Set:
- **Bio** (pick one, ≤160 chars):
  - A: *"Building RunHQ — the ops layer for AI coding agents. Feedback → reviewed PR → shipped, on a loop you control. Building in public. Early access ↓"*
  - B: *"The bottleneck moved past writing code. Building RunHQ: user feedback → reviewed, shipped PRs — agents write it, you approve. Building in public ↓"*
- **Pinned post:** your best thread (e.g. today's "verification debt" thread) or the 60-sec demo once recorded.
- **Link/CTA:** the early-access URL.

### The rest of the levers
- **One lane:** post only what ladders up to "the bottleneck moved past writing code / AI-agent ops." Be predictable.
- **Cadence + timing:** 1–3 posts/day, daily; aim for US tech hours (~8–11am & 1–3pm ET); check X analytics, double down on what drives profile visits + follows.
- **Relationships:** build genuine rapport with founders at your level (many are in `lead-tracker.csv`); peers amplifying each other compounds.
- **X Premium (~$8/mo):** reply-boost + analytics + longer posts — worth it for intentional growth.
- 🚫 No bought followers, follow/unfollow, pods, or auto-posted replies.
- **Reality:** slow for ~1–3 months, then compounds. Niche + consistency + genuine replies is the whole game.
