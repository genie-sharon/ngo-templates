import { type ReactNode } from 'react';

import { Divider } from '@/components/ui/atoms/divider';
import { cn } from '@/lib/utils';

export interface FooterBottomProps {
  copyright?: string;
  /** Additional bottom bar content */
  children?: ReactNode;
  className?: string;
}

/**
 * Footer bottom bar with copyright and extra content.
 */
export function FooterBottom({
  copyright = `© ${new Date().getFullYear()} All rights reserved.`,
  children,
  className,
}: FooterBottomProps) {
  return (
    <div className={cn('pt-6', className)}>
      <Divider />
      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-[var(--kindonar-color-neutral-400)]">{copyright}</p>
        {children && <div className="flex items-center gap-4">{children}</div>}
      </div>
    </div>
  );
}
