import { motion } from 'framer-motion';
import { Phone, Shield, Clock, CheckCircle, Zap } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/buttons/Button';
import TrustBadge from '../components/shared/TrustBadge';
import { site } from '../data/site';
import { getPhoneHref } from '../utils/phone';
import { ROUTES } from '../constants/routes';
import { easePremium, floatAnimation } from '../constants/animations';

const badges = [
  { icon: Clock, text: '24h/24 — 7j/7' },
  { icon: Shield, text: 'Techniciens certifiés' },
  { icon: CheckCircle, text: 'Devis transparent' },
];

const heroStats = [
  { value: '24/7', label: 'Service urgence', accent: true },
  { value: '15+', label: "Ans d'expérience", accent: false },
  { value: '<60', unit: 'min', label: 'Délai moyen', accent: true },
];

export default function Hero() {
  const phoneHref = getPhoneHref(site.phone);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-hero sm:min-h-[88vh]">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-950/90 via-brand-900/95 to-slate-950" aria-hidden />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 15% 20%, rgba(56,189,248,0.35) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 75%, rgba(2,132,199,0.3) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(239,68,68,0.12) 0%, transparent 45%)',
        }}
        aria-hidden
      />
      <div className="pattern-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-linear-to-t from-brand-950/80 via-transparent to-brand-950/30" aria-hidden />

      {/* Floating accent orbs */}
      <motion.div
        animate={floatAnimation.animate}
        transition={floatAnimation.transition}
        className="blob-accent -left-20 top-1/4 h-72 w-72 bg-brand-400/25"
        aria-hidden
      />
      <motion.div
        animate={floatAnimation.animate}
        transition={{ ...floatAnimation.transition, delay: 1.5 }}
        className="blob-accent right-0 top-1/3 h-96 w-96 bg-emergency-500/15"
        aria-hidden
      />
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="blob-accent bottom-20 left-1/3 h-48 w-48 bg-accent-500/10"
        aria-hidden
      />

      <Container className="relative flex min-h-[90vh] items-center py-20 sm:py-24 lg:min-h-[88vh] lg:py-28">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: easePremium }}
          >
            <div className="ribbon-emergency mb-6 w-fit">
              <Zap className="h-3.5 w-3.5" aria-hidden />
              Urgence — Intervention rapide
            </div>

            <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              {site.shortDescription}{' '}
              <span className="text-brand-300">{site.name}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-[1.75] text-slate-300/95 sm:text-xl">
              {site.tagline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                href={phoneHref}
                variant="emergency"
                size="lg"
                icon={Phone}
                pulse
              >
                Appeler — {site.phoneDisplay}
              </Button>
              <Button to={ROUTES.CONTACT} variant="glass" size="lg">
                Demande de devis gratuit
              </Button>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {badges.map((badge, i) => (
                <TrustBadge key={badge.text} {...badge} delay={0.4 + i * 0.1} />
              ))}
            </ul>
          </motion.div>

          {/* Premium stats panel — desktop */}
          <motion.div
            initial={{ scale: 0.96, y: 16 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easePremium }}
            className="relative hidden lg:block"
          >
            <div className="glass-dark rounded-3xl border border-white/10 p-8 shadow-2xl shadow-black/20">
              <motion.div
                initial={{ y: 12 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="rounded-2xl bg-white p-7 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
                    Intervention en cours
                  </p>
                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-emergency-500" aria-hidden />
                </div>
                <p className="mt-3 text-2xl font-bold text-slate-900">Débouchage WC</p>
                <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                  <span className="text-sm text-slate-600">Délai estimé</span>
                  <span className="text-lg font-bold text-emergency-600">&lt; 60 min</span>
                </div>
              </motion.div>

              <div className="mt-5 grid grid-cols-3 gap-4">
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ y: 8 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.65 + i * 0.1, duration: 0.5 }}
                    className={`rounded-2xl p-4 text-center ${
                      stat.accent
                        ? 'bg-linear-to-br from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-900/30'
                        : 'border border-white/15 bg-white/10 text-white backdrop-blur-sm'
                    }`}
                  >
                    <p className="text-2xl font-bold tracking-tight">
                      {stat.value}
                      {stat.unit && (
                        <span className="text-sm font-semibold opacity-80">{stat.unit}</span>
                      )}
                    </p>
                    <p className="mt-1 text-xs font-medium opacity-90">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile stats strip */}
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-3 gap-3 lg:hidden"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl px-3 py-4 text-center text-white"
              >
                <p className="text-xl font-bold">
                  {stat.value}
                  {stat.unit && <span className="text-xs">{stat.unit}</span>}
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
