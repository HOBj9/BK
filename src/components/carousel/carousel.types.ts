export type CarouselSlideData = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  href?: string;
  accentColor: string;
};

export type PremiumCarouselProps = {
  slides: CarouselSlideData[];
  autoplayMs?: number;
  className?: string;
  /** When false, hides the standalone section heading (embedded in WelcomeContent) */
  showHeading?: boolean;
};

export type CarouselSlideProps = {
  slide: CarouselSlideData;
  index: number;
  isActive: boolean;
  isNeighbor: boolean;
  onActivate: (index: number) => void;
};

export type CarouselControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  activeIndex: number;
  total: number;
  onGoTo: (index: number) => void;
  /** Counter + progress bar instead of many dots (mobile / many slides) */
  compact?: boolean;
};
