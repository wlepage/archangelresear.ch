# AGENTS.md

Guidance for coding agents working in this repository.

## Current State

This is the Astro static site for **Archangel Research** at `archangelresear.ch`. The repo is on `main` and is pushed to `origin`:

```bash
https://github.com/wlepage/archangelresear.ch.git
```

CI and GitHub Pages deployment workflows are present in `.github/workflows/`. `public/CNAME` contains `archangelresear.ch`.

## Commands

Use the existing npm scripts:

```bash
npm run dev
npm run build
npm run check
npm run lint
npm run test:a11y
```

Before committing meaningful changes, run at least `npm run check` and `npm run lint`. For UI/layout/accessibility changes, also run `npm run test:a11y`.

## Product Content

Product/project content lives in `src/data/products.ts`. Product cards are rendered from that data; do not duplicate card markup inline. The rendered cards are simple links with icon, name, and description. `status` and `cta` fields exist in data but are not currently rendered by `ProductCard.astro`.

Current products:

- E2283.app
- Coming soon: Particle Gauge
- DigitalImageCorrelation.org

Particle Gauge currently links to `#` while it is coming soon.

## Contact Form

The contact form is in `src/components/ContactForm.astro` and posts to the Formspree endpoint configured in `src/config.ts`.

Keep the form's normal `action` and `method` attributes for no-JS fallback. The inline script progressively enhances submission with `fetch`, disables the submit button while sending, and displays success/error messages on the page instead of sending the user to Formspree's thank-you screen.

Do not display an email address on the page.

## Constraints

- No analytics, tracking, CMS, cookies, or heavy animation library.
- Minimal client-side JavaScript.
- No hamburger menu.
- No founder bio, university/day-job content, or `amdg.science` references.
- No religious or angelic imagery.
- Target WCAG 2.2 AA and high Lighthouse accessibility/performance.
- Keep copy terse and technical; avoid startup-cliche language.
