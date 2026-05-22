import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Section, { type SectionVariant } from '@/components/ui/Section';
import type { ScrollRevealVariant } from '@/constants/animations';

type PageSectionProps = {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  containerClassName?: string;
  /** Scroll reveal when section enters viewport */
  reveal?: boolean;
  revealDelay?: number;
  revealVariant?: ScrollRevealVariant;
};

export default function PageSection({
  children,
  variant,
  className,
  containerClassName,
  reveal = true,
  revealDelay = 0,
  revealVariant = 'fadeUp',
}: PageSectionProps) {
  const content = reveal ? (
    <ScrollReveal variant={revealVariant} delay={revealDelay}>
      {children}
    </ScrollReveal>
  ) : (
    children
  );

  return (
    <Section variant={variant} className={className}>
      <Container className={containerClassName}>{content}</Container>
    </Section>
  );
}
