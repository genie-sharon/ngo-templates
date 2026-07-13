'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig, StatItem } from '../section-config.types';

export interface AllocationItem {
  label: string;
  percentage: number;
  color: string;
  amount?: string;
}

export interface TransparencyDashboardSectionProps {
  config: SectionConfig;
  allocations: AllocationItem[];
  stats: StatItem[];
  totalRaised?: string;
  fiscalYear?: string;
  className?: string;
}

export function TransparencyDashboardSection({
  config,
  allocations,
  stats,
  totalRaised,
  fiscalYear,
  className,
}: TransparencyDashboardSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';

  const safeAllocations = Array.isArray(allocations) ? allocations : [];
  const safeStats = Array.isArray(stats) ? stats : [];
  const total = safeAllocations.reduce((sum, a) => sum + a.percentage, 0);
  let cumulative = 0;

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
        <MotionSection
          animation={config.animation}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3
              className={cn(
                'mb-6 text-lg font-semibold',
                isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
              )}
            >
              Fund Allocation {fiscalYear && `(${fiscalYear})`}
            </h3>
            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full -rotate-90"
                aria-label="Fund allocation breakdown"
              >
                {safeAllocations.map((item, idx) => {
                  const offset = cumulative;
                  const length = (item.percentage / total) * 100;
                  cumulative += length;
                  const r = 40;
                  const circ = 2 * Math.PI * r;
                  const dashLen = (length / 100) * circ;
                  const dashOff = (offset / 100) * circ;
                  return (
                    <circle
                      key={idx}
                      cx="50"
                      cy="50"
                      r={r}
                      fill="none"
                      stroke={item.color}
                      strokeWidth="12"
                      strokeDasharray={`${dashLen} ${circ - dashLen}`}
                      strokeDashoffset={-dashOff}
                      className="transition-all duration-700"
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span
                    className={cn(
                      'text-2xl font-bold',
                      isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                    )}
                  >
                    {totalRaised ??
                      `$${safeStats.reduce((s, stat) => s + stat.value, 0).toLocaleString('en-US')}`}
                  </span>
                  <p
                    className={cn(
                      'text-xs',
                      isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                    )}
                  >
                    Total Raised
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {safeAllocations.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: item.color }}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        'text-sm',
                        isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-700)]',
                      )}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    {item.amount && (
                      <span
                        className={cn(
                          'text-sm font-medium',
                          isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                        )}
                      >
                        {item.amount}
                      </span>
                    )}
                    <span
                      className={cn(
                        'text-sm font-bold',
                        isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                      )}
                    >
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-1 content-start gap-6 sm:grid-cols-2">
            {safeStats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  'rounded-xl border p-6 text-center',
                  isDark
                    ? 'border-white/10 bg-white/5'
                    : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-interactive)]',
                )}
              >
                {stat.icon && (
                  <div className="mb-3 flex justify-center" aria-hidden="true">
                    {stat.icon}
                  </div>
                )}
                <div
                  className={cn(
                    'text-3xl font-bold',
                    isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                  )}
                >
                  {stat.prefix}
                  {stat.value.toLocaleString('en-US')}
                  {stat.suffix}
                </div>
                <p
                  className={cn(
                    'mt-1 text-sm',
                    isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                  )}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
