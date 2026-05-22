import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToElement } from '@/utils/scroll';
import { parseHashHref } from '@/utils/hashRoute';
import { ROUTES } from '@/constants/routes';

export default function HashLink({ href, children, className, onClick, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();
  const to = parseHashHref(href);
  const anchorId =
    typeof to === 'object' && to.hash ? to.hash.replace('#', '') : '';

  const handleClick = (e) => {
    onClick?.(e);

    if (!anchorId) return;

    const targetPath =
      typeof to === 'object' ? to.pathname : ROUTES.HOME;
    const isSameHome =
      location.pathname === ROUTES.HOME && targetPath === ROUTES.HOME;

    if (isSameHome) {
      e.preventDefault();
      navigate({ pathname: ROUTES.HOME, hash: `#${anchorId}` });
      scrollToElement(anchorId);
    }
  };

  return (
    <Link to={to} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
