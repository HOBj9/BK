import { ROUTES } from '@/constants/routes';

/** Parses "/#zones" into a React Router location object. */
export const parseHashHref = (href: string) => {
  if (!href.includes('#')) {
    return href;
  }

  const [pathname = '', anchor] = href.split('#');
  return {
    pathname: pathname || ROUTES.HOME,
    hash: anchor ? `#${anchor}` : '',
  };
};
