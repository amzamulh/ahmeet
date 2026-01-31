import { Button } from "@ah/app/components/atoms/Button";
import { Icon } from "@ah/app/components/atoms/Icon";
import { Textarea } from "@ah/app/components/atoms/Textarea";

export interface ChatPanelProps {
  children: React.ReactNode;
}

export const ChatPanel = ({ children }: ChatPanelProps) => {
  return (
    <div className="flex h-full flex-col border border-[var(--color-border)]">
      <div className="flex-1 space-y-2 overflow-auto p-3">{children}</div>
      <div className="p-3 md:p-3 bg-[var(--color-bg-sidebar)] border-t border-[var(--color-border)] shrink-0">
        <form className="max-w-4xl mx-auto flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-2 mb-1">
            <Button
              variant="outline"
              className="p-1.5! text-[var(--color-muted)]! border-[var(--color-border)]!"
              size="sm"
              radius="lg"
            >
              <Icon name={"attach"} size="sm" />
            </Button>
            <Button
              variant="outline"
              className="p-1.5! text-[var(--color-muted)]! border-[var(--color-border)]!"
              size="sm"
              radius="lg"
            >
              <Icon name={"emoji"} size="sm" />
            </Button>
          </div>

          <div className="flex-1 relative">
            <Textarea radius="lg" rows={1} size="lg" />
          </div>

          <Button className="p-2.5!" size="sm" radius="lg">
            <Icon name={"send"} size="md" />
          </Button>
        </form>
      </div>
    </div>
  );
};
