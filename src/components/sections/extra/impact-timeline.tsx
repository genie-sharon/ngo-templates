'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface ImpactMilestone {
  year: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ImpactTimelineSectionProps {
  config: SectionConfig;
  milestones: ImpactMilestone[];
  className?: string;
}

export function ImpactTimelineSection({
  config,
  milestones,
  className,
}: ImpactTimelineSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safeMilestones = Array.isArray(milestones) ? milestones : [];

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeadingBlock heading={config.heading} theme={config.theme} />
        <MotionSection animation={config.animation} className="relative">
          <div
            className="absolute top-0 left-4 hidden h-full w-0.5 bg-[var(--kindonar-color-primary-200)] md:block"
            aria-hidden="true"
          />
          <div className="space-y-12 md:ml-12">
            {safeMilestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-8"
              >
                <div className="absolute top-0 -left-16 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-500)] text-white shadow-lg md:flex">
                  {milestone.icon ?? (
                    <span className="text-xs font-bold">{milestone.year.toString().slice(2)}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 md:hidden">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-500)] text-xs font-bold text-white">
                    {milestone.icon ?? milestone.year.toString().slice(2)}
                  </span>
                  <span
                    className={cn(
                      'text-sm font-bold',
                      isDark
                        ? 'text-[var(--kindonar-color-primary-300)]'
                        : 'text-[var(--kindonar-color-primary-600)]',
                    )}
                  >
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1">
                  <span
                    className={cn(
                      'hidden text-sm font-bold md:inline',
                      isDark
                        ? 'text-[var(--kindonar-color-primary-300)]'
                        : 'text-[var(--kindonar-color-primary-600)]',
                    )}
                  >
                    {milestone.year}
                  </span>
                  <h3
                    className={cn(
                      'mt-1 text-xl font-semibold',
                      isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                    )}
                  >
                    {milestone.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-2 text-base leading-relaxed',
                      isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                    )}
                  >
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
