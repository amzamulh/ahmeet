export default function HomePage() {
  return (
    <section className="flex flex-col bg-[var-(--color-bg)] text-[var(--color-text)] items-center justify-center h-full space-y-6">
      <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Welcome to Ahmeet
      </h1>
      <p className="text-[var(--color-muted)]">
        Enterprise-grade real-time video conferencing & collaboration.
      </p>
    </section>
  );
}
