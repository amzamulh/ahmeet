import { AppController } from "../../organisms/layouts/AppControler";
import { Header } from "../../organisms/layouts/Header";

export interface MeetingLayoutProps {
  sidebar?: React.ReactNode;
  controls?: React.ReactNode;
  children: React.ReactNode;
}

export const MeetingLayout = ({
  sidebar,
  controls,
  children,
}: MeetingLayoutProps) => {
  return (
    <AppController header={<Header />} sidebar={sidebar}>
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-auto p-4">{children}</div>
        {controls}
      </div>
    </AppController>
  );
};
