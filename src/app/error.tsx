'use client';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <p className="text-error text-8xl font-extrabold">500</p>
        <h1 className="text-3xl font-bold text-neutral-900">Something went wrong</h1>
        <p className="mx-auto max-w-md text-neutral-600">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <button
          onClick={reset}
          className="bg-primary-500 hover:bg-primary-600 focus-visible:outline-primary-500 inline-flex h-12 items-center rounded-md px-6 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
