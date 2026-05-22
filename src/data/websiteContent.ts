/**
 * Content sourced from https://bkdebouchage.ca/
 * API: https://api-bk.techpundits.net/api/v1
 */
import {
  API_MEDIA_BASE,
  allProjectPhotos,
  galleryCategoriesData,
  homeSectionImages,
  pageBanners,
  pageMains,
  projectPhotos,
} from './media';

export { API_MEDIA_BASE };

/** Navigation mirrors bkdebouchage.ca sections (French labels) */
export const navSections = [
  { label: 'Accueil', path: '/' },
  { label: 'Nettoyage des drains et égouts', path: '/nettoyage-drains' },
  { label: 'Débouchage', path: '/debouchage' },
  { label: 'Galerie photo', path: '/galerie' },
  { label: 'Témoignages', path: '/temoignages' },
  { label: 'Contact', path: '/contact' },
];

export const homePage = {
  bannerImage: pageBanners.home,
  bannerImageAlt: 'BK Entretien — débouchage et nettoyage de drains à Montréal',
  bannerImageText: 'Solutions expertes pour drains bouchés et urgences plomberie',
  heroTagline: 'VOTRE EXPERT EN DÉBLOCAGE ET NETTOYAGE DE DRAINS À MONTRÉAL',
  heroSubtitle: 'Pour un Diagnostic Rapide des Drains Bouchés !',
  mainImage: pageMains.home,
  mainImageAlt: 'Plombier professionnel au travail',
  mainImageText: 'Service de qualité garanti',
  sections: [
    {
      title: 'Nettoyage & débouchage experts',
      description:
        'Équipe qualifiée pour drains résidentiels et commerciaux — diagnostic rapide et intervention efficace.',
    },
    {
      title: "Urgence 24/7",
      description:
        "Service d'urgence disponible jour et nuit pour obstructions, refoulements et drains complètement bouchés.",
      image: homeSectionImages.emergency,
    },
    {
      title: 'Qualité garantie',
      description:
        'Travail soigné, équipement professionnel et satisfaction client sur chaque intervention.',
      image: homeSectionImages.quality,
    },
  ],
  galleryImages: allProjectPhotos,
};

export const drainCleaningPage = {
  bannerImage: pageBanners.drain,
  bannerImageAlt: 'Services Professionnels de Nettoyage des Drains',
  bannerImageText: 'Solutions Expert en Nettoyage des Drains',
  title: 'Services Professionnels de Nettoyage des Drains',
  firstDescription:
    'Nous offrons des services de nettoyage de drains de première qualité pour assurer le bon fonctionnement de votre système de plomberie.',
  secondDescription:
    'Nos techniciens expérimentés utilisent des équipements avancés pour éliminer même les bouchons les plus tenaces.',
  mainImage: pageMains.drain,
  mainImageAlt: 'Nettoyage des drains en cours',
  mainImageText:
    'Notre équipe au travail, garantissant que vos drains sont dégagés et fonctionnels.',
  sections: [
    {
      title: 'Nettoyage Professionnel des Drains',
      description:
        'Nos techniciens experts utilisent un équipement de pointe pour éliminer même les bouchons les plus tenaces et garantir que vos drains fonctionnent parfaitement.',
      image: pageMains.drain,
    },
    {
      title: 'Problèmes Courants de Drain',
      description:
        'Nous traitons divers problèmes de drains, y compris les drains lents, les obstructions complètes, les mauvaises odeurs et les bouchons récurrents dans les éviers, les douches et les toilettes.',
      image: projectPhotos.emergency1.image,
    },
    {
      title: 'Entretien Préventif',
      description:
        'Un nettoyage régulier des drains peut prévenir des réparations coûteuses et prolonger la durée de vie de votre système de plomberie. Demandez-nous des informations sur nos plans de maintenance.',
      image: projectPhotos.exterior1.image,
    },
  ],
};

export const unlockingPage = {
  bannerImage: pageBanners.unlock,
  bannerImageAlt: 'Services de débouchage d’urgence',
  bannerImageText: 'Débouchage rapide et fiable',
  mainImage: pageMains.unlock,
  mainImageAlt: 'Technicien — débouchage de canalisation',
  mainImageText: 'Intervention d’urgence — réponse rapide',
  sections: [
    {
      title: "Débouchage d'urgence",
      description:
        "Service 24/7 pour drains bouchés, refoulements et obstructions complètes — résidentiel et commercial.",
      image: pageMains.unlock,
    },
    {
      title: 'Équipement professionnel',
      description:
        'Caméra, hydro-jet et outils spécialisés pour diagnostiquer et débloquer sans endommager vos conduites.',
      image: projectPhotos.emergency2.image,
    },
    {
      title: 'Tarifs transparents',
      description:
        'Devis clair avant intervention — pas de surprises, qualité BK Entretien à prix compétitif.',
      image: projectPhotos.kitchen2.image,
    },
  ],
};

export const testimonialsPage = {
  bannerImage: pageBanners.testimonials,
  bannerImageAlt: "Témoignages clients",
  bannerImageText: 'Ce que nos clients disent de nous',
  mainImage: pageMains.contact,
  mainImageAlt: 'Clients satisfaits — équipe BK Entretien',
  mainImageText: 'La confiance de nos clients',
  sections: [
    {
      title: 'Client Satisfait',
      description:
        "BK Entretien a fourni un excellent service. Ils étaient rapides, professionnels et ont résolu notre problème de plomberie rapidement. — John Doe",
    },
    {
      title: 'Super Expérience',
      description:
        "Je recommande vivement BK Entretien. Leur équipe était compétente et courtoise. Ils ont fait un excellent travail! — Jane Smith",
    },
    {
      title: 'Service Fiable',
      description:
        "BK Entretien est ma référence pour tous les besoins en plomberie. Ils sont fiables, efficaces et fournissent toujours un travail de qualité. — Mike Johnson",
    },
    {
      title: 'Satisfaction Client',
      description:
        'Nos clients nous évaluent constamment très bien pour nos services de plomberie professionnels et efficaces.',
    },
    {
      title: 'Solutions Expert',
      description:
        'Nous sommes fiers de fournir des solutions expertes aux problèmes de plomberie les plus complexes.',
    },
    {
      title: 'Service Fiable',
      description:
        'Notre équipe est connue pour sa fiabilité et sa ponctualité, garantissant que vos problèmes de plomberie sont résolus rapidement.',
    },
  ],
};

export const contactPage = {
  bannerImage: pageBanners.contact,
  bannerImageAlt: 'Contactez BK Entretien',
  bannerImageText: 'Nous sommes là pour vous aider',
  mainImage: pageMains.contact,
  mainImageAlt: 'Équipe BK Entretien',
  firstDescription:
    "Contactez-nous pour tous vos besoins en débouchage et nettoyage de drains à Montréal.",
  secondDescription:
    "Service d'urgence disponible — réponse rapide et devis transparent.",
  sections: [
    {
      title: 'Contactez-nous',
      description:
        "Nous sommes là pour répondre à tous vos besoins en plomberie. Contactez-nous dès aujourd'hui pour un service expert.",
    },
    {
      title: 'Notre Emplacement',
      description: 'Montréal et environs — service résidentiel et commercial',
    },
    {
      title: 'Informations de Contact',
      description:
        "Appelez-nous pour une urgence ou écrivez-nous par courriel. Notre équipe vous répond rapidement.",
    },
    {
      title: 'Nos Services',
      description:
        'Nettoyage de drains et égouts, débouchage d\'urgence, inspection et entretien préventif pour propriétés résidentielles et commerciales.',
    },
    {
      title: 'Horaires',
      description:
        "Lundi - Vendredi : 8h00 - 18h00\nSamedi : 9h00 - 14h00\nDimanche : Fermé\nServices d'urgence disponibles 24h/24 et 7j/7",
    },
    {
      title: 'Zones de Service',
      description:
        'Nous servons Montréal et la grande région métropolitaine. Appelez-nous pour vérifier la couverture dans votre secteur.',
    },
  ],
};

export const photoGalleryPage = {
  bannerImage: pageBanners.gallery,
  bannerImageAlt: 'Notre Galerie de Photos',
  title: 'Galerie de Projets de Plomberie',
  description: 'Explorez nos interventions de débouchage, nettoyage de drains et travaux terminés',
  mainImage: pageMains.gallery,
  mainImageAlt: 'Présentation de notre meilleur travail',
  mainImageText: 'Solutions de plomberie de qualité — Montréal',
  sections: galleryCategoriesData.map((cat) => ({
    title: cat.title,
    images: [...cat.images],
  })),
};

export const siteSettings = {
  companyName: 'BK Entretien',
  companyPhone: '(514) 555-0199',
  companyEmail: 'info@bkdebouchage.ca',
  companyAddress: 'Montréal, QC — Grand Montréal',
  companyUrl: 'https://bkdebouchage.ca',
  serviceArea: 'Montréal et la grande région métropolitaine',
  socialFacebook: '',
  socialTwitter: '',
  socialInstagram: '',
  footerTagline:
    'Expert en débouchage et nettoyage de drains à Montréal. Service résidentiel et commercial, urgence 24/7.',
  hoursWeekdays: 'Lundi – Vendredi : 8h00 – 18h00',
  hoursSaturday: 'Samedi : 9h00 – 14h00',
  hoursSunday: 'Dimanche : Fermé',
  hoursEmergency: 'Urgence : 24 h / 24, 7 j / 7',
  hoursOpen: '08h00',
  hoursClose: '18h00',
  hoursNote: 'Fermé les dimanches',
};
