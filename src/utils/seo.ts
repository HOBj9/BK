import type { SEOProps } from '@/types';

const upsertMeta = (attr: string, key: string, content: string) => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

export const updatePageSEO = ({
  title,
  description,
  path = '',
  image,
  type = 'website',
  noindex = false,
}: SEOProps) => {
  const baseUrl = 'https://www.bkdebouchage.be';
  const fullTitle = title.includes('BK Débouchage')
    ? title
    : `${title} | BK Débouchage`;
  const url = `${baseUrl}${path}`;

  document.title = fullTitle;
  upsertMeta('name', 'description', description);
  upsertMeta('property', 'og:title', fullTitle);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:type', type);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);

  if (image) {
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:image', image);
  }

  upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
};
