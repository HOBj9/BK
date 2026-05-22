import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import { site } from '@/data/site';
import { ROUTES } from '@/constants/routes';
import { getPhoneHref } from '@/utils/phone';
import { drainCtaPanel, drainRippleIn, drainStaggerSteps, drainViewport } from './drain.animations';

export default function DrainCtaBand() {
  const phoneHref = getPhoneHref(site.phone);

  return (
    <section className="pb-20 pt-4 md:pb-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={drainViewport}
          variants={drainStaggerSteps}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-teal-700 via-brand-800 to-cyan-900 p-8 text-white shadow-2xl shadow-teal-900/25 md:flex md:items-center md:justify-between md:gap-10 md:p-12"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl"
            aria-hidden
          />
          <motion.div variants={drainCtaPanel} className="relative max-w-xl">
            <motion.p variants={drainRippleIn} className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
              Intervention rapide
            </motion.p>
            <motion.h2 variants={drainRippleIn} className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Besoin d&apos;un nettoyage de drains maintenant ?
            </motion.h2>
            <motion.p variants={drainRippleIn} className="mt-3 text-teal-100/90">
              Nos techniciens BK Entretien interviennent avec équipement haute pression — devis clair avant travaux.
            </motion.p>
          </motion.div>

          <motion.div variants={drainRippleIn} className="relative mt-8 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
            <motion.a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-teal-900 shadow-xl transition-colors hover:bg-teal-50 focus-ring"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="h-5 w-5" aria-hidden />
              {site.phoneDisplay}
            </motion.a>
            <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
              <Link
                to={ROUTES.CONTACT}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-ring"
              >
                Demander un devis
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
