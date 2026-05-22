import type { LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  features: string[];
  benefits: string[];
  pagePath?: string;
};
