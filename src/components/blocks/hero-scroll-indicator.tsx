'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface HeroScrollIndicatorProps {
  onClick?: () => void;
  label?: string;
  color?: 'light' | 'dark';
  className?: string;
}

const bounceTransition = {
  y: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'loop' as const,
    ease: 'easeInOut' as const,
  },
};

export const HeroScrollIndicator = forwardRef<HTMLButtonElement, HeroScrollIndicatorProps>(
  ({ onClick, label = 'Scroll to explore', color = 'light', className }, ref) => {
    const textColor =
      color === 'light' ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-500)]';
    const iconColor =
      color === 'light' ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-400)]';

    if (onClick) {
      return (
        <button
          ref={ref}
          type="button"
          onClick={onClick}
          aria-label={label}
          className={cn('flex flex-col items-center gap-1', className)}
        >
          <span className={cn('text-xs font-medium tracking-wider uppercase', textColor)}>
            {label}
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={bounceTransition} aria-hidden="true">
            <ChevronDown className={cn('h-5 w-5', iconColor)} />
          </motion.div>
        </button>
      );
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn('flex flex-col items-center gap-1', className)}
        aria-hidden="true"
      >
        <span className={cn('text-xs font-medium tracking-wider uppercase', textColor)}>
          {label}
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={bounceTransition} aria-hidden="true">
          <ChevronDown className={cn('h-5 w-5', iconColor)} />
        </motion.div>
      </div>
    );
  },
);
HeroScrollIndicator.displayName = 'HeroScrollIndicator';
