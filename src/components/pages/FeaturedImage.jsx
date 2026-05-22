import LazyImage from '@/components/ui/LazyImage';
import Skeleton from '@/components/ui/Skeleton';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';

export default function FeaturedImage({
  src,
  alt,
  caption,
  className = '',
  revealDelay = 0,
  eager = false,
}) {
  const { isLoading: pageLoading } = usePageLoading();
  const imageLoading = useCardReveal(pageLoading ? 0 : revealDelay);

  if (!src) return null;

  if (pageLoading || imageLoading) {
    return (
      <div className={['space-y-0', className].filter(Boolean).join(' ')}>
        <Skeleton className="aspect-video w-full rounded-2xl" />
        {caption && <Skeleton className="h-14 w-full rounded-none rounded-b-2xl" />}
      </div>
    );
  }

  return (
    <div
      className={['overflow-hidden rounded-2xl shadow-xl', className].filter(Boolean).join(' ')}
    >
      <LazyImage
        src={src}
        alt={alt ?? ''}
        eager={eager}
        className="h-auto w-full object-cover"
        wrapperClassName="w-full"
        skeletonClassName="aspect-video w-full rounded-none"
      />
      {caption && (
        <p className="bg-slate-100 px-6 py-4 text-center text-sm font-medium text-slate-700">
          {caption}
        </p>
      )}
    </div>
  );
}
