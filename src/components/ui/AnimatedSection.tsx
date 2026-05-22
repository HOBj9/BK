import type { ElementType, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants/animations';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  as?: ElementType;
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
  as: Tag = 'section',
}: AnimatedSectionProps) {
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
