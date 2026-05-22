import SkeletonBreadcrumb from '../SkeletonBreadcrumb';
import SkeletonPageHero from '../SkeletonPageHero';
import Skeleton from '@/components/ui/Skeleton';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function SkeletonServiceDetailPage() {
  return (
    <>
      <SkeletonBreadcrumb />
      <SkeletonPageHero />
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <article className="space-y-4 lg:col-span-2">
              <Skeleton className="h-14 w-14 rounded-2xl" />
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="mt-6 h-7 w-48" />
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-5 w-full max-w-lg" />
              ))}
            </article>
            <Skeleton className="h-80 w-full rounded-2xl lg:sticky lg:top-24" />
          </div>
        </Container>
      </Section>
      <Skeleton className="mx-auto h-32 w-full max-w-6xl rounded-2xl" />
    </>
  );
}
