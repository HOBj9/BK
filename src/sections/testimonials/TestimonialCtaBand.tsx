import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Button from '@/components/buttons/Button';
import { ROUTES } from '@/constants/routes';
import { testimonialSoftIn, testimonialStagger, testimonialViewport } from './testimonial.animations';

export default function TestimonialCtaBand() {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={testimonialViewport}
          variants={testimonialStagger}
          className="rounded-3xl bg-linear-to-br from-amber-500/10 via-white to-brand-50/50 px-8 py-10 text-center dark:from-amber-950/30 dark:via-slate-900/80 dark:to-brand-950/30 md:px-12 md:py-14"
        >
          <motion.h2 variants={testimonialSoftIn} className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Rejoignez nos clients satisfaits
          </motion.h2>
          <motion.p variants={testimonialSoftIn} className="mx-auto mt-3 max-w-lg text-slate-600 dark:text-slate-300">
            Une urgence ou un entretien préventif ? BK Entretien intervient rapidement avec transparence et professionnalisme.
          </motion.p>
          <motion.div variants={testimonialSoftIn} className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to={ROUTES.CONTACT} variant="primary" size="lg">
              Nous contacter
            </Button>
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-slate-800"
            >
              Retour à l&apos;accueil
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
