# RunHQ — DM & Demo Conversion Playbook

> The conversion engine for social (X / Reddit / LinkedIn DMs). Everything upstream (posts, replies, ads) exists to start a DM; this doc is what happens *in* the DM. Created 2026-06-03.

## Customer flow
**post / ad / DM → live 15-min demo → guided setup → paid early access (access code)**

The activation moment is **guided setup on one real issue from their product** — that's where they feel the loop work. Aim every conversation there.

## The offer (use this framing everywhere)
❌ Don't say: *"Join early access."*
✅ Say:
> **"We're onboarding a small number of teams into early access this week. If you're using Claude Code, Cursor, Codex, or AI agents, we'll personally help you set up your first feedback-to-PR workflow."**

Why it's stronger: **scarcity** (a few teams, this week) + **done-with-you value** (we set it up for you, on a real issue) + a built-in **ICP qualifier** (are you using agents?).

## The DM script (question-first — don't pitch)
The DM's job is **not** to explain RunHQ. It's to **start a conversation and book a 15-min call.** One question per message; match their energy; never paste a wall of text.

1. **Open — qualify:**
   > "Are you using Claude Code, Cursor, Codex, or any AI coding agents in your workflow yet?"
2. **They reply — find the pain:**
   > "Curious — how are you handling the workflow *after* feedback comes in? Like turning bugs/features into agent tasks, reviewing PRs, and testing previews?"
3. **Book the call:**
   > "That's basically what RunHQ helps with. We're onboarding a few teams this week — want to hop on a 15-min call and I can show how it'd work on one real issue from your product?"

If they're clearly hot, skip straight to step 3.

## Access code vs. demo — which door
- **Curious / indie / low-touch:** offer an **access code** directly ("want an early-access code to try it?") — lowest friction, captures the interested-but-not-ready.
- **Real team / strong-fit ICP:** route to the **15-min demo + guided setup** — higher intent, better activation, the path to paid.
- Both roads aim at **guided setup on one real issue**.

## Objection quick-responses (founder-to-founder, honest)
| Objection | Response |
|---|---|
| "I already use Linear + GitHub." | RunHQ sits *across* them — it runs the agent loop they don't: feedback → agent task → reviewed PR → preview. |
| "Isn't this just ClickUp/PM software?" | PM tools track tickets; RunHQ operates the *agent* loop and produces real code artifacts (tasks, PRs, previews). |
| "Does it ship on its own?" | No — a human approves every PR. It removes the busywork around the loop; you stay in control of what ships. |
| "We're too small." | Small AI-native teams feel the review/ship bottleneck hardest — that's exactly who this is for. |

## Where this plugs into the system
- **Social posts** (`social-content/`) end with the soft CTA → **"DM for an early-access code."**
- **Engagement-queue replies** stay value-first / no-pitch — conversion happens later, in the DM.
- **Outreach DMs** (`outreach-followups/`, DM channels: x-dm / reddit-dm / community) open with the **question-first script** above; **email** keeps the longer pain-led template (`05-outreach-kit.md`).
- **Demo + guided-setup flow:** see `05-outreach-kit.md` "Demo flow."
