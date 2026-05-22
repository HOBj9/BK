import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  scrollRevealVariants,
  scrollViewport,
  type ScrollRevealVariant,
} from '@/constants/animations';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  delay?: number;
  disabled?: boolean;
  /** Run once when first scrolled into view */
  once?: boolean;
};

/**
 * Scroll-triggered reveal — fades/slides content in when it enters the viewport.
 */
export default function ScrollReveal({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  disabled = false,
  once = true,
}: ScrollRevealProps) {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  if (disabled || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...scrollViewport, once }}
      variants={scrollRevealVariants[variant]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
