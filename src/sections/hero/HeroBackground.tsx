import { motion } from 'framer-motion';
import { heroPulseGlow } from './HeroAnimations';

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-linear-to-br from-[#030712] via-brand-950 to-[#0a1628]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 55% 65% at 78% 45%, rgba(56,189,248,0.22) 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at 15% 35%, rgba(14,165,233,0.14) 0%, transparent 50%)
          `,
        }}
      />
      <div className="hero-grid-animated absolute inset-0 opacity-60" />
      <div className="hero-noise absolute inset-0" />

      <motion.div
        variants={heroPulseGlow}
        initial="initial"
        animate="animate"
        className="blob-accent -right-20 top-1/4 size-96 bg-brand-400/15 lg:size-112"
      />

      <div className="absolute inset-0 bg-linear-to-t from-[#030712]/90 via-transparent to-[#030712]/30" />
      <div className="absolute inset-0 bg-linear-to-r from-[#030712]/70 via-transparent to-transparent lg:max-w-[55%]" />
    </div>
  );
}
