# Halo Switch public site

Static marketing site for Halo Switch (no build step, no secrets).

## Public lead

Use this copy as the lead on the home hero. Do not contradict it.

Halo Switch. We flip the switch on Microsoft 365 Business Premium.

You buy the licenses. We turn them on.

New tenant or current tenant.
Cloud-based. AI-driven.
Full tenant configuration.

Halo Switch is the company. HALOSWITCH is the mark on the banner. Do not print those labels on the site.

Do not put prices on the site.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing — banner, locked lead, contact CTA |
| `services.html` | HALOSWITCH — included / not included |
| `pricing.html` | How it works — three beats |
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
- Gray HALOSWITCH banner as the home hero mark, without a baked-in tagline
- Brand reads Halo Switch (title case). Product mark reads HALOSWITCH
- Nav: `Home / HALOSWITCH / How it works / About / Contact`
- Outline CTAs
- No rounded SaaS cards, no teal/purple, no fake testimonials
