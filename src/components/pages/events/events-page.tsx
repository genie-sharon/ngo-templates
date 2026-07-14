'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useMemo } from 'react';

import type { FilterOption } from '@/components/sections/section-config.types';
import { Badge } from '@/components/ui/atoms/badge';
import { Button } from '@/components/ui/atoms/button';
import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';

import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig, EventItem } from '../page-config.types';

export type EventsPageLayout = 'grid' | 'list' | 'calendar' | 'featured-list';

export interface EventsPageConfig extends Omit<PageConfig, 'layout'> {
  hero: PageHeroConfig;
  events: EventItem[];
  categories?: FilterOption[];
  layout?: EventsPageLayout;
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function getEventMonth(date: string): number {
  return new Date(date).getMonth();
}

function EventCard({ event, variant }: { event: EventItem; variant?: 'default' | 'featured' }) {
  const isFeatured = variant === 'featured';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl bg-[var(--kindonar-surface-raised)] shadow-sm transition-shadow hover:shadow-md',
        isFeatured && 'md:flex-row md:items-stretch',
      )}
    >
      {event.image && (
        <div className={cn('overflow-hidden', isFeatured ? 'md:w-1/3' : '')}>
          <Image
            src={event.image.src}
            alt={event.image.alt}
            aspectRatio={isFeatured ? '4/3' : '16/9'}
            fit="cover"
            withSkeleton
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className={cn('flex flex-1 flex-col', isFeatured ? 'p-6' : 'p-5')}>
        <div className="mb-3 flex items-center gap-3">
          <div className="flex flex-col items-center rounded-lg bg-[var(--kindonar-color-primary-100)] px-3 py-2 text-center">
            <span className="text-xs font-bold text-[var(--kindonar-color-primary-600)] uppercase">
              {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
            </span>
            <span className="text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
              {new Date(event.date).getDate()}
            </span>
          </div>
          <div className="flex-1">
            {event.category && (
              <Badge variant="primary" size="sm" className="mb-1">
                {event.category}
              </Badge>
            )}
            <h3
              className={cn(
                'font-semibold text-[var(--kindonar-color-neutral-900)]',
                isFeatured ? 'text-xl' : 'text-base',
              )}
            >
              {event.title}
            </h3>
          </div>
        </div>
        <p
          className={cn(
            'mt-2 flex-1 text-[var(--kindonar-color-neutral-600)]',
            isFeatured ? 'text-base' : 'line-clamp-2 text-sm',
          )}
        >
          {event.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--kindonar-color-neutral-500)]">
          {event.time && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {event.time}
            </span>
          )}
          {event.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {event.location}
            </span>
          )}
        </div>
        {event.cta && (
          <div className="mt-4">
            <Button
              variant={event.cta.variant ?? 'link'}
              size="sm"
              rightIcon={<ArrowRight size={14} />}
              asChild
            >
              <a
                href={event.cta.href}
                target={event.cta.external ? '_blank' : undefined}
                rel={event.cta.external ? 'noopener noreferrer' : undefined}
              >
                {event.cta.label}
              </a>
            </Button>
          </div>
        )}
      </div>
    </motion.article>
  );
}

function GridLayout({ events }: { events: EventItem[] }) {
  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </motion.div>
  );
}

function ListLayout({ events }: { events: EventItem[] }) {
  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
      className="space-y-4"
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} variant="featured" />
      ))}
    </motion.div>
  );
}

function FeaturedListLayout({ events }: { events: EventItem[] }) {
  const featured = events[0];
  const rest = events.slice(1);

  return (
    <div className="space-y-8">
      {featured && <EventCard event={featured} variant="featured" />}
      <motion.div
        layout
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {rest.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </motion.div>
    </div>
  );
}

function CalendarLayout({ events }: { events: EventItem[] }) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const monthEvents = events.filter((e) => {
    const d = new Date(e.date);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  });

  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const eventsByDay = useMemo(() => {
    const map: Record<number, EventItem[]> = {};
    monthEvents.forEach((e) => {
      const day = new Date(e.date).getDate();
      if (!map[day]) map[day] = [];
      map[day].push(e);
    });
    return map;
  }, [monthEvents]);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={goPrevMonth}
          aria-label="Previous month"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-surface-interactive)]"
        >
          <ChevronLeft size={18} />
        </button>
        <h3 className="text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <button
          type="button"
          onClick={goNextMonth}
          aria-label="Next month"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-surface-interactive)]"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-px rounded-t-xl bg-[var(--kindonar-border-default)]">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="bg-[var(--kindonar-surface-interactive)] px-2 py-2 text-center text-xs font-semibold text-[var(--kindonar-color-neutral-500)]"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-px rounded-b-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-border-default)]">
        {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
          <div key={`empty-${idx}`} className="bg-[var(--kindonar-surface-primary)] p-2" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, idx) => {
          const day = idx + 1;
          const dayEvents = eventsByDay[day] ?? [];
          const isToday =
            day === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear();

          return (
            <div
              key={day}
              className={cn(
                'min-h-[80px] bg-[var(--kindonar-surface-raised)] p-1.5 transition-colors hover:bg-[var(--kindonar-surface-interactive)]',
                isToday && 'ring-2 ring-[var(--kindonar-color-primary-500)] ring-inset',
              )}
            >
              <span
                className={cn(
                  'mb-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium',
                  isToday
                    ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                    : 'text-[var(--kindonar-color-neutral-700)]',
                )}
              >
                {day}
              </span>
              <div className="space-y-0.5">
                {dayEvents.slice(0, 2).map((e) => (
                  <a
                    key={e.id}
                    href={e.cta?.href ?? `#${e.id}`}
                    className="block truncate rounded bg-[var(--kindonar-color-primary-100)] px-1 py-0.5 text-[10px] font-medium text-[var(--kindonar-color-primary-700)] hover:bg-[var(--kindonar-color-primary-200)]"
                  >
                    {e.title}
                  </a>
                ))}
                {dayEvents.length > 2 && (
                  <span className="px-1 text-[10px] text-[var(--kindonar-color-neutral-400)]">
                    +{dayEvents.length - 2} more
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {monthEvents.length > 0 && (
        <div className="mt-8 space-y-4">
          <h4 className="text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
            Events this month
          </h4>
          {monthEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center gap-4 rounded-lg border border-[var(--kindonar-border-default)] p-4"
            >
              <div className="flex flex-col items-center rounded-lg bg-[var(--kindonar-color-primary-100)] px-3 py-2 text-center">
                <span className="text-xs font-bold text-[var(--kindonar-color-primary-600)] uppercase">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                </span>
                <span className="text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
                  {new Date(event.date).getDate()}
                </span>
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-[var(--kindonar-color-neutral-900)]">
                  {event.title}
                </h5>
                <p className="text-sm text-[var(--kindonar-color-neutral-500)]">
                  {event.time && `${event.time} · `}
                  {event.location}
                </p>
              </div>
              {event.cta && (
                <Button variant="link" size="sm" asChild>
                  <a href={event.cta.href}>
                    {event.cta.label} <ArrowRight size={14} className="ml-1" />
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const layoutComponents: Record<
  EventsPageLayout,
  (props: { events: EventItem[]; config: EventsPageConfig }) => React.ReactNode
> = {
  grid: ({ events }) => <GridLayout events={events} />,
  list: ({ events }) => <ListLayout events={events} />,
  calendar: ({ events }) => <CalendarLayout events={events} />,
  'featured-list': ({ events }) => <FeaturedListLayout events={events} />,
};

export function EventsPage({ config }: { config: EventsPageConfig }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMonth, setActiveMonth] = useState('all');

  const categories = config.categories ?? [];
  const months = useMemo(() => {
    const unique = new Set(config.events.map((e) => getEventMonth(e.date)));
    return Array.from(unique)
      .sort((a, b) => a - b)
      .map((m) => ({ id: String(m), label: monthNames[m] }));
  }, [config.events]);

  const filteredEvents = useMemo(() => {
    let result = config.events;
    if (activeCategory !== 'all') {
      result = result.filter((e) => e.category === activeCategory);
    }
    if (activeMonth !== 'all') {
      result = result.filter((e) => String(getEventMonth(e.date)) === activeMonth);
    }
    return result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [config.events, activeCategory, activeMonth]);

  const hasFilters = categories.length > 0 || months.length > 1;
  const LayoutComponent = layoutComponents[config.layout ?? 'grid'];

  return (
    <div className={cn(config.theme === 'dark' && 'bg-[var(--kindonar-color-neutral-900)]')}>
      <PageHero config={config.hero} />
      <PageLayout>
        {hasFilters && (
          <div className="mb-8 flex flex-wrap items-center gap-4">
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  aria-pressed={activeCategory === 'all'}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                    activeCategory === 'all'
                      ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                      : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
                  )}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={activeCategory === cat.id}
                    className={cn(
                      'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                      activeCategory === cat.id
                        ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                        : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
            {months.length > 1 && (
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by month">
                <button
                  type="button"
                  onClick={() => setActiveMonth('all')}
                  aria-pressed={activeMonth === 'all'}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                    activeMonth === 'all'
                      ? 'bg-[var(--kindonar-color-secondary-500)] text-white'
                      : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-secondary-100)] hover:text-[var(--kindonar-color-secondary-700)]',
                  )}
                >
                  All Months
                </button>
                {months.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveMonth(m.id)}
                    aria-pressed={activeMonth === m.id}
                    className={cn(
                      'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                      activeMonth === m.id
                        ? 'bg-[var(--kindonar-color-secondary-500)] text-white'
                        : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-secondary-100)] hover:text-[var(--kindonar-color-secondary-700)]',
                    )}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeMonth}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {filteredEvents.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Calendar className="mb-4 h-12 w-12 text-[var(--kindonar-color-neutral-300)]" />
                <p className="text-lg font-medium text-[var(--kindonar-color-neutral-900)]">
                  No events found
                </p>
                <p className="mt-2 text-sm text-[var(--kindonar-color-neutral-500)]">
                  Try adjusting your filters or check back later
                </p>
              </div>
            ) : (
              <LayoutComponent events={filteredEvents} config={config} />
            )}
          </motion.div>
        </AnimatePresence>
      </PageLayout>
    </div>
  );
}
