import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import { contactFadeUp, contactViewport } from './contact.animations';

type ContactIntroStripProps = {
  text: string;
};

export default function ContactIntroStrip({ text }: ContactIntroStripProps) {
  return (
    <Container className="-mt-6 relative z-10 pb-8">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={contactViewport}
        variants={contactFadeUp}
        className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-brand-200/50 bg-white/90 px-6 py-4 text-center text-sm font-medium text-slate-700 shadow-md backdrop-blur-sm dark:border-brand-800/40 dark:bg-slate-900/90 dark:text-slate-300 sm:text-base"
      >
        <Zap className="h-5 w-5 shrink-0 text-brand-500" aria-hidden />
        {text}
      </motion.p>
    </Container>
  );
}
