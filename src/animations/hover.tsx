'use client';

import { motion } from 'framer-motion';
import { type ReactNode, useRef, useState, useCallback, type MouseEvent } from 'react';

import { useReducedMotion } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import { motionTokens } from './tokens';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  radius = 200,
  onClick,
  as = 'button',
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current || prefersReduced) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < radius) {
        const power = (radius - distance) / radius;
        setPosition({
          x: distX * strength * power,
          y: distY * strength * power,
        });
      }
    },
    [strength, radius, prefersReduced],
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  if (prefersReduced) {
    const Tag = as;
    const props = as === 'a' ? { href, target, rel } : { onClick };
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  const spring = { ...motionTokens.spring.gentle, damping: 15 };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={spring}
      className={cn('inline-block', className)}
      style={{ willChange: 'transform' }}
    >
      {as === 'a' ? (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          whileTap={{ scale: 0.97 }}
          className="block"
        >
          {children}
        </motion.a>
      ) : (
        <motion.button onClick={onClick} whileTap={{ scale: 0.97 }} type="button" className="block">
          {children}
        </motion.button>
      )}
    </motion.div>
  );
}

interface ButtonRippleProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  color?: string;
}

export function ButtonRipple({
  children,
  className,
  onClick,
  color = 'rgba(255, 255, 255, 0.3)',
}: ButtonRippleProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const counterRef = useRef(0);
  const prefersReduced = useReducedMotion();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (prefersReduced) {
        onClick?.();
        return;
      }

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = counterRef.current++;

      setRipples((prev) => [...prev, { x, y, id }]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);

      onClick?.();
    },
    [onClick, prefersReduced],
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn('relative overflow-hidden', className)}
    >
      {children}
      {!prefersReduced &&
        ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="animate-ripple pointer-events-none absolute rounded-full"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
              background: color,
              transform: 'scale(0)',
            }}
          />
        ))}
      <style>{`
        @keyframes ripple-effect {
          to { transform: scale(15); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple-effect 0.6s ease-out forwards;
        }
      `}</style>
    </button>
  );
}

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
}

export function FloatingCard({
  children,
  className,
  intensity = 10,
  perspective = 1000,
}: FloatingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current || prefersReduced) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / rect.width) * intensity;
      const rotateX = -((e.clientY - centerY) / rect.height) * intensity;
      setRotate({ x: rotateX, y: rotateY });
    },
    [intensity, prefersReduced],
  );

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
  }, []);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={cn('', className)}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      <div style={{ transformStyle: 'preserve-3d' }}>{children}</div>
    </motion.div>
  );
}

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

export function ScaleOnHover({ children, className, scale = 1.03, duration }: ScaleOnHoverProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: duration ?? 0.2 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface TiltOnHoverProps {
  children: ReactNode;
  className?: string;
  tiltDegree?: number;
}

export function TiltOnHover({ children, className, tiltDegree = 5 }: TiltOnHoverProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ rotate: tiltDegree }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

const springDefault = { type: 'spring' as const, stiffness: 300, damping: 15 };

export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: springDefault,
};

export const hoverGlow = {
  whileHover: {
    boxShadow: '0 0 20px rgba(90, 90, 230, 0.3)',
  },
  transition: { duration: 0.2 },
};

export const hoverLift = {
  whileHover: { y: -4, boxShadow: '0 12px 24px -6px rgba(0, 0, 0, 0.12)' },
  whileTap: { y: 0 },
  transition: springDefault,
};
