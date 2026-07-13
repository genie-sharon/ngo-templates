'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef, type ReactNode } from 'react';

import { useReducedMotion } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import { getDuration, getEase } from './tokens';
import { counterUp } from './variants';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  autoStart?: boolean;
  once?: boolean;
  formatter?: (value: number) => string;
}

export function AnimatedCounter({
  from = 0,
  to,
  decimals = 0,
  suffix = '',
  prefix = '',
  className,
  autoStart = true,
  once = true,
  formatter,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const prefersReduced = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(from, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.5,
  });

  const displayValue = useTransform(springValue, (v) => {
    if (formatter) return formatter(v);
    const formatted = v.toFixed(decimals);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!autoStart) return;
    if (isInView && !hasAnimated) {
      if (prefersReduced) {
        springValue.set(to);
      } else {
        springValue.set(to);
      }
      setHasAnimated(true);
    }
  }, [isInView, autoStart, hasAnimated, prefersReduced, springValue, to]);

  useEffect(() => {
    if (hasAnimated || prefersReduced) return;
    const timer = setTimeout(() => {
      springValue.set(to);
    }, 100);
    return () => clearTimeout(timer);
  }, [to, hasAnimated, prefersReduced, springValue]);

  if (prefersReduced) {
    const display = formatter ? formatter(to) : `${prefix}${to.toFixed(decimals)}${suffix}`;
    return <span className={cn('tabular-nums', className)}>{display}</span>;
  }

  return (
    <motion.span
      ref={ref}
      className={cn('tabular-nums', className)}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: getDuration('slower'), ease: getEase('emphasizedOut') }}
    >
      <motion.span>{displayValue}</motion.span>
    </motion.span>
  );
}

interface CounterCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: ReactNode;
  className?: string;
  delay?: number;
}

export function CounterCard({
  value,
  label,
  suffix = '',
  prefix = '',
  icon,
  className,
  delay = 0,
}: CounterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={!prefersReduced ? 'hidden' : undefined}
      animate={isInView && !prefersReduced ? 'visible' : undefined}
      variants={counterUp}
      className={cn('flex flex-col items-center gap-3 rounded-2xl p-6 text-center', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {icon && (
        <motion.div
          initial={!prefersReduced ? { scale: 0 } : undefined}
          animate={isInView && !prefersReduced ? { scale: 1 } : undefined}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
            delay: delay + 0.2,
          }}
          className="mb-1"
        >
          {icon}
        </motion.div>
      )}
      <AnimatedCounter
        from={0}
        to={value}
        suffix={suffix}
        prefix={prefix}
        className="text-4xl font-bold tracking-tight md:text-5xl"
      />
      <motion.span
        initial={!prefersReduced ? { opacity: 0 } : undefined}
        animate={isInView && !prefersReduced ? { opacity: 1 } : undefined}
        transition={{ delay: delay + 0.4 }}
        className="text-sm font-medium text-neutral-500 dark:text-neutral-400"
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
