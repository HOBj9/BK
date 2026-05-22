import { motion } from 'framer-motion';
import { Droplets, Waves } from 'lucide-react';
import Container from '@/components/ui/Container';
import LazyBackground from '@/components/ui/LazyBackground';
import { drainDescFade, drainRippleIn, drainTitleSlide } from './drain.animations';

type DrainPageHeaderProps = {
  bannerImage?: string;
  bannerAlt?: string;
  title: string;
  description: string;
};

export default function DrainPageHeader({
  bannerImage,
  bannerAlt,
  title,
  description,
}: DrainPageHeaderProps) {
  return (
    <section className="relative isolate flex min-h-[min(52vh,480px)] items-center overflow-hidden border-b border-teal-200/40 dark:border-teal-900/40 sm:min-h-[min(48vh,520px)]">
      {/* Background layers */}
      <div className="absolute inset-0 z-0" aria-hidden>
        {bannerImage && (
          <LazyBackground
            src={bannerImage}
            alt={bannerAlt ?? title}
            className="absolute inset-0 h-full w-full opacity-25 saturate-[1.1] dark:opacity-20"
            eager
          />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-teal-950/92 via-brand-950/88 to-cyan-950/85" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(45,212,191,0.3) 0%, transparent 45%), radial-gradient(circle at 85% 30%, rgba(56,189,248,0.22) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Bottom wave — behind text, decorative only */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 z-1 h-16 w-full text-teal-400/25 sm:h-20"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          fill="currentColor"
          d="M0 48 Q300 8 600 48 T1200 48 L1200 80 L0 80 Z"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      <Container className="relative z-10 w-full py-12 sm:py-14 lg:py-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
          className="max-w-3xl pb-6 sm:pb-8"
        >
          <motion.div
            variants={drainRippleIn}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-teal-200"
          >
            <Droplets className="h-4 w-4" aria-hidden />
            Nettoyage professionnel
            <Waves className="h-4 w-4 opacity-70" aria-hidden />
          </motion.div>

          <motion.h1
            variants={drainTitleSlide}
            className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={drainDescFade}
            className="mt-5 max-w-2xl text-base leading-relaxed text-teal-100/95 sm:mt-6 sm:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
