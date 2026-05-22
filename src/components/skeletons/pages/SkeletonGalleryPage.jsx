import SkeletonBreadcrumb from '../SkeletonBreadcrumb';
import SkeletonPageHero from '../SkeletonPageHero';
import SkeletonGalleryItem from '../SkeletonGalleryItem';
import Skeleton from '@/components/ui/Skeleton';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function SkeletonGalleryPage() {
  return (
    <>
      <SkeletonBreadcrumb />
      <SkeletonPageHero />
      <Section>
        <Container className="space-y-16">
          {Array.from({ length: 4 }).map((_, cat) => (
            <div key={cat}>
              <Skeleton className="h-8 w-48" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <SkeletonGalleryItem key={i} />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
