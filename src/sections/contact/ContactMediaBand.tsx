import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import Container from '@/components/ui/Container';
import MediaStrip from '@/components/shared/MediaStrip';
import { trustStripImages } from '@/data/media';
import { contactFadeUp, contactViewport } from './contact.animations';

export default function ContactMediaBand() {
  return (
    <section className="border-y border-slate-200/70 bg-white/60 py-10 dark:border-slate-800 dark:bg-slate-900/40 md:py-14">
      <Container>
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={contactViewport}
          variants={contactFadeUp}
          className="mb-6 md:mb-8"
        >
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            <Camera className="h-4 w-4" aria-hidden />
            Sur le terrain
          </p>
          <h2 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
            Nos techniciens en action
          </h2>
        </motion.header>
        <MediaStrip images={trustStripImages.slice(0, 5)} variant="compact" />
      </Container>
    </section>
  );
}
