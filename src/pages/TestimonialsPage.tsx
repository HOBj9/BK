import { PageShell } from '@/components/pages';
import { SkeletonTestimonialsPage } from '@/components/skeletons';
import TestimonialsExperience from '@/sections/testimonials/TestimonialsExperience';
import { testimonialsPage } from '@/data/websiteContent';
import { ROUTES } from '@/constants/routes';
import { pageBreadcrumb, seoTitle } from '@/utils/pageMeta';

export default function TestimonialsPage() {
  return (
    <PageShell
      skeleton={<SkeletonTestimonialsPage />}
      seo={{
        title: seoTitle('Témoignages'),
        description:
          testimonialsPage.sections[0]?.description ??
          'Avis et témoignages clients BK Entretien — plomberie et débouchage à Montréal.',
        path: ROUTES.TESTIMONIALS,
      }}
      breadcrumb={pageBreadcrumb('Témoignages', ROUTES.TESTIMONIALS)}
    >
      <TestimonialsExperience />
    </PageShell>
  );
}
