'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface CtaItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface HeroCtaProps {
  primaryCta: CtaItem;
  secondaryCta?: CtaItem;
  alignment?: 'left' | 'center';
  variant?: 'default' | 'dark-bg' | 'gradient';
  className?: string;
}

const variantStyles = {
  default: {
    primary:
      'bg-[var(--kindonar-color-primary-600)] text-white hover:bg-[var(--kindonar-color-primary-700)] shadow-sm',
    secondary:
      'border border-[var(--kindonar-color-neutral-300)] text-[var(--kindonar-color-neutral-700)] hover:bg-[var(--kindonar-color-neutral-100)] dark:border-[var(--kindonar-color-neutral-600)] dark:text-[var(--kindonar-color-neutral-300)] dark:hover:bg-[var(--kindonar-color-neutral-800)]',
  },
  'dark-bg': {
    primary:
      'bg-white text-[var(--kindonar-color-neutral-900)] hover:bg-[var(--kindonar-color-neutral-200)] shadow-sm',
    secondary: 'border border-white/30 text-white hover:bg-white/10',
  },
  gradient: {
    primary:
      'bg-gradient-to-r from-[var(--kindonar-color-primary-500)] to-[var(--kindonar-color-secondary-500)] text-white shadow-lg hover:shadow-xl',
    secondary:
      'border border-[var(--kindonar-color-neutral-300)] text-[var(--kindonar-color-neutral-700)] hover:bg-[var(--kindonar-color-neutral-100)] dark:border-[var(--kindonar-color-neutral-600)] dark:text-[var(--kindonar-color-neutral-300)] dark:hover:bg-[var(--kindonar-color-neutral-800)]',
  },
};

export const HeroCta = forwardRef<HTMLDivElement, HeroCtaProps>(
  ({ primaryCta, secondaryCta, alignment = 'center', variant = 'default', className }, ref) => {
    const styles = variantStyles[variant];

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-3 sm:flex-row',
          alignment === 'center' && 'items-center justify-center',
          alignment === 'left' && 'items-start',
          className,
        )}
      >
        <motion.a
          href={primaryCta.href}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={cn(
            'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-colors',
            styles.primary,
          )}
          aria-label={primaryCta.icon ? primaryCta.label : undefined}
        >
          {primaryCta.icon || <ArrowRight className="h-5 w-5" aria-hidden="true" />}
          {primaryCta.label}
        </motion.a>

        {secondaryCta && (
          <motion.a
            href={secondaryCta.href}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-colors',
              styles.secondary,
            )}
            aria-label={secondaryCta.icon ? secondaryCta.label : undefined}
          >
            {secondaryCta.icon || <ArrowRight className="h-5 w-5" aria-hidden="true" />}
            {secondaryCta.label}
          </motion.a>
        )}
      </div>
    );
  },
);
HeroCta.displayName = 'HeroCta';
