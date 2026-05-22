import LazyImage from '@/components/ui/LazyImage';
import SectionHeading from '@/components/shared/SectionHeading';
import { SkeletonGalleryItem } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';

const CARD_STAGGER_MS = 80;

function GalleryImage({ img, index }) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);

  if (pageLoading || cardLoading) {
    return <SkeletonGalleryItem />;
  }

  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <LazyImage
        src={img.image}
        alt={img.alt}
        className="aspect-4/3 w-full object-cover"
        wrapperClassName="w-full"
        skeletonClassName="aspect-4/3 w-full rounded-none"
      />
      <figcaption className="p-4 text-sm text-slate-600">{img.description}</figcaption>
    </figure>
  );
}

function buildGalleryGroups(categories) {
  let offset = 0;
  return categories.map((category) => {
    const group = {
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

export default function GalleryCategories({ categories }) {
  const groups = buildGalleryGroups(categories);

  return (
    <>
      {groups.map((group) => (
        <div key={group.title}>
          <SectionHeading title={group.title} align="left" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {group.images.map(({ img, index }) => (
              <GalleryImage key={img.image} img={img} index={index} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
