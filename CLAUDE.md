# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

The site is **built, working locally, committed, and pushed** to GitHub on `main`. Remote `origin` points to `https://github.com/wlepage/archangelresear.ch.git`. [PROMPT.md](PROMPT.md) is the original build brief; note that several owner decisions since then override it (see "What this is" and Hard constraints). See "Going live" below for the remaining owner steps.

## What this is

A single-page, static marketing/portfolio ("brag page") site for **Archangel Research**, a materials/mechanical-engineering research-tools brand. Editorial, text-led, minimal — inspired by the Betaworks "Companies" page but not a copy. Canonical domain: `archangelresear.ch`. Deploys to **GitHub Pages**.

The page presents exactly three projects: **E2283.app**, **Particle Gauge**, and **DigitalImageCorrelation.org** — each card is a single clickable link (no rendered status badges, no rendered CTA buttons). Particle Gauge is currently marked coming soon in data and links to `#`. Sections: Header (wordmark only, no nav) → Hero → Products → Contact → Footer. The earlier "Current Focus" section was removed at the owner's request.

## Going live / operations

The code is done and pushed. The CI workflow [.github/workflows/ci.yml](.github/workflows/ci.yml), deploy workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml), and [public/CNAME](public/CNAME) (`archangelresear.ch`) are already in place. Remaining owner/platform steps:

1. **Repo visibility / Pages eligibility:** if the repo is private, GitHub Pages requires a paid plan (Pro/Team/Enterprise). On the free plan the repo must be public for Pages to publish.
2. **Enable Pages:** repo **Settings → Pages → Source = "GitHub Actions"**. The deploy workflow builds and deploys on every push to `main`.
3. **Point DNS** for `archangelresear.ch` at the registrar: apex `A` records to `185.199.108.153/109.153/110.153/111.153` (optional `AAAA` for IPv6). `CNAME` is already committed, so Pages adopts the custom domain; enable **Enforce HTTPS** once the cert issues.
4. **Confirm Formspree.** The form posts to `https://formspree.io/f/xpqnerzr` (in [src/config.ts](src/config.ts)); the first submission may need a one-time confirmation in the Formspree dashboard.

## Stack & commands

Built with **Astro** (static output), TypeScript, self-hosted Inter font. Implemented npm scripts:

```bash
npm run dev          # local dev server (http://localhost:4321)
npm run build        # static build → dist/
npm run preview      # preview the built site
npm run check        # astro check (types)
npm run lint         # eslint + prettier --check
npm run format       # prettier --write
npm run test:a11y    # build + preview + Playwright + @axe-core/playwright
npm run generate:og  # regenerate public/og.png from scripts/og.svg (uses sharp)
```

After any change, run `npm run format && npm run check && npm run lint && npm run test:a11y` before committing.

## Hard constraints (from the brief — these are acceptance criteria)

These are easy to violate by reflex; verify against them before considering work done:

- **No hamburger/sandwich menu.** On small screens, wrap or stack the nav.
- **No analytics, no third-party tracking, no CMS, no cookies, no heavy animation library.**
- **Minimal client-side JS.** Static HTML/CSS first. No external font loading unless justified.
- **Do not mention the founder's name, any bio, or university/day-job content.** Do not reference `amdg.science` (reserved for a later version).
- **No religious/angelic imagery** despite the brand name. Product icons are custom simple-line/geometric SVGs, decorative (`aria-hidden="true"`) unless they convey meaning.
- **Contact form** is the only contact channel: it posts to Formspree (endpoint in `src/config.ts`) and uses minimal inline JS to show the thank-you/error state on the page instead of navigating to Formspree. Keep the normal `action`/`method` attributes as a no-JS fallback. Per the owner's direction, **no email address is displayed anywhere** on the page (the form replaces the mailto fallback). No newsletter signup.
- Targets: **WCAG 2.2 AA**, Lighthouse Accessibility 95+ (ideally 100), Lighthouse Performance 95+.

## Maintainability expectations

- Product/project content lives in **one data file** (e.g. `src/data/products.{ts,json}`). Adding a fourth product later must mean editing only that file — never duplicate card markup inline.
- Use shared components for Header, Hero, Product card, Contact form, Footer.
- Footer year should be dynamic (build-time) or in one obvious place.
- The owner is "technically comfortable" but not a framework expert — keep it simple and the README must explain how to add/remove/edit a product.

## Required deliverable files

Beyond Astro source: `public/CNAME` (contents: `archangelresear.ch`), `robots.txt`, `sitemap.xml`, favicon, full SEO/OpenGraph/Twitter-card metadata with canonical `https://archangelresear.ch`, a GitHub Actions workflow for Pages deploy, and a README covering local dev, editing content, checks, build, and deployment.

## Copy guidance

Use concise technical language: _measurement, repeatable, traceable, deterministic, fatigue, defects, microscopy, experimental mechanics_. Avoid startup clichés (_cutting-edge, revolutionary, seamless, unlock, disrupting, world-class_, etc.). The live copy has been trimmed well below PROMPT.md's suggestions (only a hero tagline plus the three product descriptions remain) — the owner edits wording directly, so match the existing terse tone rather than re-expanding to the brief's longer copy.
