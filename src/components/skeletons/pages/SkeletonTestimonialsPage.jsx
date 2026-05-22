import { motion } from 'framer-motion';
import SkeletonBreadcrumb from '../SkeletonBreadcrumb';
import SkeletonPageHero from '../SkeletonPageHero';
import SkeletonTestimonialCard from '../SkeletonTestimonialCard';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { staggerContainer } from '@/constants/animations';

export default function SkeletonTestimonialsPage() {
  return (
    <>
      <SkeletonBreadcrumb />
      <SkeletonPageHero />
      <Section>
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="show"
            animate="show"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonTestimonialCard key={i} />
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
