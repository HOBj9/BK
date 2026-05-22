import { Link } from 'react-router-dom';
import { Droplets, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Container from '../components/ui/Container';
import HashLink from '../components/navigation/HashLink';
import { site, footerLinks } from '../data/site';
import { getPhoneHref } from '../utils/phone';
import { ROUTES } from '../constants/routes';

export default function Footer() {
  const phoneHref = getPhoneHref(site.phone);

  return (
    <footer className="border-t border-slate-800/50 bg-linear-to-b from-slate-900 to-brand-950 text-slate-300">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to={ROUTES.HOME} className="flex items-center gap-2 font-bold text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600">
                <Droplets className="h-5 w-5" aria-hidden />
              </span>
              {site.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{site.description}</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 text-brand-400" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-brand-400" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-400" aria-hidden />
                {site.address}
              </li>
              <li className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-400" aria-hidden />
                {site.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Pages</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.pages.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Entreprise</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  {link.path.includes('#') ? (
                    <HashLink href={link.path} className="hover:text-white">
                      {link.label}
                    </HashLink>
                  ) : (
                    <Link to={link.path} className="hover:text-white">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <p>Montréal, QC — Service résidentiel et commercial</p>
        </div>
      </Container>
    </footer>
  );
}
