import { useCallback, useEffect, useState } from 'react';

type UseCarouselOptions = {
  length: number;
  autoplayMs?: number;
};

export function useCarousel({ length, autoplayMs = 5500 }: UseCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (length === 0) return;
      const next = ((index % length) + length) % length;
      setActiveIndex(next);
    },
    [length],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!autoplayMs || length <= 1) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % length);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplayMs, length]);

  return { activeIndex, setActiveIndex: goTo, goNext, goPrev };
}
