import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, JSX } from 'react';

export type AsProp<T extends React.ElementType = React.ElementType> = {
  as?: T;
};

export type PolymorphicProps<T extends React.ElementType, P = Record<string, unknown>> = AsProp<T> &
  P &
  Omit<React.ComponentPropsWithoutRef<T>, keyof (AsProp<T> & P)>;

export type SizeToken = 'sm' | 'md' | 'lg' | 'xl';
export type ColorToken =
  'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error' | 'info';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface LoadingProps {
  isLoading?: boolean;
  loadingText?: string;
}

export interface DisabledProps {
  isDisabled?: boolean;
}

export interface ErrorProps {
  hasError?: boolean;
  errorMessage?: string;
}

export interface EmptyProps {
  isEmpty?: boolean;
  emptyMessage?: string;
  emptyAction?: {
    label: string;
    onClick: () => void;
  };
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, LoadingProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  href?: string;
  target?: '_self' | '_blank';
}

export type InputVariant = 'default' | 'error' | 'success';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, ErrorProps {
  label?: string;
  helperText?: string;
  variant?: InputVariant;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export type CardVariant = 'default' | 'bordered' | 'flat' | 'elevated' | 'interactive';
export type CardPadding = 'tight' | 'default' | 'comfortable';

export interface CardProps extends BaseProps {
  variant?: CardVariant;
  padding?: CardPadding;
  isHoverable?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

export type SectionVariant = 'default' | 'muted' | 'primary' | 'accent' | 'image';

export interface SectionWrapperProps extends BaseProps {
  variant?: SectionVariant;
  paddingY?: 'tight' | 'default' | 'spacious';
  backgroundImage?: string;
  overlay?: boolean;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
}
