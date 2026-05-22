import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import type { Testimonial } from '@/types';
import { testimonialSpotlightIn, testimonialStarPop, testimonialStagger, testimonialViewport } from './testimonial.animations';

type TestimonialSpotlightProps = {
  testimonial: Testimonial;
};

export default function TestimonialSpotlight({ testimonial }: TestimonialSpotlightProps) {
  return (
    <Container className="pb-12 md:pb-16">
      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={testimonialViewport}
        variants={testimonialSpotlightIn}
        className="testimonial-spotlight testimonial-card-warm relative overflow-hidden rounded-3xl border-l-[6px] border-amber-400 p-8 md:p-12"
      >
        <span className="testimonial-quote-mark pointer-events-none absolute right-8 top-6 text-8xl text-amber-200/80 dark:text-amber-900/40" aria-hidden>
          &ldquo;
        </span>

        <motion.div
          variants={testimonialStagger}
          initial="hidden"
          whileInView="show"
          viewport={testimonialViewport}
          className="relative flex gap-1"
          aria-label={`${testimonial.rating} sur 5 étoiles`}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.span key={i} variants={testimonialStarPop}>
              <Star className="h-6 w-6 fill-amber-400 text-amber-400" aria-hidden />
            </motion.span>
          ))}
        </motion.div>

        <blockquote className="relative mt-6 max-w-3xl text-xl font-medium leading-[1.65] text-slate-700 dark:text-slate-200 md:text-2xl md:leading-relaxed">
          {testimonial.text}
        </blockquote>

        <footer className="relative mt-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-amber-600 text-lg font-bold text-white shadow-md">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <cite className="not-italic">
              <p className="text-lg font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
              {testimonial.location && (
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.location}</p>
              )}
            </cite>
          </div>
        </footer>
      </motion.article>
    </Container>
  );
}
