import { PageShell } from '@/components/pages';
import { SkeletonTestimonialsPage } from '@/components/skeletons';
import Testimonials from '@/sections/Testimonials';
import { testimonialsPage } from '@/data/websiteContent';
import { ROUTES } from '@/constants/routes';
import { pageBreadcrumb, seoTitle } from '@/utils/pageMeta';

export default function TestimonialsPage() {
  return (
    <PageShell
      skeleton={<SkeletonTestimonialsPage />}
      seo={{
        title: seoTitle('Témoignages'),
        description: testimonialsPage.sections[0]?.description,
        path: ROUTES.TESTIMONIALS,
      }}
      breadcrumb={pageBreadcrumb('Témoignages', ROUTES.TESTIMONIALS)}
      hero={{
        title: 'Témoignages',
        description: 'Ce que disent nos clients à Montréal et environs.',
      }}
    >
      <Testimonials standalone />
    </PageShell>
  );
}
