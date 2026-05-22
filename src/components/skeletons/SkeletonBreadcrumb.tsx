import Skeleton from '@/components/ui/Skeleton';
import Container from '@/components/ui/Container';

export default function SkeletonBreadcrumb() {
  return (
    <Container className="py-4">
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-3" rounded="rounded-full" />
        <Skeleton className="h-4 w-28" />
      </div>
    </Container>
  );
}
