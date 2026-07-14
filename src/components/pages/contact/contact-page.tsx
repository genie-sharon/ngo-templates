'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import type { SocialLink } from '@/components/sections/section-config.types';
import { Button } from '@/components/ui/atoms/button';
import { Card, CardContent } from '@/components/ui/cards/card';
import { Input } from '@/components/ui/forms/input';
import { Textarea } from '@/components/ui/forms/textarea';

import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig } from '../page-config.types';

export interface ContactFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

export interface ContactPageConfig extends PageConfig {
  hero: PageHeroConfig;
  title?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
  socialLinks?: SocialLink[];
  formFields: ContactFormField[];
  formSubmitUrl?: string;
  formSubmitEmail?: string;
  mapEmbedUrl?: string;
  mapEmbedTitle?: string;
}

const socialPlatformIcons: Record<string, React.ReactNode> = {
  facebook: <ExternalLink className="h-5 w-5" />,
  twitter: <ExternalLink className="h-5 w-5" />,
  instagram: <ExternalLink className="h-5 w-5" />,
  linkedin: <ExternalLink className="h-5 w-5" />,
  youtube: <ExternalLink className="h-5 w-5" />,
  tiktok: <ExternalLink className="h-5 w-5" />,
  whatsapp: <ExternalLink className="h-5 w-5" />,
};

interface FormValues {
  [key: string]: string;
}

function ContactInfo({ config }: { config: ContactPageConfig }) {
  return (
    <aside className="space-y-6">
      {config.address && (
        <Card variant="outlined" padding="default">
          <CardContent>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--kindonar-color-primary-500)]" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
                  Address
                </h3>
                <p className="mt-1 text-sm text-[var(--kindonar-color-neutral-600)]">
                  {config.address}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {config.phone && (
        <Card variant="outlined" padding="default">
          <CardContent>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--kindonar-color-primary-500)]" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
                  Phone
                </h3>
                <a
                  href={`tel:${config.phone.replace(/\s/g, '')}`}
                  className="mt-1 block text-sm text-[var(--kindonar-color-primary-600)] hover:underline"
                >
                  {config.phone}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {config.email && (
        <Card variant="outlined" padding="default">
          <CardContent>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--kindonar-color-primary-500)]" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
                  Email
                </h3>
                <a
                  href={`mailto:${config.email}`}
                  className="mt-1 block text-sm text-[var(--kindonar-color-primary-600)] hover:underline"
                >
                  {config.email}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {config.hours && (
        <Card variant="outlined" padding="default">
          <CardContent>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--kindonar-color-primary-500)]" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
                  Hours
                </h3>
                <p className="mt-1 text-sm text-[var(--kindonar-color-neutral-600)]">
                  {config.hours}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {config.socialLinks && config.socialLinks.length > 0 && (
        <Card variant="outlined" padding="default">
          <CardContent>
            <h3 className="mb-3 text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-2">
              {config.socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label || `Follow us on ${link.platform}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-500)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
                >
                  {socialPlatformIcons[link.platform] || <ExternalLink className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </aside>
  );
}

function FormField({
  field,
  register,
  errors,
}: {
  field: ContactFormField;
  register: any;
  errors: any;
}) {
  const fieldError = errors[field.name]?.message as string | undefined;
  const commonProps = {
    id: field.name,
    label: field.label,
    placeholder: field.placeholder,
    required: field.required,
    error: fieldError,
    ...register(field.name, {
      required: field.required ? `${field.label} is required` : false,
      ...(field.type === 'email'
        ? {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          }
        : {}),
    }),
  };

  if (field.type === 'textarea') {
    return <Textarea key={field.name} {...commonProps} rows={5} />;
  }

  if (field.type === 'select' && field.options) {
    return (
      <div key={field.name} className="space-y-1.5">
        {field.label && (
          <label
            htmlFor={field.name}
            className="text-sm font-medium text-[var(--kindonar-color-neutral-800)]"
          >
            {field.label}
            {field.required && (
              <span className="ml-0.5 text-[var(--kindonar-color-error-500)]">*</span>
            )}
          </label>
        )}
        <select
          id={field.name}
          {...register(field.name, {
            required: field.required ? `${field.label} is required` : false,
          })}
          className="flex w-full rounded-md border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] px-3 py-2 text-sm text-[var(--kindonar-color-neutral-900)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:outline-none"
        >
          <option value="">Select {field.label.toLowerCase()}</option>
          {field.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {fieldError && (
          <p className="text-xs text-[var(--kindonar-color-error-500)]" role="alert">
            {fieldError}
          </p>
        )}
      </div>
    );
  }

  return (
    <Input
      key={field.name}
      type={field.type === 'tel' ? 'tel' : field.type === 'email' ? 'email' : 'text'}
      {...commonProps}
    />
  );
}

function ContactForm({ config }: { config: ContactPageConfig }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>();

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);
    if (config.formSubmitEmail) {
      window.location.assign(`mailto:${config.formSubmitEmail}?subject=${encodeURIComponent('Contact Form Submission')}&body=${encodeURIComponent(JSON.stringify(data, null, 2))}`);
      reset();
      return;
    }
    if (config.formSubmitUrl) {
      try {
        const res = await fetch(config.formSubmitUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Failed to submit form');
        reset();
      } catch {
        setSubmitError('Failed to send message. Please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {config.formFields.map((field) => (
        <FormField key={field.name} field={field} register={register} errors={errors} />
      ))}

      {submitError && (
        <div
          className="rounded-lg bg-[var(--kindonar-color-error-50)] p-3 text-sm text-[var(--kindonar-color-error-700)]"
          role="alert"
        >
          {submitError}
        </div>
      )}

      {isSubmitSuccessful && !submitError && (
        <div
          className="rounded-lg bg-[var(--kindonar-color-success-50)] p-3 text-sm text-[var(--kindonar-color-success-700)]"
          role="alert"
        >
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}

export function ContactPage({ config }: { config: ContactPageConfig }) {
  return (
    <div>
      <PageHero config={config.hero} />
      <PageLayout layout="default">
        {config.description && (
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {config.description}
          </p>
        )}
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {config.title && (
              <h2 className="mb-6 text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">
                {config.title}
              </h2>
            )}
            <ContactForm config={config} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactInfo config={config} />
          </motion.div>
        </div>
        {config.mapEmbedUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 overflow-hidden rounded-xl"
          >
            <iframe
              src={config.mapEmbedUrl}
              title={config.mapEmbedTitle || 'Location map'}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </motion.div>
        )}
      </PageLayout>
    </div>
  );
}
