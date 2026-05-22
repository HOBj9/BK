import { homePage } from '@/data/websiteContent';
import { homeSectionImages } from '@/data/media';
import { site } from '@/data/site';
import { ROUTES } from '@/constants/routes';

/** Plombier — même visuel que l’ancienne section « Expertise BK Entretien » */
export const heroTechnicianImage = {
  src: homeSectionImages.expertise,
  alt: homePage.mainImageAlt,
};

export const heroConfig = {
  eyebrow: 'Urgence 24/7 — Montréal',
  headline: 'Débouchage & nettoyage de drains',
  subheadline: homePage.heroSubtitle,
  phone: site.phone,
  phoneDisplay: site.phoneDisplay,
  primaryCta: { label: `Appeler — ${site.phoneDisplay}` },
  secondaryCta: { label: 'Contact', to: ROUTES.CONTACT },
  trustLine: 'Résidentiel & commercial · Techniciens certifiés',
};
