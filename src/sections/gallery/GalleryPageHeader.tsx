import { motion } from 'framer-motion';
import { Camera, Grid3x3 } from 'lucide-react';
import Container from '@/components/ui/Container';
import LazyBackground from '@/components/ui/LazyBackground';
import { galleryCurtain, galleryFadeUp, galleryStagger } from './gallery.animations';

type GalleryPageHeaderProps = {
  bannerImage?: string;
  bannerAlt?: string;
  title: string;
  description: string;
};

export default function GalleryPageHeader({
  bannerImage,
  bannerAlt,
  title,
  description,
}: GalleryPageHeaderProps) {
  return (
    <section className="relative isolate flex min-h-[min(48vh,440px)] items-center overflow-hidden border-b border-indigo-200/30 dark:border-indigo-900/40">
      <div className="absolute inset-0 z-0" aria-hidden>
        {bannerImage && (
          <LazyBackground
            src={bannerImage}
            alt={bannerAlt ?? title}
            className="absolute inset-0 h-full w-full opacity-30 dark:opacity-20"
            eager
          />
        )}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-indigo-950/95 to-brand-950/90" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 40%, rgba(129,140,248,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(56,189,248,0.15) 0%, transparent 45%)',
          }}
        />
      </div>

      <Container className="relative z-10 w-full py-12 sm:py-14 lg:py-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={galleryStagger}
          className="mx-auto max-w-3xl pb-6 text-center sm:pb-8"
        >
          <motion.div
            variants={galleryFadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-indigo-200"
          >
            <Camera className="h-4 w-4" aria-hidden />
            Portfolio BK Entretien
            <Grid3x3 className="h-4 w-4 opacity-70" aria-hidden />
          </motion.div>

          <motion.h1
            variants={galleryCurtain}
            className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={galleryFadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-indigo-100/90 sm:mt-6 sm:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-1 h-px bg-linear-to-r from-transparent via-indigo-400/50 to-transparent" aria-hidden />
    </section>
  );
}
