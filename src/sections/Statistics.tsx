import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/shared/SectionHeading';
import StatCard from '../components/cards/StatCard';
import { statistics } from '../data/statistics';
import { staggerContainer } from '../constants/animations';
import { ANCHORS } from '../constants/routes';

export default function Statistics() {
  return (
    <Section id={ANCHORS.STATS} variant="dark">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 0% 100%, rgba(56,189,248,0.2) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 100% 0%, rgba(2,132,199,0.25) 0%, transparent 45%)',
        }}
        aria-hidden
      />
      <div className="pattern-grid absolute inset-0 opacity-20" aria-hidden />
      <div className="blob-accent left-1/2 top-0 h-64 w-96 -translate-x-1/2 bg-brand-500/15" aria-hidden />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Nos chiffres"
          title="Une expertise prouvée sur le terrain"
          description="Des milliers d'interventions réussies et une équipe disponible en permanence pour vos urgences."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {statistics.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
