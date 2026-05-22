/** Shared button class maps — premium gradients & shadows */

export const buttonVariants = {
  primary:
    'bg-linear-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30 hover:from-accent-400 hover:to-accent-500 hover:shadow-accent-500/40 focus-visible:ring-accent-500',
  emergency:
    'bg-linear-to-r from-emergency-600 via-emergency-600 to-emergency-700 text-white shadow-lg shadow-emergency-600/35 hover:from-emergency-500 hover:to-emergency-600 hover:shadow-emergency-600/50 focus-visible:ring-emergency-500 ring-2 ring-emergency-500/20',
  secondary:
    'bg-linear-to-r from-brand-700 to-brand-800 text-white shadow-lg shadow-brand-800/25 hover:from-brand-600 hover:to-brand-700 hover:shadow-brand-800/35 focus-visible:ring-brand-600',
  outline:
    'border-2 border-brand-600/80 text-brand-800 bg-white/90 backdrop-blur-sm hover:border-brand-500 hover:bg-brand-50 focus-visible:ring-brand-500 dark:border-brand-500/60 dark:bg-slate-800/80 dark:text-brand-200 dark:hover:border-brand-400 dark:hover:bg-slate-700/80',
  ghost:
    'text-brand-800 hover:bg-brand-50/80 focus-visible:ring-brand-500 dark:text-brand-200 dark:hover:bg-slate-800/80',
  glass:
    'border border-white/25 bg-white/10 text-white backdrop-blur-md shadow-lg hover:bg-white/20 focus-visible:ring-white/50',
  white:
    'bg-white text-emergency-700 shadow-xl hover:bg-slate-50 focus-visible:ring-white',
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export const buttonSizes = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-6 py-3.5 text-base',
  lg: 'px-8 py-4 text-lg',
} as const;

export type ButtonSize = keyof typeof buttonSizes;

export const buttonBase =
  'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900';
