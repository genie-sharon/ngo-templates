'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface CampaignProgressSectionProps {
  config: SectionConfig;
  goal: number;
  raised: number;
  currency?: string;
  donorCount?: number;
  title?: string;
  description?: string;
  className?: string;
}

export function CampaignProgressSection({
  config,
  goal,
  raised,
  currency = 'USD',
  donorCount,
  title,
  description,
  className,
}: CampaignProgressSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);
  const formatter = (val: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section
      id={config.id}
      className={cn(
        'py-16 md:py-20 lg:py-24',
        isDark
          ? 'bg-[var(--kindonar-color-neutral-900)] text-white'
          : 'bg-[var(--kindonar-surface-primary)]',
        className,
      )}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeadingBlock heading={config.heading} theme={config.theme} />
        <MotionSection animation={config.animation}>
          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn(
              'rounded-2xl border p-8 md:p-12',
              isDark
                ? 'border-white/10 bg-white/5'
                : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)] shadow-sm',
            )}
          >
            {title && (
              <h3
                className={cn(
                  'text-2xl font-bold',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                {title}
              </h3>
            )}
            {description && (
              <p
                className={cn(
                  'mt-2 text-sm',
                  isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                )}
              >
                {description}
              </p>
            )}
            <div className="mt-8 flex items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <span
                  className={cn(
                    'text-3xl font-bold md:text-4xl',
                    isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                  )}
                >
                  {formatter(raised)}
                </span>
                <p
                  className={cn(
                    'mt-1 text-xs',
                    isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-400)]',
                  )}
                >
                  Raised
                </p>
              </div>
              <div className="text-center">
                <span
                  className={cn(
                    'text-3xl font-bold md:text-4xl',
                    isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                  )}
                >
                  {formatter(goal)}
                </span>
                <p
                  className={cn(
                    'mt-1 text-xs',
                    isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-400)]',
                  )}
                >
                  Goal
                </p>
              </div>
            </div>
            <div className="relative mt-8 h-4 w-full overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[var(--kindonar-color-primary-500)] to-[var(--kindonar-color-secondary-500)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span
                className={cn(
                  'font-semibold',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                {percentage}%
              </span>
              {donorCount !== undefined && (
                <span
                  className={cn(
                    'flex items-center gap-1',
                    isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                  )}
                >
                  <Users size={14} aria-hidden="true" />
                  {donorCount.toLocaleString('en-US')} donors
                </span>
              )}
            </div>
          </motion.div>
        </MotionSection>
      </div>
    </section>
  );
}
