import { motion } from 'framer-motion';
import { BadgeDollarSign, KeyRound, Siren } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import LazyImage from '@/components/ui/LazyImage';
import type { ContentSection } from '@/types';
import {
  unlockPulseIn,
  unlockStagger,
  unlockTimelineItem,
  unlockViewport,
} from './unlock.animations';

const ICONS: LucideIcon[] = [Siren, KeyRound, BadgeDollarSign];

type UnlockTimelineProps = {
  sections: ContentSection[];
};

export default function UnlockTimeline({ sections }: UnlockTimelineProps) {
  return (
    <section className="py-16 md:py-24" aria-labelledby="unlock-timeline-title">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={unlockViewport}
          variants={unlockStagger}
          className="mb-12 md:mb-16"
        >
          <motion.p variants={unlockPulseIn} className="text-xs font-bold uppercase tracking-[0.28em] text-emergency-600 dark:text-emergency-400">
            Pourquoi BK Entretien
          </motion.p>
          <motion.h2
            id="unlock-timeline-title"
            variants={unlockTimelineItem}
            className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl"
          >
            Débouchage rapide, méthode sûre, tarifs clairs
          </motion.h2>
        </motion.div>

        <div className="relative max-w-3xl">
          <div
            className="absolute bottom-0 left-[1.65rem] top-4 w-0.5 bg-linear-to-b from-emergency-500 via-orange-500 to-emergency-300 md:left-8"
            aria-hidden
          />

          <motion.ol variants={unlockStagger} initial="hidden" whileInView="show" viewport={unlockViewport} className="space-y-10 md:space-y-12">
            {sections.map((section, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <motion.li key={section.title} variants={unlockTimelineItem} className="relative flex gap-6 md:gap-10">
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-emergency-600 to-orange-600 text-white shadow-lg shadow-emergency-600/30 md:h-16 md:w-16"
                    >
                      <span className="unlock-pulse-dot absolute inset-0 rounded-full bg-emergency-500/40" aria-hidden />
                      <Icon className="relative h-5 w-5 md:h-6 md:w-6" aria-hidden />
                    </motion.div>
                  </div>
                  <motion.article
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className="unlock-card-glow flex-1 overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-slate-700/60 dark:bg-slate-800/50"
                  >
                    {section.image && (
                      <div className="relative aspect-21/9 w-full overflow-hidden sm:aspect-22/10">
                        <LazyImage
                          src={section.image}
                          alt={section.title}
                          className="h-full w-full object-cover"
                          wrapperClassName="h-full w-full"
                          skeletonClassName="aspect-21/9 w-full rounded-none"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"
                          aria-hidden
                        />
                      </div>
                    )}
                    <div className="p-6 md:p-8">
                    <span className="font-mono text-sm font-bold text-emergency-500/80">
                      Étape {index + 1}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white md:text-2xl">
                      {section.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
                      {section.description}
                    </p>
                    </div>
                  </motion.article>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
