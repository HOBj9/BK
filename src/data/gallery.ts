import {
  allProjectPhotos,
  galleryCategoriesData,
  homeCarouselImages,
} from './media';
import type { GalleryCategory } from '@/types';

export { homePage, photoGalleryPage } from './websiteContent';

export const galleryCategories: GalleryCategory[] = galleryCategoriesData.map((cat) => ({
  title: cat.title,
  images: [...cat.images],
}));

export const allGalleryImages = galleryCategories.flatMap((category) =>
  category.images.map((img) => ({
    ...img,
    category: category.title,
  })),
);

/** Home carousel & preview — 12 images (field photos + portfolio) */
export const homeGalleryPreview = homeCarouselImages;

/** All 8 standard portfolio shots */
export { allProjectPhotos };
