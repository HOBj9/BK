import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { getPhoneHref } from '@/utils/phone';
import { heroConfig } from './hero.config';
import HeroBackground from './HeroBackground';
import HeroTechnician from './HeroTechnician';
import HeroEmergencyButton from './HeroEmergencyButton';
import HeroGlassButton from './HeroGlassButton';
import { heroFadeUp, heroLineReveal, heroStagger } from './HeroAnimations';
import './hero.css';

export default function Hero() {
  const { eyebrow, headline, subheadline, primaryCta, secondaryCta, trustLine } = heroConfig;
  const phoneHref = getPhoneHref(heroConfig.phone);

  return (
    <section
      className="hero-display relative min-h-svh overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <Container className="relative z-10 flex min-h-svh items-center py-24 sm:py-28 lg:py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="show"
            className="max-w-xl text-center lg:text-left"
          >
            <motion.p
              variants={heroFadeUp}
              className="mb-5 inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-200"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={heroLineReveal}
              className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={heroFadeUp}
              className="mt-5 text-base leading-relaxed text-slate-300/90 sm:text-lg"
            >
              {subheadline}
            </motion.p>

            <motion.p
              variants={heroFadeUp}
              className="mt-4 text-sm font-medium text-slate-400"
            >
              {trustLine}
            </motion.p>

            <motion.div
              variants={heroFadeUp}
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <HeroEmergencyButton href={phoneHref}>{primaryCta.label}</HeroEmergencyButton>
              <HeroGlassButton to={secondaryCta.to}>{secondaryCta.label}</HeroGlassButton>
            </motion.div>
          </motion.div>

          <HeroTechnician />
        </div>
      </Container>
    </section>
  );
}
