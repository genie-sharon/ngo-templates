import type { BreakpointName } from '@/types';

export const BREAKPOINTS: Record<BreakpointName, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const MEDIA_QUERIES: Record<BreakpointName, string> = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

export const CONTAINER_WIDTHS: Record<string, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
};

export const COLUMN_COUNTS: Record<BreakpointName, number> = {
  xs: 4,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 12,
  '2xl': 12,
};

export const GUTTER_SIZES: Record<BreakpointName, string> = {
  xs: '16px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '24px',
  '2xl': '32px',
};

export const MARGIN_SIZES: Record<BreakpointName, string> = {
  xs: '16px',
  sm: '24px',
  md: '32px',
  lg: '32px',
  xl: 'auto',
  '2xl': 'auto',
};
