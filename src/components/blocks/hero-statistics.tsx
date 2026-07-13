'use client';

import { motion } from 'framer-motion';
import { forwardRef, type ReactNode } from 'react';

import { Counter } from '@/components/ui/atoms/counter';
import { cn } from '@/lib/utils';

export interface HeroStat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon?: ReactNode;
}

export interface HeroStatisticsProps {
  stats: HeroStat[];
  columns?: 2 | 3 | 4;
  animated?: boolean;
  className?: string;
}

const gridColumns = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const HeroStatistics = forwardRef<HTMLDivElement, HeroStatisticsProps>(
  ({ stats, columns = 4, animated = true, className }, ref) => {
    const reduced = prefersReducedMotion();
    const shouldAnimate = animated && !reduced;
    const safeStats = Array.isArray(stats) ? stats : [];

    return (
      <motion.div
        ref={ref}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? 'hidden' : undefined}
        whileInView={shouldAnimate ? 'visible' : undefined}
        viewport={{ once: true, amount: 0.3 }}
        className={cn('grid gap-6', gridColumns[columns], className)}
      >
        {safeStats.map((stat, i) => (
          <motion.div
            key={`${stat.label}-${i}`}
            variants={shouldAnimate ? itemVariants : undefined}
            className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-5 text-center shadow-sm"
          >
            {stat.icon && (
              <div className="mb-2 flex justify-center text-[var(--kindonar-color-primary-500)]">
                {stat.icon}
              </div>
            )}
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} size="lg" />
            <p className="mt-1 text-sm text-[var(--kindonar-color-neutral-500)] dark:text-[var(--kindonar-color-neutral-400)]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    );
  },
);
HeroStatistics.displayName = 'HeroStatistics';
