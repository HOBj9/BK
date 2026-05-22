import Skeleton from '@/components/ui/Skeleton';
import { usePageLoading } from '@/context/PageLoadContext';
import { useCardReveal } from '@/hooks/useCardReveal';

export default function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
  isLink,
  index,
}) {
  const { isLoading: pageLoading } = usePageLoading();
  const cardLoading = useCardReveal(pageLoading ? 0 : 150 + index * 80);

  if (pageLoading || cardLoading) {
    return <Skeleton className="h-28 w-full rounded-2xl" />;
  }

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/90">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        {isLink && href ? (
          <a
            href={href}
            className="mt-1 block font-semibold text-slate-900 hover:text-brand-700 dark:text-slate-100 dark:hover:text-brand-300"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{value}</p>
        )}
      </div>
    </div>
  );
}
