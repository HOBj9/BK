import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import LazyBackground from '@/components/ui/LazyBackground';
import { PageSection, FeaturedImage } from '@/components/pages';
import Button from '@/components/buttons/Button';
import { homePage } from '@/data/websiteContent';
import { homeGalleryPreview } from '@/data/gallery';
import { ROUTES } from '@/constants/routes';
import { staggerContainer, staggerItem } from '@/constants/animations';
import WelcomeGalleryItem from './WelcomeGalleryItem';

export default function WelcomeContent() {
  const [featured, ...rest] = homePage.sections;

  return (
    <>
      {featured && (
        <PageSection variant="default" className="pt-8">
          <p className="text-xl font-bold text-brand-700 md:text-4xl">{featured.title}</p>
          <div className="mt-6 rounded-2xl bg-slate-100 p-4 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-sm leading-relaxed text-slate-700 md:text-2xl">
                {featured.description}
              </p>
              {featured.image && (
                <LazyImage
                  src={featured.image}
                  alt={featured.title}
                  className="w-full max-w-md shrink-0 object-contain md:-mt-24"
                  wrapperClassName="w-full max-w-md shrink-0 md:-mt-24"
                  skeletonClassName="h-48 w-full max-w-md rounded-xl"
                />
              )}
            </div>
          </div>
        </PageSection>
      )}

      <PageSection variant="muted">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          {rest.map((section) => (
            <motion.div
              key={section.title}
              variants={staggerItem}
              className="flex flex-col gap-6 rounded-2xl bg-slate-200/60 p-6 md:flex-row md:items-center md:p-10"
            >
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-brand-700 md:text-5xl">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-lg">
                  {section.description}
                </p>
              </div>
              {section.image && (
                <LazyBackground
                  src={section.image}
                  alt={section.title}
                  className="min-h-[180px] flex-1 rounded-xl md:min-h-[220px]"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      <PageSection variant="default">
        <FeaturedImage src={homePage.mainImage} alt={homePage.mainImageAlt} />
        <p className="mt-10 text-center text-lg font-semibold text-slate-800 md:text-xl">
          {homePage.heroSubtitle}
        </p>
      </PageSection>

      <PageSection variant="muted">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {homeGalleryPreview.map((item, index) => (
            <WelcomeGalleryItem key={item.image} item={item} index={index} />
          ))}
        </motion.div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button to={ROUTES.DRAIN_CLEANING} variant="primary" size="lg">
            Nettoyage des drains
          </Button>
          <Button to={ROUTES.GALLERY} variant="outline" size="lg">
            Voir la galerie complète
          </Button>
        </div>
      </PageSection>
    </>
  );
}
