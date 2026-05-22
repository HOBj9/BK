import { useSyncExternalStore } from 'react';

const subscribe = (query, callback) => {
  const media = window.matchMedia(query);
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
};

const getSnapshot = (query) => window.matchMedia(query).matches;

const getServerSnapshot = () => false;

export const useMediaQuery = (query) =>
  useSyncExternalStore(
    (callback) => subscribe(query, callback),
    () => getSnapshot(query),
    getServerSnapshot,
  );
