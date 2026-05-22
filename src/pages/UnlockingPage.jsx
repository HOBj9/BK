import { PageShell, ContentPageBody } from '@/components/pages';
import { SkeletonContentPage } from '@/components/skeletons';
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
        description: page.sections[0]?.description,
        path: ROUTES.UNLOCKING,
      }}
      breadcrumb={pageBreadcrumb('Débouchage', ROUTES.UNLOCKING)}
      hero={{ title: page.bannerImageText, description: page.mainImageText }}
    >
      <ContentPageBody
        image={{ src: page.mainImage, alt: page.mainImageAlt }}
        sections={page.sections}
      />
    </PageShell>
  );
}
