import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SEO from '@/components/shared/SEO';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import PageHero from '@/components/shared/PageHero';
import { PageLoadContext } from '@/context/PageLoadContext';
import { usePageLoad } from '@/hooks/usePageLoad';
import { pageTransition } from '@/constants/animations';
import type { BreadcrumbItem, SEOProps } from '@/types';

type PageHeroConfig = {
  title: string;
  description?: string;
  actions?: ReactNode;
};

type PageShellProps = {
  seo: SEOProps;
  breadcrumb?: BreadcrumbItem[];
  hero?: PageHeroConfig;
  children: ReactNode;
  skeleton?: ReactNode;
  home?: boolean;
};

/**
 * Shared layout shell: SEO, optional breadcrumb, optional hero, then page body.
 * Shows `skeleton` during route transition, then reveals content with Framer Motion.
 */
export default function PageShell({ seo, breadcrumb, hero, children, skeleton, home = false }: PageShellProps) {
  const isLoading = usePageLoad();

  return (
    <PageLoadContext.Provider value={{ isLoading }}>
      <SEO {...seo} />
      <AnimatePresence mode="wait">
        {isLoading && skeleton ? (
          <motion.div key="skeleton" {...pageTransition}>
            {skeleton}
          </motion.div>
        ) : (
          <motion.div key="content" {...pageTransition}>
            {!home && breadcrumb && breadcrumb.length > 0 && <Breadcrumb items={breadcrumb} />}
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
