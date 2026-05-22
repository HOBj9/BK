import type { Variants } from 'framer-motion';

/** Premium easing — compatible with Framer Motion */
export const easePremium = [0.22, 1, 0.36, 1] as const;

/** No opacity:0 on initial — prevents invisible content if whileInView fails */
export const fadeInUp = {
  initial: { y: 24 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: easePremium },
};

export const fadeIn = {
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.45, ease: easePremium },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
} satisfies Variants;

export const staggerItem = {
  hidden: { y: 16 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: easePremium },
  },
} satisfies Variants;

export const scaleIn = {
  initial: { scale: 0.96 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, ease: easePremium },
};

export const floatAnimation = {
  animate: { y: [0, -14, 0] },
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const },
};
