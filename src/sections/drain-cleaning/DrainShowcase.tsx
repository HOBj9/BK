import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import Container from '@/components/ui/Container';
import { drainCaptionRise, drainWipeImage, drainViewport } from './drain.animations';

type DrainShowcaseProps = {
  src: string;
  alt: string;
  caption: string;
};

export default function DrainShowcase({ src, alt, caption }: DrainShowcaseProps) {
  return (
    <Container className="pb-8 md:pb-12">
      <motion.figure
        initial="hidden"
        whileInView="show"
        viewport={drainViewport}
        className="group relative mx-auto max-w-5xl"
      >
        <motion.div
          variants={drainWipeImage}
          className="drain-pipeline-glow relative overflow-hidden rounded-3xl ring-2 ring-teal-400/30 dark:ring-teal-500/25"
        >
          <LazyImage
            src={src}
            alt={alt}
            className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            wrapperClassName="w-full"
            skeletonClassName="aspect-[16/10] w-full rounded-none"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-teal-950/40 via-transparent to-cyan-500/10" aria-hidden />
        </motion.div>

        <motion.figcaption
          variants={drainCaptionRise}
          className="absolute inset-x-0 bottom-0 overflow-hidden rounded-b-3xl"
        >
          <p className="bg-linear-to-t from-teal-950/95 via-teal-950/80 to-transparent px-6 py-8 text-center text-sm font-medium text-teal-50 sm:text-base md:px-10">
            {caption}
          </p>
        </motion.figcaption>
      </motion.figure>
    </Container>
  );
}
