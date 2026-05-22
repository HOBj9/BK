import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/constants/animations';
import Card from '@/components/ui/Card';
import { SkeletonContentCard } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';

const CARD_STAGGER_MS = 90;

function ContentSectionCard({ section, index }) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);

  if (pageLoading || cardLoading) {
    return <SkeletonContentCard />;
  }

  return (
    <motion.div variants={staggerItem}>
      <Card className="h-full" hover={false}>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{section.title}</h3>
        <p className="mt-3 whitespace-pre-line leading-relaxed text-slate-600 dark:text-slate-300">
          {section.description}
        </p>
      </Card>
    </motion.div>
  );
}

export default function ContentSections({ sections, columns = '3' }) {
  const gridClass =
    columns === '2'
      ? 'grid gap-6 sm:grid-cols-2'
      : 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={gridClass}
    >
      {sections.map((section, index) => (
        <ContentSectionCard key={section.title} section={section} index={index} />
      ))}
    </motion.div>
  );
}
