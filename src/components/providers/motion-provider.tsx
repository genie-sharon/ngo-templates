'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface MotionContextValue {
  prefersReducedMotion: boolean;
  reducedMotionOverride: boolean | null;
  setReducedMotionOverride: (value: boolean | null) => void;
  shouldReduceMotion: boolean;
}

const MotionContext = createContext<MotionContextValue | null>(null);

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [reducedMotionOverride, setReducedMotionOverride] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const shouldReduceMotion = reducedMotionOverride ?? prefersReducedMotion;

  return (
    <MotionContext.Provider
      value={{
        prefersReducedMotion,
        reducedMotionOverride,
        setReducedMotionOverride,
        shouldReduceMotion,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion(): MotionContextValue {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotion must be used within a MotionProvider');
  }
  return context;
}
