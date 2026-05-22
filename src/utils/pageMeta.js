import { ROUTES } from '@/constants/routes';

export const SEO_SUFFIX = 'BK Entretien';

export const seoTitle = (title) => `${title} | ${SEO_SUFFIX}`;

export const homeBreadcrumb = { label: 'Accueil', path: ROUTES.HOME };

/** Breadcrumb: Accueil → current page */
export const pageBreadcrumb = (label, path) => [homeBreadcrumb, { label, path }];
