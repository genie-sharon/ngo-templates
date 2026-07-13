'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface StatPair {
  label: string;
  value: string;
}

export interface SuccessStoryCardProps {
  image: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  stats?: StatPair[];
  className?: string;
}

export const SuccessStoryCard = forwardRef<HTMLDivElement, SuccessStoryCardProps>(
  ({ image, name, role, location, quote, stats, className }, ref) => {
    const safeStats = Array.isArray(stats) ? stats : [];
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className={cn(
          'flex flex-col overflow-hidden rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] shadow-sm transition-shadow hover:shadow-md md:flex-row',
          className,
        )}
      >
        <div className="relative h-48 w-full shrink-0 md:h-auto md:w-56 lg:w-72">
          <img
            src={image}
            alt={`Photo of ${name}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="relative">
            <Quote
              className="absolute -top-1 -left-1 h-8 w-8 text-[var(--kindonar-color-primary-200)] dark:text-[var(--kindonar-color-primary-800)]"
              aria-hidden="true"
            />
            <blockquote className="pl-8 text-sm leading-relaxed text-[var(--kindonar-color-neutral-700)] dark:text-[var(--kindonar-color-neutral-300)]">
              &ldquo;{quote}&rdquo;
            </blockquote>
          </div>
          <div className="mt-4 border-t border-[var(--kindonar-border-default)] pt-4">
            <p className="font-semibold text-[var(--kindonar-color-neutral-900)] dark:text-white">
              {name}
            </p>
            <p className="text-xs text-[var(--kindonar-color-neutral-500)]">
              {role} &middot; {location}
            </p>
          </div>
          {safeStats.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4 border-t border-[var(--kindonar-border-default)] pt-4">
              {safeStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-lg font-bold text-[var(--kindonar-color-primary-600)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--kindonar-color-neutral-500)]">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  },
);
SuccessStoryCard.displayName = 'SuccessStoryCard';
