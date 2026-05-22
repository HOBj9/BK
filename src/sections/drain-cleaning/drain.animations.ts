import type { Transition, Variants } from 'framer-motion';

/** Distinct easing — fluid / pipeline feel (not used on home sections) */
export const drainEase = [0.16, 1, 0.3, 1] as const;

export const drainSpring: Transition = {
  type: 'spring',
  stiffness: 90,
  damping: 18,
};

export const drainViewport = {
  once: true,
  amount: 0.2,
  margin: '-48px',
} as const;

/** Header description — fade only (clip-path caused layout misalignment) */
export const drainDescFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: drainEase, delay: 0.15 },
  },
};

export const drainTitleSlide: Variants = {
  hidden: { opacity: 0, x: -48, skewX: -4 },
  show: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: 0.85, ease: drainEase },
  },
};

export const drainRippleIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 22 },
  },
};

export const drainWipeImage: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0 round 1.5rem)' },
  show: {
    clipPath: 'inset(0 0% 0 0 round 1.5rem)',
    transition: { duration: 1.1, ease: drainEase, delay: 0.15 },
  },
};

export const drainCaptionRise: Variants = {
  hidden: { opacity: 0, y: '100%' },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: drainEase, delay: 0.5 },
  },
};

export const drainLineGrow: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: drainEase },
  },
};

export const drainStepReveal: Variants = {
  hidden: { opacity: 0, y: 56, rotateX: 12 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.75, ease: drainEase },
  },
};

export const drainStaggerSteps: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.22, delayChildren: 0.35 },
  },
};

export const drainIntroSplit: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: drainEase },
  },
};

export const drainCtaPanel: Variants = {
  hidden: { opacity: 0, y: 40, scaleY: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.65, ease: drainEase },
  },
};
