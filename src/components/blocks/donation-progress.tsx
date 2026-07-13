'use client';

import { Heart, Users, Clock } from 'lucide-react';
import { forwardRef, useEffect, useState } from 'react';

import { Progress } from '@/components/ui/atoms/progress';
import { cn } from '@/lib/utils';

export interface DonationProgressProps {
  current: number;
  goal: number;
  currency?: string;
  donors?: number;
  daysLeft?: number;
  title?: string;
  className?: string;
}

function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function AnimatedNumber({
  value,
  formatter,
}: {
  value: number;
  formatter?: (v: number) => string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const step = Math.max(1, Math.floor(value / 60));
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        setDisplay(start);
      }
    }, duration / 60);
    return () => clearInterval(interval);
  }, [value]);

  return <>{formatter ? formatter(display) : display.toLocaleString('en-US')}</>;
}

export const DonationProgress = forwardRef<HTMLDivElement, DonationProgressProps>(
  ({ current, goal, currency = 'USD', donors, daysLeft, title, className }, ref) => {
    const percentage = Math.min(Math.round((current / goal) * 100), 100);

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 shadow-sm',
          className,
        )}
      >
        {title && (
          <h3 className="mb-4 text-lg font-semibold text-[var(--kindonar-color-neutral-900)] dark:text-white">
            {title}
          </h3>
        )}

        <Progress value={current} max={goal} variant="gradient" size="lg" />

        <div className="mt-4 flex items-baseline justify-between">
          <div>
            <p className="text-2xl font-bold text-[var(--kindonar-color-primary-600)]">
              <AnimatedNumber value={current} formatter={(v) => formatCurrency(v, currency)} />
            </p>
            <p className="text-xs text-[var(--kindonar-color-neutral-500)]">
              raised of {formatCurrency(goal, currency)}
            </p>
          </div>
          <span className="text-lg font-bold text-[var(--kindonar-color-neutral-700)] dark:text-[var(--kindonar-color-neutral-300)]">
            {percentage}%
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 border-t border-[var(--kindonar-border-default)] pt-4">
          {donors !== undefined && (
            <div className="flex items-center gap-2 text-sm text-[var(--kindonar-color-neutral-600)]">
              <Users
                className="h-4 w-4 text-[var(--kindonar-color-primary-500)]"
                aria-hidden="true"
              />
              <span>
                <strong className="text-[var(--kindonar-color-neutral-800)] dark:text-white">
                  <AnimatedNumber value={donors} />
                </strong>{' '}
                donors
              </span>
            </div>
          )}
          {daysLeft !== undefined && (
            <div className="flex items-center gap-2 text-sm text-[var(--kindonar-color-neutral-600)]">
              <Clock
                className="h-4 w-4 text-[var(--kindonar-color-secondary-500)]"
                aria-hidden="true"
              />
              <span>
                <strong className="text-[var(--kindonar-color-neutral-800)] dark:text-white">
                  {daysLeft}
                </strong>{' '}
                days left
              </span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-[var(--kindonar-color-neutral-600)]">
            <Heart className="h-4 w-4 text-[var(--kindonar-color-error-500)]" aria-hidden="true" />
            <span>
              <strong className="text-[var(--kindonar-color-neutral-800)] dark:text-white">
                {percentage}%
              </strong>{' '}
              funded
            </span>
          </div>
        </div>
      </div>
    );
  },
);
DonationProgress.displayName = 'DonationProgress';
