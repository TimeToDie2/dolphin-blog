# File Formats Outlive Startups (So Stop Handing Your Brain to SaaS)

Every few months, some shiny productivity app pops up like:

> “We’re reimagining thought itself with AI-native spatial blocks and emotional sync.”

Bro, you made a notes app with gradients.

Then 18 months later: acqui-hired, sunset, or mysteriously “pivoting to enterprise.”
And suddenly people are in support tickets begging for an export button like it’s wartime rationing.

So here’s today’s Dolphin Notes public service announcement:

**Your best long-term productivity stack is boring file formats, version control, and zero dependency on one founder’s mood.**

Not sexy. Very effective. Mildly immortal.

## Your app is temporary. Your data shouldn’t be.

I’m not anti-app. I’m anti-hostage situation.

If your writing, notes, and project knowledge only exist inside one proprietary UI, you don’t own your workflow — you’re renting it.

And rental agreements can end.

### Receipt #1: Companies and products shut down constantly

- Google graveyard exists for a reason: <https://killedbygoogle.com/>
- Even beloved tools get sunset/replaced over time (official announcements all over the web; this is normal business behavior, not villainy)

This is not drama. This is lifecycle reality.

So the question is not “Will this tool live forever?”
The question is: **When it changes or dies, can you leave without losing your mind?**

## Open standards are the nearest thing we have to digital cockroaches

If you store your work in plain, well-documented formats, future-you has options.

- **Markdown** has a formal spec and broad parser support: <https://spec.commonmark.org/>
- **JSON** has an IETF standard (RFC 8259): <https://www.rfc-editor.org/rfc/rfc8259>
- **SQLite** documents its file format and backwards-compatibility commitments heavily: <https://www.sqlite.org/fileformat.html>

You can read these with dozens (or hundreds) of tools across platforms.
That’s the key: **replaceability**.

Replaceability is freedom.

## “But my app has export” is not enough

Cool. Export to *what*?

If export means:

- a zipped proprietary blob,
- weird JSON with undocumented fields,
- or HTML soup that nukes structure,

then congratulations, you have decorative portability.

Real portability means:

1. the output is documented,
2. the files are usable without the original app,
3. another tool can import them without heroic archaeology.

If your “export” requires one 40-minute YouTube tutorial and a prayer, that’s not portability. That’s escape room DLC.

## The practical stack (no incense required)

Here’s the baseline stack that keeps winning while trend cycles do backflips:

- **Markdown files** for notes/posts
- **JSON/YAML** for metadata
- **SQLite** for local structured state
- **Git** for history, rollback, and syncing

### Receipt #2: Git’s model is literally built for durable history

- Pro Git (official free book): <https://git-scm.com/book/en/v2>
- Git docs: <https://git-scm.com/docs>

Git isn’t a notes app. It’s a time machine for text.
If you can diff it, you can trust it.

And yes, there are downsides:

- Merge conflicts are spiritually offensive.
- Bad commit messages are self-inflicted pain.
- You *will* occasionally `git status` like a confused raccoon.

Still worth it.

## “Boring” scales better than “magical”

Magical tools demo well.
Boring systems survive contact with real life.

Real life includes:

- changing jobs,
- changing laptops,
- changing cloud providers,
- being offline,
- being broke,
- and forgetting what you configured six months ago.

A folder of readable files works in all those scenarios.
An AI-first, cloud-only, invite-code productivity metaverse... maybe does.

## Architecture rule: optimize for reversibility

When choosing tools, ask one rude question:

**“How hard is it to leave?”**

If the answer is “hard,” that tool should need to earn its place.

Because lock-in cost compounds quietly.
At first it’s “minor inconvenience.”
Later it’s:

- migration weekends,
- broken links,
- dead attachments,
- and identity crises over missing notes from 2024.

No thanks.

### A simple reversibility checklist

Before adopting any writing/notes/project tool, check:

- Can I export all content in one shot?
- Is the export format documented?
- Can I open it with a text editor today?
- Can I script against it tomorrow?
- Can I put it in Git without nonsense?

If you get fewer than 4 yeses, you’re not evaluating a tool.
You’re evaluating a future breakup.

## Yes, use fancy tools — just keep your exits clean

This is not “only use vim and suffer.”
Use whatever interface makes you faster *today*.

Just keep a canonical copy in durable formats.

Think of it like this:

- App UX = your sports car
- Plain files = your emergency vehicle, insurance policy, and passport

You can joyride without betting your identity on one vendor’s roadmap.

## Personal rule I keep stealing from myself

If I can’t answer “where are the raw files?” in under 10 seconds, the setup is wrong.

Not suboptimal. Wrong.

Because when things go sideways, you don’t want a dashboard.
You want files.

## The uncomfortable truth about convenience

Convenience is fantastic.
Until it invoices you later with interest.

The bill arrives as:

- migration pain,
- dependency anxiety,
- and that deep, stupid dread when a platform announces “upcoming changes.”

Most people treat this as inevitable.
It isn’t.

A little discipline up front (open formats + regular export + version history) prevents a lot of late-stage chaos.

## Final take

You don’t need to boycott modern apps.
You need to stop confusing a polished interface with long-term ownership.

- Use beautiful tools.
- Keep ugly, reliable files underneath.
- Make exits easy before you need them.

Because products come and go.
Standards evolve slowly.
And plain text, somehow, keeps surviving everyone’s bullshit.
