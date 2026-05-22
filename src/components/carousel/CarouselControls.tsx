import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { CarouselControlsProps } from './carousel.types';

export default function CarouselControls({
  onPrev,
  onNext,
  activeIndex,
  total,
  onGoTo,
  compact = false,
}: CarouselControlsProps) {
  return (
    <div className="mt-5 flex flex-col items-stretch gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center justify-center gap-3 sm:justify-start">
        <motion.button
          type="button"
          onClick={onPrev}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/20 focus-ring sm:h-12 sm:w-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Image précédente"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
        </motion.button>

        {compact && (
          <span
            className="min-w-18 text-center text-sm font-semibold tabular-nums text-white/80"
            aria-live="polite"
          >
            {activeIndex + 1} / {total}
          </span>
        )}

        <motion.button
          type="button"
          onClick={onNext}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/20 focus-ring sm:h-12 sm:w-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Image suivante"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
        </motion.button>
      </div>

      {compact ? (
        <div
          className="mx-auto h-1.5 max-w-xs flex-1 overflow-hidden rounded-full bg-white/15 sm:max-w-sm"
          role="progressbar"
          aria-valuenow={activeIndex + 1}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label="Progression de la galerie"
        >
          <div
            className="h-full rounded-full bg-accent-400 shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
          />
        </div>
      ) : (
        <div
          className="flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Sélection d'image"
        >
          {Array.from({ length: total }, (_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Image ${index + 1}`}
              onClick={() => onGoTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus-ring ${
                index === activeIndex
                  ? 'w-8 bg-accent-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]'
                  : 'w-2.5 bg-white/35 hover:bg-white/55'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
