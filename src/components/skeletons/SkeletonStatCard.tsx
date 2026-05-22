import { motion } from 'framer-motion';
import Skeleton from '@/components/ui/Skeleton';
import { staggerItem } from '@/constants/animations';

export default function SkeletonStatCard() {
  return (
    <motion.div
      variants={staggerItem}
      className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-md"
    >
      <Skeleton className="mx-auto h-12 w-24 rounded-xl bg-slate-600/40" />
      <Skeleton className="mx-auto mt-4 h-6 w-32 rounded-lg bg-slate-600/40" />
      <Skeleton className="mx-auto mt-2 h-4 w-40 rounded-lg bg-slate-600/30" />
    </motion.div>
  );
}
