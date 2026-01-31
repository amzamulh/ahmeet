"use client";
import { Header } from "@ah/organisms/layouts/Header";
import { Footer } from "@ah/organisms/layouts/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-auto min-h-[calc(100vh-128px)] p-4">
          <section className="flex flex-col bg-[var-(--color-bg)] text-[var(--color-text)] items-center justify-center h-full space-y-6">
            layout
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
