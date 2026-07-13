'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  type ReactNode,
  type HTMLAttributes,
} from 'react';

import { cn } from '@/lib/utils';

type Side = 'top' | 'bottom' | 'left' | 'right';
type Align = 'start' | 'center' | 'end';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode;
  children: ReactNode;
  side?: Side;
  align?: Align;
}

const sideClasses: Record<Side, string> = {
  top: 'bottom-full left-1/2 mb-2',
  bottom: 'top-full left-1/2 mt-2',
  left: 'right-full top-1/2 mr-2',
  right: 'left-full top-1/2 ml-2',
};

const alignClasses: Record<Align, string> = {
  start: '-translate-x-0',
  center: '-translate-x-1/2',
  end: '-translate-x-full',
};

const verticalAlignClasses: Record<Align, string> = {
  start: '-translate-y-0',
  center: '-translate-y-1/2',
  end: '-translate-y-full',
};

const popoverVariants = {
  initial: (side: Side) => {
    const isVertical = side === 'top' || side === 'bottom';
    return {
      opacity: 0,
      scale: 0.95,
      [isVertical ? 'y' : 'x']: side === 'top' || side === 'left' ? 4 : -4,
    };
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.15, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.1, ease: 'easeIn' as const },
  },
};

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ className, trigger, children, side = 'bottom', align = 'center', ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }, []);

    useEffect(() => {
      if (!open) return;
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [open]);

    const isVertical = side === 'top' || side === 'bottom';

    return (
      <div
        ref={containerRef}
        className={cn('relative inline-block', className)}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="dialog"
          className="inline-flex"
        >
          {trigger}
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={ref}
              role="dialog"
              className={cn(
                'absolute z-50 min-w-[200px] rounded-lg border bg-[var(--kindonar-surface-raised)] p-4 shadow-lg',
                sideClasses[side],
                isVertical ? alignClasses[align] : verticalAlignClasses[align],
              )}
              variants={popoverVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={side}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);
Popover.displayName = 'Popover';
