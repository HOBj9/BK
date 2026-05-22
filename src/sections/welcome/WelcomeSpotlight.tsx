import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import { PageSection } from '@/components/pages';
import {
  welcomeFadeUp,
  welcomeScaleIn,
  welcomeStagger,
  welcomeViewport,
} from './welcome.animations';

type WelcomeSpotlightProps = {
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
};

export default function WelcomeSpotlight({ imageSrc, imageAlt, subtitle }: WelcomeSpotlightProps) {
  return (
    <PageSection variant="default" reveal={false}>
      <motion.div
        variants={welcomeStagger}
        initial="hidden"
        whileInView="show"
        viewport={welcomeViewport}
        className="relative"
      >
        <motion.div
          variants={welcomeScaleIn}
          className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/15 ring-1 ring-slate-200/80 dark:shadow-black/30 dark:ring-slate-700/60"
        >
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-brand-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl bg-linear-to-br from-brand-400/30 via-transparent to-accent-400/20 opacity-60"
            aria-hidden
          />
          <LazyImage
            src={imageSrc}
            alt={imageAlt}
            eager={false}
            className="relative z-0 h-auto w-full scale-100 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            wrapperClassName="w-full"
            skeletonClassName="aspect-video w-full rounded-none"
          />
        </motion.div>

        <motion.p
          variants={welcomeFadeUp}
          className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold leading-relaxed text-slate-800 dark:text-slate-200 md:text-xl"
        >
          <span className="bg-linear-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent dark:from-brand-300 dark:to-brand-400">
            {subtitle}
          </span>
        </motion.p>
      </motion.div>
    </PageSection>
  );
}
