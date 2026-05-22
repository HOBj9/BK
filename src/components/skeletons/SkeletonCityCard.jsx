import { motion } from 'framer-motion';
import Skeleton from '@/components/ui/Skeleton';
import Card from '@/components/ui/Card';
import { staggerItem } from '@/constants/animations';

export default function SkeletonCityCard() {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <Card className="h-full" padding="lg" hover={false}>
        <div className="flex items-start gap-4">
          <Skeleton className="h-12 w-12 shrink-0 rounded-xl" />
          <div className="flex-1">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="mt-2 h-4 w-24" />
          </div>
        </div>
        <Skeleton className="mt-5 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-4/5" />
        <Skeleton className="mt-6 h-5 w-36 rounded-lg" />
      </Card>
    </motion.div>
  );
}
