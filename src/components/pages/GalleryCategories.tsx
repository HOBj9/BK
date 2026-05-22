import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import StaggerReveal from '@/components/ui/StaggerReveal';
import SectionHeading from '@/components/shared/SectionHeading';
import { staggerItem } from '@/constants/animations';
import { SkeletonGalleryItem } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import type { GalleryCategory, GalleryImage } from '@/types';

const CARD_STAGGER_MS = 80;

type GalleryImageProps = {
  img: GalleryImage;
  index: number;
};

function GalleryImageCard({ img, index }: GalleryImageProps) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);

  if (pageLoading || cardLoading) {
    return <SkeletonGalleryItem />;
  }

  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800/90">
      <LazyImage
        src={img.image}
        alt={img.alt}
        className="aspect-4/3 w-full object-cover"
        wrapperClassName="w-full"
        skeletonClassName="aspect-4/3 w-full rounded-none"
      />
      <figcaption className="p-4 text-sm text-slate-600 dark:text-slate-300">{img.description}</figcaption>
    </figure>
  );
}

type GalleryGroup = {
  title: string;
  images: { img: GalleryImage; index: number }[];
};

function buildGalleryGroups(categories: GalleryCategory[]): GalleryGroup[] {
  let offset = 0;
  return categories.map((category) => {
    const group: GalleryGroup = {
      title: category.title,
      images: category.images.map((img) => {
        const entry = { img, index: offset };
        offset += 1;
        return entry;
      }),
    };
    return group;
  });
}

type GalleryCategoriesProps = {
  categories: GalleryCategory[];
};

export default function GalleryCategories({ categories }: GalleryCategoriesProps) {
  const groups = buildGalleryGroups(categories);

  return (
    <>
      {groups.map((group) => (
        <div key={group.title}>
          <SectionHeading title={group.title} align="left" />
          <StaggerReveal className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {group.images.map(({ img, index }) => (
              <motion.div key={img.image} variants={staggerItem}>
                <GalleryImageCard img={img} index={index} />
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      ))}
    </>
  );
}
