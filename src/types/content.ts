export interface MediaImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  focalPoint?: { x: number; y: number };
}

export interface MediaVideo {
  src: string;
  poster?: string;
  provider?: 'youtube' | 'vimeo' | 'self-hosted';
  videoId?: string;
  caption?: string;
}

export interface ButtonConfig {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  target?: '_self' | '_blank';
  rel?: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: string;
  description?: string;
}

export interface ProgramCard {
  id: string;
  title: string;
  description: string;
  image: MediaImage;
  cta: ButtonConfig;
  category?: string;
  icon?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  designation?: string;
  organization?: string;
  photo?: MediaImage;
  rating?: number;
  type?: 'donor' | 'volunteer' | 'beneficiary' | 'partner';
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  image?: MediaImage;
  video?: MediaVideo;
  caption?: string;
  tags?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  image?: MediaImage;
  category?: string;
  author?: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo?: MediaImage;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface PartnerLogo {
  id: string;
  name: string;
  logo: MediaImage;
  url?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  time?: string;
  location?: string;
  image?: MediaImage;
  registrationUrl?: string;
  type?: 'online' | 'in-person' | 'hybrid';
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: MediaImage;
}

export interface DonationOption {
  amount: number;
  label: string;
  recommended?: boolean;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  commitment: string;
  location: string;
  requirements?: string[];
  image?: MediaImage;
}
