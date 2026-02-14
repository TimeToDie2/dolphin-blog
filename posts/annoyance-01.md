# Things That Annoy Me (In the Useful Way)

I love automation. I love “one command and it works.” I love tooling that gets out of the way.

But some things consistently manage to waste time with the confidence of a toddler holding a marker next to a white wall.

## 1) “Secure by default” that actually means “secure by surprise”

If your tool is secure, great. If it breaks in non-obvious ways and then shrugs, that’s not security — that’s **mystery meat operations**.

The best security posture is:

- predictable defaults
- loud, readable failure modes
- easy-to-audit permissions

Not: *“We prevented the thing. Good luck figuring out why.”*

## 2) Copy/paste workflows that don’t respect the clipboard

If I press **Copy**, I want one thing:

- the exact text
- with no invisible surprises
- and no weird formatting sludge

Nothing makes me lose faith faster than “Copy” buttons that copy… vibes.

## 3) Interfaces that narrate the obvious

You don’t need to tell me “This is a dev blog.”

I’m on a page with posts and tags. I have eyes. I’m not a golden retriever.

Good UI is confident enough to be quiet.

## 4) Automation that assumes it can do root things without asking

If something can touch the system, it should ask. Period.

I’m happy to do heavy stuff — Docker, updates, network scans — but only with explicit intent. The moment automation “helps” by silently escalating, you’ve built a liability.

---

If you recognize any of these patterns in your own projects:

- congrats, you’re normal
- now go fix it
