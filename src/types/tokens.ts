export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export type ColorPalette = Record<ColorShade, string>;

export interface ColorTokens {
  primary: ColorPalette;
  secondary: ColorPalette;
  accent: ColorPalette;
  neutral: ColorPalette;
  success: ColorPalette;
  warning: ColorPalette;
  error: ColorPalette;
  info: ColorPalette;
}

export interface SurfaceTokens {
  base: string;
  raised: string;
  overlay: string;
  inverse: string;
  interactive: string;
  selected: string;
  disabled: string;
  background: {
    primary: string;
    secondary: string;
  };
}

export interface BorderTokens {
  default: string;
  strong: string;
  focus: string;
  error: string;
  selected: string;
}

export interface DividerTokens {
  default: string;
}

export interface OverlayTokens {
  dark: string;
  light: string;
}

export type FontWeight = 400 | 500 | 600 | 700 | 800;

export interface TypeStyle {
  fontSize: string;
  fontWeight: FontWeight;
  lineHeight: string;
  letterSpacing?: string;
}

export interface TypographyTokens {
  fontFamily: {
    body: string;
    heading: string;
    mono: string;
  };
  fontSize: {
    display: { xl: TypeStyle; default: TypeStyle };
    heading: Record<'1' | '2' | '3' | '4' | '5' | '6', TypeStyle>;
    body: { lg: TypeStyle; md: TypeStyle; sm: TypeStyle };
    caption: TypeStyle;
    overline: TypeStyle;
  };
  special: {
    statistic: TypeStyle;
    quote: TypeStyle;
    button: { lg: TypeStyle; md: TypeStyle; sm: TypeStyle };
    label: { lg: TypeStyle; md: TypeStyle; sm: TypeStyle };
  };
}

export type SpacingToken =
  0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 30 | 40;

export type SpacingScale = Record<SpacingToken, string>;

export type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type RadiusScale = Record<RadiusToken, string>;

export type ShadowToken = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'floating' | 'hover';
export type ShadowScale = Record<ShadowToken, string>;

export type BreakpointName = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type BreakpointScale = Record<BreakpointName, string>;

export type MotionDuration =
  'instant' | 'fast' | 'normal' | 'slow' | 'slower' | 'slowest' | 'verbose' | 'expressive';
export type MotionDurationScale = Record<MotionDuration, string>;

export type MotionEase = 'default' | 'in' | 'out' | 'inOut' | 'bounce' | 'linear';
export type MotionEaseScale = Record<MotionEase, string>;

export interface MotionTokens {
  duration: MotionDurationScale;
  ease: MotionEaseScale;
}

export interface ContainerTokens {
  max: string;
  narrow: string;
  content: string;
  sidebar: string;
}

export interface FullDesignTokens {
  color: ColorTokens;
  surface: SurfaceTokens;
  border: BorderTokens;
  divider: DividerTokens;
  overlay: OverlayTokens;
  typography: TypographyTokens;
  spacing: SpacingScale;
  radius: RadiusScale;
  shadow: ShadowScale;
  breakpoint: BreakpointScale;
  motion: MotionTokens;
  container: ContainerTokens;
}
