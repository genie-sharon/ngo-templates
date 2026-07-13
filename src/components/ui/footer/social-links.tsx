import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface SocialLinksProps {
  links: SocialLink[];
  /** Icon size */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Social media link icons.
 */
export function SocialLinks({ links, size = 'md', className }: SocialLinksProps) {
  const sizeClasses: Record<string, string> = { sm: 'h-8 w-8', md: 'h-10 w-10', lg: 'h-12 w-12' };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={cn(
            'inline-flex items-center justify-center rounded-full border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-500)] transition-colors hover:border-[var(--kindonar-color-primary-300)] hover:bg-[var(--kindonar-color-primary-50)] hover:text-[var(--kindonar-color-primary-600)]',
            sizeClasses[size],
          )}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
