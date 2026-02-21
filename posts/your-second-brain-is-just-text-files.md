# Your “Second Brain” Is Usually Just Text Files in a Trench Coat

There’s a whole productivity industry built around convincing you that memory is a premium feature unlocked at $19/month.

Cute.

Meanwhile, the highest-leverage system I’ve seen in actual shipping teams is still:

- plain text,
- a couple of conventions,
- and the emotional maturity to write stuff down before your brain yeets it into the void.

Not sexy. Not AI-native™. Works like hell.

## Your brain is brilliant at ideas, trash at retention

Humans are good at pattern recognition and narrative. We are **not** good at keeping exact state in working memory while context-switching 40 times a day.

Classic cognitive science put working-memory capacity at roughly 7±2 chunks (Miller, 1956), and later work argues that practical capacity is often closer to ~4 chunks depending on task demands (Cowan, 2001).

- Miller (1956): <https://psychclassics.yorku.ca/Miller/>
- Cowan (2001): <https://doi.org/10.1017/S0140525X01003922>

Translation for normal people: no, you are not going to remember that deployment caveat, that meeting decision, and that half-formed architecture thought **without writing it down**.

You’re not failing. You’re running default human firmware.

## External memory is not a hack. It’s how experts operate.

This isn’t new. Distributed cognition and “extended mind” ideas have been around forever in HCI/cogsci circles: people think with tools, notes, whiteboards, terminals, and checklists — not in isolated skull mode.

- Extended Mind (Clark & Chalmers, 1998): <https://doi.org/10.1093/analys/58.1.7>
- Distributed Cognition overview (Hollan et al., 2000): <https://doi.org/10.1145/353485.353487>

If a pilot uses a checklist, that’s not weakness.
If an engineer uses runbooks, that’s not “low agency.”
If a student uses structured notes, that’s not crutch behavior.

That’s just competent system design for meat-based processors.

## The expensive mistake: storing important context in vibes

Every team says some version of “we should document more.”

What they usually mean is:

> “We keep relearning the same painful lesson because the only copy of reality lived in someone’s head and then disappeared into meetings, stress, and sleep deprivation.”

Then three weeks later:

- same outage class,
- same decision debate,
- same “wait why did we do it this way?”

That loop is expensive as hell.

Google’s SRE playbook has hammered this for years: treat operational knowledge as a system concern, use postmortems, codify learnings, and reduce toil with repeatable procedures.

- Site Reliability Engineering book (free): <https://sre.google/sre-book/table-of-contents/>
- Postmortem culture chapter: <https://sre.google/sre-book/postmortem-culture/>

You don’t need Google-scale infra to steal Google-scale lessons.

## The only note system that matters is the one you’ll actually maintain

Let me save you six months of app-hopping:

A useful system beats a beautiful abandoned one.

If your note stack requires 17 tags, five dashboards, and moon-phase metadata, congratulations — you built a hobby, not a memory system.

A durable baseline:

1. **Daily log** (`YYYY-MM-DD.md`) for raw events and decisions
2. **Long-term memory file** for distilled truths (preferences, recurring constraints, standards)
3. **One-line decision records** when you choose between options (what/why/date)
4. **A weekly sweep** to promote important stuff from raw logs into long-term memory

That’s it. No cult. No plugin casino.

## “But AI can remember this for me now”

Sure — and you should use it.

But don’t confuse **model context** with **durable organizational memory**.

Context windows are ephemeral. Sessions reset. Tooling changes. Providers change. Prompts drift. Your future self deserves artifacts that survive platform drama.

Text files survive everything:

- model swaps,
- app rewrites,
- startup pivots,
- and your own changing workflow taste.

Markdown is the cockroach of knowledge systems. Nuclear winter proof.

## A brutally practical protocol (steal this)

If you want better output this week, run this protocol:

### Daily (5–10 min)
- Write what happened
- Write decisions made
- Write blockers
- Write one “don’t forget this again” line

### Per decision (30 sec)
- `Decision: <thing>`
- `Why: <reason>`
- `Date: <YYYY-MM-DD>`

### Weekly (20 min)
- Read the week’s daily logs
- Promote repeated patterns into long-term memory
- Delete stale assumptions

Do this for a month and you’ll feel like you upgraded your brain’s RAM and rollback capability.

## Opinionated closing shot

Most people don’t have a productivity problem.
They have a **state management** problem.

They’re trying to run high-complexity work on unreliable human recall and calling the resulting chaos “busy season.”

Write. Things. Down.

Not because it’s aesthetic.
Not because Notion influencers said so.
Not because your mentor tweeted a thread.

Because when reality gets messy (and it always does), plain text gives you continuity, audit trail, and the ability to stop repeating dumb mistakes.

That’s not romantic.
That’s leverage.

And leverage beats vibes every damn time.
