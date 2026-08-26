# Halo Switch public site

Static marketing site for Halo Switch (no build step, no secrets).

## Public lead

Use this copy as the lead on the home hero. Do not contradict it.

Companies buy Microsoft 365 licenses. Halo Switch turns them on — securely and correctly — in days.

Halo Switch delivers the week-one job. HALOSWITCH stays in-house. The customer does not get the kit. This is a productized first week, not a software download and not a services menu.

$8,000–$11,000 per tenant. One tenant.

Supporting honesty still ok:

- Built for the licenses you already own.
- One tenant. HALOSWITCH stays in-house.
- One product. A productized first week, not a software download and not a services menu.

Audience: companies and MSPs. Not healthcare-only. Not MSP-only.

## Do not sell services

Do not write Halo Switch as a services firm. Ban on the site: retainers, hourly, managed Microsoft 365, implementation project, services shop, services menu, "we run it for you" as a separate offer, consulting week, monthly platform fee, kit zip, run-it-yourself download.

## Price

The tenant price is on the HALOSWITCH page (`services.html`) as `$8,000–$11,000 per tenant`. Home may repeat a short line. How it works may repeat the same line. Change that string when Jeff changes the number.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing — locked license-on hero plus a short HALOSWITCH path |
| `services.html` | HALOSWITCH — On, Ready, price, product delivery |
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

## Design lock

- Full black canvas (`#000000`), white type, sparse red accent (`#E31937`)
- Keep the existing HALOSWITCH splash, without a baked-in tagline
- Brand reads Halo Switch (title case). Product reads HALOSWITCH
- Nav: `HALOSWITCH / How it works / About / Contact`
- Outline CTAs
- No rounded SaaS cards, no teal/purple, no fake testimonials
