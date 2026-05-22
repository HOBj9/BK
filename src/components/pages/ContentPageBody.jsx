import Skeleton from '@/components/ui/Skeleton';
import ContentSections from '@/components/shared/ContentSections';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import PageSection from './PageSection';
import FeaturedImage from './FeaturedImage';

/** Standard body for API content pages (nettoyage, débouchage, etc.) */
export default function ContentPageBody({
  intro,
  image,
  sections,
  sectionsColumns = '3',
  introClassName = 'mx-auto max-w-3xl text-center text-lg text-slate-600',
}) {
  const { isLoading: pageLoading } = usePageLoading();
  const introLoading = useCardReveal(pageLoading ? 0 : 0);

  return (
    <PageSection>
      {intro &&
        (pageLoading || introLoading ? (
          <Skeleton className="mx-auto h-6 w-full max-w-2xl" />
        ) : (
          <p className={introClassName}>{intro}</p>
        ))}
      <FeaturedImage
        src={image?.src}
        alt={image?.alt}
        caption={image?.caption}
        className={intro ? 'mt-12' : ''}
        revealDelay={120}
      />
      {sections?.length > 0 && (
        <div className="mt-14">
          <ContentSections sections={sections} columns={sectionsColumns} />
        </div>
      )}
    </PageSection>
  );
}
