import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import Container from '../ui/Container';
import HashLink from './HashLink';
import { ROUTES } from '@/constants/routes';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-slate-200 bg-white py-3">
      <Container>
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-600">
          <li>
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center gap-1 hover:text-brand-700"
            >
              <Home className="h-4 w-4" aria-hidden />
              <span className="sr-only">Accueil</span>
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden />
              {i === items.length - 1 ? (
                <span className="font-medium text-slate-900" aria-current="page">
                  {item.label}
                </span>
              ) : item.path?.includes('#') ? (
                <HashLink href={item.path} className="hover:text-brand-700">
                  {item.label}
                </HashLink>
              ) : (
                <Link to={item.path} className="hover:text-brand-700">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
