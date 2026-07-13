'use client';

import { type ReactNode } from 'react';

import { About } from '@/components/sections/about/about';
import { CTA } from '@/components/sections/cta/cta';
import { VolunteerJourneySection } from '@/components/sections/extra/volunteer-journey';
import { CampaignProgressSection } from '@/components/sections/extra/campaign-progress';
import { AnnualReportsSection } from '@/components/sections/extra/annual-reports';
import { TransparencyDashboardSection } from '@/components/sections/extra/transparency-dashboard';
import { DonationJourneySection } from '@/components/sections/extra/donation-journey';
import { EventsSection } from '@/components/sections/extra/events';
import { LeadershipSection } from '@/components/sections/extra/leadership';
import { ResourceLibrarySection } from '@/components/sections/extra/resource-library';
import { CommunityMapSection } from '@/components/sections/extra/community-map';
import { FeaturedExhibitionSection } from '@/components/sections/extra/featured-exhibition';
import { ArtistProfilesSection } from '@/components/sections/extra/artist-profiles';
import { EditorialQuoteSection } from '@/components/sections/extra/editorial-quote';
import { ImpactTimelineSection } from '@/components/sections/extra/impact-timeline';
import { CSRPartnersSection } from '@/components/sections/extra/csr-partners';
import { FAQSection } from '@/components/sections/extra/faq';
import { GlobalImpactSection } from '@/components/sections/extra/global-impact';
import { NewsletterSection } from '@/components/sections/extra/newsletter';
import { PartnerLogosSection } from '@/components/sections/extra/partner-logos';
import { SuccessStoriesSection } from '@/components/sections/extra/success-stories';
import { Gallery } from '@/components/sections/gallery/gallery';
import { Hero } from '@/components/sections/hero/hero';
import { Impact } from '@/components/sections/impact/impact';
import { News } from '@/components/sections/news/news';
import { Programs } from '@/components/sections/programs/programs';
import { Testimonials } from '@/components/sections/testimonials/testimonials';
import type { SectionEntry } from '@/data/templates/types';

const sectionComponents: Record<string, (config: Record<string, unknown>) => ReactNode> = {
  hero: (cfg) => <Hero config={cfg as never} />,
  about: (cfg) => <About config={cfg as never} />,
  impact: (cfg) => <Impact config={cfg as never} />,
  programs: (cfg) => <Programs config={cfg as never} />,
  testimonials: (cfg) => <Testimonials config={cfg as never} />,
  gallery: (cfg) => <Gallery config={cfg as never} />,
  news: (cfg) => <News config={cfg as never} />,
  cta: (cfg) => <CTA config={cfg as never} />,
  partnerLogos: (cfg) => {
    const { partners, variant, ...rest } = cfg;
    return (
      <PartnerLogosSection
        config={rest as never}
        partners={(partners || []) as never}
        variant={(variant as 'grid' | 'marquee') || 'grid'}
      />
    );
  },
  faq: (cfg) => {
    const { items, allowMultiple, variant, ...rest } = cfg;
    return (
      <FAQSection
        config={rest as never}
        items={(items || []) as never}
        allowMultiple={allowMultiple as boolean}
        variant={variant as 'bordered' | 'ghost' | 'filled'}
      />
    );
  },
  newsletter: (cfg) => {
    const { title, description, placeholder, buttonLabel, successMessage, ...rest } = cfg;
    return (
      <NewsletterSection
        config={rest as never}
        title={title as string}
        description={description as string}
        placeholder={placeholder as string}
        buttonLabel={buttonLabel as string}
        successMessage={successMessage as string}
      />
    );
  },
  successStories: (cfg) => {
    const { stories, ...rest } = cfg;
    return <SuccessStoriesSection config={rest as never} stories={(stories || []) as never} />;
  },
  volunteerJourney: (cfg) => {
    const { steps, ...rest } = cfg;
    return <VolunteerJourneySection config={rest as never} steps={(steps || []) as never} />;
  },
  campaignProgress: (cfg) => {
    const { goal, raised, currency, donorCount, title, description, ...rest } = cfg;
    return (
      <CampaignProgressSection
        config={rest as never}
        goal={goal as number}
        raised={raised as number}
        currency={currency as string}
        donorCount={donorCount as number}
        title={title as string}
        description={description as string}
      />
    );
  },
  annualReports: (cfg) => {
    const { reports, ...rest } = cfg;
    return <AnnualReportsSection config={rest as never} reports={(reports || []) as never} />;
  },
  transparencyDashboard: (cfg) => {
    const { allocations, stats, totalRaised, fiscalYear, ...rest } = cfg;
    return (
      <TransparencyDashboardSection
        config={rest as never}
        allocations={(allocations || []) as never}
        stats={(stats || []) as never}
        totalRaised={totalRaised as string}
        fiscalYear={fiscalYear as string}
      />
    );
  },
  donationJourney: (cfg) => {
    const { steps, ...rest } = cfg;
    return <DonationJourneySection config={rest as never} steps={(steps || []) as never} />;
  },
  events: (cfg) => {
    const { events, showCountdown, ...rest } = cfg;
    return (
      <EventsSection
        config={rest as never}
        events={(events || []) as never}
        showCountdown={showCountdown as boolean}
      />
    );
  },
  leadership: (cfg) => {
    const { leaders, ...rest } = cfg;
    return <LeadershipSection config={rest as never} leaders={(leaders || []) as never} />;
  },
  resourceLibrary: (cfg) => {
    const { resources, ...rest } = cfg;
    return <ResourceLibrarySection config={rest as never} resources={(resources || []) as never} />;
  },
  communityMap: (cfg) => {
    const { locations, ...rest } = cfg;
    return <CommunityMapSection config={rest as never} locations={(locations || []) as never} />;
  },
  featuredExhibition: (cfg) => {
    const { exhibition, ...rest } = cfg;
    return <FeaturedExhibitionSection config={rest as never} exhibition={exhibition as never} />;
  },
  artistProfiles: (cfg) => {
    const { artists, ...rest } = cfg;
    return <ArtistProfilesSection config={rest as never} artists={(artists || []) as never} />;
  },
  editorialQuote: (cfg) => {
    const { quote, ...rest } = cfg;
    return <EditorialQuoteSection config={rest as never} quote={quote as never} />;
  },
  impactTimeline: (cfg) => {
    const { milestones, ...rest } = cfg;
    return (
      <ImpactTimelineSection config={rest as never} milestones={(milestones || []) as never} />
    );
  },
  csrPartners: (cfg) => {
    const { partners, ...rest } = cfg;
    return <CSRPartnersSection config={rest as never} partners={(partners || []) as never} />;
  },
  globalImpact: (cfg) => {
    const { stats, countries, totalCountries, totalProjects, totalPeople, ...rest } = cfg;
    return (
      <GlobalImpactSection
        config={rest as never}
        stats={(stats || []) as never}
        countries={(countries || []) as never}
        totalCountries={totalCountries as number}
        totalProjects={totalProjects as number}
        totalPeople={totalPeople as number}
      />
    );
  },
  campaigns: (cfg) => {
    const { goal, raised, title, description, ...rest } = cfg;
    return (
      <CampaignProgressSection
        config={rest as never}
        goal={goal as number}
        raised={raised as number}
        title={title as string}
        description={description as string}
      />
    );
  },
};

export function PageRenderer({ sections }: { sections: SectionEntry[] }) {
  if (!Array.isArray(sections)) return null;
  return (
    <>
      {sections.map((section, i) => {
        const Component = sectionComponents[section.type];
        if (!Component) return null;
        const node = Component(section.config);
        if (!node) return null;
        return <div key={i + '-' + section.type}>{node}</div>;
      })}
    </>
  );
}
