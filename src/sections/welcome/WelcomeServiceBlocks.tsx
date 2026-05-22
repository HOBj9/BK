import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LazyBackground from '@/components/ui/LazyBackground';
import { PageSection } from '@/components/pages';
import type { ContentSection } from '@/types';
import {
  welcomeCard,
  welcomeFadeUpTight,
  welcomeImageReveal,
  welcomeImageRevealLeft,
  welcomeStagger,
  welcomeViewport,
} from './welcome.animations';

type WelcomeServiceBlocksProps = {
  sections: ContentSection[];
};

export default function WelcomeServiceBlocks({ sections }: WelcomeServiceBlocksProps) {
  return (
    <PageSection variant="muted" reveal={false}>
      <motion.div
        variants={welcomeStagger}
        initial="hidden"
        whileInView="show"
        viewport={welcomeViewport}
        className="space-y-8 md:space-y-10"
      >
        {sections.map((section, index) => {
          const reversed = index % 2 === 1;
          const imageVariants = reversed ? welcomeImageRevealLeft : welcomeImageReveal;

          return (
            <motion.article
              key={section.title}
              variants={welcomeCard}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/40 dark:shadow-black/25 md:p-10"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${
                  index % 2 === 0
                    ? 'from-brand-500 via-brand-400 to-transparent'
                    : 'from-accent-500 via-brand-400 to-transparent'
                } opacity-80`}
                aria-hidden
              />

              <div
                className={`relative flex flex-col gap-8 ${
                  reversed ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:items-center`}
              >
                <motion.div variants={welcomeFadeUpTight} className="md:w-1/2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                    {section.description}
                  </p>
                  <motion.span
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-brand-400"
                    initial={false}
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </motion.span>
                </motion.div>

                {section.image && (
                  <motion.div variants={imageVariants} className="relative min-h-[200px] flex-1 md:min-h-[240px]">
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <LazyBackground
                      src={section.image}
                      alt={section.title}
                      className="relative min-h-[200px] flex-1 rounded-2xl shadow-inner ring-1 ring-slate-200/50 transition-transform duration-500 group-hover:scale-[1.02] md:min-h-[240px] dark:ring-white/10"
                    />
                  </motion.div>
                )}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </PageSection>
  );
}
