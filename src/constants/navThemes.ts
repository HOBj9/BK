import { ROUTES } from '@/constants/routes';

export type NavThemeId = 'brand' | 'teal' | 'emergency' | 'indigo' | 'amber';

export type NavTheme = {
  id: NavThemeId;
  /** CSS color for accent line / glow */
  glow: string;
  activeText: string;
  activePill: string;
  indicator: string;
  mobileActive: string;
  logoRing: string;
};

export const navThemes: Record<NavThemeId, NavTheme> = {
  brand: {
    id: 'brand',
    glow: 'rgba(14, 165, 233, 0.45)',
    activeText: 'text-brand-800 dark:text-brand-200',
    activePill: 'bg-brand-500/12 dark:bg-brand-400/15',
    indicator: 'bg-brand-600 dark:bg-brand-400',
    mobileActive: 'border-brand-500/60 bg-brand-50/90 dark:border-brand-500/40 dark:bg-brand-950/40',
    logoRing: 'ring-brand-500/25 group-hover:ring-brand-400/40',
  },
  teal: {
    id: 'teal',
    glow: 'rgba(45, 212, 191, 0.5)',
    activeText: 'text-teal-800 dark:text-teal-200',
    activePill: 'bg-teal-500/12 dark:bg-teal-400/15',
    indicator: 'bg-teal-600 dark:bg-teal-400',
    mobileActive: 'border-teal-500/50 bg-teal-50/90 dark:border-teal-500/35 dark:bg-teal-950/35',
    logoRing: 'ring-teal-500/30 group-hover:ring-teal-400/45',
  },
  emergency: {
    id: 'emergency',
    glow: 'rgba(239, 68, 68, 0.45)',
    activeText: 'text-emergency-700 dark:text-red-300',
    activePill: 'bg-emergency-500/10 dark:bg-red-500/15',
    indicator: 'bg-emergency-600 dark:bg-red-400',
    mobileActive: 'border-emergency-500/50 bg-red-50/90 dark:border-red-500/35 dark:bg-red-950/35',
    logoRing: 'ring-emergency-500/30 group-hover:ring-red-400/40',
  },
  indigo: {
    id: 'indigo',
    glow: 'rgba(129, 140, 248, 0.5)',
    activeText: 'text-indigo-800 dark:text-indigo-200',
    activePill: 'bg-indigo-500/12 dark:bg-indigo-400/15',
    indicator: 'bg-indigo-600 dark:bg-indigo-400',
    mobileActive: 'border-indigo-500/50 bg-indigo-50/90 dark:border-indigo-500/35 dark:bg-indigo-950/35',
    logoRing: 'ring-indigo-500/30 group-hover:ring-indigo-400/45',
  },
  amber: {
    id: 'amber',
    glow: 'rgba(251, 191, 36, 0.45)',
    activeText: 'text-amber-900 dark:text-amber-200',
    activePill: 'bg-amber-500/12 dark:bg-amber-400/15',
    indicator: 'bg-amber-600 dark:bg-amber-400',
    mobileActive: 'border-amber-500/50 bg-amber-50/90 dark:border-amber-500/35 dark:bg-amber-950/30',
    logoRing: 'ring-amber-500/30 group-hover:ring-amber-400/45',
  },
};

const routeThemeMap: { prefix: string; theme: NavThemeId }[] = [
  { prefix: ROUTES.DRAIN_CLEANING, theme: 'teal' },
  { prefix: ROUTES.UNLOCKING, theme: 'emergency' },
  { prefix: ROUTES.GALLERY, theme: 'indigo' },
  { prefix: ROUTES.TESTIMONIALS, theme: 'amber' },
];

export function getNavThemeFromPath(pathname: string): NavTheme {
  const match = routeThemeMap.find(({ prefix }) => pathname.startsWith(prefix));
  const id = match?.theme ?? 'brand';
  return navThemes[id];
}
