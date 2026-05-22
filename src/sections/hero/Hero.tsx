import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import { getPhoneHref } from '@/utils/phone';
import { heroConfig } from './hero.config';
import HeroBackground from './HeroBackground';
import HeroDashboard from './HeroDashboard';
import HeroStats from './HeroStats';
import HeroEmergencyButton from './HeroEmergencyButton';
import HeroGlassButton from './HeroGlassButton';
import {
  heroCheckItem,
  heroLineReveal,
  heroStagger,
  heroFadeUp,
} from './HeroAnimations';
import './hero.css';

export default function Hero() {
  const {
    eyebrow,
    headlineLines,
    headlineAccent,
    subheadline,
    phone,
    primaryCta,
    secondaryCta,
    trustItems,
  } = heroConfig;

  const phoneHref = getPhoneHref(phone);

  return (
    <section
      className="hero-display relative min-h-svh overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <Container className="relative z-10 flex min-h-svh flex-col justify-center py-24 sm:py-28 lg:py-32">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
          {/* LEFT — Typography & CTAs */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div variants={heroFadeUp} className="ribbon-emergency mb-6 w-fit shadow-emergency-600/40">
              <Zap className="h-3.5 w-3.5" aria-hidden />
              {eyebrow}
            </motion.div>

            <h1 id="hero-heading" className="space-y-1">
              {headlineLines.map((line) => (
                <motion.span
                  key={line}
                  variants={heroLineReveal}
                  className="block text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-6xl"
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                variants={heroLineReveal}
                className="mt-2 block bg-linear-to-r from-brand-300 via-brand-400 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl"
              >
                {headlineAccent}
              </motion.span>
            </h1>

            <motion.p
              variants={heroFadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/95 sm:text-lg lg:text-xl"
            >
              {subheadline}
            </motion.p>

            <motion.ul
              variants={heroStagger}
              className="mt-8 grid gap-2.5 sm:grid-cols-2"
              aria-label="Garanties de service"
            >
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.text}
                    variants={heroCheckItem}
                    className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-200 backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                    <span>{item.text}</span>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              variants={heroFadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <HeroEmergencyButton href={phoneHref}>{primaryCta.label}</HeroEmergencyButton>
              <HeroGlassButton to={secondaryCta.to}>{secondaryCta.label}</HeroGlassButton>
            </motion.div>
          </motion.div>

          {/* RIGHT — Dashboard */}
          <HeroDashboard className="w-full max-w-xl justify-self-center lg:max-w-none lg:justify-self-end" />
        </div>

        <HeroStats />
      </Container>
    </section>
  );
}
