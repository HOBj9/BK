import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import Container from '@/components/ui/Container';
import { unlockCaptionSlide, unlockStagger, unlockViewport, unlockZoomImage } from './unlock.animations';

type UnlockShowcaseProps = {
  src: string;
  alt: string;
  caption: string;
};

export default function UnlockShowcase({ src, alt, caption }: UnlockShowcaseProps) {
  return (
    <Container className="pb-10 md:pb-14">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={unlockViewport}
        variants={unlockStagger}
        className="group relative mx-auto max-w-5xl lg:grid lg:grid-cols-[1fr_280px] lg:items-end lg:gap-8"
      >
        <motion.div
          variants={unlockZoomImage}
          className="unlock-image-frame relative overflow-hidden rounded-3xl"
        >
          <LazyImage
            src={src}
            alt={alt}
            className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:aspect-16/11"
            wrapperClassName="w-full"
            skeletonClassName="aspect-[4/3] w-full rounded-none lg:aspect-[16/11]"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-emergency-900/10" aria-hidden />
        </motion.div>

        <motion.aside
          variants={unlockCaptionSlide}
          className="mt-6 rounded-2xl border-l-4 border-emergency-500 bg-slate-900 px-6 py-6 text-white lg:mt-0 lg:mb-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emergency-300">Intervention</p>
          <p className="mt-2 text-lg font-semibold leading-snug">{caption}</p>
        </motion.aside>
      </motion.div>
    </Container>
  );
}
