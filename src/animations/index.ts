export { MotionProvider } from './motion-provider';

export {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scaleInUp,
  slideInUp,
  slideInRight,
  clipReveal,
  clipRevealVertical,
  blurIn,
  zoomIn,
  zoomOut,
  rotateIn,
  flipIn,
  dropIn,
  cardStagger,
  listStagger,
  itemFadeInUp,
  itemScaleIn,
  itemSlideIn,
  counterUp,
  counterNumber,
  containerSlide,
  heroTitle,
  heroSubtitle,
  heroCta,
  heroImage,
  letterReveal,
  wordReveal,
  wordStagger,
  letterStagger,
  parallaxSlow,
  parallaxFast,
  galleryItem,
  timelineDot,
  timelineLine,
  timelineContent,
  accordionContent,
  modalOverlay,
  modalContent,
  pageEnter,
  pageSlideEnter,
  pageScaleEnter,
  noAnimation,
  animationVariantsMap,
  getAnimationVariants,
} from './variants';

export { Reveal, StaggerReveal, TextReveal, ClipReveal } from './reveal';

export {
  MagneticButton,
  ButtonRipple,
  FloatingCard,
  ScaleOnHover,
  TiltOnHover,
  hoverScale,
  hoverGlow,
  hoverLift,
} from './hover';

export { PageTransition } from './page-transition';
export type { PageTransitionType } from './page-transition';

export { ScrollProgress, ScrollIndicator, ScrollRevealProgress } from './scroll-progress';

export { AnimatedSVG, AnimatedPath, AnimatedCircle, ShapeReveal } from './animated-svg';

export { PageLoader, LoaderAnimation, Skeleton, SkeletonCard, ContentLoader } from './loading';

export {
  MicroFeedback,
  PressAnimation,
  PulseDot,
  NotificationBadge,
  ToggleSwitch,
  AnimatedProgressBar,
  CopyButton,
} from './micro';

export { AnimatedCounter, CounterCard } from './counter';

export {
  motionTokens,
  getDuration,
  getEase,
  getDistance,
  getSpring,
  createTransition,
  createSpringTransition,
} from './tokens';
export type {
  MotionDurationToken,
  MotionEaseToken,
  MotionDistanceToken,
  MotionScaleToken,
  MotionTokenSet,
} from './tokens';
