import type { Variants, Transition, TargetAndTransition } from 'framer-motion';

export type AnimationVariantName =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'scaleIn'
  | 'scaleInUp'
  | 'slideInUp'
  | 'slideInRight'
  | 'blurIn'
  | 'clipReveal'
  | 'zoomIn'
  | 'zoomOut'
  | 'rotateIn'
  | 'flipIn'
  | 'dropIn'
  | 'none';

export type SectionAnimation =
  | 'fade'
  | 'fade-in'
  | 'fade-in-up'
  | 'fade-in-down'
  | 'fade-in-left'
  | 'fade-in-right'
  | 'scale'
  | 'scale-in'
  | 'scale-in-up'
  | 'slide-in-up'
  | 'slide-in-right'
  | 'reveal'
  | 'reveal-vertical'
  | 'blur'
  | 'blur-in'
  | 'zoom'
  | 'zoom-in'
  | 'zoom-out'
  | 'rotate'
  | 'rotate-in'
  | 'flip'
  | 'flip-in'
  | 'drop'
  | 'drop-in'
  | 'stagger'
  | 'parallax'
  | 'hero'
  | 'none';

export interface AnimationVariants {
  hidden: TargetAndTransition;
  visible: TargetAndTransition;
  exit?: TargetAndTransition;
}

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  variant?: AnimationVariantName;
  delay?: number;
  duration?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export interface CounterAnimationOptions {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  ease?: (t: number) => number;
  autoStart?: boolean;
}

export interface PageTransitionOptions {
  type?: 'fade' | 'slide' | 'scale' | 'none';
  duration?: number;
}

export interface AnimationPreset {
  name: string;
  variants: Variants;
  transition: Transition;
}

export interface StaggerConfig {
  enabled: boolean;
  delayPerItem?: number;
  startDelay?: number;
  from?: 'start' | 'center' | 'end' | 'edges';
}

export interface HoverAnimationConfig {
  enabled: boolean;
  type?: 'scale' | 'lift' | 'glow' | 'magnetic' | 'tilt';
  scale?: number;
  liftDistance?: number;
  tiltDegree?: number;
}

export interface RevealAnimationConfig {
  enabled: boolean;
  type?: SectionAnimation;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  stagger?: {
    enabled: boolean;
    delayPerItem?: number;
    startDelay?: number;
  };
}

export interface MotionConfigType {
  defaultAnimation: SectionAnimation;
  defaultDuration: number;
  defaultEasing: readonly [number, number, number, number];
  defaultSpring: { type: 'spring'; stiffness: number; damping: number };
  reducedMotion: 'respect' | 'always' | 'never';
  pageTransition: PageTransitionOptions;
  sectionReveal: RevealAnimationConfig;
  hover: HoverAnimationConfig;
}

export const defaultMotionConfig: MotionConfigType = {
  defaultAnimation: 'fade-in-up',
  defaultDuration: 0.4,
  defaultEasing: [0.4, 0, 0.2, 1] as const,
  defaultSpring: { type: 'spring', stiffness: 300, damping: 30 },
  reducedMotion: 'respect',
  pageTransition: { type: 'fade', duration: 0.3 },
  sectionReveal: {
    enabled: true,
    type: 'fade-in-up',
    delay: 0,
    duration: 0.4,
    distance: 24,
    threshold: 0.1,
    once: true,
    stagger: {
      enabled: false,
      delayPerItem: 0.08,
      startDelay: 0.1,
    },
  },
  hover: {
    enabled: true,
    type: 'scale',
    scale: 1.03,
    liftDistance: 4,
    tiltDegree: 5,
  },
};
