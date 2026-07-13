'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface HeroHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const HeroHeading = forwardRef<HTMLDivElement, HeroHeadingProps>(
  ({ title, subtitle, badge, alignment = 'center', className }, ref) => {
    const reduced = prefersReducedMotion();

    return (
      <motion.div
        ref={ref}
        variants={reduced ? undefined : containerVariants}
        initial={reduced ? undefined : 'hidden'}
        animate={reduced ? undefined : 'visible'}
        className={cn(
          'max-w-3xl',
          alignment === 'center' && 'mx-auto text-center',
          alignment === 'left' && 'text-left',
          className,
        )}
      >
        {badge && (
          <motion.span
            variants={reduced ? undefined : itemVariants}
            className="mb-4 inline-block rounded-full bg-[var(--kindonar-color-primary-100)] px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--kindonar-color-primary-700)] uppercase"
          >
            {badge}
          </motion.span>
        )}

        <motion.h1
          variants={reduced ? undefined : itemVariants}
          className="text-4xl font-bold tracking-tight text-[var(--kindonar-color-neutral-900)] md:text-5xl lg:text-6xl dark:text-white"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={reduced ? undefined : itemVariants}
            className="mt-4 text-lg text-[var(--kindonar-color-neutral-600)] md:text-xl dark:text-[var(--kindonar-color-neutral-400)]"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    );
  },
);
HeroHeading.displayName = 'HeroHeading';
