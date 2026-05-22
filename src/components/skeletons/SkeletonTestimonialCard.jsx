import { motion } from 'framer-motion';
import Skeleton from '@/components/ui/Skeleton';
import Card from '@/components/ui/Card';
import { staggerItem } from '@/constants/animations';

export default function SkeletonTestimonialCard() {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <Card hover={false} className="flex h-full flex-col" padding="lg">
        <div className="mb-5 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-4 rounded-sm" />
          ))}
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-11/12" />
        <div className="mt-6 border-t border-slate-100 pt-5">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="mt-2 h-4 w-20" />
        </div>
      </Card>
    </motion.div>
  );
}
