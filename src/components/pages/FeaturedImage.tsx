import LazyImage from '@/components/ui/LazyImage';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Skeleton from '@/components/ui/Skeleton';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';

type FeaturedImageProps = {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
  revealDelay?: number;
  eager?: boolean;
};

export default function FeaturedImage({
  src,
  alt,
  caption,
  className = '',
  revealDelay = 0,
  eager = false,
}: FeaturedImageProps) {
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
    <ScrollReveal variant="scaleUp" delay={revealDelay / 1000} className={className}>
    <div
      className="overflow-hidden rounded-2xl shadow-xl"
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
        <p className="bg-slate-100 px-6 py-4 text-center text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {caption}
        </p>
      )}
    </div>
    </ScrollReveal>
  );
}
