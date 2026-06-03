# RunHQ — LinkedIn Growth Playbook (Company Page)

> Goal: turn the **RunHQ company page** into a real top-of-funnel channel — followers → profile clicks →
> early-access signups → demos. Content is **generated daily by the `linkedin-content` routine**; publishing
> goes through a **scheduler you connect once** (Typefully / Buffer / Publer — see §7). Voice, positioning,
> and honesty guardrails inherit from [`01-positioning-and-messaging.md`](01-positioning-and-messaging.md).
> Created 2026-06-03.

---

## 0. The one thing you must internalize first

**LinkedIn company pages get a fraction of the reach of personal profiles.** The algorithm is built to
connect *people* to *people*; a faceless brand page is the hardest-mode way to grow. We chose the page as
RunHQ's presence — fine — but the plan only works if we run it the way successful dev-tool pages actually do:

> **The page is the publishing home. A *person* operating on the page's behalf is the growth engine.**
> Your 45 min/day of engagement (commenting, replying, DMs) runs through a **personal profile** — yours or a
> teammate's — because pages can't meaningfully comment-and-grow. That person then **reshares each page post
> to their own feed within ~15 min of publish.** This single move is the difference between 200 impressions
> and 4,000. It is not optional. (You're not building a separate personal brand — you're driving the page.)

If at any point you can give the page a **face** (founder name + photo in the "About," a recurring "from the
team" voice, the founder resharing every post), do it. Faces beat logos on this platform, full stop.

---

## 1. North-star + leading metrics (review weekly in `09-metrics-digest.md`)

| Metric | Why it matters | 2-week target | 8-week target |
|---|---|---|---|
| **Followers** | Compounding distribution | +100 | +500 |
| **Post impressions / wk** | Reach (the real bottleneck for a page) | 5k | 25k |
| **Engagement rate** | Algorithm fuel (comments > reposts > likes) | ≥3% | ≥5% |
| **Profile/CTA clicks → early access** | The actual funnel | 25 clicks | 150 clicks |
| **Demos sourced from LI** | Revenue line | 1 | 5+ |

> Vanity (followers, likes) is the *means*; **clicks to early access and demos booked** are the *goal*.
> Log LI-sourced demos in `lead-tracker.csv` (source = `linkedin`) so the Friday metrics digest can read them.

---

## 2. Page setup checklist (do once, before posting — ~30 min)

A page that isn't optimized leaks every click you earn. Confirm all of these:

- [ ] **Name + tagline:** `RunHQ — operations layer for AI coding agents`. Tagline = the mechanism line, not the vision line (skeptical devs see the page cold).
- [ ] **Logo + banner:** banner carries one line of copy — `Feedback in → reviewed PRs out. Your product, self-evolving.` + the early-access URL.
- [ ] **Custom button:** set to **"Sign up"** or **"Learn more"** → your early-access / "Start free" URL. This is the page's single most important conversion surface.
- [ ] **About section:** lead with the pain ("Your AI agent finished the code — now who reviews, tests, and ships it?"), then the mechanism, then the proof stat (**5 → 19 shipped** on the same feedback volume). End with a CTA line. Front-load keywords devs search: *AI coding agents, Claude Code, Cursor, Codex, PR review, preview environments, ship.*
- [ ] **"Products" / featured:** pin your best post or a 30-sec demo clip.
- [ ] **Founder linked:** add yourself (and any team) as the page's named people; have everyone list RunHQ as current employer so their personal posts associate to the page.
- [ ] **Social proof:** if usable, reference real customer logos already on the site (**jeju.com, smartbid.ai, socialrealtr.com**) — light-verify before naming anyone publicly.

---

## 3. Content pillars (LinkedIn-tuned — rotate, don't repeat hooks)

Adapted from the master pillars in [`11-social-playbook.md`](11-social-playbook.md) §1, weighted for what
performs on LI:

| # | Pillar | What it looks like on LinkedIn | Why it works here |
|---|---|---|---|
| 1 | **The thesis** | "The bottleneck in software moved past *writing* code." Opinionated, data-backed (real market signals from [`08-competitor-watch-log.md`](08-competitor-watch-log.md)). | LI rewards POV + "smart take I want to be seen agreeing with." |
| 2 | **The loop / vision** | "Your product, self-evolving" — but always shown as the concrete feedback → agent task → **reviewed PR** → preview → shipped loop. | Aspirational hook + proof = the share-worthy combo. |
| 3 | **Build-in-public** | What we shipped this week, real metrics, a demo clip, a lesson learned, a wall we hit. *Real numbers only.* | Founders follow founders who show the work. Highest trust-per-post. |
| 4 | **Founder POV / hot take** | Contrarian-but-defensible takes on AI-coding workflows, reviewing agent PRs at scale, "why agents made shipping *harder*, not easier." | Comments = reach. A defensible contrarian take farms comments. |
| 5 | **Customer / proof** | A before→after, a logo, a quote (verified), the 5→19 stat unpacked. | Moves the skeptic from "neat" to "for me." |
| 6 | **Engagement bait (clean)** | A genuine question, a poll ("How do you review your agent's PRs today? → manually / CI only / I don't 😅 / RunHQ"), a "hot take: agree or disagree?" | Polls + questions are the page's cheapest reach. Keep them real, not cringe. |

**Pairing rule (non-negotiable):** every **vision** hook ships with a **concrete proof** line, and we **never
imply a fully unattended loop — a human approves every PR.** See `01` §1c honesty guardrail.

---

## 4. Format playbook — what actually gets reach on LinkedIn

LinkedIn is its own dialect. The routine writes to these rules; you enforce them when posting:

- **Hook line is everything.** First 1–2 lines show before "…see more." Make them stop the scroll: a number, a contrarian claim, a sharp question. No "Excited to announce."
- **One idea per post.** Not a feature dump.
- **Whitespace.** Short lines, frequent breaks. Walls of text die.
- **No outbound links in the post body.** LinkedIn suppresses posts with external links. Put the link in the **first comment** and say "link in comments." (The routine outputs body + a separate `first_comment` field for exactly this.)
- **Best-performing formats, in order:**
  1. **Document / carousel posts** (PDF swipe-through) — highest dwell time, big reach. Great for "the 4 steps of the loop," "5 ways agent PRs slip through." *(You build the PDF; routine writes the slide copy + a cover-image brief.)*
  2. **Text + single image / screenshot** (a real PR diff, a preview-env URL, the 5→19 chart).
  3. **Native video / demo clip** (≤90s, captioned) — repurpose YouTube/Higgsfield assets from [`youtube/`](youtube/).
  4. **Plain text POV** (fast to ship, good for hot takes).
  5. **Polls** (cheap reach, once or twice a week max).
- **3–5 hashtags max,** specific not generic: `#AIagents #ClaudeCode #DevTools #BuildInPublic #SaaS`.
- **Tag deliberately,** never spray — only people/companies genuinely relevant to the post.
- **Post, then reshare from the personal profile within 15 min** (see §0).

---

## 5. Cadence — the weekly slot grid (1 post/day)

> **One strong page post per weekday**, pillar rotating by day. This is the right call for a company page:
> a single quality post/day avoids the reach-suppression that comes from over-stuffing the page feed, and it's
> sustainable. The **personal reshare is not a second post** — it's the free amplification step (reshare that
> day's page post from a personal profile within ~15 min; see §0). Weekday mornings are prime. Weekends optional.

| Day | The post (1 page post) | Format leaning | Then (free amplification) |
|---|---|---|---|
| **Mon** | Pillar 1 — Thesis (set the week's POV) | Text POV / image | Personal reshare + a one-line take |
| **Tue** | Pillar 3 — Build-in-public (what shipped) | Text + screenshot/metric | Personal reshare + metric callout |
| **Wed** | Pillar 2 — The loop / vision (+ proof) | Carousel or text+chart | Personal reshare |
| **Thu** | Pillar 4 — Founder hot take | Plain-text POV | Personal reshare + reply-farming |
| **Fri** | Pillar 5 — Proof / customer / 5→19 | Text + image | Personal reshare |
| **~1×/wk** | Swap one weekday's post for a **Poll** (Pillar 6) — cheapest reach | Native poll | Personal reshare |
| **Sat/Sun** | Optional: 1 lighter evergreen, or engagement-only | — | — |

Rotate hooks so no two days repeat an opener. The routine reads the last 3–5 days to enforce this.

---

## 6. The engagement engine — your 45 min/day (this is where growth comes from)

**More followers come from your comments on *other people's* posts than from your own posts.** Run this from a
**personal profile** (the page can't do it effectively). Block 45 min, ideally split AM/PM:

**Daily routine (the routine generates that day's target list):**
1. **15 min — Comment on 5–8 high-traffic posts** from the ICP/creators in the AI-coding space *while they're fresh* (<2h old). Add a real insight or a counter-take — not "Great post!". A sharp comment on a 50k-impression post can out-reach your own posts.
2. **10 min — Reply to every comment** on RunHQ's posts (from the page) within the first 2 hours. Early comment velocity is the #1 reach signal. Ask a follow-up question to keep threads alive.
3. **10 min — Engage the warm list:** people in [`lead-tracker.csv`](lead-tracker.csv) + recent profile visitors. Thoughtful comment on their content *before* any DM. Warm them, don't pitch them.
4. **10 min — Connect + soft DM:** send 5–10 connection requests/day (ICP only, with a one-line context note, never a pitch). For anyone who engaged with a RunHQ post, a value-first DM (no ask) → conversation → demo.

> **Hard limits (account safety):** ≤ ~20–25 connection requests/day, **no automation tools** for connecting/
> DMing (LinkedIn bans for it — and it's in `11` §4's "not doing" list), no copy-paste DM blasts. Personal,
> manual, value-first. The routine drafts *suggestions*; a human sends them.

**Who to engage (the page's growth comes from being where the ICP already is):**
- Creators posting about Claude Code / Cursor / Codex / agentic coding.
- Technical founders building AI-native products (your ICP).
- People commenting on competitor content (ClickUp, CrewAI, Linear, Tembo, Superset) with the pains we solve.
- Anyone who likes/comments on your posts → engage back same day.

---

## 7. Publishing — connect a scheduler once (chosen path)

We generate posts; a scheduler you connect **once** publishes them on time. No LinkedIn app review needed.

**Recommended: [Typefully](https://typefully.com)** — best-in-class for X+LinkedIn, clean scheduling, analytics,
and a "reshare from personal" reminder flow. Alternatives: **Buffer** (simple, free tier) or **Publer**
(best **bulk CSV import** — paste a week at once).

**Setup (one-time, ~15 min):**
1. Create the scheduler account; **connect the RunHQ company page** (and your personal profile, for the §0 reshares).
2. Decide your posting times (weekday mornings in your audience's timezone).

**Daily/weekly flow:**
- The `linkedin-content` routine writes `linkedin/<DATE>.md` (human-readable, with the engagement plan) **and** `linkedin/import/<DATE>.csv` (scheduler-ready: `date,time,page_or_personal,text,first_comment,media_hint,hashtags`).
- **Publer/Buffer:** bulk-import the CSV (drag-drop) — a week takes ~2 min.
- **Typefully:** paste each post (no CSV import) — still fast; better editor + analytics.
- Confirm the **first-comment link** and **media** (carousel PDF / screenshot / clip) are attached — the CSV carries the text + a `media_hint`, but you attach the actual file.
- Posts fire on schedule; **you do the §0 reshare + the §6 engagement live** (those can't be scheduled).

> **Fuller automation later:** schedulers have APIs (Typefully/Buffer/Publer). A tiny local script with your
> scheduler key in a local `.env` could push the day's CSV straight into the queue — no secrets in this public
> repo. Deferred until the manual flow proves the content works.

---

## 8. What's automated vs. what's you

| Automated (the `linkedin-content` routine, daily, Opus 4.8) | You (human, can't/shouldn't automate) |
|---|---|
| Drafts 1 LinkedIn-native page post/day (pillar rotates) + the personal-reshare angle | Page setup (§2) + connecting the scheduler (§7) |
| Writes hook + body + **first-comment** + hashtags + media brief | Building carousel PDFs / attaching screenshots & clips |
| Produces the scheduler **import CSV** | Importing the CSV / pasting into the scheduler |
| Generates that day's **engagement target list** (§6) | Actually commenting, replying, connecting, DMing (45 min/day) |
| Enforces no-repeat hooks, voice, honesty guardrails | The §0 **personal reshare** of each page post |
| Flags `⚠️ VERIFY` on any unconfirmed claim | Verifying claims; logging LI-sourced demos in `lead-tracker.csv` |

---

## 9. Guardrails (inherit from `01` — non-negotiable)

- **Voice:** senior-engineer-direct, lead with the pain, concrete > abstract, never marketer-fluff.
- **Vision always paired with proof;** a **human approves every PR** — never imply full autonomy.
- **Never fabricate** metrics, customers, quotes, or news. Use `*(fill with real number before posting)*`.
- **No growth hacks that violate ToS** — no follow/unfollow bots, engagement pods, auto-DM/auto-connect tools, or mass identical messaging (see `11` §4). Real engagement only; LinkedIn bans aggressively.
- **Company-page reality:** don't over-post the page feed; lean on personal reshare + engagement for reach (§0).
