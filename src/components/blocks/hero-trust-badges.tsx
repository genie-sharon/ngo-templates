'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface HeroBadge {
  name: string;
  logo?: string;
}

export interface HeroTrustBadgesProps {
  badges: HeroBadge[];
  title?: string;
  variant?: 'logo' | 'text' | 'both';
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

export const HeroTrustBadges = forwardRef<HTMLDivElement, HeroTrustBadgesProps>(
  ({ badges, title, variant = 'logo', className }, ref) => {
    const safeBadges = Array.isArray(badges) ? badges : [];
    return (
      <div ref={ref} className={cn('w-full', className)}>
        {title && (
          <p className="mb-4 text-center text-sm font-medium text-[var(--kindonar-color-neutral-500)] dark:text-[var(--kindonar-color-neutral-400)]">
            {title}
          </p>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={cn('flex flex-wrap items-center justify-center gap-6 md:gap-8')}
        >
          {safeBadges.map((badge, i) => (
            <motion.div
              key={`${badge.name}-${i}`}
              variants={itemVariants}
              className={cn(
                'flex items-center gap-2',
                variant === 'logo' &&
                  'opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0',
                variant === 'text' && 'text-sm text-[var(--kindonar-color-neutral-500)]',
                variant === 'both' &&
                  'opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0',
              )}
              aria-label={badge.name}
            >
              {badge.logo && variant !== 'text' && (
                <Image
                  src={badge.logo}
                  alt={`${badge.name} logo`}
                  width={112}
                  height={32}
                  unoptimized
                  className="h-7 w-auto object-contain md:h-8"
                  loading="lazy"
                />
              )}
              {(variant === 'text' || variant === 'both') && (
                <span
                  className={cn(
                    'font-medium',
                    variant === 'text' &&
                      'text-[var(--kindonar-color-neutral-600)] dark:text-[var(--kindonar-color-neutral-400)]',
                    variant === 'both' && 'text-xs text-[var(--kindonar-color-neutral-500)]',
                  )}
                >
                  {badge.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  },
);
HeroTrustBadges.displayName = 'HeroTrustBadges';
