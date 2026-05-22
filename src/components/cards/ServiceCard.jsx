import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { SkeletonServiceCard } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import { ROUTES } from '../../constants/routes';
import { staggerItem } from '../../constants/animations';

const CARD_STAGGER_MS = 90;

export default function ServiceCard({ service, index = 0 }) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);

  if (pageLoading || cardLoading) {
    return <SkeletonServiceCard />;
  }

  const Icon = service.icon;

  return (
    <motion.div variants={staggerItem} className="h-full">
      <Card className="flex h-full flex-col" padding="lg">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand-100 to-brand-50 text-brand-700 shadow-inner ring-1 ring-brand-200/50 transition-transform duration-500 group-hover:scale-105">
          <Icon className="h-7 w-7" aria-hidden />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-[1.35rem]">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 leading-[1.65] text-slate-600">
          {service.shortDescription}
        </p>
        <Link
          to={service.pagePath ?? ROUTES.SERVICE(service.slug)}
          className="mt-7 inline-flex items-center gap-2 rounded-lg font-semibold text-brand-700 transition-all duration-300 hover:gap-3 hover:text-brand-900"
        >
          En savoir plus
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Card>
    </motion.div>
  );
}
