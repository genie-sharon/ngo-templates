export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="border-t-primary-500 h-12 w-12 animate-spin rounded-full border-4 border-neutral-200" />
        <p className="text-sm text-neutral-500">Loading...</p>
      </div>
    </div>
  );
}
