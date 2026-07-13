'use client';

import { motion } from 'framer-motion';
import { Heart, HandHeart, Users, Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';

import { staggerItem } from '@/components/sections/motion';
import { Button } from '@/components/ui/atoms/button';
import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/utils';

import type { CTAConfig, CTAButton, CTASponsorTier } from './config.types';

function CTAButtonLink({ button, className }: { button: CTAButton; className?: string }) {
  return (
    <a
      href={button.href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap transition-all duration-200',
        button.variant === 'primary' &&
          'bg-[var(--kindonar-color-primary-500)] text-white shadow-sm hover:bg-[var(--kindonar-color-primary-600)]',
        button.variant === 'secondary' &&
          'bg-[var(--kindonar-color-secondary-500)] text-white shadow-sm hover:bg-[var(--kindonar-color-secondary-600)]',
        button.variant === 'outline' && 'border border-current bg-transparent hover:bg-white/10',
        button.variant === 'ghost' && 'bg-transparent hover:bg-white/10',
        button.variant === 'gradient' &&
          'bg-gradient-to-r from-[var(--kindonar-color-primary-500)] to-[var(--kindonar-color-secondary-500)] text-white shadow-md hover:from-[var(--kindonar-color-primary-600)] hover:to-[var(--kindonar-color-secondary-600)]',
        button.variant === 'donate' &&
          'bg-[var(--kindonar-color-secondary-500)] font-bold text-white shadow-lg hover:bg-[var(--kindonar-color-secondary-600)]',
        button.variant === 'volunteer' &&
          'bg-[var(--kindonar-color-primary-500)] font-bold text-white shadow-lg hover:bg-[var(--kindonar-color-primary-600)]',
        button.size === 'sm' && 'h-9 px-3 text-xs',
        button.size === 'md' && 'h-11 px-5 text-sm',
        button.size === 'lg' && 'h-13 px-8 text-base',
        button.size === 'xl' && 'h-14 px-10 text-lg',
        !button.variant &&
          'bg-[var(--kindonar-color-primary-500)] text-white shadow-sm hover:bg-[var(--kindonar-color-primary-600)]',
        !button.size && 'h-11 px-5 text-sm',
        className,
      )}
    >
      {button.label}
      <ArrowRight size={16} aria-hidden="true" />
    </a>
  );
}

function CTAHeading({
  heading,
  description,
  tag,
  isDark,
}: {
  heading: string;
  description?: string;
  tag?: string;
  isDark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {tag && (
        <span
          className={cn(
            'mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase',
            isDark
              ? 'bg-white/20 text-white'
              : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
          )}
        >
          {tag}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
          isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-lg leading-relaxed',
            isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-600)]',
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

function DonateLayout({ config }: { config: CTAConfig }) {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom' | null>(null);
  const amounts = config.donateAmounts ?? [25, 50, 100, 500];

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <CTAHeading heading={config.heading} description={config.description} tag={config.tag} />
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-2xl bg-[var(--kindonar-surface-raised)] p-6 shadow-[var(--kindonar-shadow-md)] md:p-8"
      >
        <h3 className="mb-6 text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
          Choose an amount to donate
        </h3>
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {amounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setSelectedAmount(amount)}
              className={cn(
                'rounded-xl border-2 px-4 py-3 text-center text-lg font-bold transition-all',
                selectedAmount === amount
                  ? 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-50)] text-[var(--kindonar-color-primary-700)]'
                  : 'border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-700)] hover:border-[var(--kindonar-color-primary-300)]',
              )}
              aria-pressed={selectedAmount === amount}
            >
              {formatCurrency(amount)}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelectedAmount('custom')}
            className={cn(
              'rounded-xl border-2 border-dashed px-4 py-3 text-center text-sm font-semibold transition-all',
              selectedAmount === 'custom'
                ? 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-50)] text-[var(--kindonar-color-primary-700)]'
                : 'border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-500)] hover:border-[var(--kindonar-color-primary-300)]',
            )}
            aria-pressed={selectedAmount === 'custom'}
          >
            Custom
          </button>
        </div>
        {selectedAmount === 'custom' && (
          <div className="mb-6">
            <label
              htmlFor="custom-amount"
              className="mb-2 block text-sm font-medium text-[var(--kindonar-color-neutral-700)]"
            >
              Enter your amount
            </label>
            <input
              id="custom-amount"
              type="number"
              min={1}
              placeholder="0.00"
              className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-3 text-lg font-bold text-[var(--kindonar-color-neutral-900)] outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
            />
          </div>
        )}
        {config.primaryCta && (
          <Button
            variant="donate"
            size="xl"
            fullWidth
            leftIcon={<Heart size={20} aria-hidden="true" />}
            className="text-base"
          >
            {config.primaryCta.label}
          </Button>
        )}
      </motion.div>
    </div>
  );
}

function VolunteerLayout({ config }: { config: CTAConfig }) {
  const benefits = config.benefits ?? [];

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CTAHeading heading={config.heading} description={config.description} tag={config.tag} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-8 space-y-4"
        >
          {benefits.map((benefit, i) => (
            <motion.div key={i} variants={staggerItem} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-100)]">
                <Check
                  size={14}
                  className="text-[var(--kindonar-color-primary-600)]"
                  aria-hidden="true"
                />
              </span>
              <span className="text-[var(--kindonar-color-neutral-700)]">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>
        {config.primaryCta && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <CTAButtonLink button={config.primaryCta} />
          </motion.div>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center"
      >
        <div className="rounded-2xl bg-[var(--kindonar-color-primary-50)] p-8 text-center md:p-12">
          <HandHeart
            size={64}
            className="mx-auto mb-4 text-[var(--kindonar-color-primary-500)]"
            aria-hidden="true"
          />
          <h3 className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">
            Make a Difference
          </h3>
          <p className="mt-2 text-[var(--kindonar-color-neutral-600)]">
            Every hour you give changes lives
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function JoinLayout({ config }: { config: CTAConfig }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <CTAHeading heading={config.heading} description={config.description} tag={config.tag} />
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-2xl bg-[var(--kindonar-surface-raised)] p-6 shadow-[var(--kindonar-shadow-md)] md:p-8"
      >
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="join-first"
                className="mb-1.5 block text-sm font-medium text-[var(--kindonar-color-neutral-700)]"
              >
                First Name
              </label>
              <input
                id="join-first"
                type="text"
                required
                className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2.5 text-sm text-[var(--kindonar-color-neutral-900)] outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="join-last"
                className="mb-1.5 block text-sm font-medium text-[var(--kindonar-color-neutral-700)]"
              >
                Last Name
              </label>
              <input
                id="join-last"
                type="text"
                required
                className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2.5 text-sm text-[var(--kindonar-color-neutral-900)] outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
                placeholder="Doe"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="join-email"
              className="mb-1.5 block text-sm font-medium text-[var(--kindonar-color-neutral-700)]"
            >
              Email
            </label>
            <input
              id="join-email"
              type="email"
              required
              className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2.5 text-sm text-[var(--kindonar-color-neutral-900)] outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="join-interest"
              className="mb-1.5 block text-sm font-medium text-[var(--kindonar-color-neutral-700)]"
            >
              I&apos;m interested in
            </label>
            <select
              id="join-interest"
              required
              className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2.5 text-sm text-[var(--kindonar-color-neutral-900)] outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
            >
              <option value="">Select an option</option>
              <option value="volunteer">Volunteering</option>
              <option value="donate">Donating</option>
              <option value="partner">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>
          {config.primaryCta && (
            <Button variant="primary" size="lg" fullWidth type="submit" className="mt-2">
              {config.primaryCta.label}
            </Button>
          )}
        </form>
      </motion.div>
    </div>
  );
}

function SponsorLayout({ config }: { config: CTAConfig }) {
  const tiers = config.tiers ?? [];

  return (
    <div>
      <div className="mb-12 text-center">
        <CTAHeading heading={config.heading} description={config.description} tag={config.tag} />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {tiers.map((tier, i) => (
          <SponsorTierCard key={i} tier={tier} primaryCta={config.primaryCta} />
        ))}
      </motion.div>
    </div>
  );
}

function SponsorTierCard({ tier, primaryCta }: { tier: CTASponsorTier; primaryCta?: CTAButton }) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        'relative flex flex-col rounded-2xl border-2 p-6 transition-all md:p-8',
        tier.popular
          ? 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-50)] shadow-[var(--kindonar-shadow-md)]'
          : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)]',
      )}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--kindonar-color-primary-500)] px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-[var(--kindonar-color-neutral-900)]">{tier.name}</h3>
      <p className="mt-1 text-3xl font-bold text-[var(--kindonar-color-primary-600)]">
        {formatCurrency(tier.amount)}
        <span className="text-base font-normal text-[var(--kindonar-color-neutral-500)]">
          /month
        </span>
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
        {tier.description}
      </p>
      {primaryCta && (
        <Button
          variant={tier.popular ? 'primary' : 'outline'}
          size="lg"
          fullWidth
          className="mt-6"
          onClick={() => (window.location.href = primaryCta.href)}
        >
          {primaryCta.label}
        </Button>
      )}
    </motion.div>
  );
}

function ContactLayout({ config }: { config: CTAConfig }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <CTAHeading heading={config.heading} description={config.description} tag={config.tag} />
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        {config.email && (
          <a
            href={`mailto:${config.email}`}
            className="flex items-center gap-4 rounded-xl bg-[var(--kindonar-surface-raised)] p-4 shadow-[var(--kindonar-shadow-sm)] transition-all hover:shadow-[var(--kindonar-shadow-md)]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-100)]">
              <Mail
                size={20}
                className="text-[var(--kindonar-color-primary-600)]"
                aria-hidden="true"
              />
            </span>
            <div>
              <p className="text-sm text-[var(--kindonar-color-neutral-500)]">Email</p>
              <p className="font-semibold text-[var(--kindonar-color-neutral-900)]">
                {config.email}
              </p>
            </div>
          </a>
        )}
        {config.phone && (
          <a
            href={`tel:${config.phone}`}
            className="flex items-center gap-4 rounded-xl bg-[var(--kindonar-surface-raised)] p-4 shadow-[var(--kindonar-shadow-sm)] transition-all hover:shadow-[var(--kindonar-shadow-md)]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--kindonar-color-secondary-100)]">
              <Phone
                size={20}
                className="text-[var(--kindonar-color-secondary-600)]"
                aria-hidden="true"
              />
            </span>
            <div>
              <p className="text-sm text-[var(--kindonar-color-neutral-500)]">Phone</p>
              <p className="font-semibold text-[var(--kindonar-color-neutral-900)]">
                {config.phone}
              </p>
            </div>
          </a>
        )}
        {config.address && (
          <div className="flex items-center gap-4 rounded-xl bg-[var(--kindonar-surface-raised)] p-4 shadow-[var(--kindonar-shadow-sm)]">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--kindonar-color-neutral-100)]">
              <MapPin
                size={20}
                className="text-[var(--kindonar-color-neutral-600)]"
                aria-hidden="true"
              />
            </span>
            <div>
              <p className="text-sm text-[var(--kindonar-color-neutral-500)]">Address</p>
              <p className="font-semibold text-[var(--kindonar-color-neutral-900)]">
                {config.address}
              </p>
            </div>
          </div>
        )}
        {config.primaryCta && (
          <div className="pt-2">
            <CTAButtonLink button={config.primaryCta} />
          </div>
        )}
      </motion.div>
    </div>
  );
}

function DualLayout({ config }: { config: CTAConfig }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start rounded-2xl bg-[var(--kindonar-color-primary-500)] p-8 text-white md:p-10"
      >
        <Heart size={32} className="mb-4" aria-hidden="true" />
        <h3 className="text-2xl font-bold md:text-3xl">Make a Donation</h3>
        <p className="mt-3 flex-1 leading-relaxed text-white/80">
          Your contribution helps us provide essential resources to communities in need.
        </p>
        {config.primaryCta && (
          <Button variant="secondary" size="lg" className="mt-6">
            {config.primaryCta.label}
          </Button>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-col items-start rounded-2xl bg-[var(--kindonar-color-secondary-500)] p-8 text-white md:p-10"
      >
        <Users size={32} className="mb-4" aria-hidden="true" />
        <h3 className="text-2xl font-bold md:text-3xl">Become a Volunteer</h3>
        <p className="mt-3 flex-1 leading-relaxed text-white/80">
          Join our team of dedicated volunteers and make a real impact in your community.
        </p>
        {config.secondaryCta && (
          <Button variant="primary" size="lg" className="mt-6">
            {config.secondaryCta.label}
          </Button>
        )}
      </motion.div>
    </div>
  );
}

function CenteredLayout({ config }: { config: CTAConfig }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <CTAHeading heading={config.heading} description={config.description} tag={config.tag} />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        {config.primaryCta && <CTAButtonLink button={config.primaryCta} />}
        {config.secondaryCta && (
          <CTAButtonLink
            button={{ ...config.secondaryCta, variant: config.secondaryCta.variant || 'outline' }}
          />
        )}
      </motion.div>
    </div>
  );
}

function BannerLayout({ config }: { config: CTAConfig }) {
  const hasBg = !!config.image;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl px-6 py-16 md:px-12 md:py-20 lg:py-24',
        hasBg
          ? 'text-white'
          : 'bg-gradient-to-br from-[var(--kindonar-color-primary-500)] to-[var(--kindonar-color-secondary-500)] text-white',
      )}
    >
      {hasBg && (
        <>
          <Image src={config.image} alt="" fit="cover" className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <CTAHeading
          heading={config.heading}
          description={config.description}
          tag={config.tag}
          isDark
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {config.primaryCta && (
            <CTAButtonLink
              button={{
                ...config.primaryCta,
                variant: config.primaryCta.variant || 'gradient',
                size: config.primaryCta.size || 'lg',
              }}
            />
          )}
          {config.secondaryCta && (
            <CTAButtonLink
              button={{
                ...config.secondaryCta,
                variant: 'outline',
                size: config.secondaryCta.size || 'lg',
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}

interface CTAProps {
  config: CTAConfig;
  className?: string;
}

export function CTA({ config, className }: CTAProps) {
  if (!config) return null;
  const renderLayout = () => {
    switch (config.layout) {
      case 'donate':
        return <DonateLayout config={config} />;
      case 'volunteer':
        return <VolunteerLayout config={config} />;
      case 'join':
        return <JoinLayout config={config} />;
      case 'sponsor':
        return <SponsorLayout config={config} />;
      case 'contact':
        return <ContactLayout config={config} />;
      case 'dual':
        return <DualLayout config={config} />;
      case 'centered':
        return <CenteredLayout config={config} />;
      case 'banner':
        return <BannerLayout config={config} />;
      default:
        return <CenteredLayout config={config} />;
    }
  };

  return (
    <section className={cn('py-16 md:py-20 lg:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{renderLayout()}</div>
    </section>
  );
}
