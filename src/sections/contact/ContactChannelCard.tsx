import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import Skeleton from '@/components/ui/Skeleton';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import { contactChannelIn } from './contact.animations';

type ContactChannelCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string | null;
  index: number;
  accent?: 'brand' | 'emergency';
};

export default function ContactChannelCard({
  icon: Icon,
  label,
  value,
  href,
  index,
  accent = 'brand',
}: ContactChannelCardProps) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : 120 + index * 70);

  if (pageLoading || cardLoading) {
    return <Skeleton className="h-[88px] w-full rounded-2xl" />;
  }

  const accentClass =
    accent === 'emergency'
      ? 'bg-linear-to-br from-emergency-500 to-emergency-600 text-white'
      : 'bg-linear-to-br from-brand-500 to-brand-700 text-white';

  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-base font-bold text-slate-900 dark:text-white">{value}</p>
    </>
  );

  return (
    <motion.div
      variants={contactChannelIn}
      whileHover={{ x: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className="contact-channel-card flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-slate-700/60 dark:bg-slate-800/80"
    >
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-md ${accentClass}`}>
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      {href ? (
        <a href={href} className="min-w-0 flex-1 transition-colors hover:text-brand-600 dark:hover:text-brand-400">
          {content}
        </a>
      ) : (
        <div className="min-w-0 flex-1">{content}</div>
      )}
    </motion.div>
  );
}
