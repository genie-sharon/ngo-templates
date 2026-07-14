'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  Tag,
  Clock,
  Share2,
  Link,
  Check,
  ChevronRight,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

import type { PageConfig, PostItem, BreadcrumbItem } from '@/components/pages/page-config.types';
import { Image } from '@/components/ui/media/image';
import NextLink from 'next/link';
import { cn, formatDate } from '@/lib/utils';

export interface BlogDetailConfig extends PageConfig {
  post: PostItem;
  relatedPosts: PostItem[];
}

export function BlogDetailPage({
  config,
  className,
}: {
  config: BlogDetailConfig;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const headings = useMemo(() => {
    if (!config.post.content) return [];
    const regex = /<h([2-3])\s+id="([^"]+)"[^>]*>([^<]+)<\/h[2-3]>/g;
    const result: { level: number; id: string; text: string }[] = [];
    let match;
    while ((match = regex.exec(config.post.content)) !== null) {
      result.push({ level: parseInt(match[1] || '2'), id: match[2] || '', text: match[3] || '' });
    }
    return result;
  }, [config.post]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => setActiveSection(entry.target.id));
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = config.post.title;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Blog', href: '/blog' },
    { label: config.post.title, href: config.post.slug },
  ];

  const sidebar = (
    <aside className="space-y-8">
      {headings.length > 0 && (
        <div className="sticky top-24">
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
            Table of Contents
          </h3>
          <nav className="space-y-1" aria-label="Table of contents">
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                className={cn(
                  'block rounded-md px-3 py-1.5 text-sm transition-colors',
                  h.level === 3 && 'pl-6',
                  activeSection === h.id
                    ? 'bg-[var(--kindonar-color-primary-100)] font-medium text-[var(--kindonar-color-primary-700)]'
                    : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                {h.text}
              </a>
            ))}
          </nav>
        </div>
      )}

      <div>
        <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
          Author
        </h3>
        <div className="flex items-center gap-4 rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-4">
          {config.post.author.avatar ? (
            <Image
              src={config.post.author.avatar}
              alt={config.post.author.name}
              className="h-14 w-14"
              rounded="full"
              fit="cover"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-100)]">
              <User className="h-6 w-6 text-[var(--kindonar-color-primary-600)]" />
            </div>
          )}
          <div>
            <p className="font-semibold text-[var(--kindonar-color-neutral-900)]">
              {config.post.author.name}
            </p>
            {config.post.author.role && (
              <p className="text-sm text-[var(--kindonar-color-neutral-500)]">
                {config.post.author.role}
              </p>
            )}
          </div>
        </div>
      </div>

      {config.relatedPosts.length > 0 && (
        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
            Related Posts
          </h3>
          <div className="space-y-4">
            {config.relatedPosts.slice(0, 4).map((post) => (
              <a key={post.id} href={post.slug} className="group flex gap-3">
                {post.image && (
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      className="h-full w-full transition-transform duration-300 group-hover:scale-105"
                      fit="cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="line-clamp-2 text-sm font-medium text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
                    {post.title}
                  </h4>
                  <p className="mt-1 text-xs text-[var(--kindonar-color-neutral-500)]">
                    {formatDate(post.date)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </aside>
  );

  return (
    <div className={cn(className)}>
      <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--kindonar-color-neutral-500)]">
          <li>
            <NextLink
              href="/"
              className="inline-flex items-center gap-1 transition-colors hover:text-[var(--kindonar-color-primary-600)]"
            >
              Home
            </NextLink>
          </li>
          {breadcrumbs.map((item, idx) => (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              {idx === breadcrumbs.length - 1 ? (
                <span
                  className="font-medium text-[var(--kindonar-color-neutral-800)]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="transition-colors hover:text-[var(--kindonar-color-primary-600)]"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <article className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <main>
            {config.post.image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 overflow-hidden rounded-2xl"
              >
                <Image
                  src={config.post.image.src}
                  alt={config.post.image.alt}
                  className="aspect-[21/9] w-full"
                  fit="cover"
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--kindonar-color-primary-100)] px-3 py-1 text-xs font-semibold text-[var(--kindonar-color-primary-700)]">
                  {config.post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-[var(--kindonar-color-neutral-500)]">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={config.post.date}>{formatDate(config.post.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-[var(--kindonar-color-neutral-500)]">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {config.post.author.name}
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-[var(--kindonar-color-neutral-900)] md:text-4xl lg:text-5xl">
                {config.post.title}
              </h1>

              <div className="mt-4 flex items-center gap-4 border-b border-[var(--kindonar-border-default)] pb-6">
                <div className="flex items-center gap-3">
                  {config.post.author.avatar ? (
                    <Image
                      src={config.post.author.avatar}
                      alt={config.post.author.name}
                      className="h-10 w-10"
                      rounded="full"
                      fit="cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-100)]">
                      <User className="h-5 w-5 text-[var(--kindonar-color-primary-600)]" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
                      {config.post.author.name}
                    </p>
                    {config.post.author.role && (
                      <p className="text-xs text-[var(--kindonar-color-neutral-500)]">
                        {config.post.author.role}
                      </p>
                    )}
                  </div>
                </div>

                <div className="ml-auto flex items-center gap-2">
                  <span className="text-sm text-[var(--kindonar-color-neutral-500)]">Share:</span>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
                    aria-label="Share on Facebook"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
                    aria-label="Share on Twitter"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
                    aria-label="Share on LinkedIn"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
                    aria-label="Copy link"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-[var(--kindonar-color-success-500)]" />
                    ) : (
                      <Link className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div
                className="prose prose-lg mt-8 max-w-none text-[var(--kindonar-color-neutral-700)] [&_a]:text-[var(--kindonar-color-primary-600)] [&_a]:underline [&_a]:underline-offset-2 [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--kindonar-color-primary-500)] [&_blockquote]:pl-4 [&_blockquote]:text-[var(--kindonar-color-neutral-600)] [&_blockquote]:italic [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[var(--kindonar-color-neutral-900)] [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[var(--kindonar-color-neutral-900)] [&_img]:my-6 [&_img]:rounded-xl [&_li]:mb-1 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
                dangerouslySetInnerHTML={{ __html: config.post.content || '' }}
              />

              {config.post.tags && config.post.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-[var(--kindonar-border-default)] pt-6">
                  <Tag className="h-4 w-4 text-[var(--kindonar-color-neutral-400)]" />
                  {config.post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--kindonar-surface-interactive)] px-3 py-1 text-xs font-medium text-[var(--kindonar-color-neutral-600)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 flex items-center gap-3">
                <Share2 className="h-4 w-4 text-[var(--kindonar-color-neutral-400)]" />
                <span className="text-sm text-[var(--kindonar-color-neutral-500)]">
                  Share this article:
                </span>
                <div className="flex gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
                    aria-label="Share on Facebook"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
                    aria-label="Share on Twitter"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
                    aria-label="Share on LinkedIn"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
                    aria-label="Copy link"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-[var(--kindonar-color-success-500)]" />
                    ) : (
                      <Link className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {config.relatedPosts.length > 0 && (
              <section className="mt-16 border-t border-[var(--kindonar-border-default)] pt-12">
                <h2 className="mb-8 text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">
                  Related Posts
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {config.relatedPosts.slice(0, 3).map((post) => (
                    <a
                      key={post.id}
                      href={post.slug}
                      className="group flex flex-col overflow-hidden rounded-xl bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)] transition-all duration-300 hover:shadow-[var(--kindonar-shadow-md)]"
                    >
                      {post.image && (
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={post.image.src}
                            alt={post.image.alt}
                            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                            fit="cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-4">
                        <p className="mb-2 text-xs font-medium text-[var(--kindonar-color-primary-600)]">
                          {post.category}
                        </p>
                        <h3 className="line-clamp-2 text-sm font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
                          {post.title}
                        </h3>
                        <p className="mt-1 text-xs text-[var(--kindonar-color-neutral-500)]">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </main>

          {sidebar}
        </div>
      </article>
    </div>
  );
}
