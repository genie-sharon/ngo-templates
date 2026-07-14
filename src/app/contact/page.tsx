'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/atoms/button';
import { Input } from '@/components/ui/forms/input';
import { Select } from '@/components/ui/forms/select';
import { Textarea } from '@/components/ui/forms/textarea';
import { Accordion } from '@/components/ui/data-display/accordion';

const REASONS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'custom-template', label: 'Custom Template Request' },
  { value: 'bug', label: 'Bug Report' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Other' },
];

const FAQS = [
  {
    id: 'timeline',
    title: 'How long does it take to build a custom template?',
    content:
      'Most custom templates are delivered within 3–5 business days. Complex projects with advanced requirements may take longer.',
  },
  {
    id: 'migration',
    title: 'Can I migrate my existing NGO website?',
    content:
      'Yes. We can help migrate your existing content, pages, and SEO to your new Kindonar template. Contact us with your current website details.',
  },
  {
    id: 'support',
    title: 'Do you offer ongoing support?',
    content:
      'Absolutely. Every template comes with documentation and email support. Premium support plans with priority response are available.',
  },
  {
    id: 'features',
    title: 'Can I request specific features?',
    content:
      'Yes. We love feature requests. If there is something specific your NGO needs, reach out and we will see what we can do.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-white/70 uppercase backdrop-blur-sm"
          >
            <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
            Get in Touch
          </motion.span>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Build Together
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/50">
            Have a question, want a custom template, or just want to say hello? We&apos;d love to
            hear from you.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'hello@kindonar.org',
                  href: 'mailto:hello@kindonar.org',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+1 (555) 123-4567',
                  href: 'tel:+15551234567',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'San Francisco, CA',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors group-hover:border-white/20">
                    <item.icon className="h-5 w-5 text-white/60" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-white/40">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-white transition-colors hover:text-blue-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-semibold text-white">Book a Demo</span>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-white/40">
                Schedule a 30-minute call to see our templates in action and discuss your NGO&apos;s
                needs.
              </p>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-[10px] font-medium uppercase tracking-wider text-white/30">
                  Calendly Integration
                </div>
                <div className="mt-1 text-xs text-white/50">
                  Pick a time that works for you
                </div>
                <div className="mt-3 grid grid-cols-7 gap-1">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded py-1.5 text-[8px] font-medium transition-colors ${
                        i % 3 === 0
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-white/5 text-white/30 hover:bg-white/10'
                      }`}
                    >
                      {8 + Math.floor(i / 2)}:{i % 2 === 0 ? '00' : '30'}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0, 0, 0.2, 1] }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20">
                    <svg
                      className="h-8 w-8 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="mt-2 text-sm text-white/50">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="ghost"
                    className="mt-6 text-white/60 hover:text-white"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      required
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@example.org"
                      required
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                    />
                  </div>

                  <Select
                    label="Reason for Contact"
                    placeholder="Select a reason"
                    options={REASONS}
                    required
                    className="border-white/10 bg-white/5 text-white"
                  />

                  <Textarea
                    label="Message"
                    placeholder="Tell us about your project, question, or idea..."
                    required
                    className="min-h-[120px] border-white/10 bg-white/5 text-white placeholder:text-white/30"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30"
                  >
                    <SendIcon />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <Accordion
            items={FAQS}
            variant="ghost"
            className="space-y-3"
          />
        </motion.div>
      </div>
    </div>
  );
}

function SendIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}
