export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Kindonar';
export const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'Next Generation NGO Website Template System';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
export const SITE_LOCALE = 'en_US';
export const SITE_TWITTER_HANDLE = '@kindonar';

export const OG_IMAGE_DEFAULTS = {
  width: 1200,
  height: 630,
  type: 'image/png' as const,
};

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Impact', href: '/impact' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export const THEME_COLORS = {
  light: '#faf9f7',
  dark: '#1a1917',
};
