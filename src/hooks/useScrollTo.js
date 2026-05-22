import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToElement } from '@/utils/scroll';
import { ROUTES } from '@/constants/routes';

export const useScrollTo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (anchor) => {
      const id = anchor.replace('#', '');
      const hash = `#${id}`;

      if (location.pathname !== ROUTES.HOME) {
        navigate({ pathname: ROUTES.HOME, hash });
        return;
      }

      navigate({ pathname: ROUTES.HOME, hash });
      scrollToElement(id);
    },
    [navigate, location.pathname],
  );
};
