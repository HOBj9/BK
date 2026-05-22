import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { parseHashHref } from '@/utils/hashRoute';

/** Whether a nav item should show the active state */
export function useNavLinkActive(path: string): boolean {
  const { pathname, hash } = useLocation();

  if (path.includes('#')) {
    const parsed = parseHashHref(path);
    if (typeof parsed === 'string') return false;
    return pathname === parsed.pathname && hash === parsed.hash;
  }

  if (path === ROUTES.HOME) {
    return pathname === ROUTES.HOME;
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}
