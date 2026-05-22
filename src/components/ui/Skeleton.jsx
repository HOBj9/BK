import { motion } from 'framer-motion';

const shimmer = {
  x: ['-100%', '100%'],
  transition: { duration: 1.4, repeat: Infinity, ease: 'linear' },
};

const pulse = {
  opacity: [0.55, 0.9, 0.55],
  transition: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
};

export default function Skeleton({ className = '', rounded = 'rounded-lg', ...props }) {
  return (
    <motion.div
      role="status"
      aria-hidden
      animate={pulse}
      className={`relative overflow-hidden bg-slate-200 ${rounded} ${className}`}
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
