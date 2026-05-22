import type { Variants } from 'framer-motion';

/** Clear, professional easing for contact flow */
export const contactEase = [0.33, 1, 0.68, 1] as const;

export const contactViewport = {
  once: true,
  amount: 0.12,
  margin: '-40px',
} as const;

export const contactStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

export const contactFadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: contactEase },
  },
};

export const contactHeaderIn: Variants = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: contactEase },
  },
};

export const contactPanelIn: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: contactEase },
  },
};

export const contactChannelIn: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: contactEase },
  },
};

export const contactDetailIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: contactEase },
  },
};
