import { Icon } from "@/app/components/atoms/Icon";

export interface ChatMessageProps {
  sender: string;
  message: string;
  isSelf?: boolean;
}

export const ChatMessage = ({ sender, message, isSelf }: ChatMessageProps) => {
  return (
    <div className={`flex ${isSelf ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex flex-col max-w-[85%] md:max-w-[70%] ${isSelf ? "items-end" : "items-start"}`}
      >
        {!isSelf && <div className="mb-1 text-xs opacity-60">{sender}</div>}
        <div
          className={`
                px-4 py-2.5 rounded-lg text-[length:var(--text-sm)] shadow-sm
                ${
                  isSelf
                    ? "bg-[var(--color-primary)] text-[var(--color-text)] border border-[var(--color-border)] rounded-tr-none"
                    : "bg-[var(--color-bg)] text-[var(--color-muted)] border border-[var(--color-border)] rounded-tl-none"
                }
                `}
        >
          {message}
        </div>
        <div className={`flex items-center gap-1.5 mt-1 px-1`}>
          <span className="text-[length:var(--text-xxs)] text-[var(--color-muted)] ">
            10:00 AM
          </span>
          {isSelf && (
            <span className="text-[var(--color-primary)]">
              <Icon name={"check"} size="xs" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
