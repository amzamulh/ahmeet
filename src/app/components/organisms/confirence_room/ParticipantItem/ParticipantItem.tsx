import { Avatar } from "@ah/app/components/atoms/Avatar";
import { Icon } from "@ah/app/components/atoms/Icon";

export interface ParticipantItemProps {
  name: string;
  muted?: boolean;
}

export const ParticipantItem = ({ name, muted }: ParticipantItemProps) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2">
      <Avatar name={name} size="sm" />
      <span className="flex-1 text-sm">{name}</span>
      {muted && (
        <span className="text-xs opacity-60 flex items-center gap-1">
          <Icon
            name="mic-off"
            size="xs"
            className="text-[var(--color-danger)]"
            ariaLabel="Mic-Off"
          />
          Muted
        </span>
      )}
    </div>
  );
};
