import type { ReactNode } from 'react';

const variants = {
  default: 'section-spacing relative',
  compact: 'section-spacing-sm relative',
  light: 'section-spacing bg-white dark:bg-slate-900/50 relative',
  muted: 'section-spacing bg-section-muted relative',
  alt: 'section-spacing bg-section-alt relative',
  dark: 'section-spacing relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 text-white',
} as const;

export type SectionVariant = keyof typeof variants;

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
};

export default function Section({
  children,
  className = '',
  id,
  variant = 'default',
}: SectionProps) {
  return (
    <section id={id} className={`${variants[variant]} ${className}`}>
      {children}
    </section>
  );
}
