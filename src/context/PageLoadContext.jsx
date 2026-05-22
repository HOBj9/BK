import { createContext, useContext } from 'react';

export const PageLoadContext = createContext({ isLoading: false });

export function usePageLoading() {
  return useContext(PageLoadContext);
}
