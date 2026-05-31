/**
 * Product / project content.
 *
 * To add, remove, or edit a project, change this array only — the rest of the
 * site renders from it. `icon` must match a key in src/icons/index.ts.
 */
export type ProductStatus = 'live' | 'coming-soon';

export interface Product {
  /** Display name. */
  name: string;
  /** External destination. */
  url: string;
  /** Lifecycle status; controls the badge and CTA wording. */
  status: ProductStatus;
  /** Call-to-action link text (descriptive out of context). */
  cta: string;
  /** One- or two-sentence description. */
  description: string;
  /** Icon key — see src/icons/index.ts. */
  icon: 'e2283' | 'particle-gauge' | 'dic';
}

export const products: Product[] = [
  {
    name: 'E2283',
    url: 'https://e2283.app',
    status: 'live',
    cta: 'Visit e2283.app',
    description:
      'E2283 predicts the extreme values of defect sizes that drive fatigue failures in metals, using maximum-likelihood estimation to fit the Gumbel distribution to the largest 24 observed defects, following ASTM E2283.',
    icon: 'e2283',
  },
  {
    name: 'Particle Gauge',
    url: 'https://particlegauge.com',
    status: 'coming-soon',
    cta: 'Coming soon',
    description:
      'Particle Gauge measures defect sizes from microscopic images and is the first code available that automatically merges stringers while allowing manual user edits, all in a fully repeatable, deterministic, and traceable algorithm.',
    icon: 'particle-gauge',
  },
  {
    name: 'Digital Image Correlation',
    url: 'https://digitalimagecorrelation.org',
    status: 'live',
    cta: 'Visit digitalimagecorrelation.org',
    description:
      'digitalimagecorrelation.org is a project created for the experimental mechanics community to equip new DIC practitioners with the basics of DIC so they can produce optimum measurements in a time-efficient manner.',
    icon: 'dic',
  },
];
