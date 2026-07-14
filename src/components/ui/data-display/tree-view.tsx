'use client';

import { useState, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface TreeNode {
  id: string;
  label: string;
  icon?: ReactNode;
  children?: TreeNode[];
}

export interface TreeViewProps extends HTMLAttributes<HTMLDivElement> {
  data: TreeNode[];
  /** Default expanded node IDs */
  defaultExpandedIds?: string[];
  /** Controlled expanded node IDs */
  expandedIds?: string[];
  onExpandedChange?: (ids: string[]) => void;
}

/**
 * Tree view for hierarchical data (e.g., org chart, categories).
 */
function TreeNodeItem({
  node,
  depth,
  expandedIds,
  toggle,
}: {
  node: TreeNode;
  depth: number;
  expandedIds: string[];
  toggle: (id: string) => void;
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedIds.includes(node.id);

  return (
    <li role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined} aria-selected={false}>
      <div
        className={cn(
          'flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[var(--kindonar-color-neutral-700)] hover:bg-[var(--kindonar-surface-interactive)]',
          'focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:outline-none',
        )}
        style={{ paddingLeft: `${depth * 20 + 8}px` }}
        onClick={() => hasChildren && toggle(node.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (hasChildren) toggle(node.id);
          }
        }}
        tabIndex={0}
        role="button"
      >
        {hasChildren ? (
          <svg
            className={cn(
              'h-3.5 w-3.5 shrink-0 text-[var(--kindonar-color-neutral-400)] transition-transform',
              isExpanded && 'rotate-90',
            )}
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <span className="w-3.5" />
        )}
        {node.icon && (
          <span className="shrink-0 text-[var(--kindonar-color-neutral-500)]">{node.icon}</span>
        )}
        <span>{node.label}</span>
      </div>
      {hasChildren && isExpanded && (
        <ul role="group">
          {node.children!.map((child) => (
            <TreeNodeItem
              key={child.id}
              node={child}
              depth={depth + 1}
              expandedIds={expandedIds}
              toggle={toggle}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function TreeView({
  data,
  defaultExpandedIds = [],
  expandedIds: controlledIds,
  onExpandedChange,
  className,
}: TreeViewProps) {
  const [internalIds, setInternalIds] = useState<string[]>(defaultExpandedIds);
  const activeIds = controlledIds ?? internalIds;

  const toggle = (id: string) => {
    const next = activeIds.includes(id) ? activeIds.filter((i) => i !== id) : [...activeIds, id];
    if (controlledIds === undefined) setInternalIds(next);
    onExpandedChange?.(next);
  };

  return (
    <div className={cn('rounded-lg border border-[var(--kindonar-border-default)] p-2', className)}>
      <ul role="tree">
        {data.map((node) => (
          <TreeNodeItem
            key={node.id}
            node={node}
            depth={0}
            expandedIds={activeIds}
            toggle={toggle}
          />
        ))}
      </ul>
    </div>
  );
}
