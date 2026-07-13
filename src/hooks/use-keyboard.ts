'use client';

import { useEffect, useCallback } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  handler: KeyHandler;
}

export function useKeyboardShortcut(
  shortcuts: KeyboardShortcut | KeyboardShortcut[],
  enabled: boolean = true,
): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      const items = Array.isArray(shortcuts) ? shortcuts : [shortcuts];

      for (const shortcut of items) {
        const ctrl = shortcut.ctrl ?? false;
        const meta = shortcut.meta ?? false;
        const shift = shortcut.shift ?? false;

        const ctrlOrMeta = (ctrl && event.ctrlKey) || (meta && event.metaKey);

        if (
          event.key === shortcut.key &&
          ctrlOrMeta === (ctrl || meta) &&
          event.shiftKey === shift
        ) {
          event.preventDefault();
          shortcut.handler(event);
          return;
        }
      }
    },
    [shortcuts, enabled],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
