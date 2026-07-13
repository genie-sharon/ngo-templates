'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import { ContactInfo } from '@/components/ui/footer/contact-info';
import { FooterBottom } from '@/components/ui/footer/footer-bottom';
import { FooterColumns } from '@/components/ui/footer/footer-columns';
import { Newsletter } from '@/components/ui/footer/newsletter';
import { QuickLinks } from '@/components/ui/footer/quick-links';
import { SocialLinks } from '@/components/ui/footer/social-links';
import { cn } from '@/lib/utils';

import { MotionSection, SectionWrapper } from '../motion';
import type { SocialLink as SocialLinkType } from '../section-config.types';

import type { FooterConfig, FooterLayout } from './config.types';

function SocialIcon({
  platform,
  size = 16,
}: {
  platform: SocialLinkType['platform'];
  size?: number;
}) {
  switch (platform) {
    case 'facebook':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'youtube':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.37 29.37 0 0 0 1 12a29.37 29.37 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.37 29.37 0 0 0 23 12a29.37 29.37 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    default:
      return null;
  }
}

interface SocialLinkWithIcon {
  label: string;
  href: string;
  icon: React.ReactNode;
}

function mapSocialLinks(links: SocialLinkType[]): SocialLinkWithIcon[] {
  const safeLinks = Array.isArray(links) ? links : [];
  return safeLinks.map((s) => ({
    label: s.label ?? s.platform,
    href: s.url,
    icon: <SocialIcon platform={s.platform} size={16} />,
  }));
}

function BackToTopButton({ label, visible }: { label: string; visible: boolean }) {
  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={label}
      initial={false}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'fixed right-6 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-colors',
        'bg-[var(--kindonar-color-primary-500)] text-white hover:bg-[var(--kindonar-color-primary-600)]',
        'focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:outline-none',
      )}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </motion.button>
  );
}

function LogoBlock({ logo, description }: { logo?: FooterConfig['logo']; description?: string }) {
  if (!logo && !description) return null;
  return (
    <div className="max-w-sm">
      {logo?.src && (
        <img
          src={logo.src}
          alt={logo.alt ?? ''}
          width={logo.width ?? 160}
          height={logo.height ?? 40}
          className="h-10 w-auto object-contain"
        />
      )}
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-[var(--kindonar-color-neutral-500)]">
          {description}
        </p>
      )}
    </div>
  );
}

function SimpleFooter({ config }: { config: FooterConfig }) {
  return (
    <div className="flex flex-col items-center text-center">
      <LogoBlock logo={config.logo} description={config.description} />
      {config.socialLinks && config.socialLinks.length > 0 && (
        <div className="mt-6">
          <SocialLinks links={mapSocialLinks(config.socialLinks)} size="md" />
        </div>
      )}
    </div>
  );
}

function CorporateFooter({ config }: { config: FooterConfig }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <LogoBlock logo={config.logo} description={config.description} />
        <div className="lg:col-span-2">
          {config.columns && <FooterColumns columns={config.columns} />}
        </div>
      </div>
      {config.legalLinks && config.legalLinks.length > 0 && (
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {config.legalLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs text-[var(--kindonar-color-neutral-400)] transition-colors hover:text-[var(--kindonar-color-primary-600)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function LargeFooter({ config }: { config: FooterConfig }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <LogoBlock logo={config.logo} description={config.description} />
        {config.columns && <FooterColumns columns={config.columns} />}
      </div>
      {config.socialLinks && config.socialLinks.length > 0 && (
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
            Follow us:
          </span>
          <SocialLinks links={mapSocialLinks(config.socialLinks)} size="sm" />
        </div>
      )}
    </div>
  );
}

function NewsletterFooter({ config }: { config: FooterConfig }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <LogoBlock logo={config.logo} description={config.description} />
        <Newsletter
          title={config.newsletter?.title}
          description={config.newsletter?.description}
          placeholder={config.newsletter?.placeholder}
          buttonLabel={config.newsletter?.buttonLabel}
          onSubmit={config.newsletter?.onSubmit}
          successMessage={config.newsletter?.successMessage}
        />
      </div>
      {config.columns && <FooterColumns columns={config.columns} />}
    </div>
  );
}

function MegaFooter({ config }: { config: FooterConfig }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <LogoBlock logo={config.logo} description={config.description} />
        </div>
        {config.columns && (
          <div className="lg:col-span-3">
            <FooterColumns columns={config.columns} />
          </div>
        )}
        {config.contactDetails && config.contactDetails.length > 0 && (
          <div className="lg:col-span-1">
            <ContactInfo title="Contact" details={config.contactDetails} />
          </div>
        )}
      </div>
      {config.socialLinks && config.socialLinks.length > 0 && (
        <div className="flex items-center justify-between gap-4 border-t border-[var(--kindonar-border-default)] pt-6">
          <span className="text-sm text-[var(--kindonar-color-neutral-500)]">Connect with us</span>
          <SocialLinks links={mapSocialLinks(config.socialLinks)} size="sm" />
        </div>
      )}
    </div>
  );
}

function ContactFooter({ config }: { config: FooterConfig }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <LogoBlock logo={config.logo} description={config.description} />
      {config.contactDetails && config.contactDetails.length > 0 && (
        <ContactInfo title="Get in touch" details={config.contactDetails} />
      )}
    </div>
  );
}

function QuickLinksFooter({ config }: { config: FooterConfig }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <LogoBlock logo={config.logo} description={config.description} />
      {config.quickLinks && config.quickLinks.length > 0 && (
        <QuickLinks title="Quick Links" links={config.quickLinks} />
      )}
      {config.socialLinks && config.socialLinks.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
            Follow Us
          </h3>
          <div className="mt-4">
            <SocialLinks links={mapSocialLinks(config.socialLinks)} size="md" />
          </div>
        </div>
      )}
    </div>
  );
}

function SocialFooter({ config }: { config: FooterConfig }) {
  return (
    <div className="flex flex-col items-center text-center">
      <LogoBlock logo={config.logo} description={config.description} />
      {config.socialLinks && config.socialLinks.length > 0 && (
        <div className="mt-6">
          <SocialLinks links={mapSocialLinks(config.socialLinks)} size="lg" />
        </div>
      )}
      {config.contactDetails && config.contactDetails.length > 0 && (
        <div className="mt-6">
          <ContactInfo details={config.contactDetails} />
        </div>
      )}
    </div>
  );
}

const layoutComponents: Record<FooterLayout, React.ComponentType<{ config: FooterConfig }>> = {
  simple: SimpleFooter,
  corporate: CorporateFooter,
  large: LargeFooter,
  newsletter: NewsletterFooter,
  mega: MegaFooter,
  contact: ContactFooter,
  'quick-links': QuickLinksFooter,
  social: SocialFooter,
};

interface FooterSectionProps {
  config: FooterConfig;
  className?: string;
}

export function FooterSection({ config, className }: FooterSectionProps) {
  if (!config) return null;
  if (!config.visible) return null;

  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setBackToTopVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!config.layout) return null;
  const LayoutComponent = layoutComponents[config.layout];
  if (!LayoutComponent) return null;

  return (
    <SectionWrapper
      config={{
        id: config.id,
        theme: config.theme,
        padding: config.padding,
        background: config.background,
        backgroundValue: config.backgroundValue,
        className: config.className,
      }}
    >
      <MotionSection animation={config.animation} className={cn(className)}>
        <LayoutComponent config={config} />
        <FooterBottom copyright={config.copyright}>
          {config.legalLinks && config.legalLinks.length > 0 && (
            <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
              {config.legalLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-xs text-[var(--kindonar-color-neutral-400)] transition-colors hover:text-[var(--kindonar-color-primary-600)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </FooterBottom>
      </MotionSection>
      {config.showBackToTop && (
        <BackToTopButton
          label={config.backToTopLabel ?? 'Back to top'}
          visible={backToTopVisible}
        />
      )}
    </SectionWrapper>
  );
}
