import type { Variants } from 'framer-motion';

import { motionTokens, getSpring } from './tokens';

const d = motionTokens.duration;
const e = motionTokens.ease;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: d.slow, ease: e.out } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: d.slow, ease: e.emphasizedOut },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: d.slow, ease: e.out } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: d.slow, ease: e.out } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: d.slow, ease: e.out } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: d.slow, ease: e.emphasizedOut },
  },
};

export const scaleInUp: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: d.slower, ease: e.emphasizedOut },
  },
};

export const slideInUp: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { duration: d.slower, ease: e.emphasized },
  },
};

export const slideInRight: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: d.slower, ease: e.emphasized },
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: d.slowest, ease: e.emphasized },
  },
};

export const clipRevealVertical: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: d.slowest, ease: e.emphasized },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: d.slower, ease: e.out },
  },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: d.slower, ease: e.emphasizedOut },
  },
};

export const zoomOut: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: d.slower, ease: e.emphasizedOut },
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -12, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: d.slower, ease: e.bounce },
  },
};

export const flipIn: Variants = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: d.slower, ease: e.emphasizedOut },
  },
};

export const dropIn: Variants = {
  hidden: { opacity: 0, y: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: d.slower, ease: e.bounce },
  },
};

export const cardStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const listStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

export const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: d.normal, ease: e.out },
  },
};

export const itemScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: d.normal, ease: e.out },
  },
};

export const itemSlideIn: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: d.normal, ease: e.out },
  },
};

export const counterUp: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: d.slower, ease: e.emphasizedOut },
  },
};

export const counterNumber: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: d.slower, ease: e.out },
  },
};

export const containerSlide: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: d.slowest, ease: e.emphasizedOut },
  },
};

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: d.slower, ease: e.out, delay: 0.2 },
  },
};

export const heroCta: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: d.slow, ease: e.out, delay: 0.4 },
  },
};

export const heroImage: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: d.verbose, ease: e.emphasizedOut },
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: d.slower, ease: e.emphasizedOut },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: d.normal, ease: e.out },
  },
};

export const wordStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.2 },
  },
};

export const letterStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.02, delayChildren: 0.3 },
  },
};

export const parallaxSlow: Variants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: d.verbose, ease: e.emphasizedOut },
  },
};

export const parallaxFast: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: d.slower, ease: e.emphasizedOut },
  },
};

export const galleryItem: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: d.normal, ease: e.out },
  },
  hover: {
    scale: 1.02,
    transition: getSpring('gentle'),
  },
};

export const timelineDot: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: d.slow, ease: e.bounce },
  },
};

export const timelineLine: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: d.slower, ease: e.emphasizedOut },
  },
};

export const timelineContent: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: d.slow, ease: e.out },
  },
};

export const accordionContent: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: d.fast, ease: e.out },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: d.fast, ease: e.in },
  },
};

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: d.fast } },
  exit: { opacity: 0, transition: { duration: d.fast } },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: d.normal, ease: e.emphasizedOut },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: d.fast, ease: e.in },
  },
};

export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: d.slow, ease: e.out },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: d.fast, ease: e.in },
  },
};

export const pageSlideEnter: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: d.slow, ease: e.emphasizedOut },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: d.normal, ease: e.emphasizedIn },
  },
};

export const pageScaleEnter: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: d.slow, ease: e.out },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: d.fast, ease: e.in },
  },
};

export const noAnimation: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export const animationVariantsMap: Record<string, Variants> = {
  fade: fadeIn,
  'fade-in': fadeIn,
  'fade-in-up': fadeInUp,
  'fade-in-down': fadeInDown,
  'fade-in-left': fadeInLeft,
  'fade-in-right': fadeInRight,
  scale: scaleIn,
  'scale-in': scaleIn,
  'scale-in-up': scaleInUp,
  'slide-in-up': slideInUp,
  'slide-in-right': slideInRight,
  reveal: clipReveal,
  'reveal-vertical': clipRevealVertical,
  blur: blurIn,
  'blur-in': blurIn,
  zoom: zoomIn,
  'zoom-in': zoomIn,
  'zoom-out': zoomOut,
  rotate: rotateIn,
  'rotate-in': rotateIn,
  flip: flipIn,
  'flip-in': flipIn,
  drop: dropIn,
  'drop-in': dropIn,
  stagger: cardStagger,
  parallax: parallaxSlow,
  hero: heroTitle,
  none: noAnimation,
};

export function getAnimationVariants(name: string): Variants {
  return animationVariantsMap[name] ?? fadeInUp;
}
