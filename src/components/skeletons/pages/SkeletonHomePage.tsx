import { motion } from 'framer-motion';
import SkeletonHero from '../SkeletonHero';
import SkeletonGalleryItem from '../SkeletonGalleryItem';
import Skeleton from '@/components/ui/Skeleton';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { staggerContainer } from '@/constants/animations';

export default function SkeletonHomePage() {
  return (
    <>
      <SkeletonHero />
      <Section className="pt-8">
        <Container>
          <Skeleton className="h-10 w-2/3 max-w-md" />
          <div className="mt-6 rounded-2xl bg-slate-100 p-8">
            <div className="flex flex-col gap-6 md:flex-row">
              <Skeleton className="h-24 flex-1" />
              <Skeleton className="h-48 w-full max-w-md rounded-xl" />
            </div>
          </div>
        </Container>
      </Section>
      <Section variant="muted">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="show"
            animate="show"
            className="space-y-6"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-6 rounded-2xl bg-slate-200/60 p-8 md:flex-row"
              >
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-10 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <Skeleton className="min-h-[180px] flex-1 rounded-xl" />
              </div>
            ))}
          </motion.div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Skeleton className="aspect-video w-full rounded-2xl" />
          <Skeleton className="mx-auto mt-10 h-6 w-80 max-w-full" />
        </Container>
      </Section>
      <Section variant="muted">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonGalleryItem key={i} />
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <Skeleton className="h-12 w-44 rounded-xl" />
            <Skeleton className="h-12 w-48 rounded-xl" />
          </div>
        </Container>
      </Section>
    </>
  );
}
