import { cva, type VariantProps } from 'class-variance-authority';
import { type ReactNode, type OlHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const listVariants = cva('', {
  variants: {
    variant: {
      unordered: 'list-disc',
      ordered: 'list-decimal',
      none: 'list-none',
    },
    size: {
      sm: 'text-sm space-y-1',
      md: 'text-base space-y-1.5',
      lg: 'text-lg space-y-2',
    },
    spacing: {
      tight: 'space-y-0.5',
      normal: 'space-y-1.5',
      relaxed: 'space-y-3',
    },
  },
  defaultVariants: {
    variant: 'unordered',
    size: 'md',
    spacing: 'normal',
  },
});

export interface ListProps
  extends OlHTMLAttributes<HTMLOListElement>, VariantProps<typeof listVariants> {
  items: (string | ReactNode)[];
  ordered?: boolean;
  /** Custom marker icon for unordered lists */
  markerIcon?: ReactNode;
}

/**
 * Ordered or unordered list with custom markers.
 */
export function List({
  items,
  ordered = false,
  variant,
  size,
  spacing,
  markerIcon,
  className,
}: ListProps) {
  const Tag = ordered ? 'ol' : 'ul';
  const resolvedVariant = ordered ? 'ordered' : variant || 'unordered';

  return (
    <Tag
      className={cn(
        listVariants({ variant: resolvedVariant, size, spacing }),
        'pl-6',
        markerIcon && 'list-none pl-0',
        className,
      )}
    >
      {items.map((item, idx) => (
        <li
          key={idx}
          className={cn(
            'text-[var(--kindonar-color-neutral-700)]',
            markerIcon && 'flex items-start gap-2',
          )}
        >
          {markerIcon && (
            <span
              className="mt-1 shrink-0 text-[var(--kindonar-color-primary-500)]"
              aria-hidden="true"
            >
              {markerIcon}
            </span>
          )}
          {item}
        </li>
      ))}
    </Tag>
  );
}
