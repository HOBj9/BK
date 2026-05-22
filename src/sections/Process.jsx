import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/shared/SectionHeading';
import { processSteps } from '../data/process';
import { ANCHORS } from '../constants/routes';

export default function Process() {
  return (
    <Section id={ANCHORS.PROCESS} variant="alt">
      <Container>
        <SectionHeading
          eyebrow="Notre méthode"
          title="Un processus clair, de l'appel à la résolution"
          description="Quatre étapes pour retrouver des canalisations fonctionnelles, sans stress ni surprise."
        />
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.step} className="relative">
              {index < processSteps.length - 1 && (
                <span
                  className="absolute left-8 top-16 hidden h-0.5 w-[calc(100%-2rem)] bg-brand-200 lg:block"
                  aria-hidden
                />
              )}
              <div className="flex flex-col items-start">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-brand-600 to-brand-800 text-2xl font-bold text-white shadow-xl shadow-brand-900/25 ring-4 ring-brand-100">
                  {step.step}
                </span>
                <h3 className="mt-6 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
