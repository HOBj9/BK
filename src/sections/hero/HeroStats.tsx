import { motion } from 'framer-motion';
import { heroConfig } from './hero.config';
import { heroFadeUpTight, heroStagger } from './HeroAnimations';

export default function HeroStats() {
  const { bottomStats } = heroConfig;

  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="hero-glow-ring mt-12 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-brand-950/50 p-4 backdrop-blur-xl sm:mt-14 sm:grid-cols-4 sm:gap-4 sm:p-5 lg:mt-16"
    >
      {bottomStats.map((stat) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            variants={heroFadeUpTight}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`hero-stat-glow group flex items-center gap-3 rounded-xl border border-white/10 p-3 transition-all sm:p-4 ${
              stat.accent ? 'bg-brand-600/15' : 'bg-white/5'
            }`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                stat.accent
                  ? 'bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/30'
                  : 'bg-white/10 text-brand-300'
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="font-display text-lg font-bold leading-none text-white sm:text-xl">
                {stat.value}
                {stat.suffix && (
                  <span className="text-sm font-semibold text-brand-300">{stat.suffix}</span>
                )}
              </p>
              <p className="mt-1 truncate text-[10px] font-medium uppercase tracking-wide text-slate-400 sm:text-xs">
                {stat.label}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
