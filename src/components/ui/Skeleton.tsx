import type { ComponentProps } from 'react';
import { motion } from 'framer-motion';

const shimmer = {
  x: ['-100%', '100%'],
  transition: { duration: 1.4, repeat: Infinity, ease: 'linear' as const },
};

const pulse = {
  opacity: [0.55, 0.9, 0.55],
  transition: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' as const },
};

type SkeletonProps = ComponentProps<typeof motion.div> & {
  rounded?: string;
};

export default function Skeleton({ className = '', rounded = 'rounded-lg', ...props }: SkeletonProps) {
  return (
    <motion.div
      role="status"
      aria-hidden
      animate={pulse}
      className={`relative overflow-hidden bg-slate-200 dark:bg-slate-700/80 ${rounded} ${className}`}
      {...props}
    >
      <motion.span
        className={`absolute inset-0 bg-linear-to-r from-transparent via-white/70 to-transparent ${rounded}`}
        animate={shimmer}
        aria-hidden
      />
    </motion.div>
  );
}
