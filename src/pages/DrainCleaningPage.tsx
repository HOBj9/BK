import { PageShell, ContentPageBody } from '@/components/pages';
import { SkeletonContentPage } from '@/components/skeletons';
import { drainCleaningPage } from '@/data/websiteContent';
import { ROUTES } from '@/constants/routes';
import { pageBreadcrumb, seoTitle } from '@/utils/pageMeta';

const page = drainCleaningPage;

export default function DrainCleaningPage() {
  return (
    <PageShell
      skeleton={<SkeletonContentPage withIntro />}
      seo={{
        title: seoTitle(page.title),
        description: page.firstDescription,
        path: ROUTES.DRAIN_CLEANING,
      }}
      breadcrumb={pageBreadcrumb('Nettoyage des drains', ROUTES.DRAIN_CLEANING)}
      hero={{ title: page.title, description: page.firstDescription }}
    >
      <ContentPageBody
        intro={page.secondDescription}
        image={{ src: page.mainImage, alt: page.mainImageAlt, caption: page.mainImageText }}
        sections={page.sections}
      />
    </PageShell>
  );
}
