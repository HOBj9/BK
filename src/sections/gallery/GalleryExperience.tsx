import { photoGalleryPage } from '@/data/websiteContent';
import GalleryPageHeader from './GalleryPageHeader';
import GalleryFeatured from './GalleryFeatured';
import GalleryPortfolio from './GalleryPortfolio';
import GalleryCtaBand from './GalleryCtaBand';
import './gallery.css';

type GalleryPageData = typeof photoGalleryPage;

type GalleryExperienceProps = {
  page: GalleryPageData;
};

export default function GalleryExperience({ page }: GalleryExperienceProps) {
  const projectCount = page.sections.reduce((sum, s) => sum + s.images.length, 0);

  return (
    <div className="gallery-page-bg">
      <GalleryPageHeader
        bannerImage={page.bannerImage}
        bannerAlt={page.bannerImageAlt}
        title={page.title}
        description={page.description}
      />
      <GalleryFeatured
        src={page.mainImage}
        alt={page.mainImageAlt}
        caption={page.mainImageText}
        projectCount={projectCount}
        categoryCount={page.sections.length}
      />
      <GalleryPortfolio categories={page.sections} />
      <GalleryCtaBand />
    </div>
  );
}
