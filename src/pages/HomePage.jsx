import { PageShell } from '@/components/pages';
import { SkeletonHomePage } from '@/components/skeletons';
import Hero from '@/sections/Hero';
import WelcomeContent from '@/sections/WelcomeContent';
import { site } from '@/data/site';
import { ROUTES } from '@/constants/routes';

export default function HomePage() {
  return (
    <PageShell
      home
      skeleton={<SkeletonHomePage />}
      seo={{
        title: `${site.name} | Déblocage et nettoyage de drains à Montréal`,
        description: site.description,
        path: ROUTES.HOME,
      }}
    >
      <Hero />
      <WelcomeContent />
    </PageShell>
  );
}
