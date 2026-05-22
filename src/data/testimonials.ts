import { testimonialsPage } from './websiteContent';
import type { Testimonial } from '@/types';

/** Parse "…description… — Author" from API testimonial sections */
function parseTestimonial({
  title,
  description,
}: {
  title: string;
  description: string;
}): Testimonial {
  const match = description.match(/\s[—–-]\s([^]+)$/);
  if (match) {
    return {
      name: match[1].trim(),
      location: 'Montréal',
      rating: 5,
      text: description.replace(/\s[—–-]\s[^]+$/, '').trim(),
    };
  }
  return {
    name: title,
    location: 'Montréal',
    rating: 5,
    text: description,
  };
}

export const testimonials: Testimonial[] = testimonialsPage.sections.map(parseTestimonial);
