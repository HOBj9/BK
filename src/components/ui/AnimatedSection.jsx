import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants/animations';

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
  as: Tag = 'section',
}) {
  return (
    <Tag id={id} className={className}>
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.whileInView}
        viewport={fadeInUp.viewport}
        transition={{ ...fadeInUp.transition, delay }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
