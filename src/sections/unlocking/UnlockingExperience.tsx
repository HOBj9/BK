import { unlockingPage } from '@/data/websiteContent';
import UnlockPageHeader from './UnlockPageHeader';
import UnlockHighlightBand from './UnlockHighlightBand';
import UnlockShowcase from './UnlockShowcase';
import UnlockTimeline from './UnlockTimeline';
import UnlockCtaBand from './UnlockCtaBand';
import './unlock.css';

type UnlockingPageData = typeof unlockingPage;

type UnlockingExperienceProps = {
  page: UnlockingPageData;
};

export default function UnlockingExperience({ page }: UnlockingExperienceProps) {
  const introDescription = page.sections[0]?.description ?? '';
  const highlightSubtext = page.sections[1]?.description;

  return (
    <div className="unlock-page-bg">
      <div className="unlock-urgency-divider" aria-hidden />
      <UnlockPageHeader
        bannerImage={page.bannerImage}
        bannerAlt={page.bannerImageAlt}
        title={page.bannerImageText}
        description={introDescription}
      />
      <UnlockHighlightBand highlight={page.mainImageText} subtext={highlightSubtext} />
      <UnlockShowcase src={page.mainImage} alt={page.mainImageAlt} caption={page.mainImageText} />
      <UnlockTimeline sections={page.sections} />
      <UnlockCtaBand />
    </div>
  );
}
