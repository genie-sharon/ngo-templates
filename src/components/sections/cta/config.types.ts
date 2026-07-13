export interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'donate' | 'volunteer';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface CTABenefit {
  icon?: string;
  text: string;
}

export interface CTASponsorTier {
  name: string;
  amount: number;
  description: string;
  popular?: boolean;
}

export interface CTAConfig {
  layout: 'donate' | 'volunteer' | 'join' | 'sponsor' | 'contact' | 'dual' | 'centered' | 'banner';
  heading: string;
  description?: string;
  tag?: string;
  primaryCta?: CTAButton;
  secondaryCta?: CTAButton;
  background?: string;
  image?: string;
  donateAmounts?: number[];
  benefits?: CTABenefit[];
  tiers?: CTASponsorTier[];
  email?: string;
  phone?: string;
  address?: string;
}
