import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export interface Badge {
  name: string;
  logo?: string;
  description?: string;
}

const trustVariants = cva('', {
  variants: {
    variant: {
      logo: 'flex flex-wrap items-center justify-center gap-8 md:gap-12',
      grid: 'grid',
      simple: 'flex flex-wrap items-center justify-center gap-4',
    },
  },
  defaultVariants: {
    variant: 'logo',
  },
});

export interface TrustBadgesProps extends VariantProps<typeof trustVariants> {
  badges: Badge[];
  variant?: 'logo' | 'grid' | 'simple';
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

const gridColumns = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5',
};

export function TrustBadges({
  badges,
  variant = 'logo',
  columns = 4,
  className,
}: TrustBadgesProps) {
  const safeBadges = Array.isArray(badges) ? badges : [];
  if (variant === 'logo') {
    return (
      <div className={cn(trustVariants({ variant }), className)}>
        {safeBadges.map((badge, i) => (
          <div
            key={`${badge.name}-${i}`}
            className="flex items-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            title={badge.name}
          >
            {badge.logo ? (
              <img
                src={badge.logo}
                alt={`${badge.name} logo`}
                className="h-8 w-auto object-contain md:h-10"
                loading="lazy"
              />
            ) : (
              <span className="text-sm font-semibold text-[var(--kindonar-color-neutral-500)]">
                {badge.name}
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'simple') {
    return (
      <div className={cn(trustVariants({ variant }), className)}>
        {safeBadges.map((badge, i) => (
          <span
            key={`${badge.name}-${i}`}
            className="inline-flex items-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] px-4 py-1.5 text-sm text-[var(--kindonar-color-neutral-600)]"
          >
            {badge.name}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={cn(trustVariants({ variant }), gridColumns[columns], 'gap-4', className)}>
      {safeBadges.map((badge, i) => (
        <div
          key={`${badge.name}-${i}`}
          className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-5 text-center transition-shadow hover:shadow-md"
        >
          {badge.logo && (
            <img
              src={badge.logo}
              alt={`${badge.name} logo`}
              className="mx-auto mb-3 h-10 w-auto object-contain"
              loading="lazy"
            />
          )}
          <h4 className="text-sm font-semibold text-[var(--kindonar-color-neutral-800)]">
            {badge.name}
          </h4>
          {badge.description && (
            <p className="mt-1 text-xs text-[var(--kindonar-color-neutral-500)]">
              {badge.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
TrustBadges.displayName = 'TrustBadges';
