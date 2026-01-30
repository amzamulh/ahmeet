import { AppController } from "../../organisms/layouts/AppControler";
import { Header } from "../../organisms/layouts/Header";
import { Sidebar } from "../../organisms/layouts/Sidebar";

export interface DashboardLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export const DashboardLayout = ({
  sidebar,
  children,
}: DashboardLayoutProps) => {
  return (
    <AppController
      header={<Header />}
      sidebar={<Sidebar isOpen>{sidebar}</Sidebar>}
    >
      <div className="h-full w-full p-4 bg-[var(--color-bg)]">{children}</div>
    </AppController>
  );
};
