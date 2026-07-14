'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { BuiltForExcellence } from '@/components/sections/built-for-excellence/built-for-excellence';
import { TemplateCard } from '@/components/templates/template-card';
import { templates } from '@/data/templates/registry';

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const num = parseInt(value.replace(/\D/g, ''), 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !num) return;
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(num / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 30);
    return () => clearInterval(timer);
  }, [isInView, num]);

  if (!num)
    return (
      <span ref={ref} className="text-2xl font-bold text-white sm:text-3xl">
        {value}
      </span>
    );
  return (
    <span ref={ref} className="text-2xl font-bold text-white sm:text-3xl">
      {isInView ? count.toLocaleString('en-US') : '0'}
      {suffix}
    </span>
  );
}

const stats = [
  { label: 'Templates', value: '10' },
  { label: 'Pages', value: '80', suffix: '+' },
  { label: 'Components', value: '40', suffix: '+' },
  { label: 'Themes', value: '14' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <section className="from-primary-950 via-primary-900 relative overflow-hidden bg-gradient-to-br to-neutral-950 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(238, 84, 52, 0.1) 0%, transparent 50%)',
            }}
          />
        </div>
        <div className="bg-primary-500/10 pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-secondary-500/10 pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white/80 uppercase backdrop-blur-sm"
            ></motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Premium NGO Website Templates
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
            >
              Ten production-ready, accessible, and SEO-optimized website templates built for
              registered non-profit organizations. Each template is a complete design system with
              6&ndash;16 pages, 40+ reusable components, and 14 theme variants.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/templates"
                className="text-primary-900 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
              >
                Browse Templates
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/templates/humanitarian"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                View Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
                <div className="mt-1 text-xs font-medium tracking-wider text-white/60 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
              All Templates
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Choose from ten distinct design systems, each purpose-built for a different type of
              NGO mission.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template, i) => (
              <TemplateCard key={template.slug} template={template} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href="/templates"
              className="bg-primary-500 hover:bg-primary-600 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <BuiltForExcellence />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="from-primary-600 via-primary-700 to-primary-800 shadow-primary-500/20 relative overflow-hidden rounded-3xl bg-gradient-to-br px-8 py-16 text-center shadow-xl sm:px-16 sm:py-24"
          >
            <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-40" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start Building Your NGO Website
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
                Browse our template gallery, pick the one that fits your mission, and deploy in
                minutes. All templates are free and open source.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/templates"
                  className="text-primary-700 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
                >
                  Browse All Templates
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-8 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-neutral-500 sm:px-6 lg:px-8 dark:text-neutral-400">
          <p>Kindonar &mdash; Premium NGO Website Templates. Built for the Crowdera Hackathon.</p>
        </div>
      </footer>
    </div>
  );
}
