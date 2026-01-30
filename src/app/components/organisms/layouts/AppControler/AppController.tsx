export interface AppControllerProps {
  header: React.ReactNode;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export const AppController = ({
  header,
  sidebar,
  children,
}: AppControllerProps) => {
  return (
    <div className="flex h-screen flex-col">
      {header}
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-auto">{children}</main>
        {sidebar}
      </div>
    </div>
  );
};
