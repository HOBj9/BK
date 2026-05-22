import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroSpring } from './HeroAnimations';

type HeroGlassButtonProps = {
  to: string;
  children: string;
};

export default function HeroGlassButton({ to, children }: HeroGlassButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} transition={heroSpring}>
      <Link
        to={to}
        className="hero-glow-ring group relative inline-flex items-center justify-center rounded-xl border border-brand-400/40 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition-colors hover:border-brand-300/60 hover:bg-white/10 focus-ring"
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-brand-400/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden
        />
        <span className="relative">{children}</span>
      </Link>
    </motion.div>
  );
}
