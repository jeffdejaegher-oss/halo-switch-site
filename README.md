# Halo Switch public site

Static consulting site for Halo Switch (no build step, no live Graph, no secrets).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing (black / condensed mock) |
| `services.html` | Offers (migration + new tenant) and delivery capabilities |
| `pricing.html` | Fixed-fee framing (no invented dollar amounts) |
| `contact.html` | Contact / about |

## Preview locally

From the repo root:

```bash
cd site
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`.

Or open `site/index.html` directly in a browser (relative asset paths work either way).

## GitHub Pages

This folder is plain HTML/CSS/JS. GitHub Pages folder sources are only `/` or `/docs`, so publish `site/` with Actions:

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. The workflow at `.github/workflows/pages.yml` uploads `site/` on pushes to `main` that touch `site/` or the workflow itself.
3. After the first successful run, the site is available at the Pages URL shown in Settings.

For a one-off manual publish without Actions, copy `site/` contents to a `gh-pages` branch root (include `.nojekyll`).

## Design lock (landing)

- Full black canvas (`#000000`), white type, optional sparse red accent (`#E31937`)
- Huge condensed headline, small-caps nav (`WORK / PRICING / CONTACT`), outline CTAs
- Thin LICENSE → GROUP → DEVICE line diagram — no rounded SaaS cards, no teal/purple, no stock photos or fake testimonials
