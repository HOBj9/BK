import type { Variants, Transition } from 'framer-motion';

export const heroEase = [0.22, 1, 0.36, 1] as const;

export const heroSpring: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 22,
  mass: 0.8,
};

export const heroSpringSoft: Transition = {
  type: 'spring',
  stiffness: 80,
  damping: 26,
};

export const heroStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

export const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: heroEase },
  },
};

export const heroFadeUpTight: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: heroEase },
  },
};

export const heroLineReveal: Variants = {
  hidden: { opacity: 0, y: 32, skewY: 2 },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, ease: heroEase },
  },
};

export const heroScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: heroEase },
  },
};

export const heroFloat: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const heroPulseGlow: Variants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.4, 0.85, 0.4],
    scale: [1, 1.08, 1],
    transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const heroCheckItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: heroEase },
  },
};

export const heroFigureIn: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: heroEase, delay: 0.2 },
  },
};
