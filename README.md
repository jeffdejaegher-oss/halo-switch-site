# Halo Switch public site

Static marketing site for Halo Switch (no build step, no secrets).

## Public lead

Use this copy as the lead on the home hero. Do not contradict it.

Companies buy Microsoft 365 licenses. Halo Switch turns them on. You buy the licenses. We turn them on for you.

Halo Switch is the company. HALOSWITCH is the software that gets applied. This is sold as a service: we turn it on. They do not get the kit.

Price: $8,000–$11,000 per tenant. No retainers, no hourly menu, no managed-M365 SKU, no extra product menu.

## On and Ready

Two lists only. Two-word bullets. Exact strings. No extra words under them. They live on `services.html` only.

On = configurations HALOSWITCH turns on.

Ready = configured, not turned on yet.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing — locked license-on hero, price, two CTAs |
| `services.html` | HALOSWITCH — lede, price, On, Ready |
| `pricing.html` | How it works — three beats, price once, link to the lists |
| `about.html` | Jeff DeJaegher and Halo Switch |
| `contact.html` | Enquiry form |

## Contact form

`contact.html` posts to Formspree at `https://formspree.io/f/mbgjrgeq`.

## Preview locally

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`, or open `index.html` directly in a browser — relative asset paths work either way.

## Publishing

The site is published from this **public** repository, `halo-switch-site`, served by GitHub Pages from the repository root.

## Design lock

- Full black canvas (`#000000`), white type, sparse red accent (`#e31937`)
- Keep the existing HALOSWITCH splash, without a baked-in tagline
- Brand reads Halo Switch (title case). Product reads HALOSWITCH
- Nav: `HALOSWITCH / How it works / About / Contact`
- Outline CTAs
- No rounded SaaS cards, no teal/purple, no fake testimonials
