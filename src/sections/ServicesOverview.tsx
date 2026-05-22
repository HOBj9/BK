import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/shared/SectionHeading';
import ServiceCard from '../components/cards/ServiceCard';
import Button from '../components/buttons/Button';
import { services } from '../data/services';
import { ROUTES, ANCHORS } from '../constants/routes';
import { staggerContainer } from '../constants/animations';

export default function ServicesOverview() {
  return (
    <Section id={ANCHORS.SERVICES} variant="muted">
      <Container>
        <SectionHeading
          eyebrow="Nos services"
          title="Solutions complètes de débouchage et canalisation"
          description="Nettoyage de drains, débouchage d'urgence et solutions complètes pour Montréal et la RMM."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <Button to={ROUTES.SERVICES} variant="outline" size="lg">
            Voir tous les services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
