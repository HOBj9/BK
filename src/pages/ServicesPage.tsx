import { Phone } from 'lucide-react';
import { PageShell, ServicesGrid } from '@/components/pages';
import { SkeletonServicesPage } from '@/components/skeletons';
import Button from '@/components/buttons/Button';
import { site } from '@/data/site';
import { getPhoneHref } from '@/utils/phone';
import { ROUTES } from '@/constants/routes';

export default function ServicesPage() {
  return (
    <PageShell
      skeleton={<SkeletonServicesPage />}
      seo={{
        title: 'Nos services de débouchage et plomberie',
        description:
          "Découvrez tous nos services : débouchage drains, plomberie d'urgence 24/7, inspection caméra, canalisation et plus.",
        path: ROUTES.SERVICES,
      }}
      breadcrumb={[{ label: 'Services', path: ROUTES.SERVICES }]}
      hero={{
        title: 'Nos services',
        description:
          'Des solutions professionnelles pour chaque problème de canalisation, du débouchage simple à la rénovation complète.',
        actions: (
          <Button href={getPhoneHref(site.phone)} variant="emergency" size="md" icon={Phone}>
            Demander une intervention
          </Button>
        ),
      }}
    >
      <ServicesGrid />
    </PageShell>
  );
}
