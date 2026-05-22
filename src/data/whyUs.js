import { Wrench, Clock, Award } from 'lucide-react';
import { homePage } from './websiteContent';

const sectionIcons = [Wrench, Clock, Award];

/** Home page feature blocks from bkdebouchage.ca API */
export const whyUsItems = homePage.sections.map((section, index) => ({
  icon: sectionIcons[index] ?? Wrench,
  title: section.title,
  description: section.description,
  image: section.image,
}));
