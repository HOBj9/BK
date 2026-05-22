import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type TrustBadgeProps = {
  icon: LucideIcon;
  text: string;
  delay?: number;
  light?: boolean;
};

export default function TrustBadge({ icon: Icon, text, delay = 0, light = true }: TrustBadgeProps) {
  return (
    <motion.li
      initial={{ y: 8 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-lg backdrop-blur-md ${
        light
          ? 'border-white/15 bg-white/10 text-white/95'
          : 'border-brand-200/80 bg-white text-slate-700 shadow-brand-900/5'
      }`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          light ? 'bg-white/15 text-brand-200' : 'bg-brand-100 text-brand-700'
        }`}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      {text}
    </motion.li>
  );
}
