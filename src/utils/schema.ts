import { site } from '../data/site';
import { cities } from '../data/cities';
import { services } from '../data/services';

export const buildLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/favicon.svg`,
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: cities.map((city) => ({
    '@type': 'City',
    name: city.name,
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de débouchage',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.shortDescription,
        url: `${site.url}/services/${service.slug}`,
      },
    })),
  },
});
