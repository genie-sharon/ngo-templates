'use client';

import { motion } from 'framer-motion';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/atoms/button';

export interface SuggestedLink {
  label: string;
  href: string;
}

export interface ErrorConfig {
  message?: string;
  errorCode?: number;
  suggestedLinks?: SuggestedLink[];
  retryCta?: string;
}

export function ErrorPage({ config }: { config: ErrorConfig }) {
  const {
    message = 'An unexpected error occurred. Please try again later.',
    errorCode = 500,
    suggestedLinks = [],
    retryCta = 'Try Again',
  } = config;

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center">
            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              className="flex h-40 w-40 items-center justify-center"
            >
              <svg className="h-full w-full" viewBox="0 0 160 160" fill="none" aria-hidden="true">
                <rect
                  x="20"
                  y="20"
                  width="120"
                  height="120"
                  rx="16"
                  stroke="var(--kindonar-color-error-200)"
                  strokeWidth="2"
                />
                <motion.rect
                  x="28"
                  y="28"
                  width="104"
                  height="104"
                  rx="12"
                  fill="var(--kindonar-color-error-50)"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </motion.div>
            <span className="absolute text-5xl font-bold text-[var(--kindonar-color-error-600)]">
              {errorCode}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--kindonar-color-error-100)]">
            <AlertTriangle className="h-6 w-6 text-[var(--kindonar-color-error-600)]" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-[var(--kindonar-color-neutral-900)]">
            Server Error
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
          <Button variant="primary" onClick={handleRetry}>
            <RefreshCw className="h-4 w-4" />
            {retryCta}
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
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
              Helpful links
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 text-xs text-[var(--kindonar-color-neutral-400)]"
        >
          If the problem persists, please contact support.
        </motion.p>
      </div>
    </div>
  );
}
