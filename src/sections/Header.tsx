import { useState, useEffect, useMemo, type CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/buttons/Button';
import Logo from '@/components/navigation/Logo';
import ThemeToggle from '@/components/navigation/ThemeToggle';
import { DesktopNavLinks, MobileNavLinks } from '@/components/navigation/NavLinks';
import { site } from '@/data/site';
import { getPhoneHref } from '@/utils/phone';
import { getNavThemeFromPath } from '@/constants/navThemes';
import {
  navMenuOverlay,
  navMenuPanel,
} from '@/components/navigation/nav.animations';
import '@/components/navigation/nav.css';

export default function Header() {
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const theme = useMemo(() => getNavThemeFromPath(pathname), [pathname]);
  const menuOpen = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuPath(null);
  const toggleMenu = () => (menuOpen ? closeMenu() : setMenuPath(pathname));

  const phoneHref = getPhoneHref(site.phone);

  return (
    <header
      className="nav-shell sticky top-0 z-50"
      data-scrolled={scrolled}
      data-nav-theme={theme.id}
      style={{ '--nav-accent-glow': theme.glow } as CSSProperties}
    >
      <motion.div
        className="nav-accent-line pointer-events-none absolute bottom-0 left-0 right-0 z-10"
        initial={false}
        animate={{
          scaleX: scrolled ? 1 : 0.72,
          opacity: scrolled ? 1 : 0.65,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />

      <Container className="relative">
        <div
          className={`flex items-center justify-between gap-3 transition-[height] duration-500 ${
            scrolled ? 'h-15' : 'h-16 lg:h-17'
          }`}
        >
          <Logo ringClass={theme.logoRing} />

          <DesktopNavLinks theme={theme} />

          <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
            <ThemeToggle />
            <Button href={phoneHref} variant="emergency" size="sm" icon={Phone} pulse>
              {site.phoneDisplay}
            </Button>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 shadow-sm transition-colors hover:bg-slate-50 focus-ring dark:border-slate-600/80 dark:bg-slate-800/90 dark:hover:bg-slate-700/80"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <span className="sr-only">Menu</span>
              <span
                className={`absolute block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 dark:bg-slate-200 ${
                  menuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 dark:bg-slate-200 ${
                  menuOpen ? 'scale-0 opacity-0' : ''
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 dark:bg-slate-200 ${
                  menuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="nav-overlay"
              variants={navMenuOverlay}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-16 z-40 bg-slate-950/25 backdrop-blur-sm dark:bg-black/55 lg:hidden"
              onClick={closeMenu}
              aria-hidden
            />
            <motion.div
              id="mobile-nav-panel"
              key="nav-panel"
              variants={navMenuPanel}
              initial="hidden"
              animate="show"
              exit="exit"
              className="relative z-50 overflow-hidden border-t border-slate-200/80 bg-white/96 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/96 lg:hidden"
            >
              <Container className="py-5 pb-6">
                <MobileNavLinks theme={theme} onNavigate={closeMenu} />
                <Button
                  href={phoneHref}
                  variant="emergency"
                  size="lg"
                  icon={Phone}
                  pulse
                  className="mt-5 w-full"
                >
                  Urgence — {site.phoneDisplay}
                </Button>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
