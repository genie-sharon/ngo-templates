'use client';

import { motion } from 'framer-motion';
import { Clock, Mail, Send, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/atoms/button';
import { cn } from '@/lib/utils';

export interface ComingSoonConfig {
  title?: string;
  description?: string;
  launchDate: string;
  newsletterCta?: string;
  backgroundColor?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function ComingSoonPage({ config }: { config: ComingSoonConfig }) {
  const {
    title = 'Coming Soon',
    description = 'We are working on something exciting. Stay tuned!',
    launchDate,
    newsletterCta = 'Notify Me',
    backgroundColor,
  } = config;

  const calculateTimeLeft = (): TimeLeft => {
    const diff = new Date(launchDate).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);
  const [isLaunched, setIsLaunched] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setIsLaunched(new Date(launchDate).getTime() <= Date.now());
  }, [launchDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div
      className={cn(
        'flex min-h-screen items-center justify-center px-4 py-20',
        backgroundColor || 'bg-[var(--kindonar-surface-primary)]',
      )}
    >
      <div className="w-full max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--kindonar-color-primary-100)]">
            <Sparkles className="h-8 w-8 text-[var(--kindonar-color-primary-600)]" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--kindonar-color-neutral-900)] md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mb-12 max-w-lg text-lg text-[var(--kindonar-color-neutral-600)]">
            {description}
          </p>
        </motion.div>

        {!isLaunched && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="mb-4 flex items-center justify-center gap-2 text-sm text-[var(--kindonar-color-neutral-500)]">
              <Clock className="h-4 w-4" />
              <span>Launching soon</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {(['days', 'hours', 'minutes', 'seconds'] as (keyof TimeLeft)[]).map((unit) => (
                <div
                  key={unit}
                  className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-4 shadow-sm"
                >
                  <motion.span
                    key={timeLeft[unit]}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="block text-3xl font-bold text-[var(--kindonar-color-primary-600)] md:text-4xl"
                  >
                    {timeLeft[unit].toString().padStart(2, '0')}
                  </motion.span>
                  <span className="mt-1 block text-xs text-[var(--kindonar-color-neutral-500)] capitalize">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {isLaunched && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--kindonar-color-success-100)] px-6 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--kindonar-color-success-500)]" />
              <span className="text-sm font-medium text-[var(--kindonar-color-success-700)]">
                Now Live!
              </span>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-[var(--kindonar-color-success-200)] bg-[var(--kindonar-color-success-50)] p-6"
            >
              <p className="text-sm font-medium text-[var(--kindonar-color-success-700)]">
                You are on the list! We will notify you when we launch.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="mx-auto flex max-w-md gap-3">
              <div className="relative flex-1">
                <Mail className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[var(--kindonar-color-neutral-400)]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] py-2.5 pr-4 pl-10 text-sm text-[var(--kindonar-color-neutral-900)] transition-colors placeholder:text-[var(--kindonar-color-neutral-400)] focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-100)] focus:outline-none"
                  aria-label="Email address"
                />
              </div>
              <Button type="submit" variant="primary">
                {newsletterCta}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
