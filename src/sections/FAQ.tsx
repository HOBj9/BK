import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/shared/SectionHeading';
import FAQItem from '../components/cards/FAQItem';
import { faqItems } from '../data/faq';
import { ANCHORS } from '../constants/routes';

export default function FAQ() {
  return (
    <Section id={ANCHORS.FAQ} variant="muted">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions fréquentes"
          description="Tout ce que vous devez savoir avant de nous contacter."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem key={item.question} {...item} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
