import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Skeleton from '@/components/ui/Skeleton';
import { useInView } from '@/hooks/useInView';
import { easePremium } from '@/constants/animations';

type LazyImageProps = {
  src: string;
  alt?: string;
  className?: string;
  wrapperClassName?: string;
  skeletonClassName?: string;
  eager?: boolean;
  showSkeleton?: boolean;
};

/**
 * Lazy-loads images via Intersection Observer + native loading="lazy".
 */
export default function LazyImage({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  skeletonClassName = 'absolute inset-0 h-full w-full rounded-none',
  eager = false,
  showSkeleton = true,
}: LazyImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { enabled: !eager });
  const shouldLoad = eager || inView;
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div ref={containerRef} className={`relative ${wrapperClassName}`}>
      {showSkeleton && shouldLoad && !loaded && !failed && (
        <Skeleton className={skeletonClassName} aria-hidden />
      )}
      {!shouldLoad && showSkeleton && (
        <Skeleton className={skeletonClassName} aria-hidden />
      )}

      {shouldLoad && !failed && (
        <motion.img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.45, ease: easePremium }}
          className={className}
        />
      )}

      {failed && (
        <div
          className={`flex items-center justify-center bg-slate-100 text-slate-400 ${className}`}
          role="img"
          aria-label={alt || 'Image non disponible'}
        >
          <span className="text-xs">Image indisponible</span>
        </div>
      )}
    </div>
  );
}
