import type { BreakpointName } from '@/types';

export const breakpoints: Record<BreakpointName, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const mediaQueries: Record<BreakpointName, string> = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

export function getBreakpointName(width: number): BreakpointName {
  if (width >= breakpoints['2xl']) return '2xl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
}

export function isBreakpointActive(breakpoint: BreakpointName): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(mediaQueries[breakpoint]).matches;
}

export function responsiveValue<T>(values: Partial<Record<BreakpointName, T>>, defaultValue: T): T {
  const ordered: BreakpointName[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  for (let i = ordered.length - 1; i >= 0; i--) {
    const bp = ordered[i]!;
    if (values[bp] !== undefined && isBreakpointActive(bp)) {
      return values[bp] as T;
    }
  }
  return defaultValue;
}

export function getSectionWidth(_containerWidth: BreakpointName, columns: number): string {
  const gridFractions: Record<string, string> = {
    '1': '1/1',
    '2': '1/2',
    '3': '1/3',
    '4': '1/4',
    '5': '1/5',
    '6': '1/6',
    '7': '1/7',
    '8': '1/8',
    '9': '1/9',
    '10': '1/10',
    '11': '1/11',
    '12': '1/1',
  };
  return gridFractions[String(columns)] ?? '1/1';
}
