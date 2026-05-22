import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import Section, { type SectionVariant } from '@/components/ui/Section';

type PageSectionProps = {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  containerClassName?: string;
};

export default function PageSection({
  children,
  variant,
  className,
  containerClassName,
}: PageSectionProps) {
  return (
    <Section variant={variant} className={className}>
      <Container className={containerClassName}>{children}</Container>
    </Section>
  );
}
