import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Button from '@/components/buttons/Button';
import { ROUTES } from '@/constants/routes';
import { galleryFadeUp, galleryStagger, galleryViewport } from './gallery.animations';

export default function GalleryCtaBand() {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={galleryViewport}
          variants={galleryStagger}
          className="rounded-3xl border border-indigo-200/60 bg-linear-to-br from-indigo-50 via-white to-brand-50 p-8 text-center dark:border-indigo-800/40 dark:from-indigo-950/50 dark:via-slate-900/80 dark:to-brand-950/40 md:p-12"
        >
          <motion.h2 variants={galleryFadeUp} className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
            Un projet similaire pour votre domicile ?
          </motion.h2>
          <motion.p variants={galleryFadeUp} className="mx-auto mt-3 max-w-lg text-slate-600 dark:text-slate-300">
            Contactez BK Entretien pour un nettoyage de drains, un débouchage ou une intervention d&apos;urgence.
          </motion.p>
          <motion.div
            variants={galleryFadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button to={ROUTES.CONTACT} variant="primary" size="lg">
              Demander un devis
            </Button>
            <Link
              to={ROUTES.DRAIN_CLEANING}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-300"
            >
              Voir nos services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
