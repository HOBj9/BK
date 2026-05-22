import { motion } from 'framer-motion';
import Skeleton from '@/components/ui/Skeleton';
import Card from '@/components/ui/Card';
import { staggerItem } from '@/constants/animations';

export default function SkeletonContentCard() {
  return (
    <motion.div variants={staggerItem}>
      <Card hover={false} className="h-full">
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="mt-3 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-4/5" />
      </Card>
    </motion.div>
  );
}
