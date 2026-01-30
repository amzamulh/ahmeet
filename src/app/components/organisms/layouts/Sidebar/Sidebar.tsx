export interface SidebarProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const Sidebar = ({ isOpen, children }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <aside className="w-72 border-l border-[var(--color-border)] bg-[var(--color-bg-card)]">
      {children}
    </aside>
  );
};
