import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function PageSection({
  children,
  variant,
  className,
  containerClassName,
}) {
  return (
    <Section variant={variant} className={className}>
      <Container className={containerClassName}>{children}</Container>
    </Section>
  );
}
