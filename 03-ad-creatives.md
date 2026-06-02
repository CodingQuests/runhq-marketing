# RunHQ — Ad Creatives (Reddit + Meta)

> 5 concepts, each mapped to a messaging angle (see `01-positioning-and-messaging.md`). Run as A/B variants, kill losers fast.
> Test budget suggestion: start ~$20–30/day per platform, 3–4 creatives, 3–5 day read before judging.

---

## Meta (short demo-based, pain-point creative)

Format: 9:16 or 1:1 video (the 15-sec demo — see `06-video-script.md`) + these as primary text / headline.

### Concept 1 — "After the code" (Angle B)
- **Primary text:** Your AI agent just finished the code. Now who reviews it, tests it, and ships it safely? RunHQ is the operations layer for AI coding agents — from feedback to reviewed PR to shipped update.
- **Headline:** Your agent wrote the code. RunHQ ships it.
- **CTA:** Learn More
- **Visual:** Screen recording: agent finishes → RunHQ review → preview env → merged.

### Concept 2 — "Feedback → PR" (Angle C)
- **Primary text:** Stop manually turning bug reports into dev tasks. Paste the feedback → RunHQ produces an agent-ready task, a reviewed pull request, and a preview to test. Minutes, not meetings.
- **Headline:** From bug report to reviewed PR in minutes.
- **CTA:** Sign Up
- **Visual:** Split screen: messy Slack/support message → clean PR.

### Concept 3 — "Ship safely" (Angle E)
- **Primary text:** AI agents can write code. The hard part is shipping it without breaking things. RunHQ reviews agent output, spins up preview environments, and gives you a safe path to production.
- **Headline:** AI writes the code. Ship it safely.
- **CTA:** Learn More

---

## Reddit (native, low-gloss — Reddit punishes "ad voice")

Format: text or single image. Keep it plain, first-person, no hype. Target subs around Claude Code / AI coding (see audience list). **Disclose it's your product** — Reddit users respect honesty and torch stealth marketing.

### Concept 4 — "The bottleneck moved" (Angle A)
- **Title:** The bottleneck isn't writing code anymore — it's everything after the agent finishes
- **Body:** We use coding agents daily and noticed the real time sink moved downstream: triaging feedback into tasks, reviewing agent PRs, getting previews up, shipping safely. We built RunHQ to run that loop — feedback → agent-ready task → reviewed PR → preview → shipped. Built for teams using Claude Code / Cursor / Codex. Happy to answer anything / give early access. *(flair as appropriate; follow each sub's self-promo rules)*
- **CTA in comments:** link + "DM me for early access."

### Concept 5 — "Ops layer" (Angle F)
- **Title:** Your AI coding agents need an operations layer
- **Body:** Agents are great at producing code. They're terrible at the operations around it — turning user feedback into clear tasks, reviewing their own output, managing preview envs, shipping safely. That's the gap RunHQ fills. Works alongside GitHub / Vercel / Linear and whatever agent you use. Curious what others are duct-taping together for this today?
- **Note:** End with a genuine question to drive discussion, not just a pitch.

---

## Targeting notes

- **Meta:** interest/job-title targeting — software engineers, startup founders, "developer tools," lookalikes off any existing customer list. Test broad + let the creative qualify.
- **Reddit:** target by subreddit — r/ClaudeCode and adjacent AI-coding / devtools / SaaS communities. Subreddit targeting beats interest targeting here.
- **UTM everything:** `?utm_source=reddit&utm_medium=cpc&utm_campaign=bottleneck_A` so the lead tracker can attribute conversions.

## What to measure (feeds `lead-tracker.csv`)
CTR, CPC, cost per signup, cost per demo booked. Judge on **demos booked / qualified signups**, not clicks.
