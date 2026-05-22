import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import { heroTechnicianImage } from './hero.config';
import { heroFigureIn, heroFloat } from './HeroAnimations';

export default function HeroTechnician() {
  const { src, alt } = heroTechnicianImage;

  return (
    <motion.div
      variants={heroFigureIn}
      initial="hidden"
      animate="show"
      className="hero-figure relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-lg xl:max-w-xl"
    >
      <div className="hero-figure-glow pointer-events-none absolute inset-0 scale-90" aria-hidden />
      <motion.div
        variants={heroFloat}
        initial="initial"
        animate="animate"
        className="relative z-10"
      >
        <LazyImage
          src={src}
          alt={alt}
          eager
          className="hero-figure-img mx-auto w-full max-h-[min(52vh,420px)] object-contain object-bottom sm:max-h-[min(58vh,480px)] lg:max-h-[min(72vh,560px)]"
          wrapperClassName="relative w-full"
          skeletonClassName="mx-auto aspect-[3/4] w-full max-w-md rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
