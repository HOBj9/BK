import type { Variants } from 'framer-motion';
import { easePremium } from '@/constants/animations';

export const navMenuOverlay = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

export const navMenuPanel = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: easePremium },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.28, ease: easePremium },
  },
};

export const navMobileStagger: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const navMobileItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easePremium },
  },
};

export const navIndicatorSpring = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 34,
};
