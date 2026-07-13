'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

import { useReducedMotion } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import {
  fadeInUp,
  cardStagger,
  itemFadeInUp,
  clipReveal,
  wordReveal,
  letterReveal,
} from './variants';

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'span' | 'article';
}

export function Reveal({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  duration,
  threshold = 0.1,
  once = true,
  as = 'div',
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  if (prefersReduced) {
    return <>{children}</>;
  }

  const resolvedVariants: Variants = {
    hidden: { ...variants.hidden },
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as { transition?: object })?.transition,
        delay,
        ...(duration ? { duration } : {}),
      },
    },
  };

  const Tag = motion[as];

  return (
    <Tag
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={resolvedVariants}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}

interface StaggerRevealProps {
  children: ReactNode[];
  className?: string;
  staggerVariants?: Variants;
  itemVariants?: Variants;
  delay?: number;
  staggerDelay?: number;
}

export function StaggerReveal({
  children,
  className,
  staggerVariants = cardStagger,
  itemVariants = itemFadeInUp,
  delay = 0,
  staggerDelay,
}: StaggerRevealProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const resolvedStagger: Variants = {
    hidden: { ...staggerVariants.hidden },
    visible: {
      ...staggerVariants.visible,
      transition: {
        ...(staggerVariants.visible as { transition?: object })?.transition,
        delayChildren: delay,
        staggerChildren: staggerDelay ?? 0.08,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={resolvedStagger}
      className={cn(className)}
    >
      {children.map((child, i) => (
        <motion.div key={i} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  mode?: 'word' | 'letter';
  delay?: number;
}

export function TextReveal({
  text,
  className,
  as = 'h2',
  mode = 'word',
  delay = 0,
}: TextRevealProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  if (prefersReduced) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(' ');
  const letters = text.split('');
  const itemVariants: Variants = mode === 'word' ? wordReveal : letterReveal;

  const resolvedContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: mode === 'word' ? 0.04 : 0.02,
      },
    },
  };

  const items = mode === 'word' ? words : letters;

  const Tag = motion[as];

  return (
    <div ref={ref}>
      <Tag
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={resolvedContainer}
        className={cn('inline-flex flex-wrap', className)}
      >
        {items.map((item, i) => (
          <motion.span
            key={`${item}-${i}`}
            variants={itemVariants}
            className={mode === 'word' ? 'mr-[0.25em] inline-block' : 'inline-block'}
            aria-hidden="true"
          >
            {item}
            {mode === 'word' && i < items.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'horizontal' | 'vertical';
  delay?: number;
  duration?: number;
}

export function ClipReveal({
  children,
  className,
  direction = 'horizontal',
  delay = 0,
  duration,
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const variant = direction === 'horizontal' ? clipReveal : clipReveal;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { ...variant.hidden },
        visible: {
          ...variant.visible,
          transition: {
            ...(variant.visible as { transition?: object })?.transition,
            delay,
            ...(duration ? { duration } : {}),
          },
        },
      }}
      className={cn('overflow-hidden', className)}
    >
      {children}
    </motion.div>
  );
}
