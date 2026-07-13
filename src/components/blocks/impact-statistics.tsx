'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { type ReactNode } from 'react';

import { Counter } from '@/components/ui/atoms/counter';
import { cn } from '@/lib/utils';

export interface Stat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon?: ReactNode;
}

const impactVariants = cva('', {
  variants: {
    variant: {
      grid: 'grid',
      inline: 'flex flex-row flex-wrap items-center justify-center gap-8 md:gap-12',
      row: 'flex flex-row items-center divide-x divide-[var(--kindonar-border-default)]',
    },
  },
  defaultVariants: {
    variant: 'grid',
  },
});

export interface ImpactStatisticsProps extends VariantProps<typeof impactVariants> {
  stats: Stat[];
  variant?: 'grid' | 'inline' | 'row';
  columns?: 2 | 3 | 4;
  className?: string;
}

const gridColumns = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4',
};

export function ImpactStatistics({
  stats,
  variant = 'grid',
  columns = 4,
  className,
}: ImpactStatisticsProps) {
  const safeStats = Array.isArray(stats) ? stats : [];

  return (
    <div
      className={cn(
        impactVariants({ variant }),
        variant === 'grid' && gridColumns[columns],
        variant === 'grid' && 'gap-6',
        className,
      )}
    >
      {safeStats.map((stat, i) => (
        <div
          key={`${stat.label}-${i}`}
          className={cn(
            'text-center',
            variant === 'grid' &&
              'rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 shadow-sm transition-shadow hover:shadow-md',
            variant === 'row' && 'px-6 first:pl-0 last:pr-0 md:px-10',
          )}
        >
          {stat.icon && (
            <div className="mb-3 flex justify-center text-[var(--kindonar-color-primary-500)]">
              {stat.icon}
            </div>
          )}
          <Counter
            value={stat.value}
            prefix={stat.prefix}
            suffix={stat.suffix}
            size={variant === 'row' ? 'md' : 'lg'}
          />
          <p className="mt-1.5 text-sm text-[var(--kindonar-color-neutral-500)] dark:text-[var(--kindonar-color-neutral-400)]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
ImpactStatistics.displayName = 'ImpactStatistics';
