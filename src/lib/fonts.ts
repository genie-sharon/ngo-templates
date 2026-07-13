import { Inter, JetBrains_Mono, Lora } from 'next/font/google';

export const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--kindonar-font-body',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--kindonar-font-mono',
  fallback: ['monospace'],
});

export const fontSerif = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--kindonar-font-heading',
  weight: ['400', '500', '600', '700'],
  fallback: ['Georgia', 'serif'],
});

export const fontVariables = [fontSans.variable, fontMono.variable, fontSerif.variable].join(' ');
