# Coding-Agent Brief: Archangel Research Website

## Project summary

Build a new static website from the ground up for **Archangel Research**.

The site should be a clean, lightweight, accessible, professional, single-page website inspired by the structure and restraint of the Betaworks “Companies” page, but it must not copy that page directly.

Reference style:

- <https://www.betaworks.com/companies>

The site should present Archangel Research as an independent research-lab / professional umbrella brand that has created useful tools for materials and mechanical engineering teams. This is not a sales page. It is a polished “brag page” showing what has been built.

Company details:

- Public brand name: **Archangel Research**
- Legal footer name: **Archangel Research LLC**
- Domain: **archangelresear.ch**
- Contact email: **info@archangelresear.ch**

Do not mention the founder’s personal name. Do not include a founder bio. Do not include university/day-job content. Do not include `amdg.science` in this version.

---

## Primary objective

Create a fast, accessible, maintainable, static website that presents two current/productized projects and one upcoming project:

### 1. E2283

- URL: <https://e2283.app>
- Status: Live
- CTA: **Visit e2283.app**
- Description:

> E2283 predicts the extreme values of defect sizes that drive fatigue failures in metals, using maximum-likelihood estimation to fit the Gumbel distribution to the largest 24 observed defects, following ASTM E2283.

### 2. Particle Gauge

- URL: <https://particlegauge.com>
- Status: Coming soon / not yet launched
- CTA: **Visit particlegauge.com** or **Coming soon**, depending on best UX. The card should still be visible.
- Description:

> Particle Gauge measures defect sizes from microscopic images and is the first code available that automatically merges stringers while allowing manual user edits, all in a fully repeatable, deterministic, and traceable algorithm.

### 3. Digital Image Correlation

- URL: <https://digitalimagecorrelation.org>
- Status: Live
- CTA: **Visit digitalimagecorrelation.org**
- Description:

> digitalimagecorrelation.org is a project created for the experimental mechanics community to equip new DIC practitioners with the basics of DIC so they can produce optimum measurements in a time-efficient manner.

---

## Preferred implementation

Use **Astro** unless there is a strong reason not to.

The implementation should remain simple enough that a technically comfortable owner can update it later without fighting a complex framework.

Requirements:

- Static output only.
- Deployable on GitHub Pages.
- Product content should be easy to update in one place, preferably a simple data file such as `src/data/products.ts`, `src/data/products.json`, or equivalent.
- Avoid unnecessary client-side JavaScript.
- Do not add analytics.
- Do not add CMS dependencies.
- Do not add a heavy animation library.
- Use semantic HTML and modern CSS.
- Use responsive layouts without relying on complex JavaScript.
- Site should work well on mobile, tablet, and desktop.

---

## Page structure

Build a single-page site with no hamburger/sandwich menu.

### 1. Header

- Left: Archangel Research wordmark/text.
- Right: simple anchor links such as:
  - Work
  - Focus
  - Contact
- No mobile hamburger menu.
- On small screens, use a simple wrapping or stacked nav.

### 2. Hero

Large, restrained headline:

> Archangel Research solves problems for materials and mechanical engineering teams around the world.

Supporting copy should explain that Archangel Research builds focused research tools for measurement, defects, fatigue, microscopy, and experimental mechanics.

Keep it brief and confident. Avoid startup clichés.

### 3. Current Focus

A short section similar in spirit to Betaworks’ “current areas of interest.”

Suggested focus areas:

- Defect measurement
- Fatigue-critical extremes
- Microscopy workflows
- Experimental mechanics education

Keep each item concise.

### 4. Products / Projects

Use text-plus-icon cards.

Create three cards for:

- E2283
- Particle Gauge
- Digital Image Correlation

Requirements:

- Cards should link directly to the external domains.
- External links should be accessible and clearly labeled.
- Particle Gauge should be marked as **Coming soon** or **In development**.
- Icons should be custom-generated simple line icons or geometric marks, not religious/angelic imagery.
- Avoid stock-looking icons if possible.
- Product cards should have a restrained, professional, research-oriented feel.

### 5. Contact

Minimal contact section with a form.

Form fields:

- Name
- Email
- Message
- Optional checkbox acknowledging that submitted information will be used only to respond to the inquiry.

The form should be wired in a static-site-compatible way. If an external form service is needed, make it easy to configure with a placeholder and document the setup.

Also include a visible mailto fallback:

- <info@archangelresear.ch>

Do not include newsletter signup.

### 6. Footer

Minimal footer.

Include:

- `© [current year] Archangel Research LLC`
- `Archangel Research`
- `info@archangelresear.ch`

Use the current year dynamically at build time or manually in an obvious place.

Do not include:

- Founder name
- Social links unless explicitly added later
- University or day-job references

Include a small privacy note or privacy page only if needed for the contact form.

---

## Design direction

The design should be inspired by the Betaworks companies page:

- Clean
- Editorial
- Minimal
- Professional
- Mostly text-led
- High whitespace
- Strong typography
- Simple grid
- Subtle hover/focus states
- Very restrained motion

Do not copy exact layout, text, spacing, or styling from Betaworks. Use it only as inspiration.

Avoid:

- Religious or angelic imagery
- Dark sci-fi aesthetics
- Overly corporate gradients
- Heavy animations
- Stock photo hero images
- Generic “innovation” language
- Startup cliché copy
- Overdesigned card effects
- Hamburger menu

Preferred visual language:

- Minimal black/white or near-black/off-white palette
- One restrained accent color if useful
- Accessible contrast
- Simple line icons or small geometric marks
- Elegant typography using system fonts or a lightweight self-hosted/open-source font
- No external font loading unless justified and optimized

---

## Accessibility requirements

Target **WCAG 2.2 AA**.

Implement:

- Semantic landmark structure: `header`, `main`, `section`, `footer`, etc.
- Proper heading hierarchy.
- Skip-to-content link.
- Keyboard-accessible navigation and forms.
- Visible focus indicators.
- Accessible form labels and errors.
- Sufficient color contrast.
- No color-only communication.
- Reduced-motion support via `prefers-reduced-motion`.
- Responsive zoom support.
- Descriptive link text.
- External links should make sense out of context.
- Icons must be decorative with `aria-hidden="true"` unless they convey essential information.
- Form controls must have explicit labels.
- Do not trap focus.
- Ensure touch targets are comfortably sized.
- Test with keyboard only.
- Test with a screen reader or at least inspect accessible names and landmark navigation.

---

## Performance requirements

The website should be quick to load and lightweight.

Targets:

- Static HTML/CSS first.
- Minimal JavaScript.
- No large frontend runtime unless necessary.
- No analytics.
- No third-party tracking.
- Optimized CSS.
- Avoid render-blocking bloat.
- No unnecessary images.
- If images or icons are generated, optimize them as SVG where possible.
- Lighthouse Performance target: 95+ on mobile and desktop.
- Lighthouse Accessibility target: 100 if feasible, 95+ minimum.
- Good Core Web Vitals.

---

## SEO and metadata

Include:

- Descriptive page title.
- Meta description.
- Open Graph metadata.
- Twitter/social card metadata.
- Canonical URL for `https://archangelresear.ch`.
- `robots.txt`.
- `sitemap.xml`.
- Favicon / minimal site icon.
- `CNAME` file for GitHub Pages custom domain.
- Sensible structured data if appropriate, such as Organization schema, but keep it minimal.

Suggested meta description:

> Archangel Research builds focused tools for materials science, mechanical engineering, defect measurement, fatigue analysis, microscopy workflows, and experimental mechanics education.

---

## GitHub Pages deployment

Set up deployment to GitHub Pages.

Include:

- GitHub Actions workflow for building and deploying Astro.
- Correct build output configuration.
- `public/CNAME` containing:

```txt
archangelresear.ch
```

- Clear README instructions for:
  - Local development
  - Editing product content
  - Running checks
  - Building the site
  - Deploying to GitHub Pages
  - Configuring the custom domain

---

## Testing and quality checks

Set up practical automated checks.

Include, where reasonable:

- Type checking
- Formatting
- Linting
- HTML validation if available
- Accessibility checks using axe, Playwright, Pa11y, or equivalent
- Lighthouse check instructions
- Link checking
- Build verification in CI

At minimum, provide:

```bash
npm run dev
npm run build
npm run preview
npm run check
npm run test:a11y
npm run lint
```

If a command is not implemented, explain why in the README.

---

## Maintainability requirements

Make the site easy to update.

Preferred structure:

- Product/project content in one data file.
- Focus-area content in one data file or clearly marked component.
- Shared components for:
  - Header
  - Hero
  - Focus areas
  - Product card
  - Contact form
  - Footer
- Avoid hardcoding repeated product card markup.
- Keep CSS organized and understandable.
- Use comments sparingly, only where helpful.
- README should explain exactly how to add, remove, or edit a product.

---

## Contact form implementation

Because this is a static GitHub Pages site, do not assume a backend exists.

Implement one of these approaches, in order of preference:

1. A progressive-enhancement contact form with a configurable external endpoint placeholder.
2. A simple form that can be wired to Formspree, Basin, Netlify Forms, or another static-compatible provider later.
3. A mailto fallback that always works.

The visible site must include the fallback email:

- <info@archangelresear.ch>

If using a third-party form endpoint placeholder, make it obvious where to configure it.

Privacy handling should be minimal:

- Include a short note near the form:

> Information submitted through this form is used only to respond to your inquiry.

- Include an optional checkbox if it improves clarity, but do not create unnecessary friction.
- Do not add cookies or analytics.

---

## Copywriting guidance

Use concise, confident, technical language.

Avoid:

- “Cutting-edge”
- “Revolutionary”
- “Empowering”
- “Transforming the future”
- “Innovative solutions”
- “Disrupting”
- “World-class”
- “Seamless”
- “Unlock”

Use:

- “measurement”
- “repeatable”
- “traceable”
- “deterministic”
- “fatigue”
- “defects”
- “microscopy”
- “experimental mechanics”
- “materials and mechanical engineering”

Possible page copy:

### Hero headline

> Archangel Research solves problems for materials and mechanical engineering teams around the world.

### Hero support

> We build focused research tools for defect measurement, fatigue-critical extremes, microscopy workflows, and experimental mechanics education.

### Focus intro

> Archangel Research develops narrow, useful tools where measurement quality, repeatability, and engineering judgment matter.

### Products intro

> Selected work from Archangel Research.

### Contact intro

> For questions about Archangel Research or its projects, contact info@archangelresear.ch.

---

## Product icons

Create simple custom SVG icons for each product.

Possible icon concepts:

- **E2283:** distribution curve, extreme-value point, or defect-size plot.
- **Particle Gauge:** particle outlines, merged stringer shapes, or measurement calipers.
- **Digital Image Correlation:** grid deformation, displacement vectors, or paired image frames.

Requirements:

- SVG preferred.
- Decorative unless needed for meaning.
- Must not reduce accessibility.
- Must not use religious/angelic imagery.
- Must visually match the minimal editorial style.

---

## Deliverables

Deliver a complete working repository.

Include:

- Astro source code.
- Accessible single-page website.
- Product data file.
- Custom SVG icons.
- Contact form with static-compatible fallback.
- GitHub Pages deployment workflow.
- `CNAME`.
- `robots.txt`.
- `sitemap.xml`.
- Metadata and social preview tags.
- README with maintenance and deployment instructions.
- Basic accessibility/performance testing setup or documented manual test checklist.

---

## Acceptance criteria

The work is complete when:

1. The site builds successfully.
2. The site can be deployed to GitHub Pages.
3. The site uses `archangelresear.ch` as the canonical domain.
4. The site is responsive on mobile and desktop.
5. The site has no hamburger menu.
6. The site presents only these three projects:
   - E2283
   - Particle Gauge
   - Digital Image Correlation
7. The site does not mention the founder’s name.
8. The site does not include `amdg.science`.
9. The site does not include analytics.
10. The site has a minimal accessible contact form and visible fallback email.
11. The site targets WCAG 2.2 AA.
12. Keyboard navigation works.
13. Focus states are visible.
14. Color contrast passes AA.
15. Lighthouse Accessibility is 95+ minimum, preferably 100.
16. Lighthouse Performance is 95+ minimum on a typical local/static build.
17. The README explains how to update product content.
18. The design feels clean, editorial, lightweight, and professional.

---

## Notes for future expansion

This brief currently includes three visible projects because `amdg.science` should not be included in this version.

The architecture should make it easy to add a fourth product later by editing the product data file.
