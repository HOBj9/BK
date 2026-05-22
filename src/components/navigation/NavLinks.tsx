import { LayoutGroup, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { navLinks } from '@/data/site';
import { ROUTES } from '@/constants/routes';
import type { NavTheme } from '@/constants/navThemes';
import { useNavLinkActive } from '@/hooks/useNavLinkActive';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import HashLink from './HashLink';
import { navIndicatorSpring, navMobileItem, navMobileStagger } from './nav.animations';

type NavItemProps = {
  path: string;
  label: string;
  theme: NavTheme;
  onNavigate?: () => void;
  variant: 'desktop' | 'mobile';
};

function NavItem({ path, label, theme, onNavigate, variant }: NavItemProps) {
  const isActive = useNavLinkActive(path);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isHash = path.includes('#');

  if (variant === 'desktop') {
    const linkClasses = `nav-link-base ${isActive ? theme.activeText : 'nav-link-idle'}`;

    const inner = isHash ? (
      <HashLink href={path} className={linkClasses} onClick={onNavigate}>
        {label}
      </HashLink>
    ) : (
      <NavLink
        to={path}
        end={path === ROUTES.HOME}
        className={linkClasses}
        onClick={onNavigate}
      >
        {label}
      </NavLink>
    );

    return (
      <div className="relative">
        {isActive &&
          (reduceMotion ? (
            <span
              className={`absolute inset-0 rounded-full ${theme.activePill}`}
              aria-hidden
            />
          ) : (
            <motion.span
              layoutId="nav-active-pill"
              className={`absolute inset-0 rounded-full ${theme.activePill}`}
              transition={navIndicatorSpring}
              aria-hidden
            />
          ))}
        {inner}
      </div>
    );
  }

  const mobileClass = isActive
    ? `block rounded-xl border px-4 py-3.5 pl-5 text-base font-semibold transition-colors duration-300 ${theme.mobileActive} ${theme.activeText}`
    : 'block rounded-xl border border-transparent px-4 py-3.5 text-base font-semibold text-slate-700 transition-colors duration-300 hover:bg-slate-100/90 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-white';

  const content = isHash ? (
    <HashLink href={path} className={mobileClass} onClick={onNavigate}>
      {label}
    </HashLink>
  ) : (
    <NavLink to={path} end={path === ROUTES.HOME} className={mobileClass} onClick={onNavigate}>
      {label}
    </NavLink>
  );

  return (
    <motion.li variants={navMobileItem} className={isActive ? 'relative' : undefined}>
      {isActive && !reduceMotion && (
        <motion.span
          layoutId="nav-mobile-accent"
          className={`absolute bottom-3 left-0 top-3 w-1 rounded-full ${theme.indicator}`}
          transition={navIndicatorSpring}
          aria-hidden
        />
      )}
      {isActive && reduceMotion && (
        <span
          className={`absolute bottom-3 left-0 top-3 w-1 rounded-full ${theme.indicator}`}
          aria-hidden
        />
      )}
      {content}
    </motion.li>
  );
}

type NavLinksProps = {
  theme: NavTheme;
  onNavigate?: () => void;
};

export function DesktopNavLinks({ theme }: NavLinksProps) {
  return (
    <LayoutGroup id="main-nav">
      <nav className="hidden lg:flex lg:items-center" aria-label="Navigation principale">
        <div className="nav-pill-tray">
          {navLinks.map((link) => (
            <NavItem
              key={link.path}
              path={link.path}
              label={link.label}
              theme={theme}
              variant="desktop"
            />
          ))}
        </div>
      </nav>
    </LayoutGroup>
  );
}

export function MobileNavLinks({ theme, onNavigate }: NavLinksProps) {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const list = (
    <ul className="flex flex-col gap-1">
      {navLinks.map((link) => (
        <NavItem
          key={link.path}
          path={link.path}
          label={link.label}
          theme={theme}
          onNavigate={onNavigate}
          variant="mobile"
        />
      ))}
    </ul>
  );

  if (reduceMotion) {
    return <nav aria-label="Navigation mobile">{list}</nav>;
  }

  return (
    <LayoutGroup id="main-nav-mobile">
      <motion.nav
        initial="hidden"
        animate="show"
        variants={navMobileStagger}
        aria-label="Navigation mobile"
      >
        {list}
      </motion.nav>
    </LayoutGroup>
  );
}
