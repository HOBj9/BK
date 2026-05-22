import { ROUTES } from '@/constants/routes';
import type { RouteConfigEntry } from '@/types';

/**
 * Central route registry — single source of truth for navigation & SEO.
 * `placeholder: true` routes can use PagePlaceholder until implemented.
 */
export const routeConfig: RouteConfigEntry[] = [
  {
    id: 'home',
    path: ROUTES.HOME,
    label: 'Accueil',
    title: 'BK Débouchage | Débouchage & plomberie d\'urgence 24/7',
    page: 'HomePage',
    layout: 'AppLayout',
  },
  {
    id: 'drain-cleaning',
    path: ROUTES.DRAIN_CLEANING,
    label: 'Nettoyage des drains',
    title: 'Nettoyage des drains et égouts | BK Entretien',
    page: 'DrainCleaningPage',
    layout: 'AppLayout',
  },
  {
    id: 'unlocking',
    path: ROUTES.UNLOCKING,
    label: 'Débouchage',
    title: 'Débouchage d\'urgence | BK Entretien',
    page: 'UnlockingPage',
    layout: 'AppLayout',
  },
  {
    id: 'gallery',
    path: ROUTES.GALLERY,
    label: 'Galerie',
    title: 'Galerie photo | BK Entretien',
    page: 'GalleryPage',
    layout: 'AppLayout',
  },
  {
    id: 'testimonials',
    path: ROUTES.TESTIMONIALS,
    label: 'Témoignages',
    title: 'Témoignages clients | BK Entretien',
    page: 'TestimonialsPage',
    layout: 'AppLayout',
  },
  {
    id: 'services',
    path: ROUTES.SERVICES,
    label: 'Services',
    title: 'Nos services de débouchage et plomberie',
    page: 'ServicesPage',
    layout: 'AppLayout',
  },
  {
    id: 'service-detail',
    path: '/services/:slug',
    label: 'Détail service',
    page: 'ServiceDetailPage',
    layout: 'AppLayout',
    dynamic: true,
  },
  {
    id: 'city',
    path: '/villes/:slug',
    label: 'Zone locale',
    page: 'CityPage',
    layout: 'AppLayout',
    dynamic: true,
  },
  {
    id: 'contact',
    path: ROUTES.CONTACT,
    label: 'Contact',
    title: 'Contact — Demande d\'intervention',
    page: 'ContactPage',
    layout: 'AppLayout',
  },
  {
    id: 'not-found',
    path: ROUTES.NOT_FOUND,
    label: '404',
    page: 'NotFoundPage',
    layout: 'AppLayout',
    noindex: true,
  },
];

export const getRouteById = (id: string) => routeConfig.find((r) => r.id === id);
