import { drainCleaningPage } from '@/data/websiteContent';

type DrainCleaningPageData = typeof drainCleaningPage;
import DrainPageHeader from './DrainPageHeader';
import DrainIntroBand from './DrainIntroBand';
import DrainShowcase from './DrainShowcase';
import DrainPipeline from './DrainPipeline';
import DrainCtaBand from './DrainCtaBand';
import './drain.css';

type DrainCleaningExperienceProps = {
  page: DrainCleaningPageData;
};

export default function DrainCleaningExperience({ page }: DrainCleaningExperienceProps) {
  return (
    <div className="drain-page-bg">
      <div className="drain-wave-divider" aria-hidden />
      <DrainPageHeader
        bannerImage={page.bannerImage}
        bannerAlt={page.bannerImageAlt}
        title={page.title}
        description={page.firstDescription}
      />
      <DrainIntroBand text={page.secondDescription} />
      <DrainShowcase
        src={page.mainImage}
        alt={page.mainImageAlt}
        caption={page.mainImageText}
      />
      <DrainPipeline sections={page.sections} />
      <DrainCtaBand />
    </div>
  );
}
