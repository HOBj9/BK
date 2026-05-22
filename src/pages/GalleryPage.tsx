import { PageShell, PageSection, GalleryCategories } from '@/components/pages';
import { SkeletonGalleryPage } from '@/components/skeletons';
import { photoGalleryPage } from '@/data/websiteContent';
import { ROUTES } from '@/constants/routes';
import { pageBreadcrumb, seoTitle } from '@/utils/pageMeta';

const page = photoGalleryPage;

export default function GalleryPage() {
  return (
    <PageShell
      skeleton={<SkeletonGalleryPage />}
      seo={{
        title: seoTitle(page.title),
        description: page.description,
        path: ROUTES.GALLERY,
      }}
      breadcrumb={pageBreadcrumb('Galerie', ROUTES.GALLERY)}
      hero={{ title: page.title, description: page.description }}
    >
      <PageSection containerClassName="space-y-16">
        <GalleryCategories categories={page.sections} />
      </PageSection>
    </PageShell>
  );
}
