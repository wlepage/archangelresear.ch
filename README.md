# Archangel Research

The static website for **Archangel Research** — a clean, single-page site presenting the lab's tools for materials and mechanical engineering. Built with [Astro](https://astro.build), deployed to GitHub Pages at **[archangelresear.ch](https://archangelresear.ch)**.

## Quick start

```bash
npm install        # install dependencies
npm run dev        # local dev server (http://localhost:4321)
```

## Scripts

| Command               | What it does                                                  |
| --------------------- | ------------------------------------------------------------- |
| `npm run dev`         | Start the dev server with hot reload.                         |
| `npm run build`       | Build the static site to `dist/`.                             |
| `npm run preview`     | Serve the built `dist/` locally to preview production output. |
| `npm run check`       | Astro + TypeScript type checking.                             |
| `npm run lint`        | ESLint + Prettier format check.                               |
| `npm run format`      | Auto-format all files with Prettier.                          |
| `npm run test:a11y`   | Build, preview, and run Playwright + axe accessibility tests. |
| `npm run generate:og` | Regenerate `public/og.png` from `scripts/og.svg`.             |

## Editing content

Almost all content lives in plain data files — you rarely need to touch components.

### Add, remove, or edit a project

Edit [`src/data/products.ts`](src/data/products.ts). Each project is one object:

```ts
{
  name: 'New Project',
  url: 'https://example.com',
  status: 'live',                 // 'live' | 'coming-soon'
  cta: 'Visit example.com',       // 'coming-soon' renders as plain text, not a link
  description: 'One or two sentences describing the project.',
  icon: 'e2283',                  // must match a key in src/icons/index.ts
}
```

- **To add a project:** append a new object to the `products` array. To give it a custom icon, add an `.astro` icon to [`src/icons/`](src/icons/) and register it in [`src/icons/index.ts`](src/icons/index.ts) with a new key, then reference that key.
- **To remove a project:** delete its object.
- **To reorder:** change the array order — cards render in array order.
- `status: 'coming-soon'` shows an "In development" badge and renders the CTA as non-linked text (so there's no broken link before launch).

### Edit focus areas

Edit [`src/data/focus.ts`](src/data/focus.ts) (`focusIntro` and the `focusAreas` array).

### Edit site-wide values

Brand name, legal name, domain, contact email, and the Formspree endpoint live in [`src/config.ts`](src/config.ts).

### Edit copy / layout

Section copy (hero headline, etc.) lives in the matching component under [`src/components/`](src/components/).

## Contact form

The form posts to **Formspree** (endpoint set in [`src/config.ts`](src/config.ts) → `formEndpoint`).

To use a different form or provider:

1. Change `formEndpoint` in `src/config.ts`.
2. If the new provider expects different field names, update the `name="..."` attributes in [`src/components/ContactForm.astro`](src/components/ContactForm.astro).

A `mailto:` fallback to `info@archangelresear.ch` is always visible, so the page works even if the form provider is unavailable.

## Accessibility & performance

- Targets **WCAG 2.2 AA**. Automated checks run via `npm run test:a11y` (Playwright + `@axe-core/playwright`) against the production build.
- Includes a skip link, semantic landmarks, visible focus states, labelled form fields, and `prefers-reduced-motion` support.
- No analytics, trackers, cookies, or external font loading. Inter is self-hosted from `public/fonts/`.

### Lighthouse (manual)

```bash
npm run build && npm run preview
# In another terminal:
npx lighthouse http://localhost:4321 --view --preset=desktop
npx lighthouse http://localhost:4321 --view   # mobile (default)
```

Targets: Performance 95+, Accessibility 95+ (ideally 100).

## Deployment (GitHub Pages)

Deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every push to `main` builds the site and publishes it to GitHub Pages.

One-time setup:

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow builds and deploys automatically.

### Custom domain

[`public/CNAME`](public/CNAME) contains `archangelresear.ch`, so the custom domain persists across deploys. At your DNS provider, point the domain at GitHub Pages:

- Apex (`archangelresear.ch`): `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and/or `AAAA` records for IPv6).
- Or a `CNAME` for a `www` subdomain pointing to `<user>.github.io`.

Then enable **Enforce HTTPS** in Settings → Pages once the certificate is issued.

## Project structure

```
public/            static assets served as-is (CNAME, robots.txt, favicon, fonts, og.png)
scripts/           OG image source + generator
src/
  components/      Header, Hero, Focus, ProductCard, Products, ContactForm, Footer
  data/            products.ts, focus.ts  ← edit content here
  icons/           custom SVG product icons + registry
  layouts/         BaseLayout.astro (head metadata, fonts, skip link)
  pages/           index.astro, 404.astro
  styles/          global.css
  config.ts        site-wide constants
tests/             Playwright + axe accessibility tests
```
