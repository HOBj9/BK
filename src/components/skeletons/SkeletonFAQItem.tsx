import Skeleton from '@/components/ui/Skeleton';

export default function SkeletonFAQItem() {
  return (
    <div className="card-premium overflow-hidden rounded-2xl p-7">
      <div className="flex items-center justify-between gap-4">
        <Skeleton className="h-6 flex-1 max-w-md" />
        <Skeleton className="h-10 w-10 shrink-0 rounded-xl" />
      </div>
    </div>
  );
}
