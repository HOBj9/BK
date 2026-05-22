import { Link } from 'react-router-dom';
import { Phone, Check } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/buttons/Button';
import EmergencyCTA from '@/sections/EmergencyCTA';
import { site } from '@/data/site';
import { getPhoneHref } from '@/utils/phone';
import { ROUTES } from '@/constants/routes';
import PageSection from './PageSection';
import type { Service } from '@/types';

type ServiceDetailBodyProps = {
  service: Service;
};

export default function ServiceDetailBody({ service }: ServiceDetailBodyProps) {
  const Icon = service.icon;
  const phoneHref = getPhoneHref(site.phone);

  return (
    <>
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
              <Icon className="h-7 w-7" aria-hidden />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Description du service</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{service.description}</p>

            <h3 className="mt-10 text-xl font-bold text-slate-900 dark:text-slate-100">
              Ce que comprend l&apos;intervention
            </h3>
            <ul className="mt-4 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </article>

          <aside>
            <Card hover={false} className="sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Avantages</h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="rounded-lg bg-brand-50 px-4 py-3 text-sm font-medium text-brand-900"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button
                href={phoneHref}
                variant="emergency"
                size="md"
                icon={Phone}
                className="mt-6 w-full"
              >
                {site.phoneDisplay}
              </Button>
              <Link
                to={ROUTES.CONTACT}
                className="mt-3 block text-center text-sm font-semibold text-brand-700 hover:text-brand-900"
              >
                Ou remplir le formulaire
              </Link>
            </Card>
          </aside>
        </div>
      </PageSection>
      <EmergencyCTA />
    </>
  );
}
