'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Search, Globe, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useRef, useCallback, useEffect, type KeyboardEvent } from 'react';

import Link from 'next/link';

import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';
import { Button } from '@ui/atoms/button';

import type { NavigationConfig, NavigationMenuItem } from './config.types';

const menuItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

const megaMenuVariants = {
  hidden: { opacity: 0, y: -4, transition: { duration: 0.15 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -4, transition: { duration: 0.15 } },
};

const mobileMenuVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring' as const, damping: 28, stiffness: 250 } },
  exit: { x: '100%', transition: { type: 'spring' as const, damping: 28, stiffness: 250 } },
};

const searchOverlayVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
};

function DropdownIndicator({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className="ml-1 inline-flex"
    >
      <ChevronDown className="h-3.5 w-3.5" />
    </motion.span>
  );
}

function MobileSubmenuItem({
  item,
  depth,
  onItemClick,
  isDark,
}: {
  item?: NavigationMenuItem;
  depth: number;
  onItemClick: () => void;
  isDark: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!item?.children?.length || !!item?.megaMenu?.length;

  const handleToggle = useCallback(() => {
    if (hasChildren) {
      setIsOpen((prev) => !prev);
    } else {
      onItemClick();
    }
  }, [hasChildren, onItemClick]);

  const flatItems = item?.megaMenu?.flatMap((col) => col?.items ?? []) ?? item?.children ?? [];

  return (
    <div>
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          'flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors',
          depth === 0
            ? isDark
              ? 'text-white hover:text-white/80'
              : 'text-[var(--kindonar-color-neutral-900)] hover:text-[var(--kindonar-color-primary-600)]'
            : isDark
              ? 'text-white/70 hover:text-white'
              : 'text-[var(--kindonar-color-neutral-600)] hover:text-[var(--kindonar-color-neutral-900)]',
        )}
        aria-expanded={isOpen}
        role="menuitem"
      >
        <span className="flex items-center gap-2">
          {item?.icon && <span aria-hidden="true">{item?.icon}</span>}
          {item?.label ?? 'Link'}
        </span>
        {hasChildren && (
          <motion.span
            aria-hidden="true"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.span>
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div
              className={cn(
                'ml-4 border-l-2 pl-4',
                isDark ? 'border-white/20' : 'border-[var(--kindonar-border-default)]',
              )}
            >
              {item?.megaMenu
                ? (item?.megaMenu ?? []).map((col, ci) => (
                    <div key={ci}>
                      {col?.title && (
                        <p
                          className={cn(
                            'px-4 py-2 text-xs font-semibold tracking-wider uppercase',
                            isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-500)]',
                          )}
                        >
                          {col?.title}
                        </p>
                      )}
                      {(col?.items ?? []).map((subItem, si) => (
                        <a
                          key={si}
                          href={subItem?.href ?? '#'}
                          onClick={onItemClick}
                          className={cn(
                            'flex items-center gap-2 px-4 py-2 text-sm transition-colors',
                            isDark
                              ? 'text-white/70 hover:text-white'
                              : 'text-[var(--kindonar-color-neutral-600)] hover:text-[var(--kindonar-color-neutral-900)]',
                          )}
                          role="menuitem"
                        >
                          {subItem?.icon && <span aria-hidden="true">{subItem?.icon}</span>}
                          <div>
                            <span>{subItem?.label ?? 'Link'}</span>
                            {subItem?.description && (
                              <p
                                className={cn(
                                  'text-xs',
                                  isDark
                                    ? 'text-white/40'
                                    : 'text-[var(--kindonar-color-neutral-400)]',
                                )}
                              >
                                {subItem?.description}
                              </p>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  ))
                : flatItems.map((subItem, si) => (
                    <a
                      key={si}
                      href={subItem?.href ?? '#'}
                      onClick={onItemClick}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 text-sm transition-colors',
                        isDark
                          ? 'text-white/70 hover:text-white'
                          : 'text-[var(--kindonar-color-neutral-600)] hover:text-[var(--kindonar-color-neutral-900)]',
                      )}
                      role="menuitem"
                    >
                      {subItem?.icon && <span aria-hidden="true">{subItem?.icon}</span>}
                      {subItem?.label ?? 'Link'}
                    </a>
                  ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesktopDropdown({ item, isDark }: { item: NavigationMenuItem; isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasMegaMenu = !!item?.megaMenu?.length;
  const hasChildren = !!item?.children?.length;

  const handleOpen = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 100);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  if (!hasMegaMenu && !hasChildren) {
    return (
      <Link
        href={item?.href ?? '#'}
        className={cn(
          'inline-flex items-center px-3 py-2 text-sm font-medium transition-colors',
          isDark
            ? 'text-white hover:text-white/80'
            : 'text-[var(--kindonar-color-neutral-700)] hover:text-[var(--kindonar-color-primary-600)]',
        )}
        role="menuitem"
      >
        {item?.icon && (
          <span className="mr-1.5" aria-hidden="true">
            {item?.icon}
          </span>
        )}
        {item?.label ?? 'Link'}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={cn(
          'inline-flex items-center px-3 py-2 text-sm font-medium transition-colors',
          isDark
            ? 'text-white hover:text-white/80'
            : 'text-[var(--kindonar-color-neutral-700)] hover:text-[var(--kindonar-color-primary-600)]',
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item?.icon && (
          <span className="mr-1.5" aria-hidden="true">
            {item?.icon}
          </span>
        )}
        {item?.label ?? 'Menu'}
        <DropdownIndicator isOpen={isOpen} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={hasMegaMenu ? megaMenuVariants : menuItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'absolute top-full left-0 z-50 rounded-lg border shadow-lg',
              isDark
                ? 'border-white/10 bg-[var(--kindonar-color-neutral-900)]'
                : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)]',
            )}
            role="menu"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            {hasMegaMenu ? (
              <div className="flex gap-8 p-6">
                {(item?.megaMenu ?? []).map((col, ci) => (
                  <div key={ci} className="min-w-[160px]">
                    {col?.title && (
                      <p
                        className={cn(
                          'mb-3 text-xs font-semibold tracking-wider uppercase',
                          isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-500)]',
                        )}
                      >
                        {col?.title}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {(col?.items ?? []).map((subItem, si) => (
                        <li key={si}>
                          <a
                            href={subItem?.href ?? '#'}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              'group flex items-start gap-2 rounded-md px-2 py-1.5 text-sm transition-colors',
                              isDark
                                ? 'text-white/70 hover:bg-white/10 hover:text-white'
                                : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)]',
                            )}
                            role="menuitem"
                          >
                            {subItem?.icon && (
                              <span className="mt-0.5 shrink-0" aria-hidden="true">
                                {subItem?.icon}
                              </span>
                            )}
                            <div>
                              <span className="font-medium">{subItem?.label ?? 'Link'}</span>
                              {subItem?.description && (
                                <p
                                  className={cn(
                                    'mt-0.5 text-xs leading-relaxed',
                                    isDark
                                      ? 'text-white/40'
                                      : 'text-[var(--kindonar-color-neutral-400)]',
                                  )}
                                >
                                  {subItem?.description}
                                </p>
                              )}
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="min-w-[200px] p-2">
                {(item?.children ?? []).map((child, ci) => (
                  <a
                    key={ci}
                    href={child?.href ?? '#'}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                      isDark
                        ? 'text-white/70 hover:bg-white/10 hover:text-white'
                        : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)]',
                    )}
                    role="menuitem"
                  >
                    {child?.icon && <span aria-hidden="true">{child?.icon}</span>}
                    {child?.label ?? 'Link'}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const DEFAULT_NAVIGATION: NavigationConfig = {
  layout: 'logo-left',
  logo: { href: '/', text: 'Kindonar', alt: 'Kindonar' },
  menuItems: [],
  ctaButtons: [],
  showSearch: false,
  showLanguageSwitcher: false,
  languages: [{ code: 'en', label: 'English' }],
  sticky: true,
  theme: 'light',
};

export function Navigation({ config }: { config?: NavigationConfig }) {
  const merged = { ...DEFAULT_NAVIGATION, ...config };
  const {
    layout,
    logo,
    menuItems,
    ctaButtons,
    showSearch,
    showLanguageSwitcher,
    languages,
    sticky,
    theme,
  } = merged;

  const safeLanguages = languages ?? [];

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    safeLanguages[0] ?? { code: 'en', label: 'English' },
  );
  const [searchQuery, setSearchQuery] = useState('');
  const searchQueryRef = useRef(searchQuery);
  searchQueryRef.current = searchQuery;
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 80);
  });

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (searchOpen) setSearchOpen(false);
        if (langOpen) setLangOpen(false);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, langOpen, mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const isDark = theme === 'dark';

  const headerBg = cn(
    sticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative',
    'transition-colors duration-300',
    layout === 'transparent' && !isScrolled
      ? 'bg-transparent'
      : isDark
        ? 'bg-[var(--kindonar-color-neutral-900)]'
        : 'bg-[var(--kindonar-surface-primary)] shadow-sm',
  );

  const containerClass = cn(
    'mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8',
    layout === 'centered' ? 'flex-col py-4' : 'h-16 lg:h-20',
  );

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQueryRef.current.trim()) {
        setSearchOpen(false);
        setSearchQuery('');
      }
    },
    [],
  );

  const handleLangSelect = useCallback((lang: { code: string; label: string }) => {
    setSelectedLang(lang);
    setLangOpen(false);
  }, []);

  const isCenteredLayout = layout === 'centered';

  return (
    <>
      <header className={headerBg} role="banner">
        <nav className={containerClass} role="navigation" aria-label="Main navigation">
          {layout === 'logo-center' && !isCenteredLayout && (
            <div className="flex flex-1 items-center gap-1">
              {(menuItems ?? [])
                .slice(0, Math.ceil((menuItems ?? []).length / 2))
                .map((item, i) => (
                  <DesktopDropdown key={i} item={item} isDark={isDark} />
                ))}
            </div>
          )}

          <div
            className={cn(
              'flex shrink-0 items-center',
              layout === 'centered' && 'mb-3',
              layout === 'logo-center' && 'mx-4',
            )}
          >
            <Link
              href={logo?.href ?? '/'}
              className={cn(
                'flex items-center gap-2 text-lg font-bold transition-colors',
                isDark || (layout === 'transparent' && !isScrolled)
                  ? 'text-white'
                  : 'text-[var(--kindonar-color-neutral-900)]',
              )}
              aria-label={logo?.alt ?? logo?.text ?? 'Home'}
            >
              {logo?.src ? (
                <Image src={logo?.src} alt={logo?.alt ?? ''} fit="contain" className="h-8" />
              ) : null}
              {logo?.text && <span>{logo?.text}</span>}
            </Link>
          </div>

          {(layout === 'logo-left' ||
            layout === 'transparent' ||
            layout === 'solid' ||
            isCenteredLayout) && (
            <div
              className={cn(
                'hidden items-center gap-1 lg:flex',
                layout === 'centered' ? 'justify-center' : 'ml-8 flex-1',
              )}
            >
              {(menuItems ?? []).map((item, i) => (
                <DesktopDropdown key={i} item={item} isDark={isDark} />
              ))}
            </div>
          )}

          {layout === 'logo-center' && !isCenteredLayout && (
            <div className="flex flex-1 items-center justify-end gap-1">
              {(menuItems ?? []).slice(Math.ceil((menuItems ?? []).length / 2)).map((item, i) => (
                <DesktopDropdown key={i} item={item} isDark={isDark} />
              ))}
            </div>
          )}

          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            {showSearch && (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className={cn(
                  'rounded-md p-2 transition-colors',
                  isDark || (layout === 'transparent' && !isScrolled)
                    ? 'text-white hover:bg-white/10'
                    : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)]',
                )}
                aria-label="Open search"
              >
                <Search className="h-5 w-5" />
              </button>
            )}

            {showLanguageSwitcher && (
              <div className="relative hidden lg:block">
                <button
                  ref={langButtonRef}
                  type="button"
                  onClick={() => setLangOpen((prev) => !prev)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-md px-2 py-2 text-sm font-medium transition-colors',
                    isDark || (layout === 'transparent' && !isScrolled)
                      ? 'text-white hover:bg-white/10'
                      : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)]',
                  )}
                  aria-expanded={langOpen}
                  aria-haspopup="listbox"
                  aria-label="Select language"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden md:inline">{selectedLang.label}</span>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        'absolute top-full right-0 z-50 mt-1 min-w-[140px] rounded-lg border py-1 shadow-lg',
                        isDark
                          ? 'border-white/10 bg-[var(--kindonar-color-neutral-900)]'
                          : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)]',
                      )}
                      role="listbox"
                      aria-label="Language options"
                    >
                      {(safeLanguages ?? []).map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => handleLangSelect(lang)}
                          className={cn(
                            'flex w-full items-center px-3 py-2 text-left text-sm transition-colors',
                            isDark
                              ? 'text-white/70 hover:bg-white/10 hover:text-white'
                              : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)]',
                            selectedLang.code === lang.code &&
                              (isDark
                                ? 'text-white'
                                : 'font-medium text-[var(--kindonar-color-primary-600)]'),
                          )}
                          role="option"
                          aria-selected={selectedLang.code === lang.code}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <div className="hidden items-center gap-2 lg:flex">
              {(ctaButtons ?? []).map((cta, i) => (
                <Button
                  key={i}
                  variant={cta?.variant ?? 'primary'}
                  size={cta?.size ?? 'md'}
                  asChild
                >
                  <a
                    href={cta?.href ?? '#'}
                    target={cta?.external ? '_blank' : undefined}
                    rel={cta?.external ? 'noopener noreferrer' : undefined}
                  >
                    {cta?.icon && <span aria-hidden="true">{cta?.icon}</span>}
                    {cta?.label ?? 'Button'}
                  </a>
                </Button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                'rounded-md p-2 lg:hidden',
                isDark || (layout === 'transparent' && !isScrolled)
                  ? 'text-white hover:bg-white/10'
                  : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)]',
              )}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col shadow-xl',
              isDark
                ? 'bg-[var(--kindonar-color-neutral-900)]'
                : 'bg-[var(--kindonar-surface-primary)]',
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between border-b px-4 py-4">
              <Link
                href={logo?.href ?? '/'}
                className={cn(
                  'flex items-center gap-2 text-lg font-bold',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
                aria-label={logo?.alt ?? logo?.text ?? 'Home'}
              >
                {logo?.src ? (
                  <Image src={logo?.src} alt={logo?.alt ?? ''} fit="contain" className="h-7" />
                ) : null}
                {logo?.text && <span>{logo?.text}</span>}
              </Link>
              <button
                type="button"
                onClick={closeMobileMenu}
                className={cn(
                  'rounded-md p-2',
                  isDark
                    ? 'text-white hover:bg-white/10'
                    : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)]',
                )}
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2" role="menu">
              {(menuItems ?? []).map((item, i) => (
                <MobileSubmenuItem
                  key={i}
                  item={item}
                  depth={0}
                  onItemClick={closeMobileMenu}
                  isDark={isDark}
                />
              ))}
            </div>

            {showLanguageSwitcher && (
              <div
                className={cn(
                  'border-t px-4 py-3 lg:hidden',
                  isDark ? 'border-white/10' : 'border-[var(--kindonar-border-default)]',
                )}
              >
                <p
                  className={cn(
                    'mb-2 text-xs font-semibold tracking-wider uppercase',
                    isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-500)]',
                  )}
                >
                  Language
                </p>
                <div className="flex flex-wrap gap-2">
                  {(safeLanguages ?? []).map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLangSelect(lang)}
                      className={cn(
                        'rounded-md px-3 py-1.5 text-sm transition-colors',
                        selectedLang.code === lang.code
                          ? isDark
                            ? 'bg-white/20 text-white'
                            : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]'
                          : isDark
                            ? 'text-white/60 hover:bg-white/10'
                            : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)]',
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div
              className={cn(
                'border-t px-4 py-4 lg:hidden',
                isDark ? 'border-white/10' : 'border-[var(--kindonar-border-default)]',
              )}
            >
              <div className="flex flex-col gap-2">
                {(ctaButtons ?? []).map((cta, i) => (
                  <Button key={i} variant={cta?.variant ?? 'primary'} size="md" fullWidth asChild>
                    <a
                      href={cta?.href ?? '#'}
                      target={cta?.external ? '_blank' : undefined}
                      rel={cta?.external ? 'noopener noreferrer' : undefined}
                      onClick={closeMobileMenu}
                    >
                      {cta?.icon && <span aria-hidden="true">{cta?.icon}</span>}
                      {cta?.label ?? 'Button'}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-black/50 lg:hidden"
            aria-hidden="true"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            variants={searchOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'fixed inset-0 z-[70] flex items-start justify-center pt-[15vh]',
              isDark
                ? 'bg-[var(--kindonar-color-neutral-900)]'
                : 'bg-[var(--kindonar-surface-primary)]',
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            <div className="w-full max-w-xl px-4">
              <div className="mb-6 flex items-center justify-between">
                <h2
                  className={cn(
                    'text-lg font-semibold',
                    isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                  )}
                >
                  Search
                </h2>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className={cn(
                    'rounded-md p-2 transition-colors',
                    isDark
                      ? 'text-white hover:bg-white/10'
                      : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)]',
                  )}
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <Search
                    className={cn(
                      'absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2',
                      isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-400)]',
                    )}
                    aria-hidden="true"
                  />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type to search..."
                    className={cn(
                      'w-full rounded-xl border py-4 pr-4 pl-11 text-lg transition-colors outline-none',
                      isDark
                        ? 'border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-white/40'
                        : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-secondary)] text-[var(--kindonar-color-neutral-900)] placeholder:text-[var(--kindonar-color-neutral-400)] focus:border-[var(--kindonar-color-primary-500)]',
                    )}
                    aria-label="Search query"
                  />
                </div>
              </form>
              <p
                className={cn(
                  'mt-3 text-center text-sm',
                  isDark ? 'text-white/40' : 'text-[var(--kindonar-color-neutral-400)]',
                )}
              >
                Press <kbd className="rounded-md border px-1.5 py-0.5 text-xs font-medium">ESC</kbd>{' '}
                to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {sticky && <div className="h-16 lg:h-20" aria-hidden="true" />}
    </>
  );
}
