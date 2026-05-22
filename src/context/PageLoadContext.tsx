import { createContext, useContext } from 'react';

export type PageLoadContextValue = {
  isLoading: boolean;
};

export const PageLoadContext = createContext<PageLoadContextValue>({ isLoading: false });

export function usePageLoading() {
  return useContext(PageLoadContext);
}
