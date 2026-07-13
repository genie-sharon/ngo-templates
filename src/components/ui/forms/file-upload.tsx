'use client';

import { forwardRef, useRef, useState, type InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
  /** Accepted file types shown to users */
  acceptedFormats?: string;
  /** Max file size in MB */
  maxSizeMB?: number;
  /** Called with the selected file */
  onFileSelect?: (file: File | null) => void;
}

/**
 * Drag-and-drop file upload area with preview.
 */
export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    { className, label, error, helperText, acceptedFormats, maxSizeMB, onFileSelect, id, ...props },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const uploadId = id || 'file-upload';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] ?? null;
      if (file && maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
        setFileName(`File exceeds ${maxSizeMB}MB limit`);
        onFileSelect?.(null);
        return;
      }
      setFileName(file?.name ?? null);
      onFileSelect?.(file);
    };

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={uploadId}
            className="text-sm font-medium text-[var(--kindonar-color-neutral-800)]"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            'relative flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-8 text-center transition-colors',
            isDragOver
              ? 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-50)]'
              : 'border-[var(--kindonar-border-default)] hover:border-[var(--kindonar-color-primary-300)]',
            error && 'border-[var(--kindonar-border-error)]',
            className,
          )}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file) {
              if (maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
                setFileName(`File exceeds ${maxSizeMB}MB limit`);
                return;
              }
              setFileName(file.name);
              onFileSelect?.(file);
              if (inputRef.current) {
                const dt = new DataTransfer();
                dt.items.add(file);
                inputRef.current.files = dt.files;
              }
            }
          }}
          onClick={() => inputRef.current?.click()}
        >
          <svg
            className="mb-3 h-8 w-8 text-[var(--kindonar-color-neutral-400)]"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {fileName ? (
            <p className="text-sm font-medium text-[var(--kindonar-color-primary-600)]">
              {fileName}
            </p>
          ) : (
            <>
              <p className="text-sm text-[var(--kindonar-color-neutral-600)]">
                <span className="font-medium text-[var(--kindonar-color-primary-600)]">
                  Click to upload
                </span>{' '}
                or drag and drop
              </p>
              {acceptedFormats && (
                <p className="mt-1 text-xs text-[var(--kindonar-color-neutral-400)]">
                  {acceptedFormats}
                </p>
              )}
              {maxSizeMB && (
                <p className="text-xs text-[var(--kindonar-color-neutral-400)]">
                  Max {maxSizeMB}MB
                </p>
              )}
            </>
          )}
          <input
            ref={(node) => {
              (ref as React.RefCallback<HTMLInputElement>)?.(node);
              (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
            }}
            id={uploadId}
            type="file"
            className="hidden"
            onChange={handleChange}
            accept={acceptedFormats}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-[var(--kindonar-color-error-500)]" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-xs text-[var(--kindonar-color-neutral-500)]">{helperText}</p>
        )}
      </div>
    );
  },
);
FileUpload.displayName = 'FileUpload';
