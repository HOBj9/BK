import { motion } from 'framer-motion';
import SkeletonBreadcrumb from '../SkeletonBreadcrumb';
import SkeletonPageHero from '../SkeletonPageHero';
import SkeletonContentCard from '../SkeletonContentCard';
import Skeleton from '@/components/ui/Skeleton';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { staggerContainer } from '@/constants/animations';

export default function SkeletonContactPage() {
  return (
    <>
      <SkeletonBreadcrumb />
      <SkeletonPageHero />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-3">
              <Skeleton className="h-8 w-56" />
              <Skeleton className="h-4 w-full max-w-md" />
              <Skeleton className="mt-8 h-80 w-full rounded-2xl" />
            </div>
            <aside className="space-y-6 lg:col-span-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-28 w-full rounded-2xl" />
              ))}
            </aside>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="show"
            animate="show"
            className="mt-16 grid gap-6 sm:grid-cols-2"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonContentCard key={i} />
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
