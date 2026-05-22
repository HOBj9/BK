import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import { unlockPulseIn, unlockStagger, unlockTimelineItem, unlockViewport } from './unlock.animations';

type UnlockHighlightBandProps = {
  highlight: string;
  subtext?: string;
};

export default function UnlockHighlightBand({ highlight, subtext }: UnlockHighlightBandProps) {
  return (
    <Container className="relative -mt-6 py-10 md:py-14">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={unlockViewport}
        variants={unlockStagger}
        className="unlock-card-glow relative overflow-hidden rounded-2xl border border-emergency-200/60 bg-white p-8 dark:border-emergency-900/40 dark:bg-slate-900/80 md:p-10"
      >
        <div className="absolute right-0 top-0 h-32 w-32 bg-linear-to-bl from-emergency-500/15 to-transparent" aria-hidden />
        <div className="unlock-scan-line pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emergency-400/60 to-transparent" aria-hidden />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <motion.div
            variants={unlockPulseIn}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-emergency-600 to-orange-600 text-white shadow-xl shadow-emergency-600/35"
          >
            <Clock className="h-8 w-8" aria-hidden />
          </motion.div>
          <div>
            <motion.p
              variants={unlockTimelineItem}
              className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-2xl"
            >
              {highlight}
            </motion.p>
            {subtext && (
              <motion.p
                variants={unlockTimelineItem}
                className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300"
              >
                {subtext}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
