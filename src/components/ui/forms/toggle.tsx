'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Whether the toggle is on */
  pressed?: boolean;
  /** Called when toggle state changes */
  onPressedChange?: (pressed: boolean) => void;
  /** Label shown next to the toggle */
  label?: string;
  /** Description shown below */
  description?: string;
}

/**
 * Toggle switch for boolean settings.
 * Accessible with keyboard Space/Enter support.
 *
 * @example
 * <Toggle pressed={darkMode} onPressedChange={setDarkMode} label="Dark Mode" />
 */
export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ pressed = false, onPressedChange, label, description, className, id, ...props }, ref) => {
    const toggleId =
      id || (label ? `toggle-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    return (
      <div className={cn('flex items-center justify-between', className)}>
        {(label || description) && (
          <div className="flex-1 space-y-0.5">
            {label && (
              <label
                htmlFor={toggleId}
                className="cursor-pointer text-sm font-medium text-[var(--kindonar-color-neutral-800)]"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-[var(--kindonar-color-neutral-500)]">{description}</p>
            )}
          </div>
        )}
        <button
          ref={ref}
          id={toggleId}
          type="button"
          role="switch"
          aria-checked={pressed}
          onClick={() => onPressedChange?.(!pressed)}
          className={cn(
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200',
            'focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:ring-offset-2 focus-visible:outline-none',
            pressed
              ? 'bg-[var(--kindonar-color-primary-500)]'
              : 'bg-[var(--kindonar-color-neutral-300)]',
          )}
          {...props}
        >
          <span
            className={cn(
              'inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition-transform duration-200',
              pressed ? 'translate-x-[22px]' : 'translate-x-[2px]',
            )}
          />
        </button>
      </div>
    );
  },
);
Toggle.displayName = 'Toggle';
