'use client';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <div className="space-y-6">
            <p className="text-error text-8xl font-extrabold">500</p>
            <h1 className="text-3xl font-bold text-neutral-900">Critical Error</h1>
            <p className="mx-auto max-w-md text-neutral-600">
              A critical error occurred. Please reload the page.
            </p>
            <button
              onClick={reset}
              className="bg-primary-500 hover:bg-primary-600 inline-flex h-12 items-center rounded-md px-6 text-sm font-semibold text-white transition-colors"
            >
              Reload page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
