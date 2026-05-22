import { motion } from 'framer-motion';
import { SkeletonStatCard } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import { staggerItem } from '../../constants/animations';

import type { Statistic } from '@/types';

const CARD_STAGGER_MS = 90;

type StatCardProps = {
  stat: Statistic;
  index?: number;
};

export default function StatCard({ stat, index = 0 }: StatCardProps) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);

  if (pageLoading || cardLoading) {
    return <SkeletonStatCard />;
  }

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-7 text-center backdrop-blur-md transition-shadow duration-500 hover:border-brand-400/30 hover:shadow-xl hover:shadow-brand-500/10"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-400/0 to-brand-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <p className="relative text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {stat.value}
        {stat.unit && (
          <span className="ml-1 text-xl font-semibold text-brand-300">{stat.unit}</span>
        )}
      </p>
      <p className="relative mt-3 text-lg font-semibold text-white">{stat.label}</p>
      <p className="relative mt-1.5 text-sm text-slate-400">{stat.description}</p>
    </motion.div>
  );
}
