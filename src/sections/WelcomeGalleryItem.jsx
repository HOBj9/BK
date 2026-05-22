import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import { SkeletonGalleryItem } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import { staggerItem } from '@/constants/animations';

const CARD_STAGGER_MS = 70;

export default function WelcomeGalleryItem({ item, index }) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);

  if (pageLoading || cardLoading) {
    return (
      <motion.div variants={staggerItem}>
        <SkeletonGalleryItem />
      </motion.div>
    );
  }

  return (
    <motion.figure variants={staggerItem}>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <LazyImage
          src={item.image}
          alt={item.alt}
          className="aspect-square w-full object-cover"
          wrapperClassName="w-full"
          skeletonClassName="aspect-square w-full rounded-none"
        />
      </div>
      <figcaption className="mt-2 text-xs text-slate-600 md:text-sm">{item.description}</figcaption>
    </motion.figure>
  );
}
