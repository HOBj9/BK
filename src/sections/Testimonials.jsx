import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/shared/SectionHeading';
import TestimonialCard from '../components/cards/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { staggerContainer } from '../constants/animations';
export default function Testimonials({ standalone = false }) {
  return (
    <Section id={standalone ? undefined : 'temoignages'} variant="default">
      <Container>
        <SectionHeading
          eyebrow="Témoignages"
          title="Ce que disent nos clients"
          description="La satisfaction de nos clients est notre meilleure publicité."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.name} testimonial={t} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
