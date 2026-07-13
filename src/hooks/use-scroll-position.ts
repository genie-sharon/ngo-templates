'use client';

import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | null;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: null,
  });

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollPosition({
        x: window.scrollX,
        y: currentY,
        direction: currentY > lastY ? 'down' : currentY < lastY ? 'up' : null,
      });
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

export function useIsScrolled(threshold: number = 80): boolean {
  const { y } = useScrollPosition();
  return y > threshold;
}
