import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';
import { site } from '../../data/site';
import { ROUTES } from '../../constants/routes';

export default function Logo({ className = '' }) {
  return (
    <Link
      to={ROUTES.HOME}
      className={`group flex items-center gap-3 font-bold text-brand-900 transition-opacity hover:opacity-90 dark:text-slate-100 ${className}`}
      aria-label={`${site.name} — Accueil`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-800 text-white shadow-lg shadow-brand-900/25 transition-transform duration-300 group-hover:scale-105">
        <Droplets className="h-5 w-5" aria-hidden />
      </span>
      <span className="hidden text-lg tracking-tight sm:block">
        BK <span className="text-brand-600 dark:text-brand-400">Entretien</span>
      </span>
    </Link>
  );
}
