export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  SERVICE: (slug) => `/services/${slug}`,
  DRAIN_CLEANING: '/nettoyage-drains',
  UNLOCKING: '/debouchage',
  GALLERY: '/galerie',
  TESTIMONIALS: '/temoignages',
  CITY: (slug) => `/villes/${slug}`,
  CONTACT: '/contact',
  NOT_FOUND: '/404',
};

export const ANCHORS = {
  SERVICES: 'services',
  WHY_US: 'pourquoi-nous',
  STATS: 'chiffres',
  PROCESS: 'processus',
  ZONES: 'zones',
  TESTIMONIALS: 'temoignages',
  FAQ: 'faq',
  CONTACT: 'contact',
};

/** Build hash URL for home page sections */
export const hashPath = (anchor) => `/#${anchor}`;

/** React Router location for hash navigation */
export const hashRoute = (anchor) => ({
  pathname: ROUTES.HOME,
  hash: `#${anchor}`,
});
