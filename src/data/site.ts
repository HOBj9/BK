import { ROUTES } from '../constants/routes';
import { homePage, siteSettings } from './websiteContent';

export const site = {
  name: siteSettings.companyName,
  tagline: homePage.heroTagline,
  description: siteSettings.footerTagline,
  shortDescription: homePage.bannerImageText,
  phone: siteSettings.companyPhone,
  phoneDisplay: siteSettings.companyPhone,
  email: siteSettings.companyEmail,
  address: siteSettings.companyAddress,
  hours: `Lun–Ven ${siteSettings.hoursOpen}–${siteSettings.hoursClose} · Urgence 24/7`,
  hoursDetail: siteSettings.hoursNote,
  founded: '2006',
  url: 'https://bkdebouchage.ca',
  social: {
    facebook: siteSettings.socialFacebook,
    twitter: siteSettings.socialTwitter,
    instagram: siteSettings.socialInstagram,
  },
};

export const navLinks = [
  { label: 'Accueil', path: ROUTES.HOME },
  { label: 'Nettoyage drains', path: ROUTES.DRAIN_CLEANING },
  { label: 'Débouchage', path: ROUTES.UNLOCKING },
  { label: 'Galerie', path: ROUTES.GALLERY },
  { label: 'Témoignages', path: ROUTES.TESTIMONIALS },
  { label: 'Contact', path: ROUTES.CONTACT },
];

export const footerLinks = {
  services: [
    { label: 'Nettoyage des drains', path: ROUTES.DRAIN_CLEANING },
    { label: 'Débouchage', path: ROUTES.UNLOCKING },
    { label: 'Galerie photo', path: ROUTES.GALLERY },
    { label: 'Tous les services', path: ROUTES.SERVICES },
  ],
  pages: [
    { label: 'Accueil', path: ROUTES.HOME },
    { label: 'Témoignages', path: ROUTES.TESTIMONIALS },
    { label: 'Galerie', path: ROUTES.GALLERY },
    { label: 'Contact', path: ROUTES.CONTACT },
  ],
  company: [
    { label: 'Nettoyage drains', path: ROUTES.DRAIN_CLEANING },
    { label: 'Débouchage', path: ROUTES.UNLOCKING },
    { label: 'Contact', path: ROUTES.CONTACT },
  ],
};
