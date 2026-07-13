'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';

import { useReducedMotion } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import { pageEnter, pageSlideEnter, pageScaleEnter } from './variants';

export type PageTransitionType = 'fade' | 'slide' | 'scale' | 'none';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  type?: PageTransitionType;
  duration?: number;
}

const variantMap: Record<PageTransitionType, typeof pageEnter> = {
  fade: pageEnter,
  slide: pageSlideEnter,
  scale: pageScaleEnter,
  none: { hidden: {}, visible: {}, exit: {} },
};

export function PageTransition({
  children,
  className,
  type = 'fade',
  duration,
}: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  if (prefersReduced || type === 'none') {
    return <>{children}</>;
  }

  const variants = variantMap[type];

  const resolvedVariants = {
    hidden: { ...variants.hidden },
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as { transition?: object })?.transition,
        ...(duration ? { duration } : {}),
      },
    },
    exit: {
      ...variants.exit,
      transition: {
        ...(variants.exit as { transition?: object })?.transition,
        ...(duration ? { duration: duration * 0.5 } : {}),
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={resolvedVariants}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
