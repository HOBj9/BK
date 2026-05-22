import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/forms/ContactForm';
import Skeleton from '@/components/ui/Skeleton';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import { site } from '@/data/site';
import { getPhoneHref } from '@/utils/phone';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactChannelCard from './ContactChannelCard';
import { contactFadeUp, contactPanelIn, contactStagger, contactViewport } from './contact.animations';

const channels = [
  { icon: Phone, label: 'Téléphone urgence', key: 'phone' as const, href: true, accent: 'emergency' as const },
  { icon: Mail, label: 'Courriel', key: 'email' as const, href: true, accent: 'brand' as const },
  { icon: MapPin, label: 'Zone d\'intervention', key: 'address' as const, href: false, accent: 'brand' as const },
  { icon: Clock, label: 'Disponibilité', key: 'hours' as const, href: false, accent: 'brand' as const },
];

export default function ContactMainPanel() {
  const phoneHref = getPhoneHref(site.phone);
  const { isLoading: pageLoading } = usePageLoading();
  const formLoading = useCardReveal(pageLoading ? 0 : 80);

  const getValue = (key: 'phone' | 'email' | 'address' | 'hours') => site[key];

  return (
    <Container className="pb-12 md:pb-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={contactViewport}
          variants={contactPanelIn}
          className="contact-form-panel rounded-3xl border border-slate-200/80 bg-white p-6 dark:border-slate-700/60 dark:bg-slate-900/90 sm:p-8 lg:col-span-7"
        >
          {pageLoading || formLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-full max-w-sm" />
              <Skeleton className="mt-6 h-96 w-full rounded-2xl" />
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                  <FileText className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
                    Formulaire de contact
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Décrivez votre situation. Pour une urgence, appelez directement.
                  </p>
                </div>
              </div>
              <ContactForm />
            </>
          )}
        </motion.div>

        <motion.aside
          initial="hidden"
          whileInView="show"
          viewport={contactViewport}
          variants={contactStagger}
          className="space-y-4 lg:col-span-5"
        >
          <motion.h2 variants={contactFadeUp} className="text-lg font-bold text-slate-900 dark:text-white">
            Coordonnées directes
          </motion.h2>
          {channels.map((ch, index) => (
            <ContactChannelCard
              key={ch.key}
              icon={ch.icon}
              label={ch.label}
              value={getValue(ch.key)}
              href={
                ch.href
                  ? ch.key === 'phone'
                    ? phoneHref
                    : `mailto:${getValue('email')}`
                  : null
              }
              index={index}
              accent={ch.accent}
            />
          ))}
        </motion.aside>
      </div>
    </Container>
  );
}
