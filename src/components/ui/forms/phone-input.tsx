'use client';

import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { forwardRef, useState, useRef, useEffect, useCallback, type KeyboardEvent } from 'react';

import { cn } from '@/lib/utils';

export interface Country {
  code: string;
  dial: string;
  flag: string;
  name: string;
}

export const defaultCountries: Country[] = [
  { code: 'US', dial: '1', flag: '🇺🇸', name: 'United States' },
  { code: 'GB', dial: '44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'IN', dial: '91', flag: '🇮🇳', name: 'India' },
  { code: 'CA', dial: '1', flag: '🇨🇦', name: 'Canada' },
  { code: 'AU', dial: '61', flag: '🇦🇺', name: 'Australia' },
];

const phoneVariants = cva(
  'flex w-full rounded-md border bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-900)] placeholder:text-[var(--kindonar-color-neutral-400)] transition-colors focus-within:ring-2 focus-within:ring-[var(--kindonar-border-focus)] focus-within:border-[var(--kindonar-color-primary-500)]',
  {
    variants: {
      size: {
        sm: 'h-9 text-xs',
        md: 'h-11 text-sm',
        lg: 'h-13 text-base',
      },
      error: {
        true: 'border-[var(--kindonar-border-error)] ring-1 ring-[var(--kindonar-border-error)]',
        false: 'border-[var(--kindonar-border-default)]',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50 bg-[var(--kindonar-surface-disabled)]',
      },
    },
    defaultVariants: {
      size: 'md',
      error: false,
    },
  },
);

export interface PhoneInputProps {
  value?: string;
  onChange?: (value: string, country: Country) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  countries?: Country[];
  defaultCountry?: Country;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      value = '',
      onChange,
      error,
      disabled = false,
      className,
      size = 'md',
      countries = defaultCountries,
      defaultCountry,
    },
    ref,
  ) => {
    const initialCountry: Country = defaultCountry ?? countries[0] ?? defaultCountries[0]!;
    const [selectedCountry, setSelectedCountry] = useState<Country>(initialCountry);
    const [phoneNumber, setPhoneNumber] = useState(value);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCountrySelect = useCallback(
      (country: Country) => {
        setSelectedCountry(country);
        setIsOpen(false);
        onChange?.(phoneNumber, country);
      },
      [phoneNumber, onChange],
    );

    const handlePhoneChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/\D/g, '');
        setPhoneNumber(raw);
        onChange?.(raw, selectedCountry);
      },
      [selectedCountry, onChange],
    );

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    return (
      <div className={cn('space-y-1.5', className)}>
        <div
          className={cn(
            phoneVariants({ size, error: !!error, disabled: disabled || undefined }),
            'flex items-center overflow-hidden',
          )}
        >
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => !disabled && setIsOpen(!isOpen)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              className={cn(
                'flex items-center gap-1 px-3 py-2 text-sm whitespace-nowrap text-[var(--kindonar-color-neutral-700)] transition-colors hover:text-[var(--kindonar-color-neutral-900)]',
                'border-r border-[var(--kindonar-border-default)]',
                disabled && 'cursor-not-allowed',
              )}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              aria-label="Country code selector"
            >
              <span className="text-base leading-none" aria-hidden="true">
                {selectedCountry.flag}
              </span>
              <span className="font-medium">+{selectedCountry.dial}</span>
              <ChevronDown
                className={cn('h-3.5 w-3.5 transition-transform', isOpen && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 max-h-60 w-56 overflow-auto rounded-md border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] shadow-lg">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                    className={cn(
                      'flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors',
                      country.code === selectedCountry.code
                        ? 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-800)]'
                        : 'text-[var(--kindonar-color-neutral-700)] hover:bg-[var(--kindonar-surface-interactive)]',
                    )}
                    role="option"
                    aria-selected={country.code === selectedCountry.code}
                  >
                    <span className="text-base" aria-hidden="true">
                      {country.flag}
                    </span>
                    <span className="flex-1">{country.name}</span>
                    <span className="text-[var(--kindonar-color-neutral-400)]">
                      +{country.dial}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            ref={ref}
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            disabled={disabled}
            placeholder="Phone number"
            aria-invalid={!!error}
            className={cn(
              'flex-1 bg-transparent px-3 py-2 text-[var(--kindonar-color-neutral-900)] outline-none placeholder:text-[var(--kindonar-color-neutral-400)]',
              size === 'sm' && 'text-xs',
              size === 'md' && 'text-sm',
              size === 'lg' && 'text-base',
              disabled && 'cursor-not-allowed',
            )}
          />
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
PhoneInput.displayName = 'PhoneInput';
