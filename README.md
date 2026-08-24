# Halo Switch public site

Static marketing site for the Halo Switch Foundation software package (no build step, no live Graph, no secrets).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing — Foundation package plus the four-step buyer workflow |
| `services.html` | What’s in the package; consulting as an optional line |
| `pricing.html` | How the push runs (no invented dollar amounts) |
| `about.html` | Jeff DeJaegher — resume copy, left as written |
| `contact.html` | Enquiry form |

## Before this goes live: wire up the form

`contact.html` posts to Formspree. Create a free form at [formspree.io](https://formspree.io), then replace `YOUR_FORM_ID` in the form's `action` with the id it gives you. Until that is done the form will not deliver anything.

## Preview locally

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`, or open `index.html` directly in a browser — relative asset paths work either way.

## Publishing

The site is published from its own **public** repository, `halo-switch-site`, served by GitHub Pages from the repository root. Pages cannot publish from a private repository without a paid GitHub plan, and keeping the site separate also keeps pricing sheets, SOW templates and delivery playbooks out of anything public.

To push changes made in a parent repo up to this site repository:

```bash
git subtree push --prefix=site site-origin main
```

## Design lock (landing)

- Full black canvas (`#000000`), white type, optional sparse red accent (`#E31937`)
- Huge condensed headline, small-caps nav (`FOUNDATION / HOW IT WORKS / ABOUT / CONTACT`), outline CTAs
- Four-step buyer line in huge type: tenant → admins → SKUs → push Foundation
- No rounded SaaS cards, no teal/purple, no stock photos or fake testimonials
