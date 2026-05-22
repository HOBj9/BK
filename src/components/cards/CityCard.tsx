import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { SkeletonCityCard } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import { ROUTES } from '../../constants/routes';
import { staggerItem } from '../../constants/animations';
import type { City } from '@/types';

const CARD_STAGGER_MS = 90;

type CityCardProps = {
  city: City;
  index?: number;
};

export default function CityCard({ city, index = 0 }: CityCardProps) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);

  if (pageLoading || cardLoading) {
    return <SkeletonCityCard />;
  }

  return (
    <motion.div variants={staggerItem} className="h-full">
      <Card className="h-full" padding="lg">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-brand-700 text-white shadow-md shadow-brand-900/20">
            <MapPin className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">{city.name}</h3>
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{city.region}</p>
          </div>
        </div>
        <p className="mt-5 line-clamp-2 leading-relaxed text-slate-600 dark:text-slate-300">{city.description}</p>
        <Link
          to={ROUTES.CITY(city.slug)}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700 transition-all duration-300 hover:gap-3 hover:text-brand-900 dark:text-brand-300 dark:hover:text-brand-200"
        >
          Voir les services
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Card>
    </motion.div>
  );
}
