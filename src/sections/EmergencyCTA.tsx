import { Phone, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/buttons/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { site } from '../data/site';
import { getPhoneHref } from '../utils/phone';
import { staggerContainer, staggerItem } from '../constants/animations';

export default function EmergencyCTA() {
  return (
    <AnimatedSection className="section-spacing-sm">
      <Container>
        <motion.aside
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          aria-label="Appel d'urgence"
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emergency-600 via-emergency-600 to-accent-600 px-6 py-12 shadow-2xl shadow-emergency-600/25 sm:px-12 sm:py-14"
        >
          <div className="blob-accent -right-16 -top-16 h-56 w-56 bg-white/15" aria-hidden />
          <div className="blob-accent -bottom-20 left-1/4 h-40 w-40 bg-accent-400/20" aria-hidden />
          <div className="pattern-grid absolute inset-0 opacity-30" aria-hidden />

          <motion.div
            variants={staggerItem}
            className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 shadow-lg ring-1 ring-white/25 backdrop-blur-sm">
                <AlertTriangle className="h-8 w-8 text-white" aria-hidden />
              </div>
              <div>
                <span className="ribbon-emergency mb-3 bg-white/20">Urgence active</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Urgence plomberie ?
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                  Fuite, débordement ou canalisation bloquée : un technicien certifié est
                  dispatché immédiatement, 24h/24 et 7j/7.
                </p>
              </div>
            </div>
            <Button
              href={getPhoneHref(site.phone)}
              variant="white"
              size="lg"
              icon={Phone}
              className="w-full shrink-0 sm:w-auto"
            >
              {site.phoneDisplay}
            </Button>
          </motion.div>
        </motion.aside>
      </Container>
    </AnimatedSection>
  );
}
