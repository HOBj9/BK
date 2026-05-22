import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { SkeletonTestimonialCard } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import { staggerItem } from '../../constants/animations';

const CARD_STAGGER_MS = 90;

export default function TestimonialCard({ testimonial, index = 0 }) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);

  if (pageLoading || cardLoading) {
    return <SkeletonTestimonialCard />;
  }

  return (
    <motion.div variants={staggerItem} className="h-full">
      <Card hover={false} className="relative flex h-full flex-col" padding="lg">
        <Quote
          className="absolute right-6 top-6 h-10 w-10 text-brand-100"
          aria-hidden
        />
        <div className="mb-5 flex gap-1" aria-label={`${testimonial.rating} sur 5`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-sm"
              aria-hidden
            />
          ))}
        </div>
        <blockquote className="flex-1 leading-[1.7] text-slate-700 dark:text-slate-300">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>
        <footer className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-700">
          <cite className="not-italic">
            <p className="font-bold text-slate-900 dark:text-slate-100">{testimonial.name}</p>
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{testimonial.location}</p>
          </cite>
        </footer>
      </Card>
    </motion.div>
  );
}
