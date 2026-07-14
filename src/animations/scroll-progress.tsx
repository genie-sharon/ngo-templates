'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useReducedMotion } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

interface ScrollProgressProps {
  className?: string;
  color?: string;
  height?: number;
  zIndex?: number;
  trackColor?: string;
}

export function ScrollProgress({
  className,
  color,
  height = 3,
  zIndex = 100,
  trackColor = 'transparent',
}: ScrollProgressProps) {
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);

  if (prefersReduced) return null;

  return (
    <motion.div
      className={cn('fixed top-0 right-0 left-0', className)}
      style={{
        height,
        zIndex,
        backgroundColor: trackColor,
        transformOrigin: '0%',
      }}
    >
      <motion.div
        className="h-full"
        style={{
          scaleX,
          backgroundColor: color ?? 'var(--kindonar-color-primary-500, #5a5ae6)',
          transformOrigin: '0%',
        }}
      />
    </motion.div>
  );
}

interface ScrollIndicatorProps {
  className?: string;
  targetRef?: React.RefObject<HTMLElement | null>;
}

export function ScrollIndicator({ className, targetRef }: ScrollIndicatorProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const prefersReduced = useReducedMotion();

  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [1, 0, 0, 0]);
  const y = useTransform(scrollYProgress, [0, 0.05], [0, 20]);

  if (prefersReduced) return null;

  return (
    <motion.div
      className={cn('pointer-events-none fixed bottom-8 left-1/2 -translate-x-1/2', className)}
      style={{ opacity, y }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium tracking-wider text-neutral-400">SCROLL</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-neutral-400 to-transparent" />
      </motion.div>
    </motion.div>
  );
}

interface ScrollRevealProgressProps {
  className?: string;
}

export function ScrollRevealProgress({ className }: ScrollRevealProgressProps) {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [1, 0, 0, 1]);
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [2 * Math.PI * 20, 0]);
  const labelOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const progressLabel = useTransform(progress, (v) => `${Math.round(v)}%`);

  if (prefersReduced) return null;

  return (
    <motion.div
      className={cn(
        'fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg dark:bg-neutral-800',
        className,
      )}
      style={{ opacity }}
    >
      <svg className="h-12 w-12 -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-neutral-200 dark:text-neutral-700"
        />
        <motion.circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-primary-500"
          strokeDasharray={2 * Math.PI * 20}
          style={{ strokeDashoffset }}
        />
      </svg>
      <motion.span
        className="absolute text-[10px] font-semibold text-neutral-600 dark:text-neutral-400"
        style={{ opacity: labelOpacity }}
      >
        {progressLabel}
      </motion.span>
    </motion.div>
  );
}
