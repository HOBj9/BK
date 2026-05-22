import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Siren, ExternalLink } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/buttons/Button';
import HashLink from '@/components/navigation/HashLink';
import Logo from '@/components/navigation/Logo';
import { site, footerLinks } from '@/data/site';
import { getPhoneHref } from '@/utils/phone';
import { ROUTES } from '@/constants/routes';
import './footer/footer.css';

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: { label: string; path: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={`${title}-${link.path}`}>
            {link.path.includes('#') ? (
              <HashLink href={link.path} className="footer-link text-sm">
                {link.label}
              </HashLink>
            ) : (
              <Link to={link.path} className="footer-link text-sm">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const phoneHref = getPhoneHref(site.phone);
  const year = new Date().getFullYear();
  const hasSocial = Object.values(site.social).some((url) => url.length > 0);

  return (
    <footer className="footer-shell text-slate-300">
      {/* Urgence — bandeau */}
      <div className="footer-cta-band">
        <Container className="flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-start gap-3 sm:max-w-md">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emergency-600/90 text-white shadow-lg shadow-emergency-900/30">
              <Siren className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-emergency-300">
                Urgence 24/7
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Drain bouché ou refoulement? Appelez maintenant — intervention rapide à Montréal.
              </p>
            </div>
          </div>
          <Button href={phoneHref} variant="emergency" size="lg" icon={Phone} pulse className="w-full sm:w-auto">
            {site.phoneDisplay}
          </Button>
        </Container>
      </div>

      <Container className="py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Marque + coordonnées */}
          <div className="lg:col-span-5">
            <Logo className="text-white" ringClass="ring-brand-500/20" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">{site.description}</p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-brand-200"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="footer-link inline-flex items-center gap-2.5"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                <span>
                  <span className="block text-slate-300">{site.address}</span>
                  <span className="mt-0.5 block text-xs">{site.serviceArea}</span>
                </span>
              </li>
            </ul>

            {hasSocial && (
              <div className="mt-6 flex gap-3" aria-label="Réseaux sociaux">
                {site.social.facebook && (
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link rounded-lg border border-slate-700 px-3 py-1.5 text-xs"
                  >
                    Facebook
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Liens */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <FooterLinkList title="Services" links={footerLinks.services} />
            <FooterLinkList title="Navigation" links={footerLinks.navigation} />
            <div className="col-span-2 sm:col-span-1">
              <FooterLinkList title="Accueil" links={footerLinks.accueil} />
            </div>
          </div>
        </div>

        {/* Horaires */}
        <div className="mt-10 rounded-2xl border border-slate-700/60 bg-slate-800/40 p-5 md:p-6">
          <div className="flex items-center gap-2 text-brand-300">
            <Clock className="h-5 w-5 shrink-0" aria-hidden />
            <h3 className="text-sm font-bold uppercase tracking-wide">Horaires</h3>
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-slate-400 sm:grid-cols-2 lg:grid-cols-4">
            <li>{site.hoursSchedule.weekdays}</li>
            <li>{site.hoursSchedule.saturday}</li>
            <li>{site.hoursSchedule.sunday}</li>
            <li className="font-semibold text-emergency-300 sm:col-span-2 lg:col-span-1">
              {site.hoursSchedule.emergency}
            </li>
          </ul>
        </div>
      </Container>

      {/* Bas de page */}
      <div className="border-t border-slate-800/80">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            &copy; {year} {site.name}. Tous droits réservés.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-end">
            <span>Plomberie · Débouchage · Nettoyage de drains</span>
            <span className="hidden text-slate-700 sm:inline" aria-hidden>
              |
            </span>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-brand-300"
            >
              bkdebouchage.ca
              <ExternalLink className="h-3 w-3" aria-hidden />
            </a>
            <span className="hidden text-slate-700 sm:inline" aria-hidden>
              |
            </span>
            <Link to={ROUTES.CONTACT} className="text-slate-400 transition-colors hover:text-brand-300">
              Contact
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
