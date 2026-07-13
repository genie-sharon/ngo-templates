import type { FullDesignTokens } from '@/types';

import { defaultLightTokens } from './default';

export const highContrastLightTokens: FullDesignTokens = {
  ...defaultLightTokens,
  color: {
    ...defaultLightTokens.color,
    primary: {
      50: '#f0f0ff',
      100: '#ddddfa',
      200: '#bdbdf8',
      300: '#9a9af0',
      400: '#6f6fee',
      500: '#3b3be0',
      600: '#2a2ac4',
      700: '#1e1ea0',
      800: '#141480',
      900: '#0c0c5e',
      950: '#060640',
    },
    neutral: {
      50: '#ffffff',
      100: '#f5f5f5',
      200: '#e0e0e0',
      300: '#c0c0c0',
      400: '#909090',
      500: '#606060',
      600: '#404040',
      700: '#303030',
      800: '#1a1a1a',
      900: '#0d0d0d',
      950: '#000000',
    },
  },
  surface: {
    base: '#ffffff',
    raised: '#ffffff',
    overlay: '#ffffff',
    inverse: '#000000',
    interactive: '#f5f5f5',
    selected: '#ddddfa',
    disabled: '#f5f5f5',
    background: { primary: '#3b3be0', secondary: '#ee5434' },
  },
  border: {
    default: '#c0c0c0',
    strong: '#909090',
    focus: '#3b3be0',
    error: '#dc2626',
    selected: '#3b3be0',
  },
  divider: { default: '#c0c0c0' },
  shadow: {
    none: 'none',
    sm: '0 1px 2px rgba(0,0,0,0.15)',
    md: '0 4px 6px rgba(0,0,0,0.2)',
    lg: '0 10px 15px rgba(0,0,0,0.25)',
    xl: '0 20px 25px rgba(0,0,0,0.3)',
    floating: '0 25px 50px rgba(0,0,0,0.35)',
    hover: '0 12px 24px rgba(0,0,0,0.3)',
  },
};
