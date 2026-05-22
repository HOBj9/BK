import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import type { Testimonial } from '@/types';
import TestimonialReviewCard from './TestimonialReviewCard';
import {
  testimonialCardLeft,
  testimonialCardRight,
  testimonialSoftIn,
  testimonialStagger,
  testimonialViewport,
} from './testimonial.animations';

type TestimonialGridProps = {
  testimonials: Testimonial[];
};

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  if (testimonials.length === 0) return null;

  return (
    <section className="pb-16 md:pb-20" aria-label="Tous les témoignages">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={testimonialViewport}
          variants={testimonialSoftIn}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-800 dark:text-white sm:text-3xl">
            Plus de retours clients
          </h2>
          <p className="mx-auto mt-2 max-w-md text-slate-600 dark:text-slate-400">
            Des particuliers de Montréal qui nous font confiance au quotidien.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={testimonialViewport}
          variants={testimonialStagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, index) => (
            <TestimonialReviewCard
              key={`${t.name}-${index}`}
              testimonial={t}
              index={index + 1}
              variant={index % 2 === 0 ? testimonialCardLeft : testimonialCardRight}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
