import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import Container from '@/components/ui/Container';
import { galleryFadeUp, galleryFeaturedZoom, galleryStagger, galleryViewport } from './gallery.animations';

type GalleryFeaturedProps = {
  src: string;
  alt: string;
  caption: string;
  projectCount: number;
  categoryCount: number;
};

export default function GalleryFeatured({
  src,
  alt,
  caption,
  projectCount,
  categoryCount,
}: GalleryFeaturedProps) {
  return (
    <Container className="py-12 md:py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={galleryViewport}
        variants={galleryStagger}
        className="relative"
      >
        <motion.div
          variants={galleryFeaturedZoom}
          className="gallery-frame group relative overflow-hidden rounded-3xl"
        >
          <LazyImage
            src={src}
            alt={alt}
            className="aspect-21/9 w-full object-cover sm:aspect-24/10"
            wrapperClassName="w-full"
            skeletonClassName="aspect-21/9 w-full rounded-none sm:aspect-24/10"
          />
          <div className="gallery-shine pointer-events-none absolute inset-0" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent" aria-hidden />
          <p className="absolute bottom-0 left-0 right-0 px-6 py-8 text-center text-lg font-semibold text-white sm:text-xl md:px-10">
            {caption}
          </p>
        </motion.div>

        <motion.div
          variants={galleryStagger}
          className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3"
        >
          <motion.div
            variants={galleryFadeUp}
            className="rounded-2xl border border-indigo-200/60 bg-white/80 px-5 py-4 text-center dark:border-indigo-800/40 dark:bg-slate-800/60"
          >
            <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{projectCount}+</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Réalisations
            </p>
          </motion.div>
          <motion.div
            variants={galleryFadeUp}
            className="rounded-2xl border border-indigo-200/60 bg-white/80 px-5 py-4 text-center dark:border-indigo-800/40 dark:bg-slate-800/60"
          >
            <p className="text-2xl font-extrabold text-brand-600 dark:text-brand-400">{categoryCount}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Catégories
            </p>
          </motion.div>
          <motion.div
            variants={galleryFadeUp}
            className="col-span-2 rounded-2xl border border-brand-200/60 bg-linear-to-r from-brand-50 to-indigo-50 px-5 py-4 text-center dark:border-brand-800/40 dark:from-brand-950/40 dark:to-indigo-950/40 sm:col-span-1"
          >
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Qualité garantie</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Montréal & environs</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
