import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { SkeletonTestimonialCard } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import type { Testimonial } from '@/types';
import type { Variants } from 'framer-motion';

const CARD_STAGGER_MS = 80;

type TestimonialReviewCardProps = {
  testimonial: Testimonial;
  index: number;
  variant: Variants;
};

export default function TestimonialReviewCard({
  testimonial,
  index,
  variant,
}: TestimonialReviewCardProps) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);

  if (pageLoading || cardLoading) {
    return <SkeletonTestimonialCard />;
  }

  return (
    <motion.article
      variants={variant}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      className="testimonial-card-warm flex h-full flex-col rounded-2xl border border-amber-100/80 p-6 dark:border-amber-900/30 md:p-7"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex gap-0.5" aria-label={`${testimonial.rating} sur 5`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400/90 text-amber-400" aria-hidden />
          ))}
        </div>
        <Quote className="h-8 w-8 shrink-0 text-amber-200/90 dark:text-amber-800/50" aria-hidden />
      </div>

      <blockquote className="flex-1 text-[15px] leading-[1.75] text-slate-600 dark:text-slate-300">
        {testimonial.text}
      </blockquote>

      <footer className="mt-6 flex items-center gap-3 border-t border-amber-100/80 pt-5 dark:border-amber-900/25">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
          {testimonial.name.charAt(0)}
        </div>
        <cite className="not-italic">
          <p className="font-semibold text-slate-800 dark:text-slate-100">{testimonial.name}</p>
          {testimonial.location && (
            <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.location}</p>
          )}
        </cite>
      </footer>
    </motion.article>
  );
}
