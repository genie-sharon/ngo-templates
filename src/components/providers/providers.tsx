'use client';

import { type ReactNode } from 'react';

import { ThemeProvider } from '@/context/theme-context';

import { MotionProvider } from './motion-provider';
import { ToastProvider } from './toast-provider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <MotionProvider>
        <ToastProvider>{children}</ToastProvider>
      </MotionProvider>
    </ThemeProvider>
  );
}
