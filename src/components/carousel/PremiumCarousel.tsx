import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import CarouselSlide from './CarouselSlide';
import CarouselHeroSlide from './CarouselHeroSlide';
import CarouselControls from './CarouselControls';
import { useCarousel } from './useCarousel';
import type { PremiumCarouselProps } from './carousel.types';

const DESKTOP_QUERY = '(min-width: 1024px)';

export default function PremiumCarousel({
  slides,
  autoplayMs = 5500,
  className = '',
  showHeading = false,
}: PremiumCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const [slideDirection, setSlideDirection] = useState(1);

  const { activeIndex, setActiveIndex, goNext, goPrev } = useCarousel({
    length: slides.length,
    autoplayMs: isReducedMotion ? 0 : autoplayMs,
  });

  const goNextWithDirection = useCallback(() => {
    setSlideDirection(1);
    goNext();
  }, [goNext]);

  const goPrevWithDirection = useCallback(() => {
    setSlideDirection(-1);
    goPrev();
  }, [goPrev]);

  const goToWithDirection = useCallback(
    (index: number) => {
      setSlideDirection(index > activeIndex ? 1 : index < activeIndex ? -1 : 0);
      setActiveIndex(index);
    },
    [activeIndex, setActiveIndex],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrevWithDirection();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNextWithDirection();
      }
    },
    [goNextWithDirection, goPrevWithDirection],
  );

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return undefined;
    node.addEventListener('keydown', handleKeyDown);
    return () => node.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (slides.length === 0) return null;

  const activeSlide = slides[activeIndex];
  const useCompactControls = !isDesktop || slides.length > 8;

  return (
    <div className={className}>
      {showHeading && (
        <SectionHeading
          light
          eyebrow="Nos expertises"
          title="Services en images"
          description="Explorez nos interventions — utilisez les flèches pour parcourir la galerie."
          align="center"
        />
      )}

      <motion.div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Galerie photo — aperçu des réalisations"
        aria-live="polite"
        tabIndex={0}
        className="relative rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950 sm:rounded-3xl"
      >
        <div
          className="pointer-events-none absolute -inset-x-2 top-1/2 z-0 hidden h-2/3 -translate-y-1/2 rounded-4xl bg-accent-500/10 blur-3xl sm:-inset-x-4 sm:block sm:h-3/4 sm:rounded-5xl"
          aria-hidden
        />

        {isDesktop ? (
          <div className="relative z-10 flex h-[min(68vh,480px)] min-h-[360px] gap-3 overflow-hidden lg:h-[460px] lg:gap-4">
            {slides.map((slide, index) => {
              const distance = Math.abs(index - activeIndex);
              if (distance > 1) return null;

              const isActive = index === activeIndex;
              const isNeighbor = distance === 1;

              return (
                <CarouselSlide
                  key={slide.id}
                  slide={slide}
                  index={index}
                  isActive={isActive}
                  isNeighbor={isNeighbor}
                  onActivate={goToWithDirection}
                />
              );
            })}
          </div>
        ) : (
          <motion.div
            className="relative z-10 touch-pan-y"
            drag={isReducedMotion ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -56 || info.velocity.x < -400) goNextWithDirection();
              else if (info.offset.x > 56 || info.velocity.x > 400) goPrevWithDirection();
            }}
          >
            <div className="relative aspect-4/3 w-full overflow-hidden sm:aspect-16/10">
              <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                {activeSlide && (
                  <CarouselHeroSlide
                    key={activeSlide.id}
                    slide={activeSlide}
                    direction={slideDirection}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        <CarouselControls
          onPrev={goPrevWithDirection}
          onNext={goNextWithDirection}
          activeIndex={activeIndex}
          total={slides.length}
          onGoTo={goToWithDirection}
          compact={useCompactControls}
        />
      </motion.div>
    </div>
  );
}
