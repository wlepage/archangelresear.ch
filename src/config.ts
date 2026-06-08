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
    'Archangel Research solves high-priority problems for engineering and manufacturing teams around the world.',
  formEndpoint: 'https://formspree.io/f/xpqnerzr',
  /** Public Google reCAPTCHA v2 checkbox site key. Configure the secret key in Formspree. */
  recaptchaSiteKey: import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY ?? '',
} as const;
