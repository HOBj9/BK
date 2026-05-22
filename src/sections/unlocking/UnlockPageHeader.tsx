import { motion } from 'framer-motion';
import { Siren, Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import LazyBackground from '@/components/ui/LazyBackground';
import { unlockDescFade, unlockPulseIn, unlockStagger, unlockTitleDrop } from './unlock.animations';

type UnlockPageHeaderProps = {
  bannerImage?: string;
  bannerAlt?: string;
  title: string;
  description: string;
};

export default function UnlockPageHeader({
  bannerImage,
  bannerAlt,
  title,
  description,
}: UnlockPageHeaderProps) {
  return (
    <section className="relative isolate flex min-h-[min(52vh,480px)] items-center overflow-hidden border-b border-emergency-500/20">
      <div className="absolute inset-0 z-0" aria-hidden>
        {bannerImage && (
          <LazyBackground
            src={bannerImage}
            alt={bannerAlt ?? title}
            className="absolute inset-0 h-full w-full opacity-20 saturate-[1.05] dark:opacity-15"
            eager
          />
        )}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-brand-950/95 to-emergency-950/90" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 75% 25%, rgba(239,68,68,0.35) 0%, transparent 42%), radial-gradient(circle at 15% 70%, rgba(249,115,22,0.2) 0%, transparent 40%)',
          }}
        />
        <div className="pattern-grid absolute inset-0 opacity-30" />
      </div>

      {/* Angular bottom edge — not wave (distinct from drain page) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-1 h-12 bg-linear-to-t from-slate-100 to-transparent dark:from-slate-950"
        aria-hidden
      />

      <Container className="relative z-10 w-full py-12 sm:py-14 lg:py-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={unlockStagger}
          className="max-w-3xl pb-6 sm:pb-8"
        >
          <motion.div
            variants={unlockPulseIn}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emergency-400/50 bg-emergency-600/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-emergency-100 shadow-lg shadow-emergency-600/20"
          >
            <Siren className="h-4 w-4 animate-pulse" aria-hidden />
            Débouchage d&apos;urgence
            <Zap className="h-4 w-4" aria-hidden />
          </motion.div>

          <motion.h1
            variants={unlockTitleDrop}
            className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h1>

          <motion.p variants={unlockDescFade} className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:mt-6 sm:text-lg">
            {description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
