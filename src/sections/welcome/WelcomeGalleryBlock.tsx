import { motion } from 'framer-motion';
import { Images } from 'lucide-react';
import { PageSection } from '@/components/pages';
import Button from '@/components/buttons/Button';
import { PremiumCarousel } from '@/components/carousel';
import { ROUTES } from '@/constants/routes';
import type { CarouselSlideData } from '@/components/carousel/carousel.types';
import {
  welcomeFadeUp,
  welcomeFadeUpTight,
  welcomeScaleIn,
  welcomeStagger,
  welcomeViewport,
} from './welcome.animations';

type WelcomeGalleryBlockProps = {
  slides: CarouselSlideData[];
};

export default function WelcomeGalleryBlock({ slides }: WelcomeGalleryBlockProps) {
  return (
    <PageSection variant="muted" reveal={false}>
      <motion.div
        variants={welcomeStagger}
        initial="hidden"
        whileInView="show"
        viewport={welcomeViewport}
      >
        <motion.header variants={welcomeFadeUp} className="mb-8 text-center md:mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700 dark:border-brand-700/40 dark:bg-slate-900/60 dark:text-brand-300">
            <Images className="h-3.5 w-3.5" aria-hidden />
            Galerie & réalisations
          </p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Nos interventions en images
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400 md:text-base">
            Parcourez nos projets de plomberie, débouchage et nettoyage — qualité professionnelle
            garantie.
          </p>
        </motion.header>

        <motion.div
          variants={welcomeScaleIn}
          className="overflow-hidden rounded-2xl bg-brand-950 p-3 shadow-2xl ring-1 ring-white/10 sm:rounded-3xl sm:p-5 md:p-8 lg:p-10"
        >
          <PremiumCarousel slides={slides} />
        </motion.div>

        <motion.div
          variants={welcomeStagger}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <motion.div variants={welcomeFadeUpTight} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button to={ROUTES.DRAIN_CLEANING} variant="primary" size="lg">
              Nettoyage des drains
            </Button>
          </motion.div>
          <motion.div variants={welcomeFadeUpTight} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button to={ROUTES.GALLERY} variant="outline" size="lg">
              Voir la galerie complète
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageSection>
  );
}
