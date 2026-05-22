import { motion } from 'framer-motion';
import SkeletonBreadcrumb from '../SkeletonBreadcrumb';
import SkeletonPageHero from '../SkeletonPageHero';
import SkeletonContentCard from '../SkeletonContentCard';
import Skeleton from '@/components/ui/Skeleton';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { staggerContainer } from '@/constants/animations';

export default function SkeletonContentPage({ withIntro = true }) {
  return (
    <>
      <SkeletonBreadcrumb />
      <SkeletonPageHero />
      <Section>
        <Container>
          {withIntro && <Skeleton className="mx-auto h-6 w-full max-w-2xl" />}
          <Skeleton className={`${withIntro ? 'mt-12' : ''} aspect-video w-full rounded-2xl`} />
          <motion.div
            variants={staggerContainer}
            initial="show"
            animate="show"
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonContentCard key={i} />
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
