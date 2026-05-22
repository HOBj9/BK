import { useEffect, useState } from 'react';

/** Per-card staggered skeleton after mount (ms delay). */
export function useCardReveal(delayMs = 0) {
  const [isLoading, setIsLoading] = useState(delayMs > 0);

  useEffect(() => {
    if (delayMs <= 0) return undefined;
    const timer = setTimeout(() => setIsLoading(false), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  return delayMs > 0 && isLoading;
}
