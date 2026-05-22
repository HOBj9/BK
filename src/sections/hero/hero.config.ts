import {
  Award,
  Clock,
  Droplets,
  Shield,
  Star,
  Wrench,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { homePage } from '@/data/websiteContent';
import { site } from '@/data/site';
import { ROUTES } from '@/constants/routes';

export type HeroTrustItem = {
  icon: LucideIcon;
  text: string;
};

export type HeroStatItem = {
  icon: LucideIcon;
  value: string;
  suffix?: string;
  label: string;
  accent?: boolean;
};

export type HeroServiceWidget = {
  id: string;
  label: string;
  status: 'active' | 'standby' | 'complete';
  icon: LucideIcon;
};

export const heroConfig = {
  eyebrow: 'Urgence — Intervention rapide',
  headlineLines: ['Votre expert en', 'déblocage & nettoyage'],
  headlineAccent: `à Montréal · ${site.name}`,
  subheadline: homePage.heroSubtitle,
  phone: site.phone,
  phoneDisplay: site.phoneDisplay,
  primaryCta: { label: `Appeler — ${site.phoneDisplay}` },
  secondaryCta: { label: 'Demande de devis gratuit', to: ROUTES.CONTACT },
  trustItems: [
    { icon: Clock, text: '24h/24 — 7j/7' },
    { icon: Shield, text: 'Techniciens certifiés' },
    { icon: Award, text: 'Devis transparent' },
    { icon: Zap, text: 'Intervention < 60 min' },
  ] satisfies HeroTrustItem[],
  intervention: {
    status: 'En route',
    title: 'Débouchage WC — Urgence',
    client: 'Résidence — Plateau',
    etaMinutes: 47,
    technician: 'Marc L.',
  },
  dashboardStats: [
    { value: '24/7', label: 'Disponibilité', accent: true },
    { value: '15+', label: "Ans d'expérience", accent: false },
    { value: '<60', unit: 'min', label: 'Délai moyen', accent: true },
  ],
  serviceWidgets: [
    { id: 'drain', label: 'Débouchage', status: 'active', icon: Droplets },
    { id: 'inspect', label: 'Inspection', status: 'standby', icon: Wrench },
    { id: 'clean', label: 'Nettoyage', status: 'standby', icon: Shield },
  ] satisfies HeroServiceWidget[],
  bottomStats: [
    { icon: Wrench, value: '5000+', label: 'Interventions réussies', accent: true },
    { icon: Star, value: '4.9', suffix: '/5', label: 'Note clients', accent: false },
    { icon: Clock, value: '<60', suffix: ' min', label: 'Délai urgence', accent: true },
    { icon: Award, value: '100%', label: 'Satisfaction', accent: false },
  ] satisfies HeroStatItem[],
  mapPins: [
    { x: 28, y: 42, label: 'Plateau' },
    { x: 52, y: 35, label: 'Centre' },
    { x: 68, y: 58, label: 'Sud' },
  ],
};
