import { PageShell } from '@/components/pages';
import { SkeletonContentPage } from '@/components/skeletons';
import UnlockingExperience from '@/sections/unlocking/UnlockingExperience';
import { unlockingPage } from '@/data/websiteContent';
import { ROUTES } from '@/constants/routes';
import { pageBreadcrumb, seoTitle } from '@/utils/pageMeta';

const page = unlockingPage;

export default function UnlockingPage() {
  return (
    <PageShell
      skeleton={<SkeletonContentPage withIntro={false} />}
      seo={{
        title: seoTitle(page.bannerImageText),
        description: page.sections[0]?.description ?? page.mainImageText,
        path: ROUTES.UNLOCKING,
      }}
      breadcrumb={pageBreadcrumb('Débouchage', ROUTES.UNLOCKING)}
    >
      <UnlockingExperience page={page} />
    </PageShell>
  );
}
