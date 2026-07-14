'use client';

import { Search as SearchIcon, X } from 'lucide-react';
import { forwardRef, useState, type KeyboardEvent } from 'react';

import { cn } from '@/lib/utils';

import { Input, type InputProps } from './input';

export interface SearchProps extends Omit<
  InputProps,
  'leftIcon' | 'rightIcon' | 'type' | 'onSubmit'
> {
  onClear?: () => void;
  onSubmit?: (value: string) => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      className,
      size = 'md',
      value,
      onChange,
      onClear,
      onSubmit,
      placeholder = 'Search...',
      label,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState('');

    const currentValue = (value ?? internalValue) as string;
    const setValue = onChange
      ? (v: string) => onChange({ target: { value: v } } as React.ChangeEvent<HTMLInputElement>)
      : setInternalValue;

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSubmit) {
        onSubmit(currentValue);
      }
    };

    const handleClear = () => {
      setValue('');
      if (onClear) onClear();
    };

    return (
      <div role="search" className={cn('relative', className)}>
        <Input
          ref={ref}
          type="search"
          value={currentValue}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          label={label}
          size={size}
          disabled={disabled}
          leftIcon={<SearchIcon className="h-4 w-4" aria-hidden="true" />}
          rightIcon={
            currentValue ? (
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center justify-center rounded-full p-0.5 text-[var(--kindonar-color-neutral-400)] transition-colors hover:text-[var(--kindonar-color-neutral-700)]"
                aria-label="Clear search"
                tabIndex={-1}
              >
                <X className="h-4 w-4" />
              </button>
            ) : undefined
          }
          aria-label={label || 'Search'}
          {...props}
        />
      </div>
    );
  },
);
SearchInput.displayName = 'SearchInput';
