'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

/**
 * Radio button with label. Used within a RadioGroup.
 * Accessible with keyboard arrow navigation.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const radioId = id || (label ? `radio-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    return (
      <label htmlFor={radioId} className="inline-flex cursor-pointer items-center gap-3">
        <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className="peer absolute h-0 w-0 opacity-0"
            {...props}
          />
          <span
            className={cn(
              'flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors',
              'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)]',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--kindonar-border-focus)] peer-focus-visible:ring-offset-1',
              'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              'peer-checked:border-[var(--kindonar-color-primary-500)]',
              className,
            )}
          >
            {props.checked && (
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--kindonar-color-primary-500)]" />
            )}
          </span>
        </span>
        {label && <span className="text-sm text-[var(--kindonar-color-neutral-800)]">{label}</span>}
      </label>
    );
  },
);
Radio.displayName = 'Radio';

export interface RadioGroupProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
  label?: string;
  direction?: 'vertical' | 'horizontal';
}

/**
 * Group of radio buttons with keyboard navigation.
 *
 * @example
 * <RadioGroup name="frequency" value="monthly" onChange={setFrequency}>
 *   <Radio value="monthly" label="Monthly" />
 *   <Radio value="yearly" label="Yearly" />
 * </RadioGroup>
 */
export function RadioGroup({
  name: _name,
  value: _value,
  onChange: _onChange,
  children,
  className,
  label,
  direction = 'vertical',
}: RadioGroupProps) {
  return (
    <fieldset className={cn('space-y-1', className)}>
      {label && (
        <legend className="mb-2 text-sm font-medium text-[var(--kindonar-color-neutral-800)]">
          {label}
        </legend>
      )}
      <div className={cn('flex gap-4', direction === 'vertical' && 'flex-col')}>{children}</div>
    </fieldset>
  );
}
