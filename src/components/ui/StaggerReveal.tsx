import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, scrollViewport } from '@/constants/animations';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  disabled?: boolean;
  once?: boolean;
};

/**
 * Stagger children on scroll — each child should use `variants={staggerItem}`.
 */
export default function StaggerReveal({
  children,
  className = '',
  delay = 0,
  disabled = false,
  once = true,
}: StaggerRevealProps) {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  if (disabled || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ ...scrollViewport, once }}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}
