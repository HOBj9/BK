import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';
import { site } from '@/data/site';
import { ROUTES } from '@/constants/routes';

type LogoProps = {
  className?: string;
  ringClass?: string;
};

export default function Logo({ className = '', ringClass = '' }: LogoProps) {
  return (
    <Link
      to={ROUTES.HOME}
      className={`group flex min-w-0 items-center gap-2.5 font-bold text-brand-900 transition-opacity hover:opacity-95 dark:text-slate-100 sm:gap-3 ${className}`}
      aria-label={`${site.name} — Accueil`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-700 to-brand-800 text-white shadow-md shadow-brand-900/20 ring-2 ring-transparent transition-all duration-300 group-hover:scale-[1.03] sm:h-11 sm:w-11 ${ringClass}`}
      >
        <Droplets className="h-5 w-5" aria-hidden />
      </span>
      <span className="hidden min-w-0 flex-col leading-tight sm:flex">
        <span className="text-base tracking-tight sm:text-lg">
          BK <span className="text-brand-600 dark:text-brand-400">Entretien</span>
        </span>
        <span className="truncate text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Plomberie · Montréal
        </span>
      </span>
    </Link>
  );
}
