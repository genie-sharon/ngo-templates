import { type ReactNode } from 'react';

import type { CTAConfig } from '@sections/section-config.types';

export type NavigationLayout = 'transparent' | 'solid' | 'centered' | 'logo-left' | 'logo-center';

export type NavigationTheme = 'light' | 'dark';

export interface MegaMenuColumn {
  title?: string;
  items: {
    label: string;
    href: string;
    description?: string;
    icon?: ReactNode;
  }[];
}

export interface NavigationMenuItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  children?: NavigationMenuItem[];
  megaMenu?: MegaMenuColumn[];
}

export interface LanguageOption {
  code: string;
  label: string;
}

export interface NavigationLogo {
  src?: string;
  alt?: string;
  text?: string;
  href?: string;
}

export interface NavigationConfig {
  layout: NavigationLayout;
  logo: NavigationLogo;
  menuItems: NavigationMenuItem[];
  ctaButtons: CTAConfig[];
  showSearch: boolean;
  showLanguageSwitcher: boolean;
  languages: LanguageOption[];
  sticky: boolean;
  theme: NavigationTheme;
  className?: string;
}
