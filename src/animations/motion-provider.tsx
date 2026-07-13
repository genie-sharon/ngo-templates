'use client';

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { type ReactNode } from 'react';

import { useReducedMotion } from '@/hooks/use-media-query';

interface MotionProviderProps {
  children: ReactNode;
  reducedMotion?: 'always' | 'respect' | 'never';
}

export function MotionProvider({ children, reducedMotion = 'respect' }: MotionProviderProps) {
  const prefersReduced = useReducedMotion();
  const isReduced = reducedMotion === 'always' || (reducedMotion === 'respect' && prefersReduced);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion={isReduced ? 'always' : 'never'}
        transition={{
          type: 'tween',
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
