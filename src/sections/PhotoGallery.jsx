import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/shared/SectionHeading';
import WelcomeGalleryItem from './WelcomeGalleryItem';
import { homePage } from '../data/websiteContent';
import { staggerContainer } from '../constants/animations';
import { ROUTES } from '../constants/routes';
import Button from '../components/buttons/Button';

export default function PhotoGallery() {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeading
          eyebrow="Galerie"
          title="Nos réalisations"
          description={homePage.heroSubtitle}
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {homePage.galleryImages.map((item, index) => (
            <WelcomeGalleryItem key={item.image} item={item} index={index} />
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <Button to={ROUTES.GALLERY} variant="outline" size="lg">
            Voir toute la galerie
          </Button>
        </div>
      </Container>
    </Section>
  );
}
