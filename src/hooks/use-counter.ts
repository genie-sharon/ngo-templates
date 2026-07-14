'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

import { useIntersectionObserver } from './use-intersection-observer';
import { useReducedMotion } from './use-media-query';

interface UseCounterOptions {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  autoStart?: boolean;
}

export function useCounter({
  from = 0,
  to,
  duration = 2000,
  decimals = 0,
  autoStart = true,
}: UseCounterOptions): [React.RefObject<HTMLDivElement | null>, number, boolean] {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [count, setCount] = useState(from);
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const startTime = useRef<number | null>(null);
  const frameId = useRef<number>(null);
  const hasStarted = useRef(false);

  const animate = useCallback(() => {
    if (prefersReducedMotion) {
      setCount(to);
      setIsComplete(true);
      return;
    }

    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * eased;

      setCount(current);

      if (progress < 1) {
        frameId.current = requestAnimationFrame(step);
      } else {
        setCount(to);
        setIsComplete(true);
      }
    };

    frameId.current = requestAnimationFrame(step);
  }, [from, to, duration, prefersReducedMotion]);

  useEffect(() => {
    if (isVisible && autoStart && !hasStarted.current) {
      hasStarted.current = true;
      frameId.current = requestAnimationFrame(() => animate());
    }
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [isVisible, autoStart, animate]);

  const displayValue = Number.isInteger(count * Math.pow(10, decimals))
    ? count.toFixed(decimals)
    : count.toFixed(decimals);

  return [ref, Number(displayValue), isComplete];
}
