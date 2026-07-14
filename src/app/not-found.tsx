import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <p className="text-primary-500 text-8xl font-extrabold">404</p>
        <h1 className="text-3xl font-bold text-neutral-900">Page Not Found</h1>
        <p className="mx-auto max-w-md text-neutral-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-primary-500 hover:bg-primary-600 focus-visible:outline-primary-500 inline-flex h-12 items-center rounded-md px-6 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
