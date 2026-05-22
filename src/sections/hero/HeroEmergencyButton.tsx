import { useRef, useState, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { heroSpring } from './HeroAnimations';

type HeroEmergencyButtonProps = {
  href: string;
  children: string;
};

export default function HeroEmergencyButton({ href, children }: HeroEmergencyButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
    setOffset({ x, y });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className="hero-emergency-glow group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-linear-to-r from-emergency-600 via-emergency-600 to-emergency-700 px-8 py-4 text-base font-bold tracking-tight text-white focus-ring"
      style={{ x: offset.x, y: offset.y }}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={heroSpring}
      aria-label={children}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden
      />
      <motion.span
        className="pointer-events-none absolute -inset-1 rounded-xl bg-emergency-500/40 blur-xl"
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        aria-hidden
      />
      <Phone className="relative h-5 w-5 shrink-0" aria-hidden />
      <span className="relative">{children}</span>
    </motion.a>
  );
}
