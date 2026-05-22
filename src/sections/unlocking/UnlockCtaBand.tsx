import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import { site } from '@/data/site';
import { ROUTES } from '@/constants/routes';
import { getPhoneHref } from '@/utils/phone';
import { unlockCtaRise, unlockPulseIn, unlockStagger, unlockViewport } from './unlock.animations';

export default function UnlockCtaBand() {
  const phoneHref = getPhoneHref(site.phone);

  return (
    <section className="pb-20 pt-6 md:pb-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={unlockViewport}
          variants={unlockStagger}
          className="relative overflow-hidden rounded-3xl bg-linear-to-r from-emergency-700 via-emergency-600 to-orange-700 p-8 shadow-2xl shadow-emergency-900/30 md:flex md:items-center md:justify-between md:gap-10 md:p-12"
        >
          <motion.div
            className="pointer-events-none absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <motion.div variants={unlockCtaRise} className="relative max-w-xl">
            <motion.p variants={unlockPulseIn} className="text-xs font-bold uppercase tracking-[0.2em] text-emergency-100">
              Urgence 24h/24
            </motion.p>
            <motion.h2 variants={unlockPulseIn} className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Un drain bouché ? On intervient maintenant.
            </motion.h2>
            <motion.p variants={unlockPulseIn} className="mt-3 text-emergency-50/95">
              BK Entretien — débouchage professionnel à Montréal. Devis transparent avant travaux.
            </motion.p>
          </motion.div>

          <motion.div variants={unlockPulseIn} className="relative mt-8 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
            <motion.a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-emergency-700 shadow-xl focus-ring"
              whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="h-5 w-5" aria-hidden />
              {site.phoneDisplay}
            </motion.a>
            <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
              <Link
                to={ROUTES.CONTACT}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/50 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 focus-ring"
              >
                Contactez-nous
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
