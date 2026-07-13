import type { KeyboardEvent } from 'react';

export const KEY_CODES = {
  TAB: 'Tab',
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const;

export function handleKeyboardNavigation(
  event: KeyboardEvent,
  callbacks: {
    onEnter?: () => void;
    onSpace?: () => void;
    onEscape?: () => void;
    onArrowUp?: () => void;
    onArrowDown?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
    onHome?: () => void;
    onEnd?: () => void;
  },
): void {
  switch (event.key) {
    case KEY_CODES.ENTER:
      event.preventDefault();
      callbacks.onEnter?.();
      break;
    case KEY_CODES.SPACE:
      event.preventDefault();
      callbacks.onSpace?.();
      break;
    case KEY_CODES.ESCAPE:
      event.preventDefault();
      callbacks.onEscape?.();
      break;
    case KEY_CODES.ARROW_UP:
      event.preventDefault();
      callbacks.onArrowUp?.();
      break;
    case KEY_CODES.ARROW_DOWN:
      event.preventDefault();
      callbacks.onArrowDown?.();
      break;
    case KEY_CODES.ARROW_LEFT:
      event.preventDefault();
      callbacks.onArrowLeft?.();
      break;
    case KEY_CODES.ARROW_RIGHT:
      event.preventDefault();
      callbacks.onArrowRight?.();
      break;
    case KEY_CODES.HOME:
      event.preventDefault();
      callbacks.onHome?.();
      break;
    case KEY_CODES.END:
      event.preventDefault();
      callbacks.onEnd?.();
      break;
  }
}

export function getAriaLabel(label?: string, fallback?: string): string | undefined {
  return label || fallback;
}

export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable]',
  ];
  return Array.from(container.querySelectorAll<HTMLElement>(selectors.join(',')));
}

export function trapFocus(container: HTMLElement, event: KeyboardEvent): void {
  if (event.key !== KEY_CODES.TAB) return;

  const focusable = getFocusableElements(container);
  if (focusable.length === 0) {
    event.preventDefault();
    return;
  }

  const first = focusable[0]!;
  const last = focusable[focusable.length - 1]!;

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
