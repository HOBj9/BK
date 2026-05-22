import Skeleton from '@/components/ui/Skeleton';
import Container from '@/components/ui/Container';

export default function SkeletonPageHero() {
  return (
    <section className="relative overflow-hidden bg-page-hero py-20 sm:py-24 lg:py-28">
      <Container className="relative max-w-3xl space-y-5">
        <Skeleton className="h-12 w-4/5 max-w-lg" />
        <Skeleton className="h-6 w-full max-w-xl" />
        <Skeleton className="h-6 w-3/4 max-w-md" />
        <div className="flex gap-4 pt-4">
          <Skeleton className="h-12 w-40 rounded-xl" />
          <Skeleton className="h-12 w-36 rounded-xl" />
        </div>
      </Container>
    </section>
  );
}
