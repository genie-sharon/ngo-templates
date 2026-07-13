import type { FullDesignTokens } from '@/types';

import { defaultLightTokens } from './default';

export const warmLightTokens: FullDesignTokens = {
  ...defaultLightTokens,
  color: {
    ...defaultLightTokens.color,
    primary: {
      50: '#fdf4ed',
      100: '#fae6d9',
      200: '#f4ccb6',
      300: '#ecab8a',
      400: '#e3845c',
      500: '#b8654c',
      600: '#a15540',
      700: '#854435',
      800: '#6d392e',
      900: '#5c3228',
      950: '#331a14',
    },
    neutral: {
      50: '#faf6f0',
      100: '#f2ede4',
      200: '#e6ddd0',
      300: '#d1c5b4',
      400: '#aba292',
      500: '#8b8274',
      600: '#70685c',
      700: '#5b544a',
      800: '#3d3831',
      900: '#292621',
      950: '#1a1815',
    },
  },
  surface: {
    ...defaultLightTokens.surface,
    base: '#faf6f0',
    raised: '#ffffff',
    selected: '#fdf4ed',
  },
  border: {
    ...defaultLightTokens.border,
    default: '#e6ddd0',
    strong: '#d1c5b4',
  },
};
