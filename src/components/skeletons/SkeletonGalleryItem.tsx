import Skeleton from '@/components/ui/Skeleton';

export default function SkeletonGalleryItem() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <Skeleton className="aspect-4/3 w-full rounded-none" rounded="rounded-none" />
      <div className="space-y-2 p-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </figure>
  );
}
