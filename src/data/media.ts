/**
 * BK Entretien — media from https://api-bk.techpundits.net (bkdebouchage.ca)
 * Single registry for all site imagery.
 */
import type { GalleryImage } from '@/types';

export const API_MEDIA_BASE = 'https://api-bk.techpundits.net';

const storage = (path: string) => `${API_MEDIA_BASE}/storage/${path}`;

/** Page hero / banner backgrounds */
export const pageBanners = {
  home: storage('HomePage/Filament/BannerImages/01JG6T6CACTCB9FCPDYY55D3S2.jpg'),
  drain: storage('DrainCleaning/Filament/BannerImages/01JFYG0Z79CWCV6CCTTRMZWZG0.png'),
  unlock: storage('Unlocking/Filament/BannerImages/01JFYFJFY0G7GX6EERG8TJWFSF.png'),
  gallery: storage('PhotoGallery/Filament/BannerImages/01JFYGSB8YJ4NT4Z01BZEVFSET.png'),
  testimonials: storage('Testimonial/Filament/BannerImages/01JFYF56X8FWQCDZVRW86CHK1Z.png'),
  contact: storage('ContactUs/Filament/BannerImages/01JFYFGQBMM8S0CKQTWEE1WH14.png'),
} as const;

/** Main showcase photos (JPG — real interventions) */
export const pageMains = {
  home: storage('HomePage/Filament/MainImages/01JG6SYN7D7PZ01WXS392DEBVP.png'),
  drain: storage('DrainCleaning/Filament/MainImages/01JG6SX4AN4VDE54S8Q7SWFK37.jpg'),
  unlock: storage('Unlocking/Filament/MainImages/01JG6T1C9J97G45GSY36D54CTG.jpg'),
  gallery: storage('PhotoGallery/Filament/MainImages/01JG6T3DHN07K5HJC0JX5MBE2S.jpg'),
  contact: storage('ContactUs/Filament/MainImages/01JG6SW9M1WSD0H25PYAXAVGJW.jpg'),
} as const;

/** Home “why us” section illustrations */
export const homeSectionImages = {
  expertise: storage('HomePageSection/Filament/Images/01JFYF2DHRR6WMACCZDG3HM6M4.png'),
  emergency: storage('HomePageSection/Filament/Images/01JFYE4EWD2WHHX72QCQ3TEHMF.png'),
  quality: storage('HomePageSection/Filament/Images/01JFYE7C16EDGYH1F6E96KGXZT.png'),
} as const;

const galleryPaths = {
  kitchen1: 'PhotoGallery/Filament/SectionImages/01JFYEPS01XMBTF8W43SJ1W6DM.png',
  kitchen2: 'PhotoGallery/Filament/SectionImages/01JFYEQBB668PK50S58KMXPABX.png',
  bath1: 'PhotoGallery/Filament/SectionImages/01JFYEQVG7SGFJPNA4HEXJVB4V.png',
  bath2: 'PhotoGallery/Filament/SectionImages/01JFYERK3Y12TD4BHQ4AACPAV9.png',
  emergency1: 'PhotoGallery/Filament/SectionImages/01JFYESCWSZSMY8ZTHF112CWHH.png',
  emergency2: 'PhotoGallery/Filament/SectionImages/01JFYET87DMH3D7JWQC6NXD9N4.png',
  exterior1: 'PhotoGallery/Filament/SectionImages/01JFYEWARGWN18DKVHCZEMHT7V.png',
  exterior2: 'PhotoGallery/Filament/SectionImages/01JFYEX5KGYZ3PPAM2JPGTFHF7.png',
} as const;

/** Portfolio / project photos with BK-focused copy */
export const projectPhotos: Record<keyof typeof galleryPaths, GalleryImage> = {
  kitchen1: {
    image: storage(galleryPaths.kitchen1),
    alt: 'Intervention plomberie résidentielle — évier et drain',
    description: 'Débouchage et remise en service d’un drain de cuisine à Montréal.',
  },
  kitchen2: {
    image: storage(galleryPaths.kitchen2),
    alt: 'Nettoyage de drain sous évier',
    description: 'Élimination d’un bouchon tenace avec équipement professionnel.',
  },
  bath1: {
    image: storage(galleryPaths.bath1),
    alt: 'Rénovation plomberie salle de bain',
    description: 'Travaux de plomberie soignés pour drains et raccordements.',
  },
  bath2: {
    image: storage(galleryPaths.bath2),
    alt: 'Drain de douche — intervention complète',
    description: 'Remise en état d’un drain de douche obstrué.',
  },
  emergency1: {
    image: storage(galleryPaths.emergency1),
    alt: 'Débouchage d’urgence 24/7',
    description: 'Intervention rapide pour obstruction complète ou refoulement.',
  },
  emergency2: {
    image: storage(galleryPaths.emergency2),
    alt: 'Service d’urgence plomberie',
    description: 'Équipe mobilisée pour une urgence résidentielle ou commerciale.',
  },
  exterior1: {
    image: storage(galleryPaths.exterior1),
    alt: 'Drain extérieur et entrée d’égout',
    description: 'Nettoyage et dégagement des drains extérieurs.',
  },
  exterior2: {
    image: storage(galleryPaths.exterior2),
    alt: 'Canalisation extérieure',
    description: 'Entretien préventif des conduites et accès extérieurs.',
  },
};

/** Field photos — best for carousel & trust strips */
export const fieldPhotos: GalleryImage[] = [
  {
    image: pageMains.drain,
    alt: 'Technicien — nettoyage de drains',
    description: 'Nettoyage professionnel des drains avec équipement spécialisé.',
  },
  {
    image: pageMains.unlock,
    alt: 'Débouchage en cours',
    description: 'Débouchage rapide pour drains, éviers et canalisations.',
  },
  {
    image: pageMains.contact,
    alt: 'Équipe BK Entretien sur le terrain',
    description: 'Techniciens certifiés, service courtois à Montréal.',
  },
  {
    image: pageMains.gallery,
    alt: 'Réalisation plomberie de qualité',
    description: 'Travaux terminés — satisfaction client garantie.',
  },
];

/** All 8 gallery PNGs in display order */
export const allProjectPhotos: GalleryImage[] = [
  projectPhotos.kitchen1,
  projectPhotos.kitchen2,
  projectPhotos.bath1,
  projectPhotos.bath2,
  projectPhotos.emergency1,
  projectPhotos.emergency2,
  projectPhotos.exterior1,
  projectPhotos.exterior2,
];

/** Home carousel: field JPGs first, then portfolio (12 slides, no duplicates) */
export const homeCarouselImages: GalleryImage[] = [
  ...fieldPhotos,
  ...allProjectPhotos.slice(0, 8),
];

/** Gallery page categories — aligned with BK services */
export const galleryCategoriesData = [
  {
    title: 'Nettoyage des drains & égouts',
    images: [
      {
        image: pageMains.drain,
        alt: 'Nettoyage de drains — équipe au travail',
        description: 'Hydro-nettoyage et dégagement des conduites obstruées.',
      },
      projectPhotos.emergency1,
      projectPhotos.exterior1,
    ],
  },
  {
    title: 'Débouchage d’urgence',
    images: [
      {
        image: pageMains.unlock,
        alt: 'Débouchage d’urgence',
        description: 'Réponse rapide 24/7 pour obstructions et refoulements.',
      },
      projectPhotos.emergency2,
      projectPhotos.kitchen2,
    ],
  },
  {
    title: 'Interventions résidentielles',
    images: [projectPhotos.kitchen1, projectPhotos.bath1, projectPhotos.bath2],
  },
  {
    title: 'Drains extérieurs & commercial',
    images: [projectPhotos.exterior2, projectPhotos.kitchen1, projectPhotos.bath2],
  },
  {
    title: 'Équipe & réalisations',
    images: [
      {
        image: pageMains.contact,
        alt: 'Équipe BK Entretien',
        description: 'Professionnels dévoués à votre tranquillité d’esprit.',
      },
      {
        image: pageMains.gallery,
        alt: 'Projet plomberie terminé',
        description: 'Qualité de finition et respect des délais.',
      },
      {
        image: pageMains.home,
        alt: 'Plombier professionnel BK Entretien',
        description: 'Expertise locale pour drains et débouchage à Montréal.',
      },
    ],
  },
] as const;

/** Trust strip / mosaic picks */
export const trustStripImages: GalleryImage[] = [
  fieldPhotos[0],
  fieldPhotos[1],
  projectPhotos.emergency1,
  projectPhotos.exterior1,
  fieldPhotos[2],
  projectPhotos.bath1,
];
