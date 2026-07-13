'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { forwardRef, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const cardVariants = cva('rounded-xl border p-6 text-center transition-colors', {
  variants: {
    variant: {
      mission:
        'border-[var(--kindonar-color-primary-200)] bg-[var(--kindonar-color-primary-50)] dark:bg-[var(--kindonar-color-primary-950)] dark:border-[var(--kindonar-color-primary-800)]',
      vision:
        'border-[var(--kindonar-color-secondary-200)] bg-[var(--kindonar-color-secondary-50)] dark:bg-[var(--kindonar-color-secondary-950)] dark:border-[var(--kindonar-color-secondary-800)]',
      value:
        'border-[var(--kindonar-color-accent-200)] bg-[var(--kindonar-color-accent-50)] dark:bg-[var(--kindonar-color-accent-950)] dark:border-[var(--kindonar-color-accent-800)]',
    },
  },
  defaultVariants: {
    variant: 'mission',
  },
});

const iconVariants = cva('mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full', {
  variants: {
    variant: {
      mission:
        'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-600)] dark:bg-[var(--kindonar-color-primary-900)] dark:text-[var(--kindonar-color-primary-300)]',
      vision:
        'bg-[var(--kindonar-color-secondary-100)] text-[var(--kindonar-color-secondary-600)] dark:bg-[var(--kindonar-color-secondary-900)] dark:text-[var(--kindonar-color-secondary-300)]',
      value:
        'bg-[var(--kindonar-color-accent-100)] text-[var(--kindonar-color-accent-600)] dark:bg-[var(--kindonar-color-accent-900)] dark:text-[var(--kindonar-color-accent-300)]',
    },
  },
  defaultVariants: {
    variant: 'mission',
  },
});

export interface MissionCardProps extends VariantProps<typeof cardVariants> {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: 'mission' | 'vision' | 'value';
  className?: string;
}

export const MissionCard = forwardRef<HTMLDivElement, MissionCardProps>(
  ({ icon, title, description, variant = 'mission', className }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className={cn(cardVariants({ variant }), className)}
      >
        <div className={cn(iconVariants({ variant }))} aria-hidden="true">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)] dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)] dark:text-[var(--kindonar-color-neutral-400)]">
          {description}
        </p>
      </motion.div>
    );
  },
);
MissionCard.displayName = 'MissionCard';
