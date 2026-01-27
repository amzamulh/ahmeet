"use client";

import { Button } from "./atoms/Button";

export default function Header() {
  return (
    <header className="w-full bg-[var(--color-bg)] text-[var(--color-text)] flex items-center justify-between py-3 px-4 shadow-[var(--shadow-sm)] border-b-2 border-[var(--color-border)]">
      <h1 className="text-xl font-bold text-[var(--color-text)] ">AH</h1>
      <Button variant="solid" color="primary" size="md">
        Click Me
      </Button>
    </header>
  );
}
