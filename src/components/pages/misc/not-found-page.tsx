'use client';

import { motion } from 'framer-motion';
import { Search, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/atoms/button';

export interface SuggestedLink {
  label: string;
  href: string;
}

export interface NotFoundConfig {
  message?: string;
  suggestedLinks?: SuggestedLink[];
  searchPlaceholder?: string;
}

export function NotFoundPage({ config }: { config: NotFoundConfig }) {
  const {
    message = 'The page you are looking for does not exist or has been moved.',
    suggestedLinks = [],
  } = config;

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 160 160"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="80"
                cy="80"
                r="75"
                stroke="var(--kindonar-color-primary-200)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              <motion.circle
                cx="80"
                cy="80"
                r="60"
                stroke="var(--kindonar-color-primary-500)"
                strokeWidth="3"
                strokeDasharray="377"
                strokeDashoffset="377"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </svg>
            <span className="relative text-6xl font-bold text-[var(--kindonar-color-primary-600)]">
              404
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="mb-4 text-3xl font-bold text-[var(--kindonar-color-neutral-900)]">
            Page Not Found
          </h1>
          <p className="mb-8 text-base leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {message}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Button variant="primary" asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="javascript:history.back()">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </a>
          </Button>
        </motion.div>

        {suggestedLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10"
          >
            <p className="mb-4 text-sm font-medium text-[var(--kindonar-color-neutral-500)]">
              Suggested pages
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2 text-sm text-[var(--kindonar-color-neutral-700)] transition-colors hover:border-[var(--kindonar-color-primary-300)] hover:text-[var(--kindonar-color-primary-600)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8"
        >
          <div className="relative mx-auto max-w-sm">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--kindonar-color-neutral-400)]" />
            <input
              type="search"
              placeholder="Search the site..."
              className="w-full rounded-lg border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] py-2.5 pr-4 pl-10 text-sm text-[var(--kindonar-color-neutral-900)] transition-colors placeholder:text-[var(--kindonar-color-neutral-400)] focus:border-[var(--kindonar-color-primary-500)] focus:outline-none"
              aria-label="Search the site"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
