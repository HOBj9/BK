/** Sticky header offset (matches header height) */
export const SCROLL_OFFSET = 88;

export const scrollToElement = (id: string, offset = SCROLL_OFFSET) => {
  const el = document.getElementById(id);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  return true;
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

type ScrollWhenReadyOptions = {
  offset?: number;
  maxAttempts?: number;
  interval?: number;
};

/**
 * Retry scroll until target exists (home sections mount after route change).
 */
export const scrollToElementWhenReady = (
  id: string,
  { offset = SCROLL_OFFSET, maxAttempts = 25, interval = 80 }: ScrollWhenReadyOptions = {},
) => {
  let attempts = 0;
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let cancelled = false;

  const tryScroll = () => {
    if (cancelled) return;
    if (scrollToElement(id, offset)) return;
    attempts += 1;
    if (attempts < maxAttempts) {
      timerId = setTimeout(tryScroll, interval);
    }
  };

  tryScroll();

  return () => {
    cancelled = true;
    if (timerId) clearTimeout(timerId);
  };
};
