import { PageShell } from '@/components/pages';
import { SkeletonContentPage } from '@/components/skeletons';
import DrainCleaningExperience from '@/sections/drain-cleaning/DrainCleaningExperience';
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
    >
      <DrainCleaningExperience page={page} />
    </PageShell>
  );
}
