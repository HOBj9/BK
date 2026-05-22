import type { CarouselSlideData } from '@/components/carousel/carousel.types';
import { homeGalleryPreview } from '@/data/gallery';
const accentPalette = [
  'from-teal-600/85 via-brand-800/75 to-brand-950/95',
  'from-emergency-600/90 via-emergency-700/70 to-brand-950/95',
  'from-brand-600/85 via-brand-800/75 to-brand-950/95',
  'from-indigo-600/85 via-brand-800/75 to-brand-950/95',
  'from-accent-500/80 via-brand-800/70 to-brand-950/95',
  'from-sky-600/80 via-brand-800/75 to-brand-950/95',
  'from-cyan-600/80 via-brand-800/75 to-brand-950/95',
  'from-emergency-600/85 via-orange-700/65 to-brand-950/95',
  'from-brand-500/85 via-brand-900/80 to-brand-950/95',
  'from-teal-500/80 via-cyan-800/70 to-brand-950/95',
  'from-indigo-500/85 via-brand-800/75 to-brand-950/95',
  'from-amber-600/75 via-brand-800/70 to-brand-950/95',
] as const;

/** Home gallery carousel — field photos + portfolio (12 slides) */
export const carouselSlides: CarouselSlideData[] = homeGalleryPreview.map((item, index) => ({
  id: `home-gallery-${index}`,
  title: item.alt,
  subtitle: item.description,
  image: item.image,
  imageAlt: item.alt,
  accentColor: accentPalette[index % accentPalette.length],
}));
