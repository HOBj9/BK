import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { heroConfig } from './hero.config';
import { dashboardCard, heroFadeUpTight, heroFloat, heroStagger } from './HeroAnimations';
import { useResponseTimer } from './useResponseTimer';

type HeroDashboardProps = {
  className?: string;
};

export default function HeroDashboard({ className = '' }: HeroDashboardProps) {
  const { intervention, dashboardStats, serviceWidgets, mapPins } = heroConfig;
  const timer = useResponseTimer(intervention.etaMinutes);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const glowX = useTransform(mouseX, [-0.5, 0.5], [20, 80]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [20, 80]);
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(56,189,248,0.25) 0%, transparent 55%)`;

  return (
    <motion.div
      className={`perspective-distant ${className}`}
      variants={dashboardCard}
      initial="hidden"
      animate="show"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
    >
      <motion.div
        variants={heroFloat}
        initial="initial"
        animate="animate"
        className="hero-dashboard-panel hero-glow-ring relative overflow-hidden rounded-3xl p-5 sm:p-6 lg:p-7"
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: glowBackground }}
          aria-hidden
        />

        <div className="relative flex items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
              Centre d&apos;intervention
            </p>
            <p className="mt-1 text-sm font-medium text-slate-300">Tableau de bord en direct</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emergency-500/40 bg-emergency-600/20 px-3 py-1.5">
            <motion.span
              className="h-2 w-2 rounded-full bg-emergency-500"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden
            />
            <span className="text-xs font-bold uppercase tracking-wide text-emergency-300">
              {intervention.status}
            </span>
          </div>
        </div>

        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
          className="relative mt-5 space-y-4"
        >
          <motion.div
            variants={heroFadeUpTight}
            className="overflow-hidden rounded-2xl border border-white/15 bg-white/95 p-5 shadow-2xl shadow-black/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-600">
                  Intervention active
                </p>
                <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{intervention.title}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
                  <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                  {intervention.client}
                </p>
              </div>
              <div className="rounded-xl bg-emergency-50 px-3 py-2 text-center ring-1 ring-emergency-200">
                <p className="text-[10px] font-semibold uppercase text-emergency-700">ETA</p>
                <p className="font-mono text-lg font-bold tabular-nums text-emergency-600">{timer}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
              <span className="text-sm text-slate-600">Technicien assigné</span>
              <span className="text-sm font-bold text-brand-700">{intervention.technician}</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {dashboardStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={heroFadeUpTight}
                whileHover={{ y: -3, scale: 1.02 }}
                className={`rounded-xl p-3 text-center transition-shadow sm:p-4 ${
                  stat.accent
                    ? 'bg-linear-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-900/40'
                    : 'border border-white/10 bg-white/5 text-white backdrop-blur-sm'
                }`}
              >
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  {stat.value}
                  {stat.unit && <span className="text-xs font-semibold opacity-80">{stat.unit}</span>}
                </p>
                <p className="mt-0.5 text-[10px] font-medium opacity-90 sm:text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={heroFadeUpTight} className="grid grid-cols-3 gap-2">
            {serviceWidgets.map((widget) => {
              const Icon = widget.icon;
              return (
                <div
                  key={widget.id}
                  className={`flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-center transition-colors ${
                    widget.status === 'active'
                      ? 'border-brand-400/50 bg-brand-500/20 text-brand-100'
                      : 'border-white/10 bg-white/5 text-slate-400'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  <span className="text-[10px] font-semibold leading-tight">{widget.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            variants={heroFadeUpTight}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-950/60 p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Zone couverte</p>
              <Navigation className="h-4 w-4 text-brand-400" aria-hidden />
            </div>
            <svg viewBox="0 0 200 100" className="mt-3 h-24 w-full sm:h-28" aria-hidden>
              <defs>
                <linearGradient id="mapGlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M20 70 Q60 30 100 50 T180 40"
                fill="none"
                stroke="url(#mapGlow)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {mapPins.map((pin) => (
                <g key={pin.label}>
                  <motion.circle
                    cx={pin.x * 2}
                    cy={pin.y}
                    r="4"
                    fill="#38bdf8"
                    animate={{ r: [4, 6, 4], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: pin.x * 0.01 }}
                  />
                  <circle cx={pin.x * 2} cy={pin.y} r="10" fill="#38bdf8" opacity="0.15" />
                </g>
              ))}
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
