import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkeletonFAQItem } from '@/components/skeletons';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';
import { easePremium } from '../../constants/animations';

const CARD_STAGGER_MS = 70;

type FAQItemProps = {
  question: string;
  answer: string;
  index?: number;
};

export default function FAQItem({ question, answer, index = 0 }: FAQItemProps) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : index * CARD_STAGGER_MS);
  const [open, setOpen] = useState(false);

  if (pageLoading || cardLoading) {
    return <SkeletonFAQItem />;
  }


  return (
    <article
      className={`card-premium overflow-hidden transition-all duration-500 ${
        open
          ? 'border-brand-300/50 shadow-lg shadow-brand-900/8 dark:border-brand-500/40 dark:shadow-brand-900/20'
          : 'card-premium-hover'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left focus-ring rounded-2xl"
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
          {question}
        </span>
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-all duration-300 ${
            open ? 'rotate-180 bg-brand-100' : ''
          }`}
        >
          <ChevronDown className="h-5 w-5" aria-hidden />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easePremium }}
            className="overflow-hidden"
          >
            <p className="border-t border-slate-100/80 px-7 pb-6 pt-4 leading-[1.7] text-slate-600 dark:border-slate-700/80 dark:text-slate-300">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
