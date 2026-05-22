import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/buttons/Button';
import { ROUTES } from '@/constants/routes';

/**
 * PagePlaceholder — scaffold for routes under development.
 * Swap with a real page component when the feature is ready.
 */
export default function PagePlaceholder({
  title = 'Page en construction',
  description = 'Cette section sera bientôt disponible. Contactez-nous pour toute urgence.',
  eyebrow = 'BK Débouchage',
}) {
  return (
    <Section className="flex min-h-[50vh] items-center">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" />
        <div className="mt-8 flex justify-center gap-4">
          <Button to={ROUTES.HOME} variant="secondary" size="md">
            Retour à l&apos;accueil
          </Button>
          <Button to={ROUTES.CONTACT} variant="outline" size="md">
            Nous contacter
          </Button>
        </div>
      </Container>
    </Section>
  );
}
