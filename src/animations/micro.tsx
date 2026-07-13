'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { type ReactNode, useState, useCallback } from 'react';

import { useReducedMotion } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import { getDuration, getEase } from './tokens';

interface MicroFeedbackProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  feedback?: 'scale' | 'glow' | 'pulse';
}

export function MicroFeedback({
  children,
  className,
  onClick,
  feedback = 'scale',
}: MicroFeedbackProps) {
  const prefersReduced = useReducedMotion();

  const feedbackVariants = {
    scale: { whileTap: { scale: 0.92 } },
    glow: { whileTap: { scale: 0.96, opacity: 0.8 } },
    pulse: { whileTap: { scale: 1.05 } },
  };

  if (prefersReduced) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={cn('cursor-pointer', className)}
      {...feedbackVariants[feedback]}
      transition={{ duration: getDuration('fast') }}
    >
      {children}
    </motion.button>
  );
}

interface PressAnimationProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function PressAnimation({ children, className, scale = 0.95 }: PressAnimationProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      whileTap={{ scale }}
      transition={{ duration: getDuration('instant') }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface PulseDotProps {
  className?: string;
  color?: string;
  size?: number;
  animate?: boolean;
}

export function PulseDot({ className, color, size = 8, animate = true }: PulseDotProps) {
  const prefersReduced = useReducedMotion();

  return (
    <span className={cn('relative inline-flex', className)}>
      <span
        className="inline-block rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color ?? 'var(--kindonar-color-primary-500)',
        }}
      />
      {animate && !prefersReduced && (
        <span
          className="absolute inset-0 inline-block animate-ping rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: color ?? 'var(--kindonar-color-primary-500)',
            opacity: 0.75,
          }}
        />
      )}
    </span>
  );
}

interface NotificationBadgeProps {
  count: number;
  className?: string;
  maxCount?: number;
}

export function NotificationBadge({ count, className, maxCount = 99 }: NotificationBadgeProps) {
  const prefersReduced = useReducedMotion();
  const display = count > maxCount ? `${maxCount}+` : String(count);

  return (
    <AnimatePresence mode="wait">
      {count > 0 && (
        <motion.span
          key={display}
          initial={!prefersReduced ? { scale: 0 } : undefined}
          animate={!prefersReduced ? { scale: 1 } : undefined}
          exit={!prefersReduced ? { scale: 0 } : undefined}
          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
          className={cn(
            'inline-flex min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white',
            className,
          )}
        >
          {display}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  className?: string;
  label?: string;
}

export function ToggleSwitch({ enabled, onChange, className, label }: ToggleSwitchProps) {
  const prefersReduced = useReducedMotion();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      onClick={() => onChange(!enabled)}
      className={cn(
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
        enabled ? 'bg-primary-500' : 'bg-neutral-300 dark:bg-neutral-600',
        className,
      )}
      style={{ transitionDuration: prefersReduced ? '0ms' : '200ms' }}
    >
      {!prefersReduced ? (
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="inline-block h-5 w-5 rounded-full bg-white shadow"
          style={{
            translateX: enabled ? '100%' : '0%',
          }}
        />
      ) : (
        <span
          className="inline-block h-5 w-5 rounded-full bg-white shadow"
          style={{
            transform: enabled ? 'translateX(100%)' : 'translateX(0)',
          }}
        />
      )}
    </button>
  );
}

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  color?: string;
  height?: number;
}

export function AnimatedProgressBar({
  value,
  max = 100,
  className,
  color,
  height = 8,
}: ProgressBarProps) {
  const prefersReduced = useReducedMotion();
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800',
        className,
      )}
      style={{ height }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <motion.div
        className="h-full rounded-full"
        style={{
          backgroundColor: color ?? 'var(--kindonar-color-primary-500)',
        }}
        initial={!prefersReduced ? { width: 0 } : undefined}
        animate={{ width: `${percentage}%` }}
        transition={{
          duration: prefersReduced ? 0 : getDuration('slow'),
          ease: getEase('emphasizedOut'),
        }}
      />
    </div>
  );
}

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        'relative flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
        copied
          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400',
        className,
      )}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="copied"
            initial={!prefersReduced ? { scale: 0.5, opacity: 0 } : undefined}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: getDuration('fast') }}
          >
            Copied!
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={!prefersReduced ? { scale: 0.5, opacity: 0 } : undefined}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: getDuration('fast') }}
          >
            Copy
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
