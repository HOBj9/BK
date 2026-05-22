import SkeletonBreadcrumb from '../SkeletonBreadcrumb';
import SkeletonPageHero from '../SkeletonPageHero';
import Skeleton from '@/components/ui/Skeleton';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function SkeletonCityPage() {
  return (
    <>
      <SkeletonBreadcrumb />
      <SkeletonPageHero />
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-8 w-72" />
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-5 w-full max-w-md" />
              ))}
              <Skeleton className="mt-6 h-7 w-56" />
              <div className="grid gap-2 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-14 rounded-lg" />
                ))}
              </div>
            </div>
            <Skeleton className="h-96 w-full rounded-2xl" />
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-12 rounded-xl" />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
