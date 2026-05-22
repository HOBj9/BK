import { motion } from 'framer-motion';
import { Gauge } from 'lucide-react';
import Container from '@/components/ui/Container';
import { drainIntroSplit, drainRippleIn, drainViewport } from './drain.animations';

type DrainIntroBandProps = {
  text: string;
};

export default function DrainIntroBand({ text }: DrainIntroBandProps) {
  return (
    <Container className="relative py-14 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={drainViewport}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
        }}
        className="relative overflow-hidden rounded-2xl border border-teal-200/60 bg-linear-to-br from-teal-50/80 via-white to-cyan-50/50 p-8 shadow-lg shadow-teal-900/5 dark:border-teal-800/40 dark:from-teal-950/30 dark:via-slate-900/50 dark:to-brand-950/30 dark:shadow-black/20 md:p-12"
      >
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-400/15 blur-3xl" aria-hidden />
        <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" aria-hidden />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <motion.div variants={drainRippleIn} className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-600/30">
            <Gauge className="h-8 w-8" aria-hidden />
          </motion.div>
          <motion.p
            variants={drainIntroSplit}
            className="text-lg font-medium leading-[1.75] text-slate-700 dark:text-slate-200 md:text-xl md:leading-relaxed"
          >
            {text}
          </motion.p>
        </div>

        <motion.div
          variants={drainIntroSplit}
          className="mt-8 h-1 overflow-hidden rounded-full bg-teal-100 dark:bg-teal-900/50"
          aria-hidden
        >
          <motion.div
            className="h-full w-full origin-left bg-linear-to-r from-teal-500 via-cyan-400 to-brand-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={drainViewport}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </Container>
  );
}
