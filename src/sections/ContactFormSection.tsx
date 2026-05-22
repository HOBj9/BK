import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/shared/SectionHeading';
import ContactForm from '../components/forms/ContactForm';
import { site } from '../data/site';
import { getPhoneHref } from '../utils/phone';
import { ANCHORS } from '../constants/routes';

export default function ContactFormSection() {
  const phoneHref = getPhoneHref(site.phone);

  return (
    <Section id={ANCHORS.CONTACT}>
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Demandez une intervention"
          description="Remplissez le formulaire ou appelez-nous directement pour une urgence."
        />
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-linear-to-br from-brand-900 via-brand-800 to-brand-950 p-8 text-white shadow-xl shadow-brand-900/20 ring-1 ring-white/10">
              <h3 className="text-xl font-bold">Coordonnées</h3>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={phoneHref}
                    className="flex items-start gap-3 transition-colors hover:text-brand-200"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" aria-hidden />
                    <span>
                      <span className="block text-sm text-brand-300">Téléphone urgence</span>
                      <span className="font-semibold">{site.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-start gap-3 transition-colors hover:text-brand-200"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" aria-hidden />
                    <span>
                      <span className="block text-sm text-brand-300">E-mail</span>
                      <span className="font-semibold">{site.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" aria-hidden />
                  <span>
                    <span className="block text-sm text-brand-300">Zone</span>
                    <span className="font-semibold">{site.address}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" aria-hidden />
                  <span>
                    <span className="block text-sm text-brand-300">Horaires</span>
                    <span className="font-semibold">{site.hours}</span>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
