import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/shared/SectionHeading';
import CityCard from '../components/cards/CityCard';
import { cities } from '../data/cities';
import { staggerContainer } from '../constants/animations';
import { ANCHORS } from '../constants/routes';

export default function CoverageAreas() {
  return (
    <Section id={ANCHORS.ZONES} variant="light">
      <Container>
        <SectionHeading
          eyebrow="Zones d'intervention"
          title="Nous intervenons près de chez vous"
          description="Nous servons Montréal et la grande région métropolitaine — intervention rapide à domicile ou en entreprise."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cities.map((city, index) => (
            <CityCard key={city.slug} city={city} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
