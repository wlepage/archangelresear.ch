import E2283Icon from './E2283Icon.astro';
import ParticleGaugeIcon from './ParticleGaugeIcon.astro';
import DICIcon from './DICIcon.astro';
import type { Product } from '../data/products';

/** Maps a product's `icon` key to its SVG component. */
export const icons: Record<Product['icon'], typeof E2283Icon> = {
  e2283: E2283Icon,
  'particle-gauge': ParticleGaugeIcon,
  dic: DICIcon,
};
