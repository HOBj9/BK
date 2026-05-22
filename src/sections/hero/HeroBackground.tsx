import { motion } from 'framer-motion';
import LazyBackground from '@/components/ui/LazyBackground';
import { pageBanners } from '@/data/media';
import { heroPulseGlow } from './HeroAnimations';

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 3),
  delay: `${(i % 8) * 0.7}s`,
  dur: `${5 + (i % 5)}s`,
}));

function PipeNetwork() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="heroPipeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        className="hero-pipe-line hero-energy-line"
        d="M0 400 Q300 200 600 400 T1200 350"
        strokeDasharray="120 80"
      />
      <path
        className="hero-pipe-line hero-energy-line"
        d="M0 550 Q400 650 800 500 T1200 600"
        strokeDasharray="100 60"
        style={{ animationDelay: '1.2s' }}
      />
      <path
        className="hero-pipe-line"
        d="M200 0 L200 800 M500 0 L500 800 M900 0 L900 800"
        strokeDasharray="4 12"
        opacity="0.15"
      />
      <circle cx="600" cy="400" r="120" fill="url(#heroPipeGradient)" opacity="0.04" />
    </svg>
  );
}

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <LazyBackground
        src={pageBanners.home}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-18 saturate-105"
        eager
      />
      <div className="absolute inset-0 bg-linear-to-br from-[#030712]/95 via-brand-950/92 to-[#0a1628]/95" />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 70% at 10% 20%, rgba(56,189,248,0.28) 0%, transparent 55%),
            radial-gradient(ellipse 70% 60% at 90% 30%, rgba(14,165,233,0.22) 0%, transparent 50%),
            radial-gradient(ellipse 50% 45% at 75% 85%, rgba(239,68,68,0.14) 0%, transparent 45%),
            radial-gradient(ellipse 40% 35% at 20% 80%, rgba(56,189,248,0.1) 0%, transparent 40%)
          `,
        }}
      />
      <div className="hero-grid-animated absolute inset-0" />
      <div className="pattern-grid absolute inset-0 opacity-40" />
      <PipeNetwork />
      <div className="hero-noise absolute inset-0" />

      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="hero-particle absolute rounded-full bg-brand-300/80"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            ['--delay' as string]: p.delay,
            ['--dur' as string]: p.dur,
          }}
        />
      ))}

      <motion.div
        variants={heroPulseGlow}
        initial="initial"
        animate="animate"
        className="blob-accent -left-24 top-1/4 h-96 w-96 bg-brand-400/20"
      />
      <motion.div
        variants={heroPulseGlow}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.4 }}
        className="blob-accent -right-16 top-1/3 size-112 bg-brand-500/15"
      />
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="blob-accent bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 bg-emergency-600/20"
      />

      <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-transparent to-[#030712]/40" />
      <div className="absolute inset-0 bg-linear-to-r from-[#030712]/80 via-transparent to-[#030712]/60" />
    </div>
  );
}
