import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/buttons/Button';
import Logo from '../components/navigation/Logo';
import ThemeToggle from '../components/navigation/ThemeToggle';
import { DesktopNavLinks, MobileNavLinks } from '../components/navigation/NavLinks';
import { site } from '../data/site';
import { getPhoneHref } from '../utils/phone';
import { easePremium } from '../constants/animations';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const phoneHref = getPhoneHref(site.phone);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav py-0'
          : 'bg-white/90 py-0 shadow-sm shadow-slate-900/5 backdrop-blur-md dark:bg-slate-900/90 dark:shadow-black/20'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-18">
          <Logo />

          <DesktopNavLinks />

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button href={phoneHref} variant="emergency" size="sm" icon={Phone} pulse>
              {site.phoneDisplay}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 shadow-sm transition-colors hover:bg-slate-50 focus-ring dark:border-slate-600/80 dark:bg-slate-800/90 dark:hover:bg-slate-700/80"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
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
                  menuOpen ? 'opacity-0 scale-0' : ''
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-16 z-40 bg-brand-950/20 backdrop-blur-sm dark:bg-black/50 lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: easePremium }}
              className="relative z-50 overflow-hidden border-t border-slate-200/80 bg-white/95 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/95 lg:hidden"
            >
              <Container className="py-6">
                <MobileNavLinks onNavigate={() => setMenuOpen(false)} />
                <Button
                  href={phoneHref}
                  variant="emergency"
                  size="lg"
                  icon={Phone}
                  pulse
                  className="mt-6 w-full"
                >
                  Appeler — {site.phoneDisplay}
                </Button>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
