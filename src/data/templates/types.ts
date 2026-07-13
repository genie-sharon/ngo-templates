import type { ThemeId } from '@/types';

export type SectionType =
  | 'hero'
  | 'about'
  | 'impact'
  | 'programs'
  | 'testimonials'
  | 'gallery'
  | 'news'
  | 'cta'
  | 'partnerLogos'
  | 'faq'
  | 'newsletter'
  | 'contact'
  | 'successStories'
  | 'volunteerJourney'
  | 'campaignProgress'
  | 'annualReports'
  | 'transparencyDashboard'
  | 'awards'
  | 'donationJourney'
  | 'communityWall'
  | 'partners'
  | 'transparency'
  | 'donate'
  | 'documents'
  | 'events'
  | 'leadership'
  | 'resourceLibrary'
  | 'prayerRequest'
  | 'communityMap'
  | 'featuredExhibition'
  | 'artistProfiles'
  | 'editorialQuote'
  | 'impactTimeline'
  | 'csrPartners'
  | 'globalImpact'
  | 'campaigns';

export interface SectionEntry {
  type: SectionType;
  config: Record<string, unknown>;
}

export interface TemplatePage {
  sections: SectionEntry[];
  seo: {
    title: string;
    description: string;
  };
}

export interface TemplateData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  themeId: ThemeId;
  mood: string;
  illustrationStyle: string;
  motionStyle: string;
  navigation: Record<string, unknown>;
  footer: Record<string, unknown>;
  pages: Record<string, TemplatePage>;
}

export type TemplatePageSlug =
  | 'home'
  | 'about'
  | 'programs'
  | 'program-detail'
  | 'scholarships'
  | 'medical-camp'
  | 'gallery'
  | 'donate'
  | 'volunteer'
  | 'resources'
  | 'news'
  | 'faq'
  | 'contact'
  | 'not-found'
  | 'adopt'
  | 'stories'
  | 'campaigns'
  | 'reports'
  | 'events'
  | 'leadership'
  | 'prayer'
  | 'collections'
  | 'artist-profiles'
  | 'impact'
  | 'transparency'
  | 'partner';

export const TEMPLATE_PAGE_NAMES: Record<string, string> = {
  home: 'Home',
  about: 'About',
  programs: 'Programs',
  'program-detail': 'Program Detail',
  scholarships: 'Scholarships',
  'medical-camp': 'Medical Camp',
  gallery: 'Gallery',
  donate: 'Donate',
  volunteer: 'Volunteer',
  resources: 'Resources',
  news: 'News',
  faq: 'FAQ',
  contact: 'Contact',
  'not-found': '404',
  adopt: 'Adopt',
  stories: 'Stories',
  campaigns: 'Campaigns',
  reports: 'Reports',
  events: 'Events',
  leadership: 'Leadership',
  prayer: 'Prayer',
  collections: 'Collections',
  'artist-profiles': 'Artist Profiles',
  impact: 'Impact',
  transparency: 'Transparency',
  partner: 'Partner',
};

export type { VolunteerJourneyStep } from '@/components/sections/extra/volunteer-journey';
export type { SuccessStory } from '@/components/sections/extra/success-stories';
export type { AnnualReport } from '@/components/sections/extra/annual-reports';
export type { AllocationItem } from '@/components/sections/extra/transparency-dashboard';
export type { CampaignProgressSectionProps } from '@/components/sections/extra/campaign-progress';
