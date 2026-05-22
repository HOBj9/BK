import { AnimatePresence, motion } from 'framer-motion';
import SEO from '@/components/shared/SEO';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import PageHero from '@/components/shared/PageHero';
import { PageLoadContext } from '@/context/PageLoadContext';
import { usePageLoad } from '@/hooks/usePageLoad';
import { easePremium } from '@/constants/animations';

const pageFade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.4, ease: easePremium },
};

/**
 * Shared layout shell: SEO, optional breadcrumb, optional hero, then page body.
 * Shows `skeleton` during route transition, then reveals content with Framer Motion.
 */
export default function PageShell({ seo, breadcrumb, hero, children, skeleton, home = false }) {
  const isLoading = usePageLoad();

  return (
    <PageLoadContext.Provider value={{ isLoading }}>
      <SEO {...seo} />
      <AnimatePresence mode="wait">
        {isLoading && skeleton ? (
          <motion.div key="skeleton" {...pageFade}>
            {skeleton}
          </motion.div>
        ) : (
          <motion.div key="content" {...pageFade}>
            {!home && breadcrumb?.length > 0 && <Breadcrumb items={breadcrumb} />}
            {!home && hero && (
              <PageHero title={hero.title} description={hero.description}>
                {hero.actions}
              </PageHero>
            )}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </PageLoadContext.Provider>
  );
}
