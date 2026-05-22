import { homePage, photoGalleryPage } from './websiteContent';

export { photoGalleryPage as gallery, homePage };

export const galleryCategories = photoGalleryPage.sections;

export const allGalleryImages = photoGalleryPage.sections.flatMap((category) =>
  category.images.map((img) => ({
    ...img,
    category: category.title,
  })),
);

export const homeGalleryPreview = homePage.galleryImages;
