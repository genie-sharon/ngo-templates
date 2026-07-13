import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const sectionVariants = cva('', {
  variants: {
    variant: {
      default: 'bg-[var(--kindonar-surface-base)]',
      muted: 'bg-[var(--kindonar-surface-interactive)]',
      primary: 'bg-[var(--kindonar-color-primary-500)] text-white',
      secondary: 'bg-[var(--kindonar-color-secondary-500)] text-white',
      dark: 'bg-[var(--kindonar-color-neutral-900)] text-white',
      image: 'relative',
    },
    paddingY: {
      none: 'py-0',
      tight: 'py-10 md:py-16',
      default: 'py-16 md:py-20',
      spacious: 'py-20 md:py-24',
      hero: 'py-24 md:py-32 lg:py-40',
    },
  },
  defaultVariants: {
    variant: 'default',
    paddingY: 'default',
  },
});

export interface SectionProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
  /** Background image URL (for variant="image") */
  backgroundImage?: string;
  /** Show overlay on background image */
  overlay?: boolean;
  /** Overlay opacity (0-100) */
  overlayOpacity?: number;
  /** HTML element to render */
  as?: 'section' | 'div' | 'article' | 'header';
}

/**
 * Page section wrapper with background variants and spacing.
 *
 * @example
 * <Section variant="muted" paddingY="spacious">
 *   <Container>Content</Container>
 * </Section>
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant,
      paddingY,
      backgroundImage,
      overlay,
      overlayOpacity = 50,
      as: Tag = 'section',
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const hasImage = variant === 'image' && backgroundImage;

    return (
      <Tag
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(
          sectionVariants({ variant: hasImage ? 'default' : variant, paddingY, className }),
          'relative',
        )}
        style={{
          ...style,
          ...(hasImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {}),
        }}
        {...props}
      >
        {hasImage && overlay && (
          <div
            className="absolute inset-0 bg-black/50"
            style={{ opacity: overlayOpacity / 100 }}
            aria-hidden="true"
          />
        )}
        <div className={cn('relative z-10', hasImage && 'text-white')}>{children}</div>
      </Tag>
    );
  },
);
Section.displayName = 'Section';
