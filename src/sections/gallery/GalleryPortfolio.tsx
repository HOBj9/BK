import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import type { GalleryCategory } from '@/types';
import GalleryPhotoCard from './GalleryPhotoCard';
import { galleryCategoryTitle, galleryStagger, galleryViewport } from './gallery.animations';

type GalleryPortfolioProps = {
  categories: GalleryCategory[];
};

function buildImageIndex(categories: GalleryCategory[]) {
  let offset = 0;
  return categories.map((category) => ({
    title: category.title,
    images: category.images.map((img) => {
      const entry = { img, index: offset };
      offset += 1;
      return entry;
    }),
  }));
}

export default function GalleryPortfolio({ categories }: GalleryPortfolioProps) {
  const groups = buildImageIndex(categories);

  return (
    <section className="pb-16 md:pb-24" aria-label="Galerie par catégorie">
      <Container className="space-y-16 md:space-y-24">
        {groups.map((group, groupIndex) => (
          <motion.article
            key={group.title}
            initial="hidden"
            whileInView="show"
            viewport={galleryViewport}
            variants={galleryStagger}
          >
            <motion.header variants={galleryCategoryTitle} className="mb-8 flex items-end gap-4 border-b border-slate-200/80 pb-4 dark:border-slate-700/60">
              <span className="font-mono text-4xl font-bold leading-none text-indigo-200 dark:text-indigo-900">
                {String(groupIndex + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                  Catégorie
                </p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                  {group.title}
                </h2>
              </div>
            </motion.header>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {group.images.map(({ img, index }, imgIndex) => (
                <GalleryPhotoCard
                  key={img.image}
                  img={img}
                  index={index}
                  tall={imgIndex === 0}
                />
              ))}
            </div>
          </motion.article>
        ))}
      </Container>
    </section>
  );
}
