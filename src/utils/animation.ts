import type { Variants, Transition } from 'framer-motion';

import type { AnimationVariantName, StaggerConfig } from '@/types';

const commonVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  },
  scaleInUp: {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  },
  slideInUp: {
    hidden: { y: '100%' },
    visible: { y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  },
  slideInRight: {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  },
  blurIn: {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  },
  clipReveal: {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -12, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    },
  },
  flipIn: {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  },
  dropIn: {
    hidden: { opacity: 0, y: -40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    },
  },
  none: {
    hidden: {},
    visible: {},
  },
};

export function createAnimationVariants(
  variant: AnimationVariantName,
  delay: number = 0,
  duration: number = 0.4,
): Variants {
  const base = commonVariants[variant] ?? commonVariants['fadeInUp']!;
  return {
    hidden: { ...base.hidden },
    visible: {
      ...base.visible,
      transition: {
        ...(base.visible as { transition?: object })?.transition,
        delay,
        ...((base.visible as { transition?: { duration?: number } })?.transition?.duration !==
        undefined
          ? { duration }
          : {}),
      },
    },
  };
}

export function createStaggerVariants(
  config: StaggerConfig,
  itemVariant: AnimationVariantName = 'fadeInUp',
): Variants {
  const baseVariants = createAnimationVariants(itemVariant, 0, 0.4);

  return {
    hidden: {
      ...baseVariants.hidden,
      transition: { staggerChildren: config.delayPerItem ?? 0.08 },
    },
    visible: {
      ...baseVariants.visible,
      transition: {
        staggerChildren: config.delayPerItem ?? 0.08,
        delayChildren: config.startDelay ?? 0,
      },
    },
  };
}

export function getReducedMotionVariants(): Variants {
  return {
    hidden: {},
    visible: { transition: { duration: 0 } },
  };
}

export const defaultEasing = [0.4, 0, 0.2, 1] as const;

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};
