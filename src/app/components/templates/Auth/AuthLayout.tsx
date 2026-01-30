export interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)]">
      <div className="w-full max-w-md rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm">
        {children}
      </div>
    </div>
  );
}
