import { Link } from 'react-router-dom';
import { Check, MapPin } from 'lucide-react';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/forms/ContactForm';
import EmergencyCTA from '@/sections/EmergencyCTA';
import { services } from '@/data/services';
import { ROUTES } from '@/constants/routes';
import PageSection from './PageSection';

export default function CityPageBody({ city }) {
  return (
    <>
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-2">
          <article>
            <div className="mb-6 flex items-center gap-3 text-brand-700">
              <MapPin className="h-6 w-6" aria-hidden />
              <span className="font-semibold">{city.region}</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Pourquoi choisir BK Débouchage à {city.name} ?
            </h2>
            <ul className="mt-6 space-y-4">
              {city.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold text-slate-900 dark:text-slate-100">
              Services disponibles à {city.name}
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {city.services.map((s) => (
                <li
                  key={s}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </article>

          <Card hover={false}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Demande d&apos;intervention à {city.name}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Décrivez votre problème — nous vous rappelons rapidement.
            </p>
            <div className="mt-6">
              <ContactForm compact />
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tous nos services</h3>
          <nav
            aria-label="Services disponibles"
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => (
              <Link
                key={service.slug}
                to={ROUTES.SERVICE(service.slug)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-800 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-200"
              >
                {service.title}
              </Link>
            ))}
          </nav>
        </div>
      </PageSection>
      <EmergencyCTA />
    </>
  );
}
