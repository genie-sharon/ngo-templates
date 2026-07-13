'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode, type ElementType } from 'react';

import { getAnimationVariants } from '@/animations/variants';
import { useReducedMotion } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import type {
  AnimationVariant,
  SectionPadding,
  SectionTheme,
  SectionBackground,
} from './section-config.types';

export const animationVariants: Record<AnimationVariant, Variants> = {
  fade: getAnimationVariants('fade'),
  'fade-in': getAnimationVariants('fade-in'),
  'fade-in-up': getAnimationVariants('fade-in-up'),
  'fade-in-down': getAnimationVariants('fade-in-down'),
  'fade-in-left': getAnimationVariants('fade-in-left'),
  'fade-in-right': getAnimationVariants('fade-in-right'),
  scale: getAnimationVariants('scale'),
  'scale-in': getAnimationVariants('scale-in'),
  'scale-in-up': getAnimationVariants('scale-in-up'),
  'slide-in-up': getAnimationVariants('slide-in-up'),
  'slide-in-right': getAnimationVariants('slide-in-right'),
  reveal: getAnimationVariants('reveal'),
  'reveal-vertical': getAnimationVariants('reveal-vertical'),
  blur: getAnimationVariants('blur'),
  'blur-in': getAnimationVariants('blur-in'),
  zoom: getAnimationVariants('zoom'),
  'zoom-in': getAnimationVariants('zoom-in'),
  'zoom-out': getAnimationVariants('zoom-out'),
  rotate: getAnimationVariants('rotate'),
  'rotate-in': getAnimationVariants('rotate-in'),
  flip: getAnimationVariants('flip'),
  'flip-in': getAnimationVariants('flip-in'),
  drop: getAnimationVariants('drop'),
  'drop-in': getAnimationVariants('drop-in'),
  stagger: getAnimationVariants('stagger'),
  parallax: getAnimationVariants('parallax'),
  hero: getAnimationVariants('hero'),
  none: getAnimationVariants('none'),
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
};

export const parallaxItem: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring' as const, stiffness: 300, damping: 15 },
};

export const paddingClasses: Record<SectionPadding, string> = {
  none: 'py-0',
  small: 'py-8 md:py-12',
  medium: 'py-12 md:py-16',
  large: 'py-16 md:py-20 lg:py-24',
  xlarge: 'py-20 md:py-28 lg:py-36',
};

export const themeClasses: Record<SectionTheme, string> = {
  light: 'bg-[var(--kindonar-surface-primary)]',
  dark: 'bg-[var(--kindonar-color-neutral-900)] text-white',
  primary: 'bg-[var(--kindonar-color-primary-500)] text-white',
  secondary: 'bg-[var(--kindonar-color-secondary-500)] text-white',
  gradient:
    'bg-gradient-to-br from-[var(--kindonar-color-primary-500)] to-[var(--kindonar-color-secondary-500)] text-white',
  muted: 'bg-[var(--kindonar-surface-interactive)]',
  transparent: 'bg-transparent',
};

export interface MotionSectionProps extends HTMLMotionProps<'section'> {
  animation?: AnimationVariant;
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

export function MotionSection({
  animation = 'fade',
  className,
  children,
  as,
  ...props
}: MotionSectionProps) {
  const prefersReduced = useReducedMotion();
  const Tag = as || motion.section;

  if (prefersReduced || animation === 'none') {
    const StaticTag = as || 'section';
    return (
      <StaticTag className={cn(className)} {...(props as Record<string, unknown>)}>
        {children}
      </StaticTag>
    );
  }

  const variants = animationVariants[animation] ?? animationVariants['fade'];

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function SectionHeadingBlock({
  heading,
  theme,
  className,
}: {
  heading?: {
    title: string;
    subtitle?: string;
    description?: string;
    alignment?: 'left' | 'center' | 'right';
    tag?: string;
  };
  theme?: SectionTheme;
  className?: string;
}) {
  if (!heading?.title) return null;

  const isDark =
    theme === 'dark' || theme === 'primary' || theme === 'secondary' || theme === 'gradient';
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
      className={cn('mb-12 max-w-3xl', alignClasses[heading.alignment || 'center'], className)}
    >
      {heading.tag && (
        <span
          className={cn(
            'mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase',
            isDark
              ? 'bg-white/20 text-white'
              : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
          )}
        >
          {heading.tag}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl leading-[1.1] font-bold tracking-tight md:text-4xl lg:text-5xl',
          isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
        )}
      >
        {heading.title}
      </h2>
      {heading.subtitle && (
        <p
          className={cn(
            'mt-4 text-lg md:text-xl',
            isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-600)]',
          )}
        >
          {heading.subtitle}
        </p>
      )}
      {heading.description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed',
            isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-500)]',
          )}
        >
          {heading.description}
        </p>
      )}
    </motion.div>
  );
}

export function SectionWrapper({
  config,
  children,
  className,
}: {
  config: {
    theme: SectionTheme;
    padding: SectionPadding;
    background: SectionBackground;
    backgroundValue?: string;
    className?: string;
    id?: string;
  };
  children: ReactNode;
  className?: string;
}) {
  const bgStyles: React.CSSProperties = {};
  if (config.background === 'image' && config.backgroundValue) {
    bgStyles.backgroundImage = `url(${config.backgroundValue})`;
    bgStyles.backgroundSize = 'cover';
    bgStyles.backgroundPosition = 'center';
  }
  if (config.background === 'gradient' && config.backgroundValue) {
    bgStyles.backgroundImage = config.backgroundValue;
  }
  if (config.background === 'solid' && config.backgroundValue) {
    bgStyles.backgroundColor = config.backgroundValue;
  }

  return (
    <section
      id={config.id}
      className={cn(
        themeClasses[config.theme],
        paddingClasses[config.padding],
        config.background === 'image' && 'relative',
        className,
      )}
      style={bgStyles}
    >
      {config.background === 'image' && (
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      )}
      <div
        className={cn(
          'relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
          config.background === 'image' && 'text-white',
        )}
      >
        {children}
      </div>
    </section>
  );
}
