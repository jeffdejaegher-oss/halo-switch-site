# Halo Switch public site

Static consulting site for Halo Switch (no build step, no live Graph, no secrets).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing — Microsoft 365 setup and security for clinics |
| `services.html` | Engagements (foundation, devices, E5 uplift, migration, care) and delivery method |
| `pricing.html` | How an engagement runs (no invented dollar amounts) |
| `contact.html` | Enquiry form |

## Before this goes live: wire up the form

`contact.html` posts to Formspree. Create a free form at [formspree.io](https://formspree.io), then replace `YOUR_FORM_ID` in the form's `action` with the id it gives you. Until that is done the form will not deliver anything.

## Preview locally

```bash
cd site
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`, or open `index.html` directly in a browser — relative asset paths work either way.

## Publishing

The site is published from its own **public** repository, `halo-switch-site`, served by GitHub Pages from the repository root. Pages cannot publish from a private repository without a paid GitHub plan, and keeping the site separate also keeps pricing sheets, SOW templates and delivery playbooks out of anything public.

To push changes made here up to the site repository:

```bash
git subtree push --prefix=site site-origin main
```

## Design lock (landing)

- Full black canvas (`#000000`), white type, optional sparse red accent (`#E31937`)
- Huge condensed headline, small-caps nav (`WORK / HOW WE WORK / CONTACT`), outline CTAs
- Thin LICENSE → GROUP → DEVICE line diagram — no rounded SaaS cards, no teal/purple, no stock photos or fake testimonials
