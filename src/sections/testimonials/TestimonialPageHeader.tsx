import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import LazyBackground from '@/components/ui/LazyBackground';
import { testimonialSoftIn, testimonialSpotlightIn, testimonialStagger } from './testimonial.animations';

type TestimonialPageHeaderProps = {
  bannerImage?: string;
  bannerAlt?: string;
  title: string;
  description: string;
};

export default function TestimonialPageHeader({
  bannerImage,
  bannerAlt,
  title,
  description,
}: TestimonialPageHeaderProps) {
  return (
    <section className="relative isolate flex min-h-[min(44vh,400px)] items-center overflow-hidden border-b border-amber-200/30 dark:border-amber-900/25">
      <div className="absolute inset-0 z-0" aria-hidden>
        {bannerImage && (
          <LazyBackground
            src={bannerImage}
            alt={bannerAlt ?? title}
            className="absolute inset-0 h-full w-full opacity-25 dark:opacity-15"
            eager
          />
        )}
        <div className="absolute inset-0 bg-linear-to-b from-amber-950/90 via-slate-900/92 to-slate-950/95" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 30%, rgba(251,191,36,0.18) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(56,189,248,0.08) 0%, transparent 40%)',
          }}
        />
      </div>

      <Container className="relative z-10 w-full py-12 sm:py-14">
        <motion.div
          initial="hidden"
          animate="show"
          variants={testimonialStagger}
          className="mx-auto max-w-2xl pb-4 text-center"
        >
          <motion.div
            variants={testimonialSoftIn}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-100"
          >
            <Heart className="h-3.5 w-3.5 fill-amber-400/80 text-amber-400" aria-hidden />
            Confiance client
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden />
          </motion.div>

          <motion.h1
            variants={testimonialSpotlightIn}
            className="text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl"
          >
            {title}
          </motion.h1>

          <motion.p variants={testimonialSoftIn} className="mt-5 text-base leading-relaxed text-amber-50/85 sm:text-lg">
            {description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
