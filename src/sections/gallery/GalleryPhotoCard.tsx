import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import { SkeletonGalleryItem } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import { galleryPhotoIn } from './gallery.animations';
import type { GalleryImage } from '@/types';

const CARD_STAGGER_MS = 70;

type GalleryPhotoCardProps = {
  img: GalleryImage;
  index: number;
  tall?: boolean;
};

export default function GalleryPhotoCard({ img, index, tall = false }: GalleryPhotoCardProps) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);

  if (pageLoading || cardLoading) {
    return <SkeletonGalleryItem />;
  }

  return (
    <motion.figure
      variants={galleryPhotoIn}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      className={`gallery-photo-hover gallery-frame group relative overflow-hidden rounded-2xl bg-slate-900 ${
        tall ? 'md:min-h-full' : ''
      }`}
    >
      <LazyImage
        src={img.image}
        alt={img.alt}
        className={`w-full object-cover ${tall ? 'min-h-[280px] md:h-full md:min-h-[360px]' : 'aspect-4/3'}`}
        wrapperClassName="w-full h-full"
        skeletonClassName={`w-full rounded-none ${tall ? 'min-h-[280px]' : 'aspect-4/3'}`}
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/95 via-slate-950/80 to-transparent px-5 py-5">
        <p className="text-sm font-semibold text-white">{img.alt}</p>
        <p className="mt-1 line-clamp-2 text-xs text-slate-300">{img.description}</p>
      </figcaption>
    </motion.figure>
  );
}
