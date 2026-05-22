import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import LazyBackground from '@/components/ui/LazyBackground';
import Button from '@/components/buttons/Button';
import { contactFadeUp, contactHeaderIn, contactStagger } from './contact.animations';

type ContactPageHeaderProps = {
  bannerImage?: string;
  bannerAlt?: string;
  title: string;
  description: string;
  phoneHref: string;
  phoneDisplay: string;
};

export default function ContactPageHeader({
  bannerImage,
  bannerAlt,
  title,
  description,
  phoneHref,
  phoneDisplay,
}: ContactPageHeaderProps) {
  return (
    <section className="relative isolate flex min-h-[min(44vh,400px)] items-center overflow-hidden border-b border-brand-200/30 dark:border-brand-800/40">
      <div className="absolute inset-0 z-0" aria-hidden>
        {bannerImage && (
          <LazyBackground
            src={bannerImage}
            alt={bannerAlt ?? title}
            className="absolute inset-0 h-full w-full opacity-20 dark:opacity-12"
            eager
          />
        )}
        <div className="absolute inset-0 bg-linear-to-br from-brand-950 via-slate-900/95 to-slate-950" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 30%, rgba(56,189,248,0.2) 0%, transparent 45%), radial-gradient(circle at 15% 70%, rgba(14,165,233,0.12) 0%, transparent 40%)',
          }}
        />
      </div>

      <Container className="relative z-10 w-full py-12 sm:py-14 lg:py-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={contactStagger}
          className="mx-auto max-w-3xl pb-4 text-center lg:mx-0 lg:text-left"
        >
          <motion.div
            variants={contactFadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-400/35 bg-brand-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-200"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Demande d&apos;intervention
          </motion.div>

          <motion.h1
            variants={contactHeaderIn}
            className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h1>

          <motion.p variants={contactFadeUp} className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </motion.p>

          <motion.div variants={contactFadeUp} className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button href={phoneHref} variant="emergency" size="lg" icon={Phone} pulse>
              Urgence — {phoneDisplay}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
