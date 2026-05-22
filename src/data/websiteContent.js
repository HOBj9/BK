/**
 * Content sourced from https://bkdebouchage.ca/
 * API: https://api-bk.techpundits.net/api/v1
 */
export const API_MEDIA_BASE = 'https://api-bk.techpundits.net';

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
  bannerImage:
    `${API_MEDIA_BASE}/storage/HomePage/Filament/BannerImages/01JG6T6CACTCB9FCPDYY55D3S2.jpg`,
  bannerImageAlt: 'Bienvenue à nos services de plomberie',
  bannerImageText: 'Solutions de plomberie expertes pour votre maison',
  heroTagline: 'VOTRE EXPERT EN DÉBLOCAGE ET NETTOYAGE DE DRAINS À MONTRÉAL',
  heroSubtitle: 'Pour un Diagnostic Rapide des Drains Bouchés !',
  mainImage:
    `${API_MEDIA_BASE}/storage/HomePage/Filament/MainImages/01JG6SYN7D7PZ01WXS392DEBVP.png`,
  mainImageAlt: 'Plombier professionnel au travail',
  mainImageText: 'Service de qualité garanti',
  sections: [
    {
      title: 'Services de Plomberie Experts',
      description:
        'Notre équipe de plombiers qualifiés fournit des services de première qualité pour tous vos besoins en plomberie, des réparations aux installations.',
      image:
        `${API_MEDIA_BASE}/storage/HomePageSection/Filament/Images/01JFYF2DHRR6WMACCZDG3HM6M4.png`,
    },
    {
      title: "Support d'Urgence 24/7",
      description:
        "Nous offrons des services de plomberie d'urgence 24h/24 et 7j/7 pour assurer votre tranquillité d'esprit à tout moment de la journée ou de la nuit.",
      image:
        `${API_MEDIA_BASE}/storage/HomePageSection/Filament/Images/01JFYE4EWD2WHHX72QCQ3TEHMF.png`,
    },
    {
      title: 'Qualité Garantie',
      description:
        'Nous garantissons notre travail avec une satisfaction garantie, en veillant à ce que chaque travail soit effectué selon les normes les plus élevées.',
      image:
        `${API_MEDIA_BASE}/storage/HomePageSection/Filament/Images/01JFYE7C16EDGYH1F6E96KGXZT.png`,
    },
  ],
  galleryImages: [
    {
      image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYEPS01XMBTF8W43SJ1W6DM.png`,
      alt: 'Projet Plomberie de Cuisine',
      description: 'Une vitrine de notre travail sur Plomberie de Cuisine.',
    },
    {
      image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYEQBB668PK50S58KMXPABX.png`,
      alt: 'Un autre projet Plomberie de Cuisine',
      description: 'Un autre exemple de notre expertise en Plomberie de Cuisine.',
    },
    {
      image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYEQVG7SGFJPNA4HEXJVB4V.png`,
      alt: 'Projet Rénovations de Salle de Bain',
      description: 'Une vitrine de notre travail sur Rénovations de Salle de Bain.',
    },
    {
      image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYERK3Y12TD4BHQ4AACPAV9.png`,
      alt: 'Un autre projet Rénovations de Salle de Bain',
      description: 'Un autre exemple de notre expertise en Rénovations de Salle de Bain.',
    },
    {
      image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYESCWSZSMY8ZTHF112CWHH.png`,
      alt: "Projet Réparations d'Urgence",
      description: "Une vitrine de notre travail sur Réparations d'Urgence.",
    },
    {
      image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYET87DMH3D7JWQC6NXD9N4.png`,
      alt: "Un autre projet Réparations d'Urgence",
      description: "Un autre exemple de notre expertise en Réparations d'Urgence.",
    },
    {
      image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYEWARGWN18DKVHCZEMHT7V.png`,
      alt: 'Projet Plomberie Extérieure',
      description: 'Une vitrine de notre travail sur Plomberie Extérieure.',
    },
    {
      image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYEX5KGYZ3PPAM2JPGTFHF7.png`,
      alt: 'Un autre projet Plomberie Extérieure',
      description: 'Un autre exemple de notre expertise en Plomberie Extérieure.',
    },
  ],
};

export const drainCleaningPage = {
  bannerImage:
    `${API_MEDIA_BASE}/storage/DrainCleaning/Filament/BannerImages/01JFYG0Z79CWCV6CCTTRMZWZG0.png`,
  bannerImageAlt: 'Services Professionnels de Nettoyage des Drains',
  bannerImageText: 'Solutions Expert en Nettoyage des Drains',
  title: 'Services Professionnels de Nettoyage des Drains',
  firstDescription:
    'Nous offrons des services de nettoyage de drains de première qualité pour assurer le bon fonctionnement de votre système de plomberie.',
  secondDescription:
    'Nos techniciens expérimentés utilisent des équipements avancés pour éliminer même les bouchons les plus tenaces.',
  mainImage:
    `${API_MEDIA_BASE}/storage/DrainCleaning/Filament/MainImages/01JG6SX4AN4VDE54S8Q7SWFK37.jpg`,
  mainImageAlt: 'Nettoyage des drains en cours',
  mainImageText:
    'Notre équipe au travail, garantissant que vos drains sont dégagés et fonctionnels.',
  sections: [
    {
      title: 'Nettoyage Professionnel des Drains',
      description:
        'Nos techniciens experts utilisent un équipement de pointe pour éliminer même les bouchons les plus tenaces et garantir que vos drains fonctionnent parfaitement.',
    },
    {
      title: 'Problèmes Courants de Drain',
      description:
        'Nous traitons divers problèmes de drains, y compris les drains lents, les obstructions complètes, les mauvaises odeurs et les bouchons récurrents dans les éviers, les douches et les toilettes.',
    },
    {
      title: 'Entretien Préventif',
      description:
        'Un nettoyage régulier des drains peut prévenir des réparations coûteuses et prolonger la durée de vie de votre système de plomberie. Demandez-nous des informations sur nos plans de maintenance.',
    },
  ],
};

export const unlockingPage = {
  bannerImage:
    `${API_MEDIA_BASE}/storage/Unlocking/Filament/BannerImages/01JFYFJFY0G7GX6EERG8TJWFSF.png`,
  bannerImageAlt: 'Bannière des services de déverrouillage',
  bannerImageText: 'Solutions de Déverrouillage Experts',
  mainImage:
    `${API_MEDIA_BASE}/storage/Unlocking/Filament/MainImages/01JG6T1C9J97G45GSY36D54CTG.jpg`,
  mainImageAlt: 'Service de déverrouillage professionnel',
  mainImageText: 'Déverrouillage Rapide et Fiable',
  sections: [
    {
      title: "Déverrouillage d'Urgence",
      description:
        "Nous offrons des services de déverrouillage d'urgence 24/7 pour votre maison, voiture ou bureau.",
    },
    {
      title: 'Techniques Avancées',
      description:
        'Nos experts utilisent les dernières techniques et outils pour déverrouiller tout type de serrure en toute sécurité.',
    },
    {
      title: 'Tarifs Abordables',
      description:
        'Nous fournissons des services de déverrouillage de haute qualité à des prix compétitifs.',
    },
  ],
};

export const testimonialsPage = {
  bannerImage:
    `${API_MEDIA_BASE}/storage/Testimonial/Filament/BannerImages/01JFYF56X8FWQCDZVRW86CHK1Z.png`,
  bannerImageAlt: "Témoignages clients",
  bannerImageText: 'Ce que nos clients disent de nous',
  mainImageAlt: 'Clients satisfaits',
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
  bannerImage:
    `${API_MEDIA_BASE}/storage/ContactUs/Filament/BannerImages/01JFYFGQBMM8S0CKQTWEE1WH14.png`,
  bannerImageAlt: 'Contactez BK Entretien',
  bannerImageText: 'Nous sommes là pour vous aider',
  mainImage:
    `${API_MEDIA_BASE}/storage/ContactUs/Filament/MainImages/01JG6SW9M1WSD0H25PYAXAVGJW.jpg`,
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
  bannerImage:
    `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/BannerImages/01JFYGSB8YJ4NT4Z01BZEVFSET.png`,
  bannerImageAlt: 'Notre Galerie de Photos',
  title: 'Galerie de Projets de Plomberie',
  description: 'Explorez nos projets de plomberie terminés',
  mainImage:
    `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/MainImages/01JG6T3DHN07K5HJC0JX5MBE2S.jpg`,
  mainImageAlt: 'Présentation de notre meilleur travail',
  mainImageText: 'Solutions de Plomberie de Qualité',
  sections: [
    {
      title: 'Plomberie de Cuisine',
      images: [
        {
          image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYEPS01XMBTF8W43SJ1W6DM.png`,
          alt: 'Projet Plomberie de Cuisine',
          description: 'Une vitrine de notre travail sur Plomberie de Cuisine.',
        },
        {
          image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYEQBB668PK50S58KMXPABX.png`,
          alt: 'Un autre projet Plomberie de Cuisine',
          description: 'Un autre exemple de notre expertise en Plomberie de Cuisine.',
        },
      ],
    },
    {
      title: 'Rénovations de Salle de Bain',
      images: [
        {
          image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYEQVG7SGFJPNA4HEXJVB4V.png`,
          alt: 'Projet Rénovations de Salle de Bain',
          description: 'Une vitrine de notre travail sur Rénovations de Salle de Bain.',
        },
        {
          image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYERK3Y12TD4BHQ4AACPAV9.png`,
          alt: 'Un autre projet Rénovations de Salle de Bain',
          description: 'Un autre exemple de notre expertise en Rénovations de Salle de Bain.',
        },
      ],
    },
    {
      title: "Réparations d'Urgence",
      images: [
        {
          image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYESCWSZSMY8ZTHF112CWHH.png`,
          alt: "Projet Réparations d'Urgence",
          description: "Une vitrine de notre travail sur Réparations d'Urgence.",
        },
        {
          image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYET87DMH3D7JWQC6NXD9N4.png`,
          alt: "Un autre projet Réparations d'Urgence",
          description: "Un autre exemple de notre expertise en Réparations d'Urgence.",
        },
      ],
    },
    {
      title: 'Plomberie Extérieure',
      images: [
        {
          image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYEWARGWN18DKVHCZEMHT7V.png`,
          alt: 'Projet Plomberie Extérieure',
          description: 'Une vitrine de notre travail sur Plomberie Extérieure.',
        },
        {
          image: `${API_MEDIA_BASE}/storage/PhotoGallery/Filament/SectionImages/01JFYEX5KGYZ3PPAM2JPGTFHF7.png`,
          alt: 'Un autre projet Plomberie Extérieure',
          description: 'Un autre exemple de notre expertise en Plomberie Extérieure.',
        },
      ],
    },
  ],
};

export const siteSettings = {
  companyName: 'BK Entretien',
  companyPhone: '(555) 123-4567',
  companyEmail: 'info@expertplumbers.com',
  companyAddress: 'Montréal, QC',
  socialFacebook: 'https://facebook.com/expertplumbers',
  socialTwitter: 'https://twitter.com/expertplumbers',
  socialInstagram: 'https://instagram.com/expertplumbers',
  footerTagline:
    "BK Entretien - Expert en déblocage et nettoyage de drains à Montréal. Nous offrons un service de qualité pour assurer la tranquillité d'esprit de nos clients résidentiels et commerciaux.",
  hoursOpen: '08h00',
  hoursClose: '18h00',
  hoursNote: 'Fermé les dimanches',
};
