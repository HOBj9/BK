import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import LazyImage from '@/components/ui/LazyImage';
import { PageSection } from '@/components/pages';
import type { ContentSection } from '@/types';
import {
  welcomeCard,
  welcomeFadeUp,
  welcomeImageReveal,
  welcomeStagger,
  welcomeViewport,
} from './welcome.animations';

type WelcomeFeaturedProps = {
  section: ContentSection;
};

export default function WelcomeFeatured({ section }: WelcomeFeaturedProps) {
  return (
    <PageSection variant="default" className="pt-8" reveal={false}>
      <motion.div
        variants={welcomeStagger}
        initial="hidden"
        whileInView="show"
        viewport={welcomeViewport}
      >
        <motion.div variants={welcomeFadeUp} className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700 dark:border-brand-700/50 dark:bg-brand-950/50 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Expertise BK Entretien
            </p>
            <h2 className="mt-4 text-balance text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
              {section.title}
            </h2>
          </div>
          <motion.div
            variants={welcomeFadeUp}
            className="hidden h-px flex-1 origin-left bg-linear-to-r from-brand-400/80 to-transparent sm:ml-8 sm:block"
            aria-hidden
          />
        </motion.div>

        <motion.article
          variants={welcomeCard}
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-br from-white via-slate-50 to-brand-50/40 p-6 shadow-xl shadow-brand-900/5 ring-1 ring-brand-100/80 dark:border-slate-700/60 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-brand-950/40 dark:shadow-black/20 dark:ring-brand-800/30 md:p-10"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-400/15 blur-3xl transition-opacity group-hover:opacity-100 dark:bg-brand-500/10"
            aria-hidden
          />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <motion.p
              variants={welcomeFadeUp}
              className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl md:leading-relaxed"
            >
              {section.description}
            </motion.p>
            {section.image && (
              <motion.div
                variants={welcomeImageReveal}
                className="relative w-full max-w-md shrink-0 md:-mt-20"
              >
                <div className="absolute -inset-2 rounded-2xl bg-linear-to-br from-brand-400/20 to-accent-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <LazyImage
                  src={section.image}
                  alt={section.title}
                  className="relative w-full object-contain drop-shadow-2xl"
                  wrapperClassName="relative w-full"
                  skeletonClassName="h-48 w-full rounded-2xl"
                />
              </motion.div>
            )}
          </div>
        </motion.article>
      </motion.div>
    </PageSection>
  );
}
