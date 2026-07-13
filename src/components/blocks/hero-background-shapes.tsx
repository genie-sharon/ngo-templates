'use client';

import { motion } from 'framer-motion';
import { forwardRef, useMemo } from 'react';

import { cn } from '@/lib/utils';

export interface HeroBackgroundShapesProps {
  variant?: 'circles' | 'blobs' | 'dots' | 'waves' | 'geometric';
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
  intensity?: 'subtle' | 'medium' | 'strong';
  className?: string;
}

const colorMap = {
  primary: 'var(--kindonar-color-primary-500)',
  secondary: 'var(--kindonar-color-secondary-500)',
  accent: 'var(--kindonar-color-accent-500)',
  muted: 'var(--kindonar-color-neutral-300)',
};

const intensityMap = {
  subtle: 0.06,
  medium: 0.12,
  strong: 0.2,
};

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function Circles({ color, opacity }: { color: string; opacity: number }) {
  const circles = useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        cx: randomBetween(10, 90),
        cy: randomBetween(10, 90),
        r: randomBetween(20, 80),
      })),
    [],
  );

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      {circles.map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill={color} opacity={opacity} />
      ))}
    </svg>
  );
}

function Blobs({ color, opacity }: { color: string; opacity: number }) {
  const blobs = useMemo(
    () =>
      Array.from({ length: 3 }, () => ({
        d: `M${randomBetween(10, 40)} ${randomBetween(10, 40)}C${randomBetween(20, 50)} ${randomBetween(5, 20)},${randomBetween(50, 80)} ${randomBetween(20, 40)},${randomBetween(60, 90)} ${randomBetween(40, 70)}C${randomBetween(70, 95)} ${randomBetween(60, 80)},${randomBetween(40, 70)} ${randomBetween(70, 90)},${randomBetween(20, 50)} ${randomBetween(60, 85)}Z`,
        transform: `translate(${randomBetween(-10, 10)} ${randomBetween(-10, 10)})`,
      })),
    [],
  );

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      {blobs.map((b, i) => (
        <path key={i} d={b.d} fill={color} opacity={opacity} transform={b.transform} />
      ))}
    </svg>
  );
}

function Dots({ color, opacity }: { color: string; opacity: number }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="dots-pattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill={color} opacity={opacity} />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#dots-pattern)" />
    </svg>
  );
}

function Waves({ color, opacity }: { color: string; opacity: number }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0} />
          <stop offset="50%" stopColor={color} stopOpacity={opacity} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path
        d="M0 60 Q 12.5 40, 25 55 T 50 50 T 75 55 T 100 50 V 100 H 0 Z"
        fill="url(#wave-gradient)"
        opacity={opacity * 2}
      />
      <path
        d="M0 70 Q 12.5 55, 25 65 T 50 60 T 75 65 T 100 60 V 100 H 0 Z"
        fill="url(#wave-gradient)"
        opacity={opacity * 1.5}
      />
    </svg>
  );
}

function Geometric({ color, opacity }: { color: string; opacity: number }) {
  const shapes = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => {
        const x = randomBetween(5, 90);
        const y = randomBetween(5, 90);
        const size = randomBetween(4, 16);
        const isTriangle = index % 2 === 0;
        return isTriangle
          ? {
              type: 'triangle' as const,
              points: `${x},${y + size} ${x + size},${y + size} ${x + size / 2},${y}`,
              opacity: randomBetween(0.3, 1),
            }
          : { type: 'diamond' as const, cx: x, cy: y, size, opacity: randomBetween(0.3, 1) };
      }),
    [],
  );

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      {shapes.map((s, i) =>
        s.type === 'triangle' ? (
          <polygon key={i} points={s.points} fill={color} opacity={opacity * s.opacity} />
        ) : (
          <rect
            key={i}
            x={s.cx - s.size / 2}
            y={s.cy - s.size / 2}
            width={s.size}
            height={s.size}
            fill={color}
            opacity={opacity * s.opacity}
            transform={`rotate(45 ${s.cx} ${s.cy})`}
          />
        ),
      )}
    </svg>
  );
}

const variantComponents = {
  circles: Circles,
  blobs: Blobs,
  dots: Dots,
  waves: Waves,
  geometric: Geometric,
};

export const HeroBackgroundShapes = forwardRef<HTMLDivElement, HeroBackgroundShapesProps>(
  ({ variant = 'circles', color = 'primary', intensity = 'medium', className }, ref) => {
    const resolvedColor = colorMap[color];
    const resolvedOpacity = intensityMap[intensity];
    const reduced = prefersReducedMotion();
    const ShapeComponent = variantComponents[variant];

    return (
      <div
        ref={ref}
        className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
        aria-hidden="true"
      >
        <motion.div
          className="h-full w-full"
          animate={
            reduced
              ? undefined
              : {
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, 0],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <ShapeComponent color={resolvedColor} opacity={resolvedOpacity} />
        </motion.div>
      </div>
    );
  },
);
HeroBackgroundShapes.displayName = 'HeroBackgroundShapes';
