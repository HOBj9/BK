import { motion } from 'framer-motion';
import { Images } from 'lucide-react';
import Container from '@/components/ui/Container';
import MediaStrip from '@/components/shared/MediaStrip';
import { fieldPhotos, projectPhotos } from '@/data/media';
import { testimonialSoftIn, testimonialViewport } from './testimonial.animations';

const testimonialPhotos = [
  fieldPhotos[2],
  projectPhotos.emergency1,
  fieldPhotos[0],
  projectPhotos.bath1,
];

export default function TestimonialMediaStrip() {
  return (
    <section className="border-b border-amber-200/30 bg-amber-50/30 py-10 dark:border-amber-900/25 dark:bg-amber-950/15 md:py-14">
      <Container>
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={testimonialViewport}
          variants={testimonialSoftIn}
          className="mb-6 text-center md:mb-8"
        >
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            <Images className="h-4 w-4" aria-hidden />
            Réalisations
          </p>
          <h2 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
            La qualité que nos clients recommandent
          </h2>
        </motion.header>
        <MediaStrip images={testimonialPhotos} />
      </Container>
    </section>
  );
}
