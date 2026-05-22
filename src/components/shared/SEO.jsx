import { useEffect } from 'react';
import { updatePageSEO } from '../../utils/seo';

export default function SEO({
  title,
  description,
  path = '',
  image,
  type,
  noindex = false,
}) {
  useEffect(() => {
    updatePageSEO({ title, description, path, image, type, noindex });
  }, [title, description, path, image, type, noindex]);

  return null;
}
