import { NavLink } from 'react-router-dom';
import { navLinks } from '@/data/site';
import HashLink from './HashLink';

const linkClass = ({ isActive }) =>
  `relative text-sm font-semibold transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-600 after:transition-all after:duration-300 hover:after:w-full dark:after:bg-brand-400 ${
    isActive
      ? 'text-brand-700 after:w-full dark:text-brand-300'
      : 'text-slate-700 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300'
  }`;

const hashLinkClass =
  'relative text-sm font-semibold text-slate-700 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-600 after:transition-all after:duration-300 hover:text-brand-700 hover:after:w-full dark:text-slate-300 dark:after:bg-brand-400 dark:hover:text-brand-300';

export function DesktopNavLinks() {
  return (
    <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
      {navLinks.map((link) =>
        link.path.includes('#') ? (
          <HashLink key={link.path} href={link.path} className={hashLinkClass}>
            {link.label}
          </HashLink>
        ) : (
          <NavLink key={link.path} to={link.path} className={linkClass}>
            {link.label}
          </NavLink>
        ),
      )}
    </nav>
  );
}

export function MobileNavLinks({ onNavigate }) {
  return (
    <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
      {navLinks.map((link) =>
        link.path.includes('#') ? (
          <HashLink
            key={link.path}
            href={link.path}
            className="rounded-xl px-4 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-800 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-brand-200"
            onClick={onNavigate}
          >
            {link.label}
          </HashLink>
        ) : (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                isActive
                  ? 'bg-brand-50 text-brand-800 ring-1 ring-brand-200/80 dark:bg-brand-900/40 dark:text-brand-200 dark:ring-brand-700/50'
                  : 'text-slate-700 hover:bg-brand-50 hover:text-brand-800 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-brand-200'
              }`
            }
            onClick={onNavigate}
          >
            {link.label}
          </NavLink>
        ),
      )}
    </nav>
  );
}
