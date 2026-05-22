import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToElementWhenReady } from '@/utils/scroll';
import { ROUTES } from '@/constants/routes';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      return scrollToElementWhenReady(id);
    }

    if (pathname !== ROUTES.HOME) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
