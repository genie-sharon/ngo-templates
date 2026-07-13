import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Container } from './container';

export interface CenteredLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
}

export const CenteredLayout = forwardRef<HTMLDivElement, CenteredLayoutProps>(
  ({ className, children, maxWidth = 'md', centered = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex w-full',
          centered ? 'min-h-screen items-center justify-center' : 'justify-center',
          className,
        )}
        {...props}
      >
        <Container size={maxWidth}>{children}</Container>
      </div>
    );
  },
);
CenteredLayout.displayName = 'CenteredLayout';
