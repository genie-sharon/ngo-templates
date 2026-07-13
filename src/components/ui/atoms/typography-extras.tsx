'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const leadVariants = cva(
  'text-lg leading-relaxed text-[var(--kindonar-color-neutral-600)] md:text-xl',
);

export interface LeadProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: ElementType;
  children: ReactNode;
}

export const Lead = forwardRef<HTMLParagraphElement, LeadProps>(
  ({ className, as, children, ...props }, ref) => {
    const Tag = as || 'p';
    return (
      <Tag ref={ref} className={cn(leadVariants({ className }))} {...props}>
        {children}
      </Tag>
    );
  },
);
Lead.displayName = 'Lead';

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Code = forwardRef<HTMLElement, CodeProps>(({ className, children, ...props }, ref) => {
  return (
    <code
      ref={ref}
      className={cn(
        'rounded bg-[var(--kindonar-surface-interactive)] px-1.5 py-0.5 font-mono text-sm text-[var(--kindonar-color-neutral-800)]',
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
});
Code.displayName = 'Code';

const highlightTextVariants = cva('rounded-sm px-0.5', {
  variants: {
    color: {
      yellow: 'bg-yellow-200 text-[var(--kindonar-color-neutral-900)]',
      primary: 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-800)]',
      secondary:
        'bg-[var(--kindonar-color-secondary-100)] text-[var(--kindonar-color-secondary-800)]',
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
});

export interface HighlightTextProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>, VariantProps<typeof highlightTextVariants> {
  children: ReactNode;
}

export const HighlightText = forwardRef<HTMLElement, HighlightTextProps>(
  ({ className, color, children, ...props }, ref) => {
    return (
      <mark ref={ref} className={cn(highlightTextVariants({ color, className }))} {...props}>
        {children}
      </mark>
    );
  },
);
HighlightText.displayName = 'HighlightText';
