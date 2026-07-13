'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { type ReactNode } from 'react';

import { useReducedMotion } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import { getDuration } from './tokens';

interface PageLoaderProps {
  isLoading: boolean;
  children: ReactNode;
  className?: string;
  minimumLoadTime?: number;
}

export function PageLoader({ isLoading, children, className }: PageLoaderProps) {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: getDuration('normal') }}
            className={cn(
              'fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-neutral-950',
              className,
            )}
          >
            <LoaderAnimation />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={!prefersReduced ? { opacity: 0 } : undefined}
        animate={!prefersReduced ? { opacity: 1 } : undefined}
        transition={{ duration: getDuration('slow'), delay: getDuration('normal') }}
      >
        {children}
      </motion.div>
    </>
  );
}

interface LoaderAnimationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoaderAnimation({ className, size = 'md' }: LoaderAnimationProps) {
  const sizeMap = { sm: 24, md: 40, lg: 64 };
  const strokeMap = { sm: 2, md: 3, lg: 4 };
  const dimension = sizeMap[size];
  const stroke = strokeMap[size];

  return (
    <div
      className={cn('flex items-center justify-center', className)}
      role="status"
      aria-label="Loading"
    >
      <motion.svg
        viewBox="0 0 48 48"
        width={dimension}
        height={dimension}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-neutral-200 dark:text-neutral-800"
        />
        <motion.circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          className="text-primary-500"
          strokeDasharray={`${2 * Math.PI * 20}`}
          strokeDashoffset={2 * Math.PI * 20 * 0.75}
        />
      </motion.svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  count?: number;
}

export function Skeleton({
  className,
  width,
  height = 16,
  rounded = true,
  count = 1,
}: SkeletonProps) {
  const prefersReduced = useReducedMotion();

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={cn('bg-neutral-200 dark:bg-neutral-800', rounded && 'rounded-md', className)}
          style={{ width, height }}
          initial={!prefersReduced ? { opacity: 0.5 } : undefined}
          animate={!prefersReduced ? { opacity: [0.5, 0.8, 0.5] } : undefined}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.1,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}

interface SkeletonCardProps {
  className?: string;
  lines?: number;
  hasImage?: boolean;
}

export function SkeletonCard({ className, lines = 3, hasImage = true }: SkeletonCardProps) {
  return (
    <div className={cn('space-y-4 rounded-xl bg-white p-4 dark:bg-neutral-900', className)}>
      {hasImage && <Skeleton className="aspect-[16/9] w-full" rounded />}
      <Skeleton className="h-5 w-3/4" />
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={`h-3 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} />
      ))}
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-8 w-24" rounded />
        <Skeleton className="h-8 w-24" rounded />
      </div>
    </div>
  );
}

export function ContentLoader({
  children,
  isLoading,
  skeleton,
  className,
}: {
  children: ReactNode;
  isLoading: boolean;
  skeleton?: ReactNode;
  className?: string;
}) {
  if (isLoading) {
    return skeleton ?? <SkeletonCard className={className} />;
  }

  return <>{children}</>;
}
