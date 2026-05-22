import {
  Droplets,
  Flame,
  Search,
  GitBranch,
  Bath,
  ChefHat,
  ShowerHead,
  Sparkles,
} from 'lucide-react';
import { drainCleaningPage, unlockingPage } from './websiteContent';

export const services = [
  {
    slug: 'nettoyage-drains',
    title: drainCleaningPage.title,
    shortDescription: drainCleaningPage.firstDescription,
    description: `${drainCleaningPage.firstDescription} ${drainCleaningPage.secondDescription}`,
    icon: Sparkles,
    image: drainCleaningPage.mainImage,
    features: drainCleaningPage.sections.map((s) => s.title),
    benefits: drainCleaningPage.sections.map((s) => s.description),
    pagePath: '/nettoyage-drains',
  },
  {
    slug: 'debouchage-urgence',
    title: unlockingPage.bannerImageText,
    shortDescription: unlockingPage.mainImageText,
    description: unlockingPage.sections.map((s) => s.description).join(' '),
    icon: Droplets,
    image: unlockingPage.mainImage,
    features: unlockingPage.sections.map((s) => s.title),
    benefits: unlockingPage.sections.map((s) => s.description),
    pagePath: '/debouchage',
  },
  {
    slug: 'debouchage-drains',
    title: 'Débouchage de drains',
    shortDescription:
      'Élimination rapide des bouchons dans vos évacuations, avec équipement professionnel et sans dommage.',
    description:
      'Nos techniciens interviennent avec des outils haute pression et des spirales électriques pour déboucher vos drains efficacement. Nous traitons les causes profondes — graisses, calcaire, racines — et pas seulement les symptômes.',
    icon: Droplets,
    features: [
      'Intervention sous 60 minutes en zone couverte',
      'Caméra et diagnostic inclus si nécessaire',
      'Garantie sur l\'intervention',
      'Devis clair avant travaux',
    ],
    benefits: [
      'Évacuations fluides et durables',
      'Prévention des refoulements',
      'Respect de vos installations',
    ],
  },
  {
    slug: 'plomberie-urgence',
    title: 'Plomberie d\'urgence',
    shortDescription:
      'Fuites, ruptures de canalisation ou dégâts des eaux : une équipe disponible 24h/24, 7j/7.',
    description:
      'En cas d\'urgence plomberie, chaque minute compte. BK Débouchage dépêche un technicien qualifié pour sécuriser votre installation, stopper la fuite et rétablir votre confort rapidement.',
    icon: Flame,
    features: [
      'Disponibilité 24h/24 et week-ends',
      'Matériel de coupure et réparation sur place',
      'Coordination avec votre assurance si besoin',
      'Rapport d\'intervention détaillé',
    ],
    benefits: [
      'Limitation des dégâts des eaux',
      'Tranquillité immédiate',
      'Techniciens agréés et assurés',
    ],
  },
  {
    slug: 'inspection-canalisations',
    title: 'Inspection de canalisations',
    shortDescription:
      'Diagnostic par caméra HD pour localiser précisément fissures, affaissements et obstructions.',
    description:
      'L\'inspection vidéo permet d\'identifier l\'origine exacte du problème sans casser vos sols ou murs. Idéal avant achat immobilier ou en cas de problèmes récurrents.',
    icon: Search,
    features: [
      'Caméra étanche haute définition',
      'Enregistrement et rapport photo',
      'Cartographie des réseaux',
      'Recommandations personnalisées',
    ],
    benefits: [
      'Diagnostic précis et objectif',
      'Travaux ciblés, économies garanties',
      'Preuve pour assurances et notaires',
    ],
  },
  {
    slug: 'solutions-canalisation',
    title: 'Solutions de canalisation',
    shortDescription:
      'Rénovation, remplacement et mise aux normes de vos réseaux d\'évacuation complets.',
    description:
      'Des solutions durables pour canalisations vieillissantes : chemisage, remplacement partiel ou total, raccordements conformes aux normes belges en vigueur.',
    icon: GitBranch,
    features: [
      'Étude technique sur site',
      'Travaux certifiés et garantis',
      'Respect des normes SPGE et locales',
      'Suivi après intervention',
    ],
    benefits: [
      'Réseau fiable sur le long terme',
      'Valorisation de votre bien',
      'Conformité réglementaire',
    ],
  },
  {
    slug: 'debouchage-wc',
    title: 'Débouchage WC',
    shortDescription:
      'WC bouché ou qui déborde ? Intervention propre et rapide, sans produits agressifs.',
    description:
      'Nous débouchons vos toilettes avec des méthodes adaptées à chaque type d\'installation — sanibroyeur, WC suspendu, classique — en préservant la porcelaine et les joints.',
    icon: Bath,
    features: [
      'Débouchage mécanique et hydrodynamique',
      'Nettoyage et désinfection si nécessaire',
      'Conseils d\'entretien préventif',
      'Intervention discrète et soignée',
    ],
    benefits: [
      'WC opérationnel en un passage',
      'Hygiène retrouvée immédiatement',
      'Pas de dommages au sanitaire',
    ],
  },
  {
    slug: 'debouchage-cuisine',
    title: 'Débouchage cuisine',
    shortDescription:
      'Évier, lave-vaisselle ou bonde bouchés : traitement des graisses et résidus alimentaires.',
    description:
      'La cuisine concentre graisses et déchets. Nos équipes débouchent éviers, siphons et raccordements machine à laver la vaisselle, avec curage préventif des conduites.',
    icon: ChefHat,
    features: [
      'Dégraissage professionnel des conduites',
      'Démontage et nettoyage du siphon',
      'Vérification du raccordement électroménager',
      'Conseils anti-bouchon',
    ],
    benefits: [
      'Évier qui s\'écoule normalement',
      'Odeurs éliminées',
      'Cuisine utilisable sans délai',
    ],
  },
  {
    slug: 'debouchage-salle-de-bain',
    title: 'Débouchage salle de bain',
    shortDescription:
      'Douche, lavabo ou baignoire : débouchage et curage des canalisations de salle de bain.',
    description:
      'Cheveux, savon et calcaire obstruent régulièrement les évacuations de salle de bain. Nous intervenons sur tous types de bonde et colonnes, avec matériel adapté aux petits diamètres.',
    icon: ShowerHead,
    features: [
      'Débouchage douche et baignoire',
      'Traitement anti-calcaire sur demande',
      'Inspection des colonnes verticales',
      'Intervention rapide et propre',
    ],
    benefits: [
      'Eau qui s\'évacue correctement',
      'Prévention des infiltrations',
      'Salle de bain préservée',
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
