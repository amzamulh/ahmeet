"use client";

import { Footer } from "./components/organisms/layouts/Footer";
import { Header } from "./components/organisms/layouts/Header";

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
