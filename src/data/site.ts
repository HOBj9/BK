import { ROUTES, hashPath, ANCHORS } from '../constants/routes';
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
  serviceArea: siteSettings.serviceArea,
  hoursSchedule: {
    weekdays: siteSettings.hoursWeekdays,
    saturday: siteSettings.hoursSaturday,
    sunday: siteSettings.hoursSunday,
    emergency: siteSettings.hoursEmergency,
  },
  /** One-line hours for cards & compact UI */
  hours: `${siteSettings.hoursWeekdays} · ${siteSettings.hoursEmergency}`,
  hoursDetail: siteSettings.hoursNote,
  founded: '2006',
  url: siteSettings.companyUrl,
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
    { label: 'Nettoyage des drains et égouts', path: ROUTES.DRAIN_CLEANING },
    { label: 'Débouchage d\'urgence', path: ROUTES.UNLOCKING },
    { label: 'Galerie photo', path: ROUTES.GALLERY },
  ],
  navigation: navLinks,
  accueil: [
    { label: 'Nos services', path: hashPath(ANCHORS.SERVICES) },
    { label: 'Pourquoi nous choisir', path: hashPath(ANCHORS.WHY_US) },
    { label: 'Zones desservies', path: hashPath(ANCHORS.ZONES) },
    { label: 'FAQ', path: hashPath(ANCHORS.FAQ) },
    { label: 'Témoignages', path: hashPath(ANCHORS.TESTIMONIALS) },
  ],
};
