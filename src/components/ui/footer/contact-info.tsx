import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
  icon?: ReactNode;
}

export interface ContactInfoProps {
  title?: string;
  details: ContactDetail[];
  className?: string;
}

/**
 * Contact information block with icons.
 */
export function ContactInfo({ title, details, className }: ContactInfoProps) {
  return (
    <div className={cn(className)}>
      {title && (
        <h3 className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">{title}</h3>
      )}
      <ul className={cn('space-y-3', title && 'mt-4')}>
        {details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-3">
            {detail.icon && (
              <span
                className="mt-0.5 shrink-0 text-[var(--kindonar-color-primary-500)]"
                aria-hidden="true"
              >
                {detail.icon}
              </span>
            )}
            <div>
              <p className="text-xs text-[var(--kindonar-color-neutral-500)]">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-sm text-[var(--kindonar-color-neutral-700)] transition-colors hover:text-[var(--kindonar-color-primary-600)]"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-sm text-[var(--kindonar-color-neutral-700)]">{detail.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
