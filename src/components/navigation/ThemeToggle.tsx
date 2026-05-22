import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { easePremium } from '@/constants/animations';

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white/80 text-brand-700 shadow-sm transition-colors hover:bg-brand-50 focus-ring dark:border-slate-600/80 dark:bg-slate-800/90 dark:text-brand-300 dark:hover:bg-slate-700/80 ${className}`}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      aria-pressed={isDark}
    >
      <motion.span
        className="absolute inset-0 rounded-xl bg-linear-to-br from-amber-200/30 to-brand-400/20 dark:from-brand-500/20 dark:to-indigo-500/30"
        initial={false}
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.35, ease: easePremium }}
        aria-hidden
      />
      <motion.div
        className="relative flex h-5 w-5 items-center justify-center"
        initial={false}
      >
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration: 0.35, ease: easePremium }}
        >
          <Sun className="h-5 w-5 text-amber-500" aria-hidden />
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
          }}
          transition={{ duration: 0.35, ease: easePremium }}
        >
          <Moon className="h-5 w-5 text-brand-300" aria-hidden />
        </motion.span>
      </motion.div>
    </motion.button>
  );
}
