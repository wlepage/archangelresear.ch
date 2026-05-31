/**
 * Site-wide constants. Edit these in one place.
 */
export const site = {
  /** Public brand name. */
  brand: 'Archangel Research',
  /** Legal name used in the footer. */
  legalName: 'Archangel Research LLC',
  /** Canonical domain (no protocol). */
  domain: 'archangelresear.ch',
  /** Canonical origin (with protocol). */
  url: 'https://archangelresear.ch',
  /** Contact email shown on the site and used for the mailto fallback. */
  email: 'info@archangelresear.ch',
  /** Default page title and meta description. */
  title: 'Archangel Research',
  description:
    'Archangel Research builds focused tools for materials science, mechanical engineering, defect measurement, fatigue analysis, microscopy workflows, and experimental mechanics education.',
  /**
   * Formspree endpoint for the contact form.
   * To change providers, swap this URL and update ContactForm.astro if the
   * field names differ. See README for setup notes.
   */
  formEndpoint: 'https://formspree.io/f/xpqnerzr',
} as const;
