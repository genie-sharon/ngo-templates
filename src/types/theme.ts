import type { FullDesignTokens } from './tokens';

export type ThemeId =
  | 'default'
  | 'high-contrast'
  | 'warm'
  | 'nature'
  | 'ocean'
  | 'healthcare'
  | 'education'
  | 'faith'
  | 'disaster-relief'
  | 'animal-welfare'
  | 'community'
  | 'arts'
  | 'humanitarian';

export type ColorMode = 'light' | 'dark';

export interface ThemeMeta {
  id: ThemeId;
  name: string;
  description: string;
  mood: string;
  bestFor: string[];
  colorMode: ColorMode;
  fontOverride?: {
    heading?: string;
    body?: string;
  };
}

export interface Theme {
  meta: ThemeMeta;
  tokens: Partial<FullDesignTokens>;
}

export interface ThemeContextValue {
  currentTheme: ThemeId;
  colorMode: ColorMode;
  theme: Theme;
  setTheme: (theme: ThemeId) => void;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
  availableThemes: ThemeMeta[];
}
