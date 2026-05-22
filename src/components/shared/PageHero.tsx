import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { easePremium } from '@/constants/animations';
import Container from '@/components/ui/Container';

export type PageHeroProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-page-hero py-20 sm:py-24 lg:py-28">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 60% at 20% 40%, rgba(56,189,248,0.25) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(2,132,199,0.2) 0%, transparent 50%)',
        }}
        aria-hidden
      />
      <div className="pattern-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-linear-to-t from-brand-950/60 to-transparent" aria-hidden />
      <div className="blob-accent -right-32 top-0 h-80 w-80 bg-brand-400/20" aria-hidden />

      <Container className="relative">
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: easePremium }}
          className="max-w-3xl"
        >
          <h1 className="text-balance text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-[1.7] text-slate-300 sm:text-xl">{description}</p>
          )}
          {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
        </motion.div>
      </Container>
    </section>
  );
}
