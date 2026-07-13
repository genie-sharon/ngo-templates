export type SectionType =
  | 'hero'
  | 'navigation'
  | 'about'
  | 'stats'
  | 'programs'
  | 'testimonials'
  | 'gallery'
  | 'news'
  | 'cta'
  | 'footer'
  | 'partners'
  | 'team'
  | 'timeline'
  | 'faq'
  | 'events'
  | 'contact'
  | 'donation'
  | 'volunteer'
  | 'campaign'
  | 'newsletter'
  | 'custom';

export interface LayoutOption {
  id: string;
  name: string;
  description: string;
  thumbnail?: string;
}

export interface VisibilityConfig {
  desktop: boolean;
  tablet: boolean;
  mobile: boolean;
}

export interface AnimationConfig {
  enabled: boolean;
  type:
    | 'fade'
    | 'fade-in'
    | 'fade-in-up'
    | 'fade-in-down'
    | 'fade-in-left'
    | 'fade-in-right'
    | 'scale'
    | 'scale-in'
    | 'scale-in-up'
    | 'slide-in-up'
    | 'slide-in-right'
    | 'reveal'
    | 'reveal-vertical'
    | 'blur'
    | 'blur-in'
    | 'zoom'
    | 'zoom-in'
    | 'zoom-out'
    | 'rotate'
    | 'rotate-in'
    | 'flip'
    | 'flip-in'
    | 'drop'
    | 'drop-in'
    | 'stagger'
    | 'parallax'
    | 'hero'
    | 'none';
  delay: number;
  duration: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export interface ResponsiveOverrides {
  mobile?: Record<string, string | number | boolean>;
  tablet?: Record<string, string | number | boolean>;
  desktop?: Record<string, string | number | boolean>;
}

export interface ThemeOverrides {
  colors?: Record<string, string>;
  typography?: Record<string, string>;
  spacing?: Record<string, string>;
}

export interface SectionConfig<TContent = Record<string, unknown>> {
  id: string;
  type: SectionType;
  layout: string;
  visibility: VisibilityConfig;
  theme: ThemeOverrides;
  content: TContent;
  animations: AnimationConfig;
  responsive: ResponsiveOverrides;
  order: number;
  cssClass?: string;
  customAttributes?: Record<string, string>;
}
