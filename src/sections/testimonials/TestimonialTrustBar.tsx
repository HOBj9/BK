import { motion } from 'framer-motion';
import { Star, ThumbsUp, Users } from 'lucide-react';
import Container from '@/components/ui/Container';
import { testimonialSoftIn, testimonialStagger, testimonialViewport } from './testimonial.animations';

type TestimonialTrustBarProps = {
  count: number;
  averageRating?: number;
};

export default function TestimonialTrustBar({ count, averageRating = 5 }: TestimonialTrustBarProps) {
  const items = [
    { icon: Star, value: `${averageRating.toFixed(1)}/5`, label: 'Note moyenne' },
    { icon: Users, value: `${count}+`, label: 'Avis clients' },
    { icon: ThumbsUp, value: '100%', label: 'Recommandent' },
  ];

  return (
    <Container className="-mt-8 relative z-10 pb-10 md:pb-14">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={testimonialViewport}
        variants={testimonialStagger}
        className="mx-auto grid max-w-4xl grid-cols-3 gap-3 rounded-2xl border border-amber-200/50 bg-white/90 p-4 shadow-lg backdrop-blur-md dark:border-amber-800/30 dark:bg-slate-900/90 sm:gap-6 sm:p-6"
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              variants={testimonialSoftIn}
              className="flex flex-col items-center text-center"
            >
              <Icon className="mb-2 h-5 w-5 text-amber-500" aria-hidden />
              <p className="text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">{item.value}</p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:text-xs">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
}
