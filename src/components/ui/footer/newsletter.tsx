'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/atoms/button';
import { cn } from '@/lib/utils';

export interface NewsletterProps {
  className?: string;
  title?: string;
  description?: string;
  /** Placeholder text for the email input */
  placeholder?: string;
  /** Submit button label */
  buttonLabel?: string;
  /** Called on form submission */
  onSubmit?: (email: string) => void;
  /** Success message */
  successMessage?: string;
}

/**
 * Newsletter signup form.
 */
export function Newsletter({
  title = 'Stay updated',
  description = 'Get the latest news and updates delivered to your inbox.',
  placeholder = 'Enter your email',
  buttonLabel = 'Subscribe',
  onSubmit,
  successMessage = 'Thank you for subscribing!',
  className,
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    onSubmit?.(email.trim());
    setStatus('success');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <div
        className={cn(
          'rounded-lg border border-[var(--kindonar-color-success-200)] bg-[var(--kindonar-color-success-50)] px-6 py-8 text-center',
          className,
        )}
      >
        <p className="text-sm font-medium text-[var(--kindonar-color-success-900)]">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <div className={cn(className)}>
      {title && (
        <h3 className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">{title}</h3>
      )}
      {description && (
        <p className="mt-2 text-sm text-[var(--kindonar-color-neutral-500)]">{description}</p>
      )}
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          {placeholder}
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 rounded-lg border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)] px-3 py-2 text-sm text-[var(--kindonar-color-neutral-900)] placeholder:text-[var(--kindonar-color-neutral-400)] focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)] focus:outline-none"
        />
        <Button type="submit" variant="primary" size="sm">
          {buttonLabel}
        </Button>
      </form>
    </div>
  );
}
