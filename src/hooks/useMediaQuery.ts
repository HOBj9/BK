import { useSyncExternalStore } from 'react';

const subscribe = (query: string, callback: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
};

const getSnapshot = (query: string) => window.matchMedia(query).matches;

const getServerSnapshot = () => false;

export const useMediaQuery = (query: string) =>
  useSyncExternalStore(
    (callback) => subscribe(query, callback),
    () => getSnapshot(query),
    getServerSnapshot,
  );
