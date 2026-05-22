import { motion } from 'framer-motion';
import { AlertTriangle, Droplets, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import LazyImage from '@/components/ui/LazyImage';
import type { ContentSection } from '@/types';
import {
  drainRippleIn,
  drainStepReveal,
  drainStaggerSteps,
  drainViewport,
} from './drain.animations';

const STEP_ICONS: LucideIcon[] = [Droplets, AlertTriangle, ShieldCheck];

const STEP_ACCENTS = [
  'from-teal-500 to-cyan-600',
  'from-cyan-500 to-brand-600',
  'from-brand-500 to-teal-600',
];

type DrainPipelineProps = {
  sections: ContentSection[];
};

export default function DrainPipeline({ sections }: DrainPipelineProps) {
  return (
    <section className="relative py-16 md:py-24" aria-labelledby="drain-pipeline-title">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={drainViewport}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
          }}
          className="mb-12 text-center md:mb-16"
        >
          <motion.p variants={drainRippleIn} className="text-xs font-bold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Notre méthode
          </motion.p>
          <motion.h2
            id="drain-pipeline-title"
            variants={drainStepReveal}
            className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl"
          >
            Un parcours clair vers des drains impeccables
          </motion.h2>
        </motion.div>

        <div className="relative hidden lg:block">
          <svg
            className="absolute top-18 left-[16.66%] right-[16.66%] h-2 w-[66.66%] overflow-visible"
            viewBox="0 0 800 8"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.line
              x1="0"
              y1="4"
              x2="800"
              y2="4"
              stroke="url(#drainPipeGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={drainViewport}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <defs>
              <linearGradient id="drainPipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.ol
          variants={drainStaggerSteps}
          initial="hidden"
          whileInView="show"
          viewport={drainViewport}
          className="grid gap-8 lg:grid-cols-3 lg:gap-6"
        >
          {sections.map((section, index) => {
            const Icon = STEP_ICONS[index % STEP_ICONS.length];
            const accent = STEP_ACCENTS[index % STEP_ACCENTS.length];

            return (
              <motion.li
                key={section.title}
                variants={drainStepReveal}
                className="drain-step-card drain-pipeline-glow relative flex flex-col overflow-hidden rounded-3xl border border-teal-100/80 dark:border-teal-900/50"
              >
                {section.image && (
                  <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden">
                    <LazyImage
                      src={section.image}
                      alt={section.title}
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                      skeletonClassName="aspect-16/10 w-full rounded-none"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-teal-950/50 to-transparent"
                      aria-hidden
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${accent} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" aria-hidden />
                  </motion.div>
                  <span className="font-mono text-3xl font-bold text-teal-200/80 dark:text-teal-800">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                  {section.description}
                </p>
                {index < sections.length - 1 && (
                  <div className="mt-6 h-px bg-linear-to-r from-teal-300/50 to-transparent lg:hidden" aria-hidden />
                )}
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </Container>
    </section>
  );
}
