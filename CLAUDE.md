# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This repository is **not yet implemented**. It currently contains only [PROMPT.md](PROMPT.md), the authoritative build brief. The task is to build the Archangel Research website from scratch per that brief. Read PROMPT.md in full before starting work — it is the source of truth for content, copy, constraints, and acceptance criteria.

## What this is

A single-page, static marketing/portfolio ("brag page") site for **Archangel Research**, a materials/mechanical-engineering research-tools brand. Editorial, text-led, minimal — inspired by the Betaworks "Companies" page but not a copy. Canonical domain: `archangelresear.ch`. Deploys to **GitHub Pages**.

The page presents exactly three projects: **E2283** (live), **Particle Gauge** (coming soon), and **Digital Image Correlation** (live). Sections: Header → Hero → Current Focus → Products → Contact → Footer.

## Stack & intended commands

Use **Astro** (static output) unless there is a strong reason not to. Once scaffolded, the brief specifies these npm scripts should exist:

```bash
npm run dev        # local dev server
npm run build      # static build
npm run preview    # preview the built site
npm run check      # type checking
npm run lint       # linting
npm run test:a11y  # accessibility checks (axe / Playwright / Pa11y)
```

If a command can't be implemented, document why in the README rather than silently omitting it.

## Hard constraints (from the brief — these are acceptance criteria)

These are easy to violate by reflex; verify against them before considering work done:

- **No hamburger/sandwich menu.** On small screens, wrap or stack the nav.
- **No analytics, no third-party tracking, no CMS, no cookies, no heavy animation library.**
- **Minimal client-side JS.** Static HTML/CSS first. No external font loading unless justified.
- **Do not mention the founder's name, any bio, or university/day-job content.** Do not reference `amdg.science` (reserved for a later version).
- **No religious/angelic imagery** despite the brand name. Product icons are custom simple-line/geometric SVGs, decorative (`aria-hidden="true"`) unless they convey meaning.
- **Contact form** is the only contact channel: it posts to Formspree (endpoint in `src/config.ts`). Per the owner's direction, **no email address is displayed anywhere** on the page (the form replaces the mailto fallback). No newsletter signup.
- Targets: **WCAG 2.2 AA**, Lighthouse Accessibility 95+ (ideally 100), Lighthouse Performance 95+.

## Maintainability expectations

- Product/project content lives in **one data file** (e.g. `src/data/products.{ts,json}`). Adding a fourth product later must mean editing only that file — never duplicate card markup inline.
- Use shared components for Header, Hero, Product card, Contact form, Footer.
- Footer year should be dynamic (build-time) or in one obvious place.
- The owner is "technically comfortable" but not a framework expert — keep it simple and the README must explain how to add/remove/edit a product.

## Required deliverable files

Beyond Astro source: `public/CNAME` (contents: `archangelresear.ch`), `robots.txt`, `sitemap.xml`, favicon, full SEO/OpenGraph/Twitter-card metadata with canonical `https://archangelresear.ch`, a GitHub Actions workflow for Pages deploy, and a README covering local dev, editing content, checks, build, and deployment.

## Copy guidance

Use concise technical language: _measurement, repeatable, traceable, deterministic, fatigue, defects, microscopy, experimental mechanics_. Avoid startup clichés (_cutting-edge, revolutionary, seamless, unlock, disrupting, world-class_, etc.). PROMPT.md contains exact approved copy for the hero, focus intro, products intro, and contact intro — prefer it over inventing new wording.
