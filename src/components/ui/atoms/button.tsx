'use client';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Spinner } from './spinner';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--kindonar-border-focus)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97]',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--kindonar-color-primary-500)] text-white hover:bg-[var(--kindonar-color-primary-600)] active:bg-[var(--kindonar-color-primary-700)] shadow-sm hover:shadow-md',
        secondary:
          'bg-[var(--kindonar-color-secondary-500)] text-white hover:bg-[var(--kindonar-color-secondary-600)] active:bg-[var(--kindonar-color-secondary-700)] shadow-sm hover:shadow-md',
        outline:
          'border border-[var(--kindonar-border-default)] bg-transparent text-[var(--kindonar-color-neutral-700)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)] hover:border-[var(--kindonar-color-neutral-300)]',
        ghost:
          'bg-transparent text-[var(--kindonar-color-neutral-700)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)]',
        link: 'bg-transparent text-[var(--kindonar-color-primary-600)] underline-offset-4 hover:underline hover:text-[var(--kindonar-color-primary-500)]',
        danger:
          'bg-[var(--kindonar-color-error-500)] text-white hover:bg-[var(--kindonar-color-error-600)] active:bg-[var(--kindonar-color-error-700)] shadow-sm hover:shadow-md',
        success:
          'bg-[var(--kindonar-color-success-500)] text-white hover:bg-[var(--kindonar-color-success-600)] shadow-sm hover:shadow-md',
        donate:
          'bg-[var(--kindonar-color-secondary-500)] text-white hover:bg-[var(--kindonar-color-secondary-600)] active:bg-[var(--kindonar-color-secondary-700)] shadow-lg hover:shadow-xl font-bold',
        volunteer:
          'bg-[var(--kindonar-color-primary-500)] text-white hover:bg-[var(--kindonar-color-primary-600)] active:bg-[var(--kindonar-color-primary-700)] shadow-lg hover:shadow-xl font-bold',
        gradient:
          'bg-gradient-to-r from-[var(--kindonar-color-primary-500)] to-[var(--kindonar-color-secondary-500)] text-white hover:from-[var(--kindonar-color-primary-600)] hover:to-[var(--kindonar-color-secondary-600)] shadow-md hover:shadow-lg hover:scale-[1.02]',
        warning:
          'bg-[var(--kindonar-color-warning-500)] text-white hover:bg-amber-600 active:bg-amber-700 shadow-sm hover:shadow-md',
        icon: 'h-10 w-10 p-0 rounded-full bg-transparent text-[var(--kindonar-color-neutral-700)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)] hover:scale-105',
        floating:
          'fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-xl bg-[var(--kindonar-color-primary-500)] text-white hover:bg-[var(--kindonar-color-primary-600)] active:bg-[var(--kindonar-color-primary-700)] hover:shadow-2xl hover:scale-105',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  /** Shows a spinner and disables the button */
  isLoading?: boolean;
  /** Loading text shown alongside spinner */
  loadingText?: string;
  /** Icon rendered before the text */
  leftIcon?: ReactNode;
  /** Icon rendered after the text */
  rightIcon?: ReactNode;
  /** Render as a child of the button (for custom elements) */
  asChild?: boolean;
}

/**
 * Primary action button with multiple variants and sizes.
 * Supports loading state, icons, and full-width mode.
 *
 * @example
 * <Button variant="primary" size="md" isLoading>
 *   Donate Now
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      disabled,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={(!asChild && (disabled || isLoading)) as boolean | undefined}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <Spinner size="sm" aria-hidden="true" />
            {loadingText || children}
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
            {children}
            {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
          </span>
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';
