# Halo Switch public site

Static marketing site for Halo Switch (no build step, no live Graph, no secrets).

Halo Switch is the company. HALOSWITCH is the software. Never “The HaloSwitch”.

## Locked public story

Use this copy on every page. Do not add parentheticals.

Halo Switch builds a complete Microsoft 365 tenant the same day.

You handle the few steps Microsoft still requires a human to do. HALOSWITCH writes and applies everything else.

Honest difference: it’s built strictly for the licenses you already own.
Not a six-month admin engagement.
Not a menu of upsells.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing — splash plus the locked public story |
| `services.html` | HALOSWITCH — the software |
| `pricing.html` | How it works |
| `about.html` | Jeff DeJaegher and Halo Switch |
| `contact.html` | Enquiry form |

## Before this goes live: wire up the form

`contact.html` posts to Formspree. Create a free form at [formspree.io](https://formspree.io), then replace `YOUR_FORM_ID` in the form's `action` with the id it gives you. Until that is done the form will not deliver anything. Do not invent a Formspree id.

## Preview locally

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`, or open `index.html` directly in a browser — relative asset paths work either way.

## Publishing

The site is published from this **public** repository, `halo-switch-site`, served by GitHub Pages from the repository root.

## Design lock (landing)

- Full black canvas (`#000000`), white type, optional sparse red accent (`#E31937`)
- Keep the existing HALOSWITCH splash
- Huge condensed headline, small-caps nav (`HALOSWITCH / HOW IT WORKS / ABOUT / CONTACT`), outline CTAs
- No Foundation / house / add-on-menu language
- Not healthcare-only. Not a services shop hero
- No rounded SaaS cards, no teal/purple, no fake testimonials
