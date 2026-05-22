import { Home, Phone } from 'lucide-react';
import { PageShell, PageSection } from '@/components/pages';
import Button from '@/components/buttons/Button';
import { site } from '@/data/site';
import { getPhoneHref } from '@/utils/phone';
import { ROUTES } from '@/constants/routes';

export default function NotFoundPage() {
  return (
    <PageShell
      home
      seo={{
        title: 'Page introuvable',
        description:
          "La page demandée n'existe pas. Retournez à l'accueil ou contactez BK Débouchage.",
        path: ROUTES.NOT_FOUND,
        noindex: true,
      }}
    >
      <PageSection className="flex min-h-[60vh] items-center">
        <div className="text-center">
          <p className="text-8xl font-bold text-brand-200">404</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">Page introuvable</h1>
          <p className="mx-auto mt-4 max-w-md text-slate-600">
            La page que vous recherchez n&apos;existe pas ou a été déplacée. En cas
            d&apos;urgence plomberie, contactez-nous directement.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to={ROUTES.HOME} variant="secondary" size="lg" icon={Home}>
              Retour à l&apos;accueil
            </Button>
            <Button
              href={getPhoneHref(site.phone)}
              variant="emergency"
              size="lg"
              icon={Phone}
            >
              Appeler — {site.phoneDisplay}
            </Button>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
