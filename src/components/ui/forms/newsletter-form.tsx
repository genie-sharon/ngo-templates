'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { forwardRef, useState, useCallback, type FormEvent } from 'react';

import { Button } from '@/components/ui/atoms/button';
import { cn } from '@/lib/utils';

import { Input } from './input';

const newsletterVariants = cva('', {
  variants: {
    variant: {
      inline: 'flex flex-col sm:flex-row items-start sm:items-end gap-3',
      stacked: 'flex flex-col gap-3',
      hero: 'flex flex-col sm:flex-row items-start sm:items-end gap-4',
    },
  },
  defaultVariants: {
    variant: 'inline',
  },
});

export interface NewsletterFormProps extends VariantProps<typeof newsletterVariants> {
  onSubmit?: (email: string) => Promise<void> | void;
  variant?: 'inline' | 'stacked' | 'hero';
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  className?: string;
}

type NewsletterState = 'idle' | 'loading' | 'success' | 'error';

export const NewsletterForm = forwardRef<HTMLFormElement, NewsletterFormProps>(
  (
    {
      onSubmit,
      variant = 'inline',
      placeholder = 'Enter your email',
      buttonText = 'Subscribe',
      successMessage = 'Thank you for subscribing!',
      className,
    },
    ref,
  ) => {
    const [email, setEmail] = useState('');
    const [state, setState] = useState<NewsletterState>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = useCallback(
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setState('error');
          setErrorMessage('Please enter a valid email address');
          return;
        }

        setState('loading');
        setErrorMessage('');

        try {
          await onSubmit?.(email);
          setState('success');
          setEmail('');
        } catch {
          setState('error');
          setErrorMessage('Something went wrong. Please try again.');
        }
      },
      [email, onSubmit],
    );

    if (state === 'success') {
      return (
        <div
          role="status"
          className={cn(
            'flex items-center gap-3 rounded-lg p-4 text-sm',
            'bg-[var(--kindonar-color-success-100)] text-[var(--kindonar-color-success-800)]',
            variant === 'hero' && 'p-6 text-base',
          )}
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>{successMessage}</span>
        </div>
      );
    }

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        role="form"
        aria-label="Newsletter signup"
        className={cn(newsletterVariants({ variant }), className)}
      >
        <div className={cn('w-full flex-1', variant === 'hero' && 'max-w-md')}>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === 'error') setState('idle');
            }}
            placeholder={placeholder}
            variant={state === 'error' ? 'error' : 'default'}
            aria-label="Email address"
            size={variant === 'hero' ? 'lg' : 'md'}
            disabled={state === 'loading'}
          />
          {state === 'error' && errorMessage && (
            <p
              className="mt-1.5 flex items-center gap-1.5 text-xs text-[var(--kindonar-color-error-500)]"
              role="alert"
            >
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {errorMessage}
            </p>
          )}
        </div>
        <Button
          type="submit"
          variant="primary"
          size={variant === 'hero' ? 'lg' : 'md'}
          isLoading={state === 'loading'}
          disabled={state === 'loading'}
          className={cn('shrink-0', variant === 'hero' && 'px-8')}
        >
          {buttonText}
        </Button>
      </form>
    );
  },
);
NewsletterForm.displayName = 'NewsletterForm';
