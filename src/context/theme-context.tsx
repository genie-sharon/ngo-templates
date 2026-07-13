'use client';

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';

import { themes, getThemeTokens } from '@/themes';
import type { ThemeContextValue, ThemeId, ColorMode } from '@/types';
import type { FullDesignTokens } from '@/types/tokens';

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeId;
  defaultColorMode?: ColorMode;
}

function flattenTokens(tokens: Partial<FullDesignTokens>): Record<string, string> {
  const flat: Record<string, string> = {};

  if (tokens.color) {
    for (const [name, shades] of Object.entries(tokens.color)) {
      if (shades && typeof shades === 'object') {
        for (const [shade, value] of Object.entries(shades)) {
          flat[`--kindonar-color-${name}-${shade}`] = String(value);
        }
      }
    }
  }

  if (tokens.surface) {
    for (const [key, value] of Object.entries(tokens.surface)) {
      if (typeof value === 'object' && value !== null) {
        for (const [sub, v] of Object.entries(value)) {
          flat[`--kindonar-surface-${key}-${sub}`] = String(v);
        }
      } else {
        flat[`--kindonar-surface-${key}`] = String(value);
      }
    }
  }

  if (tokens.border) {
    for (const [key, value] of Object.entries(tokens.border)) {
      flat[`--kindonar-border-${key}`] = String(value);
    }
  }

  if (tokens.divider?.default) {
    flat['--kindonar-divider-default'] = tokens.divider.default;
  }

  if (tokens.shadow) {
    for (const [key, value] of Object.entries(tokens.shadow)) {
      flat[`--kindonar-shadow-${key}`] = String(value);
    }
  }

  if (tokens.radius) {
    for (const [key, value] of Object.entries(tokens.radius)) {
      flat[`--kindonar-radius-${key}`] = String(value);
    }
  }

  if (tokens.spacing) {
    for (const [key, value] of Object.entries(tokens.spacing)) {
      flat[`--kindonar-spacing-${key}`] = String(value);
    }
  }

  if (tokens.typography) {
    flat['--kindonar-font-body'] = tokens.typography.fontFamily?.body ?? '';
    flat['--kindonar-font-heading'] = tokens.typography.fontFamily?.heading ?? '';
    flat['--kindonar-font-mono'] = tokens.typography.fontFamily?.mono ?? '';
  }

  return flat;
}

export function ThemeProvider({
  children,
  defaultTheme = 'default',
  defaultColorMode = 'light',
}: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(defaultTheme);
  const [colorMode, setColorMode] = useState<ColorMode>(defaultColorMode);

  const theme = themes[currentTheme] ?? themes.default;
  const resolvedTokens = getThemeTokens(currentTheme, colorMode);

  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute('data-theme', currentTheme);
    root.setAttribute('data-color-mode', colorMode);
    root.classList.toggle('dark', colorMode === 'dark');

    const flat = flattenTokens(resolvedTokens);
    for (const [key, value] of Object.entries(flat)) {
      root.style.setProperty(key, value);
    }
  }, [currentTheme, colorMode, resolvedTokens]);

  const toggleColorMode = useCallback(() => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        colorMode,
        theme,
        setTheme: setCurrentTheme,
        setColorMode,
        toggleColorMode,
        availableThemes: Object.values(themes).map((t) => t.meta),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
