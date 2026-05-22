import type { Variants } from 'framer-motion';

/** Soft, calm easing — easy on the eyes */
export const testimonialEase = [0.4, 0, 0.2, 1] as const;

export const testimonialViewport = {
  once: true,
  amount: 0.12,
  margin: '-40px',
} as const;

export const testimonialStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const testimonialSoftIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: testimonialEase },
  },
};

export const testimonialSpotlightIn: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: testimonialEase },
  },
};

export const testimonialCardLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: testimonialEase },
  },
};

export const testimonialCardRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: testimonialEase },
  },
};

export const testimonialStarPop: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 18 },
  },
};
