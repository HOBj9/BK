import Skeleton from '@/components/ui/Skeleton';
import Container from '@/components/ui/Container';

export default function SkeletonHero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-linear-to-br from-brand-950/90 via-brand-900/95 to-slate-950" aria-hidden />
      <Container className="relative flex min-h-[90vh] items-center py-20">
        <div className="grid w-full gap-14 lg:grid-cols-2">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48 rounded-full bg-slate-700/50" />
            <Skeleton className="h-14 w-full max-w-lg bg-slate-700/50" />
            <Skeleton className="h-14 w-4/5 max-w-md bg-slate-700/50" />
            <Skeleton className="h-6 w-full max-w-xl bg-slate-700/40" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-14 w-44 rounded-xl bg-slate-700/50" />
              <Skeleton className="h-14 w-40 rounded-xl bg-slate-700/50" />
            </div>
            <div className="flex flex-wrap gap-3 pt-6">
              <Skeleton className="h-9 w-36 rounded-full bg-slate-700/40" />
              <Skeleton className="h-9 w-40 rounded-full bg-slate-700/40" />
              <Skeleton className="h-9 w-32 rounded-full bg-slate-700/40" />
            </div>
          </div>
          <div className="hidden space-y-5 lg:block">
            <Skeleton className="h-48 w-full rounded-3xl bg-slate-700/40" />
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="h-24 rounded-2xl bg-slate-700/40" />
              <Skeleton className="h-24 rounded-2xl bg-slate-700/40" />
              <Skeleton className="h-24 rounded-2xl bg-slate-700/40" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
