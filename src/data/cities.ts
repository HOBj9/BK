import type { City } from '@/types';

export const cities: City[] = [
  {
    slug: 'olne',
    name: 'Olne',
    region: 'Province de Liège',
    description:
      'BK Débouchage intervient à Olne et environs pour tous vos problèmes de débouchage et de plomberie d\'urgence. Notre équipe locale connaît les spécificités des habitations de la région.',
    highlights: [
      'Intervention rapide à Olne et communes limitrophes',
      'Techniciens basés en province de Liège',
      'Devis gratuit par téléphone',
      'Service 24h/24 pour les urgences',
    ],
    services: [
      'Débouchage drains et égouts',
      'Plomberie d\'urgence',
      'Inspection caméra',
      'Débouchage WC et cuisine',
    ],
    metaDescription:
      'Débouchage et plomberie d\'urgence à Olne. BK Débouchage — intervention 24h/24, techniciens certifiés, devis transparent.',
  },
  {
    slug: 'aiseau-presles',
    name: 'Aiseau-Presles',
    region: 'Hainaut — Charleroi',
    description:
      'À Aiseau-Presles, faites appel à BK Débouchage pour un débouchage professionnel et des solutions durables. Nous couvrons l\'ensemble de la commune avec des délais d\'intervention optimisés.',
    highlights: [
      'Couverture complète d\'Aiseau-Presles',
      'Réponse sous 60 minutes pour urgences',
      'Équipement haute pression et caméra',
      'Tarifs clairs, sans surprise',
    ],
    services: [
      'Débouchage canalisation',
      'Fuites et urgences plomberie',
      'Curage et entretien préventif',
      'Solutions de rénovation réseau',
    ],
    metaDescription:
      'Plombier débouchage à Aiseau-Presles. Service 24/7, diagnostic professionnel, intervention rapide par BK Débouchage.',
  },
  {
    slug: 'plombieres',
    name: 'Plombières',
    region: 'Province de Liège — Cantons de l\'Est',
    description:
      'Spécialiste du débouchage à Plombières, BK Débouchage assure des interventions fiables pour particuliers, commerces et syndics. Diagnostic précis et travaux garantis.',
    highlights: [
      'Expertise locale à Plombières',
      'Interventions particuliers et professionnels',
      'Matériel professionnel certifié',
      'Suivi après chaque intervention',
    ],
    services: [
      'Débouchage évacuations',
      'Inspection et diagnostic caméra',
      'Débouchage sanitaires',
      'Canalisation et assainissement',
    ],
    metaDescription:
      'Débouchage à Plombières — BK Débouchage. Intervention rapide, techniciens qualifiés, service d\'urgence 24h/24.',
  },
  {
    slug: 'hamoir',
    name: 'Hamoir',
    region: 'Province de Liège — Condroz',
    description:
      'À Hamoir, comptez sur BK Débouchage pour résoudre efficacement vos problèmes de canalisation. Une équipe réactive, des solutions complètes et un service client attentif.',
    highlights: [
      'Proximité et réactivité à Hamoir',
      'Débouchage sans casse inutile',
      'Conseils entretien personnalisés',
      'Disponibilité week-end et jours fériés',
    ],
    services: [
      'Débouchage drains et colonnes',
      'Plomberie urgente',
      'Débouchage cuisine et salle de bain',
      'Solutions canalisation complètes',
    ],
    metaDescription:
      'Débouchage et plomberie à Hamoir. BK Débouchage — intervention 24/7, devis gratuit, techniciens de confiance.',
  },
];

export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
