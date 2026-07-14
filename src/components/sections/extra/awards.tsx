'use client';

import { motion } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';

import { Badge } from '@/components/ui/atoms/badge';
import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface AwardItem {
  title: string;
  organization: string;
  year: number;
  description?: string;
  icon?: React.ReactNode;
  badgeVariant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export interface AwardsSectionProps {
  config: SectionConfig;
  awards: AwardItem[];
  className?: string;
}

const defaultIcons = [
  <Trophy key="trophy" size={24} />,
  <Award key="award" size={24} />,
  <Medal key="medal" size={24} />,
];

export function AwardsSection({ config, awards, className }: AwardsSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safeAwards = Array.isArray(awards) ? awards : [];

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
        <MotionSection animation={config.animation}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safeAwards.map((award, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  'group rounded-xl border p-6 transition-shadow hover:shadow-lg',
                  isDark
                    ? 'border-white/10 bg-white/5 hover:bg-white/10'
                    : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)] hover:shadow-[var(--kindonar-color-primary-100)]',
                )}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={cn(
                      'flex h-14 w-14 items-center justify-center rounded-full',
                      isDark
                        ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                        : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
                    )}
                    aria-hidden="true"
                  >
                    {award.icon ?? defaultIcons[idx % defaultIcons.length]}
                  </div>
                  <Badge variant={award.badgeVariant ?? 'primary'}>{award.year}</Badge>
                </div>
                <h3
                  className={cn(
                    'mt-4 text-lg font-semibold',
                    isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                  )}
                >
                  {award.title}
                </h3>
                <p
                  className={cn(
                    'mt-1 text-sm font-medium',
                    isDark
                      ? 'text-[var(--kindonar-color-primary-300)]'
                      : 'text-[var(--kindonar-color-primary-600)]',
                  )}
                >
                  {award.organization}
                </p>
                {award.description && (
                  <p
                    className={cn(
                      'mt-2 text-sm leading-relaxed',
                      isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                    )}
                  >
                    {award.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
