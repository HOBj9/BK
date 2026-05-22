import type { Variants } from 'framer-motion';

/** Portfolio / gallery easing — distinct from drain & unlock */
export const galleryEase = [0.25, 0.46, 0.45, 0.94] as const;

export const galleryViewport = {
  once: true,
  amount: 0.15,
  margin: '-48px',
} as const;

export const galleryStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const galleryFadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: galleryEase },
  },
};

export const galleryCurtain: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
  show: {
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.9, ease: galleryEase },
  },
};

export const galleryPhotoIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, rotate: -1.5 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.75, ease: galleryEase },
  },
};

export const galleryCategoryTitle: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: galleryEase },
  },
};

export const galleryFeaturedZoom: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: galleryEase },
  },
};
