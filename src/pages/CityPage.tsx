import { useParams, Navigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { PageShell, CityPageBody } from '@/components/pages';
import { SkeletonCityPage } from '@/components/skeletons';
import Button from '@/components/buttons/Button';
import { getCityBySlug } from '@/data/cities';
import { site } from '@/data/site';
import { getPhoneHref } from '@/utils/phone';
import { ROUTES, ANCHORS, hashPath } from '@/constants/routes';

export default function CityPage() {
  const { slug } = useParams<{ slug: string }>();
  const city = slug ? getCityBySlug(slug) : undefined;

  if (!city) {
    return <Navigate to={ROUTES.NOT_FOUND} replace />;
  }

  const phoneHref = getPhoneHref(site.phone);

  return (
    <PageShell
      skeleton={<SkeletonCityPage />}
      seo={{
        title: `Débouchage à ${city.name}`,
        description: city.metaDescription,
        path: ROUTES.CITY(city.slug),
      }}
      breadcrumb={[
        { label: 'Zones', path: hashPath(ANCHORS.ZONES) },
        { label: city.name, path: ROUTES.CITY(city.slug) },
      ]}
      hero={{
        title: `Débouchage & plomberie à ${city.name}`,
        description: city.description,
        actions: (
          <>
            <Button href={phoneHref} variant="emergency" size="md" icon={Phone}>
              Appeler — {site.phoneDisplay}
            </Button>
            <Button to={ROUTES.CONTACT} variant="glass" size="md">
              Demande en ligne
            </Button>
          </>
        ),
      }}
    >
      <CityPageBody city={city} />
    </PageShell>
  );
}
