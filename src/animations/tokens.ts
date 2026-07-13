import type { Transition } from 'framer-motion';

export type MotionDurationToken =
  'instant' | 'fast' | 'normal' | 'slow' | 'slower' | 'slowest' | 'verbose' | 'expressive';

export type MotionEaseToken =
  | 'default'
  | 'in'
  | 'out'
  | 'inOut'
  | 'bounce'
  | 'linear'
  | 'emphasized'
  | 'emphasizedIn'
  | 'emphasizedOut';

export type MotionDistanceToken = 'micro' | 'compact' | 'default' | 'moderate' | 'expressive';

export type MotionScaleToken = 'micro' | 'compact' | 'default' | 'expressive';

export interface MotionTokenSet {
  duration: Record<MotionDurationToken, number>;
  ease: Record<MotionEaseToken, readonly [number, number, number, number]>;
  distance: Record<MotionDistanceToken, number>;
  scale: Record<MotionScaleToken, number>;
  spring: {
    default: Transition;
    stiff: Transition;
    gentle: Transition;
    bouncy: Transition;
  };
}

export const motionTokens: MotionTokenSet = {
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.3,
    slow: 0.4,
    slower: 0.6,
    slowest: 0.8,
    verbose: 1.2,
    expressive: 2,
  },

  ease: {
    default: [0.4, 0, 0.2, 1] as const,
    in: [0.4, 0, 1, 1] as const,
    out: [0, 0, 0.2, 1] as const,
    inOut: [0.4, 0, 0.2, 1] as const,
    bounce: [0.34, 1.56, 0.64, 1] as const,
    linear: [0, 0, 1, 1] as const,
    emphasized: [0.2, 0, 0.2, 1] as const,
    emphasizedIn: [0.4, 0, 1, 1] as const,
    emphasizedOut: [0, 0, 0.2, 1] as const,
  },

  distance: {
    micro: 4,
    compact: 8,
    default: 16,
    moderate: 24,
    expressive: 40,
  },

  scale: {
    micro: 0.98,
    compact: 0.95,
    default: 0.9,
    expressive: 0.8,
  },

  spring: {
    default: { type: 'spring' as const, stiffness: 300, damping: 30, mass: 1 },
    stiff: { type: 'spring' as const, stiffness: 500, damping: 40, mass: 0.8 },
    gentle: { type: 'spring' as const, stiffness: 200, damping: 20, mass: 1.2 },
    bouncy: { type: 'spring' as const, stiffness: 400, damping: 15, mass: 0.8 },
  },
};

export function getDuration(token: MotionDurationToken): number {
  return motionTokens.duration[token];
}

export function getEase(token: MotionEaseToken): readonly [number, number, number, number] {
  return motionTokens.ease[token];
}

export function getDistance(token: MotionDistanceToken): number {
  return motionTokens.distance[token];
}

export function getSpring(token: keyof MotionTokenSet['spring']): Transition {
  return { ...motionTokens.spring[token] };
}

export function createTransition(
  durationToken?: MotionDurationToken,
  easeToken?: MotionEaseToken,
): Transition {
  return {
    duration: durationToken ? getDuration(durationToken) : undefined,
    ease: easeToken ? getEase(easeToken) : undefined,
  };
}

export function createSpringTransition(springToken?: keyof MotionTokenSet['spring']): Transition {
  return springToken ? { ...motionTokens.spring[springToken] } : { ...motionTokens.spring.default };
}
