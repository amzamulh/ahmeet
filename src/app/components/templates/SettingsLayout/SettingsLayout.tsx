import { AppController } from "../../organisms/layouts/AppControler";
import { Header } from "../../organisms/layouts/Header";

export interface SettingsLayoutProps {
  children: React.ReactNode;
}

export const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <AppController header={<Header />}>
      <div className="h-full w-full p-4 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-3xl space-y-6">{children}</div>
      </div>
    </AppController>
  );
};
