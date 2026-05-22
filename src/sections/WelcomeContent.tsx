import { homePage } from '@/data/websiteContent';
import { carouselSlides } from '@/data/carouselSlides';
import WelcomeServiceBlocks from './welcome/WelcomeServiceBlocks';
import WelcomeSpotlight from './welcome/WelcomeSpotlight';
import WelcomeGalleryBlock from './welcome/WelcomeGalleryBlock';

export default function WelcomeContent() {
  return (
    <>
      <WelcomeServiceBlocks sections={homePage.sections} />
      <WelcomeSpotlight
        imageSrc={homePage.mainImage}
        imageAlt={homePage.mainImageAlt}
        subtitle={homePage.heroSubtitle}
      />
      <WelcomeGalleryBlock slides={carouselSlides} />
    </>
  );
}
