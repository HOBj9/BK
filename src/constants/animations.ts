import type { Variants } from 'framer-motion';

/** Premium easing — compatible with Framer Motion */
export const easePremium = [0.22, 1, 0.36, 1] as const;

/** Default viewport for scroll-triggered reveals */
export const scrollViewport = {
  once: true,
  amount: 0.12,
  margin: '-72px',
} as const;

/** Scroll reveal variant presets */
export const scrollRevealVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: easePremium },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: easePremium },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: easePremium },
    },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: easePremium },
    },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: easePremium },
    },
  },
} satisfies Record<string, Variants>;

export type ScrollRevealVariant = keyof typeof scrollRevealVariants;

/** @deprecated Use scrollRevealVariants.fadeUp — kept for SectionHeading */
export const fadeInUp = {
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: scrollViewport,
  transition: { duration: 0.5, ease: easePremium },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: scrollViewport,
  transition: { duration: 0.45, ease: easePremium },
};

export const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
} satisfies Variants;

export const staggerItem = {
  hidden: { y: 22, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.48, ease: easePremium },
  },
} satisfies Variants;

export const scaleIn = {
  initial: { scale: 0.96, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: scrollViewport,
  transition: { duration: 0.6, ease: easePremium },
};

export const floatAnimation = {
  animate: { y: [0, -14, 0] },
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const },
};

/** Page route enter / exit */
export const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.42, ease: easePremium },
};
