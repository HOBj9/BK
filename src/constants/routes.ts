export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  SERVICE: (slug: string) => `/services/${slug}`,
  DRAIN_CLEANING: '/nettoyage-drains',
  UNLOCKING: '/debouchage',
  GALLERY: '/galerie',
  TESTIMONIALS: '/temoignages',
  CITY: (slug: string) => `/villes/${slug}`,
  CONTACT: '/contact',
  NOT_FOUND: '/404',
} as const;

export const ANCHORS = {
  SERVICES: 'services',
  WHY_US: 'pourquoi-nous',
  STATS: 'chiffres',
  PROCESS: 'processus',
  ZONES: 'zones',
  TESTIMONIALS: 'temoignages',
  FAQ: 'faq',
  CONTACT: 'contact',
} as const;

export type AnchorKey = keyof typeof ANCHORS;

/** Build hash URL for home page sections */
export const hashPath = (anchor: string) => `/#${anchor}`;

/** React Router location for hash navigation */
export const hashRoute = (anchor: string) => ({
  pathname: ROUTES.HOME,
  hash: `#${anchor}`,
});
