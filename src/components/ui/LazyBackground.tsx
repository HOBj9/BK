import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Skeleton from '@/components/ui/Skeleton';
import { useInView } from '@/hooks/useInView';
import { easePremium } from '@/constants/animations';

type LazyBackgroundProps = {
  src: string;
  alt?: string;
  className?: string;
  eager?: boolean;
};

/** Lazy-loads a CSS background-image when the element enters the viewport. */
export default function LazyBackground({
  src,
  alt = '',
  className = '',
  eager = false,
}: LazyBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { enabled: !eager });
  const shouldLoad = eager || inView;
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full rounded-none" aria-hidden />}
      {shouldLoad && (
        <motion.div
          role="img"
          aria-label={alt}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: loaded ? `url("${src}")` : undefined }}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.45, ease: easePremium }}
        >
          <img
            src={src}
            alt=""
            className="hidden"
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setLoaded(true)}
            aria-hidden
          />
        </motion.div>
      )}
    </div>
  );
}
