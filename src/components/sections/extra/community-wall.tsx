'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig, SectionImage } from '../section-config.types';

export interface CommunityPost {
  author: string;
  avatar?: SectionImage;
  content: string;
  image?: SectionImage;
  likes?: number;
  comments?: number;
  timestamp?: string;
}

export interface CommunityWallSectionProps {
  config: SectionConfig;
  posts: CommunityPost[];
  className?: string;
}

export function CommunityWallSection({ config, posts, className }: CommunityWallSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safePosts = Array.isArray(posts) ? posts : [];

  return (
    <section
      id={config.id}
      className={cn(
        'py-16 md:py-20 lg:py-24',
        isDark
          ? 'bg-[var(--kindonar-color-neutral-900)] text-white'
          : 'bg-[var(--kindonar-surface-primary)]',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeadingBlock heading={config.heading} theme={config.theme} />
        <MotionSection animation={config.animation}>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {safePosts.map((post, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  'mb-6 inline-block w-full break-inside-avoid rounded-xl border p-5 transition-all hover:shadow-md',
                  isDark
                    ? 'border-white/10 bg-white/5'
                    : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)]',
                )}
              >
                <div className="flex items-center gap-3">
                  {post.avatar ? (
                    <img
                      src={post.avatar.src}
                      alt={post.avatar.alt}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold',
                        isDark
                          ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                          : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
                      )}
                    >
                      {post.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p
                      className={cn(
                        'text-sm font-semibold',
                        isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                      )}
                    >
                      {post.author}
                    </p>
                    {post.timestamp && (
                      <p
                        className={cn(
                          'text-xs',
                          isDark ? 'text-white/40' : 'text-[var(--kindonar-color-neutral-400)]',
                        )}
                      >
                        {post.timestamp}
                      </p>
                    )}
                  </div>
                </div>
                <p
                  className={cn(
                    'mt-3 text-sm leading-relaxed',
                    isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-700)]',
                  )}
                >
                  {post.content}
                </p>
                {post.image && (
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
                    className="mt-3 w-full rounded-lg object-cover"
                  />
                )}
                <div
                  className={cn(
                    'mt-4 flex items-center gap-4 border-t pt-3',
                    isDark ? 'border-white/10' : 'border-[var(--kindonar-border-default)]',
                  )}
                >
                  <button
                    type="button"
                    className={cn(
                      'flex items-center gap-1.5 text-xs transition-colors hover:text-[var(--kindonar-color-primary-500)]',
                      isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-400)]',
                    )}
                    aria-label={`${post.likes ?? 0} likes`}
                  >
                    <Heart size={14} aria-hidden="true" />
                    <span>{post.likes ?? 0}</span>
                  </button>
                  <button
                    type="button"
                    className={cn(
                      'flex items-center gap-1.5 text-xs transition-colors hover:text-[var(--kindonar-color-primary-500)]',
                      isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-400)]',
                    )}
                    aria-label={`${post.comments ?? 0} comments`}
                  >
                    <MessageCircle size={14} aria-hidden="true" />
                    <span>{post.comments ?? 0}</span>
                  </button>
                  <button
                    type="button"
                    className={cn(
                      'ml-auto flex items-center gap-1.5 text-xs transition-colors hover:text-[var(--kindonar-color-primary-500)]',
                      isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-400)]',
                    )}
                    aria-label="Share"
                  >
                    <Share2 size={14} aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
