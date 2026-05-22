import { homePage } from '@/data/websiteContent';
import { carouselSlides } from '@/data/carouselSlides';
import WelcomeFeatured from './welcome/WelcomeFeatured';
import WelcomeServiceBlocks from './welcome/WelcomeServiceBlocks';
import WelcomeSpotlight from './welcome/WelcomeSpotlight';
import WelcomeGalleryBlock from './welcome/WelcomeGalleryBlock';

export default function WelcomeContent() {
  const [featured, ...rest] = homePage.sections;

  return (
    <>
      {featured && <WelcomeFeatured section={featured} />}
      {rest.length > 0 && <WelcomeServiceBlocks sections={rest} />}
      <WelcomeSpotlight
        imageSrc={homePage.mainImage}
        imageAlt={homePage.mainImageAlt}
        subtitle={homePage.heroSubtitle}
      />
      <WelcomeGalleryBlock slides={carouselSlides} />
    </>
  );
}
