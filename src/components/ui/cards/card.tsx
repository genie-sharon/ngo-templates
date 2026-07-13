import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import { Badge } from '@/components/ui/atoms/badge';
import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';

const cardVariants = cva('rounded-xl transition-all duration-300', {
  variants: {
    variant: {
      outlined:
        'border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)]',
      filled: 'bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)]',
      elevated:
        'bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-md)] hover:shadow-[var(--kindonar-shadow-lg)]',
      interactive: [
        'bg-[var(--kindonar-surface-raised)] border border-[var(--kindonar-border-default)]',
        'hover:shadow-[var(--kindonar-shadow-hover)] hover:border-[var(--kindonar-color-primary-200)] hover:-translate-y-0.5',
        'cursor-pointer',
      ],
      glass: 'bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl',
      minimal: 'bg-transparent',
    },
    padding: {
      none: 'p-0',
      tight: 'p-4',
      default: 'p-6',
      comfortable: 'p-8',
    },
  },
  defaultVariants: {
    variant: 'elevated',
    padding: 'default',
  },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  /** Optional click handler (use with interactive variant) */
  onClick?: () => void;
}

/**
 * Flexible card container with multiple visual variants.
 *
 * @example
 * <Card variant="interactive" padding="default">
 *   <CardImage src="/photo.jpg" />
 *   <CardTitle>Our Programs</CardTitle>
 *   <CardDescription>Learn about our work</CardDescription>
 * </Card>
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, onClick, children, ...props }, ref) => {
    const isInteractive = variant === 'interactive' || !!onClick;
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, padding, className }),
          isInteractive && 'hover:-translate-y-0.5',
        )}
        onClick={onClick}
        onKeyDown={
          onClick
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') onClick();
              }
            : undefined
        }
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}

        {...props}
      >
        {children}
      </div>
    );
  },
);
Card.displayName = 'Card';

export interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  /** Aspect ratio of the image container */
  aspectRatio?: 'square' | '16:9' | '4:3' | '3:2' | '1:1';
}

export const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ src, alt, aspectRatio = '16:9', className, ...props }, ref) => {
    const ratios: Record<string, string> = {
      square: 'aspect-square',
      '16:9': 'aspect-video',
      '4:3': 'aspect-[4/3]',
      '3:2': 'aspect-[3/2]',
      '1:1': 'aspect-square',
    };
    return (
      <div
        ref={ref}
        className={cn('relative overflow-hidden', ratios[aspectRatio], className)}
        {...props}
      >
        <Image
          src={src}
          alt={alt}
          fit="cover"
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  },
);
CardImage.displayName = 'CardImage';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-2', className)} {...props}>
      {children}
    </div>
  ),
);
CardContent.displayName = 'CardContent';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold text-[var(--kindonar-color-neutral-900)]', className)}
      {...props}
    >
      {children}
    </h3>
  ),
);
CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('line-clamp-2 text-sm text-[var(--kindonar-color-neutral-600)]', className)}
      {...props}
    >
      {children}
    </p>
  ),
);
CardDescription.displayName = 'CardDescription';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('mt-4 flex items-center gap-3', className)} {...props}>
      {children}
    </div>
  ),
);
CardFooter.displayName = 'CardFooter';

export interface CardBadgeProps {
  text: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  className?: string;
}

export const CardBadge = ({ text, variant = 'primary', className }: CardBadgeProps) => (
  <Badge variant={variant} size="sm" className={cn('absolute top-3 left-3', className)}>
    {text}
  </Badge>
);
