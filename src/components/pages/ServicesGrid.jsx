import { motion } from 'framer-motion';
import ServiceCard from '@/components/cards/ServiceCard';
import { services } from '@/data/services';
import { staggerContainer } from '@/constants/animations';
import PageSection from './PageSection';

export default function ServicesGrid() {
  return (
    <PageSection>
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
    </PageSection>
  );
}
