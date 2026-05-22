import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants/animations';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <motion.header
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={fadeInUp.transition}
      className={`mb-14 flex max-w-3xl flex-col sm:mb-16 lg:mb-20 ${alignClass}`}
    >
      {eyebrow && (
        <p className={light ? 'eyebrow-light mb-4' : 'eyebrow mb-4'}>{eyebrow}</p>
      )}
      <h2
        className={`text-balance font-bold tracking-tight ${
          light
            ? 'text-3xl text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]'
            : 'heading-2'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-[1.7] ${
            light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </motion.header>
  );
}
