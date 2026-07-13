import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const headingVariants = cva('font-bold text-[var(--kindonar-color-neutral-900)]', {
  variants: {
    level: {
      h1: 'text-4xl tracking-tight md:text-5xl lg:text-6xl',
      h2: 'text-3xl tracking-tight md:text-4xl',
      h3: 'text-2xl md:text-3xl',
      h4: 'text-xl md:text-2xl',
      h5: 'text-lg md:text-xl',
      h6: 'text-base md:text-lg',
    },
    balance: {
      true: 'text-balance',
    },
  },
  defaultVariants: {
    level: 'h2',
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: ElementType;
  children: ReactNode;
}

/**
 * Typographic heading component with semantic HTML and responsive sizing.
 *
 * @example
 * <Heading level="h1">Our Mission</Heading>
 * <Heading level="h2" balance>Making a difference</Heading>
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 'h2', as, balance, children, ...props }, ref) => {
    const Tag = as || level || 'h2';
    return (
      <Tag ref={ref} className={cn(headingVariants({ level, balance, className }))} {...props}>
        {children}
      </Tag>
    );
  },
);
Heading.displayName = 'Heading';

const textVariants = cva('text-[var(--kindonar-color-neutral-700)]', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-[var(--kindonar-color-neutral-700)]',
      muted: 'text-[var(--kindonar-color-neutral-500)]',
      primary: 'text-[var(--kindonar-color-primary-600)]',
      inverse: 'text-white',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    balance: {
      true: 'text-balance',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
    color: 'default',
  },
});

export interface TextProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>, VariantProps<typeof textVariants> {
  as?: ElementType;
  children: ReactNode;
}

/**
 * Text component for body copy with size, weight, and color variants.
 */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, align, balance, as, children, ...props }, ref) => {
    const Tag = as || 'p';
    return (
      <Tag
        ref={ref}
        className={cn(textVariants({ size, weight, color, align, balance, className }))}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);
Text.displayName = 'Text';

export interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {
  children: ReactNode;
}

/**
 * Styled blockquote for testimonials and featured quotes.
 */
export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={cn(
          'border-l-4 border-[var(--kindonar-color-primary-300)] pl-6 text-[var(--kindonar-color-neutral-600)] italic',
          className,
        )}
        {...props}
      >
        {children}
      </blockquote>
    );
  },
);
Blockquote.displayName = 'Blockquote';

export interface CaptionProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

/**
 * Small caption text for images, dates, and metadata.
 */
export const Caption = forwardRef<HTMLSpanElement, CaptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('text-xs text-[var(--kindonar-color-neutral-500)]', className)}
        {...props}
      >
        {children}
      </span>
    );
  },
);
Caption.displayName = 'Caption';
