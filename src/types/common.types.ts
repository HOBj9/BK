import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export type WithChildren = {
  children?: ReactNode;
};

export type WithClassName = {
  className?: string;
};

export type NavLink = {
  label: string;
  path: string;
};

export type FooterLinkGroup = {
  services: NavLink[];
  pages: NavLink[];
  company: NavLink[];
};

export type SocialLinks = {
  facebook: string;
  twitter: string;
  instagram: string;
};

export type SiteInfo = {
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  hours: string;
  hoursDetail: string;
  founded: string;
  url: string;
  social: SocialLinks;
};

export type ContentSection = {
  title: string;
  description: string;
  image?: string;
};

export type GalleryImage = {
  image: string;
  alt: string;
  description: string;
};

export type IconLabel = {
  icon: LucideIcon;
  label?: string;
};

export type Statistic = {
  value: string;
  label: string;
  description: string;
  unit?: string;
};

export type GalleryCategory = {
  title: string;
  images: GalleryImage[];
};
