import { useEffect } from 'react';
import { updatePageSEO } from '../../utils/seo';
import type { SEOProps } from '@/types';

export default function SEO({
  title,
  description,
  path = '',
  image,
  type,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    updatePageSEO({ title, description, path, image, type, noindex });
  }, [title, description, path, image, type, noindex]);

  return null;
}
