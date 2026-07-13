'use client';

import { motion } from 'framer-motion';
import { Wrench, Clock, Globe, ExternalLink, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

import type { SocialLink } from '@/components/sections/section-config.types';
import { cn } from '@/lib/utils';

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <Globe className="h-5 w-5" />,
  twitter: <Globe className="h-5 w-5" />,
  instagram: <Globe className="h-5 w-5" />,
  linkedin: <Globe className="h-5 w-5" />,
  youtube: <ExternalLink className="h-5 w-5" />,
};

export interface MaintenanceConfig {
  message?: string;
  estimatedTime?: string;
  socialLinks?: SocialLink[];
  backgroundColor?: string;
}

export function MaintenancePage({ config }: { config: MaintenanceConfig }) {
  const {
    message = 'We are currently performing scheduled maintenance to improve your experience.',
    estimatedTime,
    socialLinks = [],
    backgroundColor,
  } = config;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 5;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={cn(
        'flex min-h-screen items-center justify-center px-4 py-20',
        backgroundColor || 'bg-[var(--kindonar-surface-primary)]',
      )}
    >
      <div className="w-full max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--kindonar-color-primary-100)]"
          >
            <Wrench className="h-10 w-10 text-[var(--kindonar-color-primary-600)]" />
          </motion.div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--kindonar-color-neutral-900)] md:text-5xl">
            Under Maintenance
          </h1>
          <p className="mb-8 text-lg text-[var(--kindonar-color-neutral-600)]">{message}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-[var(--kindonar-color-neutral-500)]">Progress</span>
            <span className="font-medium text-[var(--kindonar-color-neutral-700)]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)]">
            <motion.div
              className="h-full rounded-full bg-[var(--kindonar-color-primary-500)]"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        {estimatedTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 flex items-center justify-center gap-2 text-sm text-[var(--kindonar-color-neutral-500)]"
          >
            <Clock className="h-4 w-4" />
            <span>Estimated completion: {estimatedTime}</span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] px-4 py-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--kindonar-color-primary-400)] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--kindonar-color-primary-500)]" />
          </span>
          <span className="text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
            In Progress
          </span>
        </motion.div>

        {socialLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <p className="mb-4 text-sm text-[var(--kindonar-color-neutral-500)]">
              Follow us for updates
            </p>
            <div className="flex justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-500)] transition-colors hover:border-[var(--kindonar-color-primary-300)] hover:text-[var(--kindonar-color-primary-600)]"
                  aria-label={link.label || link.platform}
                >
                  {socialIcons[link.platform] || null}
                </a>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 text-sm text-[var(--kindonar-color-primary-600)] transition-colors hover:text-[var(--kindonar-color-primary-700)]"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh to check status
          </button>
        </motion.div>
      </div>
    </div>
  );
}
