import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/shared/SectionHeading';
import Card from '../components/ui/Card';
import LazyImage from '../components/ui/LazyImage';
import { whyUsItems } from '../data/whyUs';
import { staggerContainer, staggerItem } from '../constants/animations';
import { ANCHORS } from '../constants/routes';

export default function WhyChooseUs() {
  return (
    <Section id={ANCHORS.WHY_US} variant="light">
      <Container>
        <SectionHeading
          eyebrow="Pourquoi nous choisir"
          title="Services de plomberie experts à Montréal"
          description="BK Entretien — déblocage, nettoyage de drains et intervention d'urgence 24/7."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyUsItems.map(({ icon: Icon, title, description, image }) => (
            <motion.div key={title} variants={staggerItem}>
              <Card className="h-full overflow-hidden">
                {image && (
                  <LazyImage
                    src={image}
                    alt={title}
                    className="mb-4 h-40 w-full object-contain object-center"
                    wrapperClassName="mb-4 w-full"
                    skeletonClassName="mb-4 h-40 w-full rounded-xl"
                  />
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
