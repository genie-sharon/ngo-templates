import type { ContactDetail } from '@/components/ui/footer/contact-info';
import type { FooterColumn } from '@/components/ui/footer/footer-columns';
import type { QuickLink } from '@/components/ui/footer/quick-links';

import type {
  SectionTheme,
  SectionBackground,
  SectionImage,
  SocialLink,
  AnimationVariant,
} from '../section-config.types';

export type FooterLayout =
  'simple' | 'corporate' | 'large' | 'newsletter' | 'mega' | 'contact' | 'quick-links' | 'social';

export interface FooterConfig {
  id?: string;
  layout: FooterLayout;
  theme: SectionTheme;
  animation: AnimationVariant;
  background: SectionBackground;
  backgroundValue?: string;
  padding: 'none' | 'small' | 'medium' | 'large' | 'xlarge';
  visible: boolean;
  className?: string;
  heading?: {
    title: string;
    subtitle?: string;
    description?: string;
    alignment?: 'left' | 'center' | 'right';
    tag?: string;
  };
  logo?: SectionImage;
  description?: string;
  columns?: FooterColumn[];
  contactDetails?: ContactDetail[];
  quickLinks?: QuickLink[];
  socialLinks?: SocialLink[];
  newsletter?: {
    title?: string;
    description?: string;
    placeholder?: string;
    buttonLabel?: string;
    onSubmit?: (email: string) => void;
    successMessage?: string;
  };
  copyright?: string;
  showBackToTop?: boolean;
  backToTopLabel?: string;
  legalLinks?: Array<{ label: string; href: string }>;
}

export const defaultFooterConfig = (overrides?: Partial<FooterConfig>): FooterConfig => ({
  id: 'footer',
  layout: 'corporate',
  theme: 'light',
  animation: 'fade',
  background: 'none',
  padding: 'large',
  visible: true,
  copyright: `© ${new Date().getFullYear()} Kindonar. All rights reserved.`,
  showBackToTop: true,
  backToTopLabel: 'Back to top',
  ...overrides,
});
