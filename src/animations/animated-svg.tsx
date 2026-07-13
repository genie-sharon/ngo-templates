'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

import { useReducedMotion } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import { getDuration, getEase } from './tokens';

interface AnimatedSVGProps {
  children: ReactNode;
  className?: string;
  viewBox?: string;
  width?: number | string;
  height?: number | string;
}

export function AnimatedSVG({
  children,
  className,
  viewBox = '0 0 100 100',
  width = '100%',
  height = '100%',
}: AnimatedSVGProps) {
  return (
    <motion.svg
      className={cn(className)}
      viewBox={viewBox}
      width={width}
      height={height}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.svg>
  );
}

interface PathAnimationProps {
  d: string;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  duration?: number;
  delay?: number;
}

export function AnimatedPath({
  d,
  className,
  stroke = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
  duration,
  delay = 0,
}: PathAnimationProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <path d={d} className={className} stroke={stroke} strokeWidth={strokeWidth} fill={fill} />
    );
  }

  const pathVariants: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: duration ?? getDuration('slowest'),
          ease: getEase('emphasizedOut'),
          delay,
        },
        opacity: {
          duration: getDuration('fast'),
          delay,
        },
      },
    },
  };

  return (
    <motion.path
      d={d}
      className={className}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={pathVariants}
    />
  );
}

interface CircleAnimationProps {
  cx: number;
  cy: number;
  r: number;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  delay?: number;
}

export function AnimatedCircle({
  cx,
  cy,
  r,
  className,
  stroke,
  strokeWidth = 2,
  fill = 'none',
  delay = 0,
}: CircleAnimationProps) {
  const prefersReduced = useReducedMotion();
  const circumference = 2 * Math.PI * r;

  if (prefersReduced) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={r}
        className={className}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
    );
  }

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      className={className}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      strokeLinecap="round"
      initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
      animate={{
        strokeDashoffset: 0,
        opacity: 1,
      }}
      transition={{
        strokeDashoffset: {
          duration: getDuration('slower'),
          ease: getEase('emphasizedOut'),
          delay,
        },
      }}
    />
  );
}

interface ShapeRevealProps {
  className?: string;
  delay?: number;
  children: ReactNode;
}

export function ShapeReveal({ className, delay = 0, children }: ShapeRevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <>{children}</>;
  }

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: getDuration('slower'),
        ease: getEase('bounce'),
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.g>
  );
}
