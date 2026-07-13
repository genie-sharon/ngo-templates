import type { FullDesignTokens, ColorPalette } from '@/types';

function generatePalette(hex: string, _name: string): ColorPalette {
  const h = parseInt(hex.slice(1, 3), 16);
  const s = parseInt(hex.slice(3, 5), 16);
  const v = parseInt(hex.slice(5, 7), 16);
  const mix = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);
  const shade = (t: number) => {
    const f = t < 0.5 ? t * 2 : 2 - t * 2;
    const c: [number, number, number] = t < 0.5 ? [h, s, v] : [255, 255, 255];
    const r = mix(h, c[0], 1 - f);
    const g = mix(s, c[1], 1 - f);
    const b = mix(v, c[2], 1 - f);
    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
  };
  return {
    50: shade(0.95),
    100: shade(0.85),
    200: shade(0.7),
    300: shade(0.55),
    400: shade(0.35),
    500: hex,
    600: shade(-0.15),
    700: shade(-0.3),
    800: shade(-0.45),
    900: shade(-0.6),
    950: shade(-0.75),
  } as ColorPalette;
}

const neutrals: ColorPalette = {
  50: '#faf9f7',
  100: '#f2f1ef',
  200: '#e6e4e1',
  300: '#d1cec9',
  400: '#aba7a1',
  500: '#8b8781',
  600: '#706c67',
  700: '#5b5853',
  800: '#3d3b37',
  900: '#292825',
  950: '#1a1917',
};

const success: ColorPalette = {
  50: '#edfaf0',
  100: '#d3f4da',
  200: '#aae9b9',
  300: '#74d791',
  400: '#3dbe68',
  500: '#1ea34c',
  600: '#12843c',
  700: '#116a33',
  800: '#12552b',
  900: '#104626',
  950: '#062712',
};

const warning: ColorPalette = {
  50: '#fffae6',
  100: '#fff3b0',
  200: '#ffe680',
  300: '#ffd54f',
  400: '#ffc107',
  500: '#f59e0b',
  600: '#d97706',
  700: '#b45309',
  800: '#923f0a',
  900: '#78340b',
  950: '#451a03',
};

const error: ColorPalette = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
};

const info: ColorPalette = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  950: '#172554',
};

interface ThemeInput {
  id: string;
  name: string;
  description: string;
  mood: string;
  bestFor: string[];
  primary: string;
  secondary: string;
  accent: string;
  surface?: string;
  surfaceRaised?: string;
  headingFont?: string;
}

export function createTheme(input: ThemeInput): FullDesignTokens {
  const p = generatePalette(input.primary, 'primary');
  const s = generatePalette(input.secondary, 'secondary');
  const a = generatePalette(input.accent, 'accent');

  return {
    color: {
      primary: p,
      secondary: s,
      accent: a,
      neutral: neutrals,
      success,
      warning,
      error,
      info,
    },
    surface: {
      base: input.surface ?? '#faf9f7',
      raised: input.surfaceRaised ?? '#ffffff',
      overlay: '#ffffff',
      inverse: '#292825',
      interactive: '#f2f1ef',
      selected: p[50],
      disabled: '#f2f1ef',
      background: { primary: p[500], secondary: s[500] },
    },
    border: {
      default: '#e6e4e1',
      strong: '#d1cec9',
      focus: p[500],
      error: '#ef4444',
      selected: p[500],
    },
    divider: { default: '#e6e4e1' },
    overlay: { dark: 'rgba(0,0,0,0.6)', light: 'rgba(255,255,255,0.8)' },
    typography: {
      fontFamily: {
        body: "'Inter', system-ui, -apple-system, sans-serif",
        heading: input.headingFont ?? "'Inter', system-ui, -apple-system, sans-serif",
        mono: "'JetBrains Mono', monospace",
      },
      fontSize: {
        display: {
          xl: { fontSize: '4.5rem', fontWeight: 700, lineHeight: '1.1', letterSpacing: '-0.02em' },
          default: {
            fontSize: '3.75rem',
            fontWeight: 700,
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
          },
        },
        heading: {
          '1': { fontSize: '2.5rem', fontWeight: 600, lineHeight: '1.2', letterSpacing: '-0.01em' },
          '2': { fontSize: '2rem', fontWeight: 600, lineHeight: '1.25', letterSpacing: '-0.01em' },
          '3': { fontSize: '1.5rem', fontWeight: 600, lineHeight: '1.3' },
          '4': { fontSize: '1.25rem', fontWeight: 600, lineHeight: '1.4' },
          '5': { fontSize: '1.125rem', fontWeight: 600, lineHeight: '1.4' },
          '6': { fontSize: '1rem', fontWeight: 600, lineHeight: '1.5' },
        },
        body: {
          lg: { fontSize: '1.125rem', fontWeight: 400, lineHeight: '1.75' },
          md: { fontSize: '1rem', fontWeight: 400, lineHeight: '1.75' },
          sm: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '1.6' },
        },
        caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: '1.5' },
        overline: {
          fontSize: '0.75rem',
          fontWeight: 600,
          lineHeight: '1.5',
          letterSpacing: '0.08em',
        },
      },
      special: {
        statistic: { fontSize: '3rem', fontWeight: 700, lineHeight: '1.1' },
        quote: {
          fontSize: '1.25rem',
          fontWeight: 400,
          lineHeight: '1.75',
          letterSpacing: '0.01em',
        },
        button: {
          lg: { fontSize: '1.125rem', fontWeight: 600, lineHeight: '1' },
          md: { fontSize: '1rem', fontWeight: 600, lineHeight: '1' },
          sm: { fontSize: '0.875rem', fontWeight: 600, lineHeight: '1' },
        },
        label: {
          lg: { fontSize: '1rem', fontWeight: 500, lineHeight: '1.5' },
          md: { fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.5' },
          sm: { fontSize: '0.75rem', fontWeight: 500, lineHeight: '1.5' },
        },
      },
    },
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      24: '6rem',
      30: '7.5rem',
      40: '10rem',
    },
    radius: {
      none: '0',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.5rem',
      full: '9999px',
    },
    shadow: {
      none: 'none',
      sm: '0 1px 2px rgba(0,0,0,0.05)',
      md: '0 4px 6px -1px rgba(0,0,0,0.1)',
      lg: '0 10px 15px -3px rgba(0,0,0,0.1)',
      xl: '0 20px 25px -5px rgba(0,0,0,0.1)',
      floating: '0 8px 30px rgba(0,0,0,0.12)',
      hover: '0 10px 40px rgba(0,0,0,0.15)',
    },
    breakpoint: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    motion: {
      duration: {
        instant: '0.1s',
        fast: '0.2s',
        normal: '0.3s',
        slow: '0.4s',
        slower: '0.6s',
        slowest: '0.8s',
        verbose: '1s',
        expressive: '1.5s',
      },
      ease: {
        default: 'cubic-bezier(0.4, 0, 0.2, 1)',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        linear: 'linear',
      },
    },
    container: { max: '1280px', narrow: '768px', content: '1024px', sidebar: '320px' },
  };
}

export function createThemeMeta(input: ThemeInput) {
  return {
    meta: {
      id: input.id,
      name: input.name,
      description: input.description,
      mood: input.mood,
      bestFor: input.bestFor,
      colorMode: 'light' as const,
    },
    tokens: createTheme(input),
  };
}
