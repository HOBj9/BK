import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import type { GalleryImage } from '@/types';
import { easePremium } from '@/constants/animations';

type MediaStripProps = {
  images: GalleryImage[];
  className?: string;
  /** compact = smaller tiles for inline sections */
  variant?: 'default' | 'compact';
};

export default function MediaStrip({ images, className = '', variant = 'default' }: MediaStripProps) {
  if (images.length === 0) return null;

  const isCompact = variant === 'compact';
  const tileClass = isCompact
    ? 'aspect-[4/3] min-w-[140px] sm:min-w-[160px]'
    : 'aspect-[4/3] min-w-[200px] sm:min-w-[240px] md:min-w-[280px]';

  return (
    <div className={`relative ${className}`}>
      <div
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin md:gap-4"
        role="list"
        aria-label="Photos de nos interventions"
      >
        {images.map((item, index) => (
          <motion.figure
            key={item.image}
            role="listitem"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: easePremium }}
            className={`group relative shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 shadow-md dark:border-slate-700/60 ${tileClass}`}
          >
            <LazyImage
              src={item.image}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              wrapperClassName="h-full w-full"
              skeletonClassName="h-full w-full rounded-none"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/85 to-transparent px-3 py-3">
              <p className="line-clamp-2 text-xs font-medium text-white sm:text-sm">{item.description}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
