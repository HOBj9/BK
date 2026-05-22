import { useParams, Navigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { PageShell, ServiceDetailBody } from '@/components/pages';
import { SkeletonServiceDetailPage } from '@/components/skeletons';
import Button from '@/components/buttons/Button';
import { getServiceBySlug } from '@/data/services';
import { site } from '@/data/site';
import { getPhoneHref } from '@/utils/phone';
import { ROUTES } from '@/constants/routes';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to={ROUTES.NOT_FOUND} replace />;
  }

  return (
    <PageShell
      skeleton={<SkeletonServiceDetailPage />}
      seo={{
        title: service.title,
        description: service.shortDescription,
        path: ROUTES.SERVICE(service.slug),
      }}
      breadcrumb={[
        { label: 'Services', path: ROUTES.SERVICES },
        { label: service.title, path: ROUTES.SERVICE(service.slug) },
      ]}
      hero={{
        title: service.title,
        description: service.shortDescription,
        actions: (
          <Button href={getPhoneHref(site.phone)} variant="emergency" size="md" icon={Phone}>
            Appeler maintenant
          </Button>
        ),
      }}
    >
      <ServiceDetailBody service={service} />
    </PageShell>
  );
}
