import { motion } from 'framer-motion';
import Skeleton from '@/components/ui/Skeleton';
import Card from '@/components/ui/Card';
import { staggerItem } from '@/constants/animations';

export default function SkeletonServiceCard() {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <Card className="flex h-full flex-col" padding="lg" hover={false}>
        <Skeleton className="mb-5 h-14 w-14 rounded-2xl" />
        <Skeleton className="h-7 w-3/4" />
        <Skeleton className="mt-3 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-5/6" />
        <Skeleton className="mt-2 h-4 w-4/6" />
        <Skeleton className="mt-7 h-5 w-32 rounded-lg" />
      </Card>
    </motion.div>
  );
}
