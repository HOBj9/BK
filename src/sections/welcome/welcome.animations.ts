import type { Variants } from 'framer-motion';
import { easePremium, scrollViewport } from '@/constants/animations';

export const welcomeViewport = scrollViewport;

export const welcomeStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const welcomeFadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: easePremium },
  },
};

export const welcomeFadeUpTight: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easePremium },
  },
};

export const welcomeScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const welcomeCard: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easePremium },
  },
};

export const welcomeImageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08, x: 24 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.85, ease: easePremium },
  },
};

export const welcomeImageRevealLeft: Variants = {
  hidden: { opacity: 0, scale: 1.08, x: -24 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.85, ease: easePremium },
  },
};

export const welcomeLine: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: easePremium },
  },
};
