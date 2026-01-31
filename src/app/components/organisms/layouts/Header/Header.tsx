"use client";

import { Avatar } from "@ah/app/components/atoms/Avatar";
import { Button } from "@ah/app/components/atoms/Button";
import { Logo } from "@ah/app/components/atoms/Logo";

export default function Header() {
  return (
    <header className="w-full bg-[var(--color-bg)] text-[var(--color-text)] flex items-center justify-between py-3 px-4 shadow-[var(--shadow-sm)] backdrop-blur-md border-b-1 border-[var(--color-border)]">
      <div className="flex items-center h-full gap-2">
        <Logo />
      </div>
      <nav className="flex items-center justify-end">
        <div className="flex items-center gap-4">
          <Button variant={"outline"}>Schedule</Button>
          <Avatar name="Amzamul" />
        </div>
      </nav>
    </header>
  );
}
