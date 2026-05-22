import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import LazyImage from '@/components/ui/LazyImage';
import type { CarouselSlideProps } from './carousel.types';

const spring = { type: 'spring' as const, stiffness: 320, damping: 32 };

function CarouselSlide({
  slide,
  index,
  isActive,
  isNeighbor,
  onActivate,
}: CarouselSlideProps) {
  const showContent = isActive || isNeighbor;

  return (
    <motion.div
      role="button"
      tabIndex={0}
      layout
      onClick={() => onActivate(index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onActivate(index);
        }
      }}
      aria-label={`${slide.title} — ${isActive ? 'slide active' : 'activer cette slide'}`}
      aria-current={isActive ? 'true' : undefined}
      initial={false}
      animate={{
        flexGrow: isActive ? 5.5 : isNeighbor ? 1.35 : 0.85,
        flexShrink: 1,
        opacity: isActive ? 1 : isNeighbor ? 0.92 : 0.78,
      }}
      transition={spring}
      whileHover={!isActive ? { opacity: 0.95, scale: 1.01 } : undefined}
      whileTap={{ scale: 0.99 }}
      className={`group relative min-h-[360px] min-w-0 flex-1 cursor-pointer overflow-hidden rounded-2xl border text-left shadow-2xl outline-none lg:min-h-[460px] lg:rounded-3xl ${
        isActive
          ? 'border-accent-400/40 shadow-accent-500/20 ring-2 ring-accent-400/30'
          : 'border-white/10 hover:border-white/25'
      }`}
    >
      <LazyImage
        src={slide.image}
        alt={slide.imageAlt ?? slide.title}
        eager={isActive}
        className={`absolute inset-0 h-full w-full object-cover transition-[filter,transform] duration-700 ${
          isActive
            ? 'scale-100 saturate-[1.08] contrast-[1.05]'
            : 'scale-105 saturate-[0.85] contrast-[0.95] group-hover:saturate-100'
        }`}
        wrapperClassName="absolute inset-0 h-full w-full"
        skeletonClassName="absolute inset-0 h-full w-full rounded-none"
      />

      <div
        className={`absolute inset-0 bg-linear-to-t ${slide.accentColor}`}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-br from-black/50 via-transparent to-black/30"
        aria-hidden
      />

      {isActive && (
        <motion.div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-400/20 blur-3xl"
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />
      )}

      <motion.div
        className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-7"
        initial={false}
        animate={{
          opacity: showContent ? 1 : 0,
          y: showContent ? 0 : 12,
        }}
        transition={{ duration: 0.35 }}
      >
        {isActive ? (
          <>
            <h3 className="text-base font-bold leading-tight text-white sm:text-xl lg:text-2xl">
              {slide.title}
            </h3>
            <p className="mt-2 line-clamp-3 max-w-xl text-sm leading-relaxed text-slate-200/90 sm:text-base">
              {slide.subtitle}
            </p>
            {slide.href && (
              <Link
                to={slide.href}
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-ring"
              >
                En savoir plus
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
          </>
        ) : (
          <h3 className="line-clamp-2 text-sm font-semibold text-white/90 sm:text-base">
            {slide.title}
          </h3>
        )}
      </motion.div>

      {!isActive && (
        <span className="absolute left-3 top-3 hidden rounded-lg border border-white/15 bg-black/40 px-2 py-1 text-xs font-medium text-white/80 backdrop-blur-sm lg:block">
          {slide.title}
        </span>
      )}
    </motion.div>
  );
}

export default memo(CarouselSlide);
