'use client';

import {
  forwardRef,
  useRef,
  useEffect,
  useCallback,
  type KeyboardEvent,
  type ClipboardEvent,
} from 'react';

import { cn } from '@/lib/utils';

export interface OtpInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export const OtpInput = forwardRef<HTMLDivElement, OtpInputProps>(
  ({ length = 6, value = '', onChange, onComplete, error, disabled = false, className }, ref) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
      inputRefs.current = inputRefs.current.slice(0, length);
    }, [length]);

    useEffect(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, []);

    const focusInput = useCallback((index: number) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]!.focus();
      }
    }, []);

    const handleChange = (index: number, char: string) => {
      if (disabled) return;
      if (!/^\d$/.test(char) && char !== '') return;

      const digits = value.split('');
      digits[index] = char;
      const newValue = digits.join('');

      onChange?.(newValue);

      if (char !== '' && index < length - 1) {
        focusInput(index + 1);
      }

      if (newValue.length === length && onComplete) {
        onComplete(newValue);
      }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return;

      if (e.key === 'Backspace') {
        e.preventDefault();
        const digits = value.split('');
        digits[index] = '';
        const newValue = digits.join('');
        onChange?.(newValue);

        if (index > 0) {
          focusInput(index - 1);
        }
      } else if (e.key === 'ArrowLeft' && index > 0) {
        focusInput(index - 1);
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        focusInput(index + 1);
      }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
      if (disabled) return;
      e.preventDefault();

      const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);

      if (!pasted) return;

      const digits = value.split('');
      for (let i = 0; i < pasted.length; i++) {
        const char = pasted[i];
        if (char) digits[i] = char;
      }
      const newValue = digits.join('');
      onChange?.(newValue);

      const nextIndex = Math.min(pasted.length, length - 1);
      focusInput(nextIndex);

      if (newValue.length === length && onComplete) {
        onComplete(newValue);
      }
    };

    return (
      <div ref={ref} className={cn('space-y-2', className)}>
        <div role="group" aria-label="One-time password" className="flex items-center gap-2">
          {Array.from({ length }, (_, i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              value={value[i] ?? ''}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={handlePaste}
              disabled={disabled}
              aria-label={`Digit ${i + 1}`}
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-md border-2 text-center text-lg font-semibold transition-colors',
                'bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-900)]',
                error
                  ? 'border-[var(--kindonar-border-error)] ring-1 ring-[var(--kindonar-border-error)]'
                  : 'border-[var(--kindonar-border-default)] focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-border-focus)]',
                disabled && 'cursor-not-allowed bg-[var(--kindonar-surface-disabled)] opacity-50',
              )}
            />
          ))}
        </div>
        {error && (
          <p className="text-xs text-[var(--kindonar-color-error-500)]" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);
OtpInput.displayName = 'OtpInput';
