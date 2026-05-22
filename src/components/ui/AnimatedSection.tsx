import type { ElementType, ReactNode } from 'react';
import ScrollReveal from './ScrollReveal';
import type { ScrollRevealVariant } from '@/constants/animations';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  as?: ElementType;
  variant?: ScrollRevealVariant;
};

/** Section wrapper with scroll-triggered reveal */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
  as: Tag = 'section',
  variant = 'fadeUp',
}: AnimatedSectionProps) {
  return (
    <Tag id={id} className={className}>
      <ScrollReveal variant={variant} delay={delay}>
        {children}
      </ScrollReveal>
    </Tag>
  );
}
