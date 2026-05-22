import { testimonialsPage } from './websiteContent';

/** Parse "…description… — Author" from API testimonial sections */
function parseTestimonial({ title, description }) {
  const match = description.match(/\s[—–-]\s([^]+)$/);
  if (match) {
    return {
      name: match[1].trim(),
      location: 'Montréal',
      rating: 5,
      text: description.replace(/\s[—–-]\s[^]+$/, '').trim(),
      headline: title,
    };
  }
  return {
    name: title,
    location: 'Montréal',
    rating: 5,
    text: description,
    headline: title,
  };
}

export const testimonials = testimonialsPage.sections.map(parseTestimonial);
