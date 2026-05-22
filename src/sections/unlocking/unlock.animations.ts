import type { Variants } from 'framer-motion';

/** Urgency easing — distinct from drain-cleaning fluid ease */
export const unlockEase = [0.34, 1.2, 0.64, 1] as const;

export const unlockViewport = {
  once: true,
  amount: 0.18,
  margin: '-56px',
} as const;

export const unlockPulseIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

export const unlockTitleDrop: Variants = {
  hidden: { opacity: 0, y: -28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: unlockEase },
  },
};

export const unlockDescFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: unlockEase, delay: 0.12 },
  },
};

export const unlockZoomImage: Variants = {
  hidden: { opacity: 0, scale: 1.12 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: unlockEase },
  },
};

export const unlockCaptionSlide: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: unlockEase, delay: 0.35 },
  },
};

export const unlockStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

export const unlockTimelineItem: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: unlockEase },
  },
};

export const unlockCtaRise: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: unlockEase },
  },
};
