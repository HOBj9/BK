import { useEffect, useState } from 'react';

/**
 * Observe when an element enters the viewport (once).
 * @param {React.RefObject} ref
 * @param {{ rootMargin?: string, threshold?: number, enabled?: boolean }} options
 */
export function useInView(ref, options = {}) {
  const { rootMargin = '200px', threshold = 0.01, enabled = true } = options;
  const [inView, setInView] = useState(!enabled);

  useEffect(() => {
    if (!enabled || inView) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled, rootMargin, threshold, inView, ref]);

  return inView;
}
