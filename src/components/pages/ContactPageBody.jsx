import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContentSections from '@/components/shared/ContentSections';
import ContactForm from '@/components/forms/ContactForm';
import Skeleton from '@/components/ui/Skeleton';
import ContactInfoCard from './ContactInfoCard';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import { site } from '@/data/site';
import { getPhoneHref } from '@/utils/phone';
import PageSection from './PageSection';

const contactItems = [
  { icon: Phone, label: 'Téléphone urgence', key: 'phone', href: true },
  { icon: Mail, label: 'E-mail', key: 'email', href: true },
  { icon: MapPin, label: 'Zone', key: 'address' },
  { icon: Clock, label: 'Disponibilité', key: 'hours' },
];

export default function ContactPageBody({ infoSections }) {
  const phoneHref = getPhoneHref(site.phone);
  const { isLoading: pageLoading } = usePageLoading();
  const formLoading = useCardReveal(pageLoading ? 0 : 100);

  return (
    <PageSection>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {pageLoading || formLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-56" />
              <Skeleton className="h-4 w-full max-w-md" />
              <Skeleton className="mt-8 h-80 w-full rounded-2xl" />
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Formulaire de contact</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Décrivez votre situation. Pour une urgence, appelez directement.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </>
          )}
        </div>
        <aside className="space-y-6 lg:col-span-2">
          {contactItems.map(({ icon, label, key, href: isLink }, index) => (
            <ContactInfoCard
              key={key}
              icon={icon}
              label={label}
              value={site[key]}
              href={isLink ? (key === 'phone' ? phoneHref : `mailto:${site[key]}`) : null}
              isLink={isLink}
              index={index}
            />
          ))}
        </aside>
      </div>
      {infoSections?.length > 0 && (
        <div className="mt-16">
          <ContentSections sections={infoSections} columns="2" />
        </div>
      )}
    </PageSection>
  );
}
