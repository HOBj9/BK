import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const PAGE_LOAD_MS = 520;

/** True briefly after each route change (page-level skeleton). */
export function usePageLoad(delay = PAGE_LOAD_MS) {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [trackedPath, setTrackedPath] = useState(pathname);

  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    setIsLoading(true);
  }

  useEffect(() => {
    if (!isLoading) return undefined;
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [isLoading, delay, pathname]);

  return isLoading;
}
