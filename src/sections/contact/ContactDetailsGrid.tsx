import { motion } from 'framer-motion';
import { Clock, MapPin, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import type { ContentSection } from '@/types';
import { contactDetailIn, contactStagger, contactViewport } from './contact.animations';

const ICONS: LucideIcon[] = [MapPin, Wrench, Clock];

type ContactDetailsGridProps = {
  sections: ContentSection[];
};

export default function ContactDetailsGrid({ sections }: ContactDetailsGridProps) {
  if (sections.length === 0) return null;

  return (
    <section className="border-t border-slate-200/80 bg-white/50 py-14 dark:border-slate-800 dark:bg-slate-900/30 md:py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={contactViewport}
          variants={contactStagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {sections.map((section, index) => {
            const Icon = ICONS[index % ICONS.length];
            const isHours = section.title.toLowerCase().includes('horaire');

            return (
              <motion.article
                key={section.title}
                variants={contactDetailIn}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200/70 bg-white p-6 dark:border-slate-700/50 dark:bg-slate-800/60 md:p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/50 dark:text-brand-400">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{section.title}</h3>
                {isHours ? (
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                    {section.description.split('\n').map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {section.description}
                  </p>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
