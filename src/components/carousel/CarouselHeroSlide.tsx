import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import LazyImage from '@/components/ui/LazyImage';
import type { CarouselSlideData } from './carousel.types';

type CarouselHeroSlideProps = {
  slide: CarouselSlideData;
  direction: number;
};

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
    scale: 0.98,
  }),
};

export default function CarouselHeroSlide({ slide, direction }: CarouselHeroSlideProps) {
  return (
    <motion.article
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:rounded-3xl"
      aria-roledescription="slide"
    >
      <LazyImage
        src={slide.image}
        alt={slide.imageAlt ?? slide.title}
        eager
        className="absolute inset-0 h-full w-full object-cover"
        wrapperClassName="absolute inset-0 h-full w-full"
        skeletonClassName="absolute inset-0 h-full w-full rounded-none"
      />
      <div className={`absolute inset-0 bg-linear-to-t ${slide.accentColor}`} aria-hidden />
      <div
        className="absolute inset-0 bg-linear-to-br from-black/55 via-black/15 to-black/40"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
        <h3 className="text-lg font-bold leading-tight text-white sm:text-2xl">{slide.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-200/90 sm:line-clamp-3 sm:text-base">
          {slide.subtitle}
        </p>
        {slide.href && (
          <Link
            to={slide.href}
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-ring"
          >
            En savoir plus
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </div>
    </motion.article>
  );
}
