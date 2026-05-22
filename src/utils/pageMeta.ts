import { ROUTES } from '@/constants/routes';
import type { BreadcrumbItem } from '@/types';

export const SEO_SUFFIX = 'BK Entretien';

export const seoTitle = (title: string) => `${title} | ${SEO_SUFFIX}`;

export const homeBreadcrumb: BreadcrumbItem = { label: 'Accueil', path: ROUTES.HOME };

/** Breadcrumb: Accueil → current page */
export const pageBreadcrumb = (label: string, path: string): BreadcrumbItem[] => [
  homeBreadcrumb,
  { label, path },
];
