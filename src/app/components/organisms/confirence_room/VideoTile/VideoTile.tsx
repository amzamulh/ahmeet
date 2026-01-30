import { Icon } from "@/app/components/atoms/Icon";

export interface VideoTileProps {
  name: string;
  isMuted?: boolean;
  isCameraOff?: boolean;
}

export const VideoTile = ({ name, isMuted, isCameraOff }: VideoTileProps) => {
  return (
    <div className="relative flex aspect-video items-center justify-center rounded-md bg-black text-white">
      {isCameraOff ? (
        <span className="text-sm opacity-70">{name}</span>
      ) : (
        <div className="h-full w-full bg-gray-900" />
      )}
      {isMuted && (
        <span className="pointer-events-none absolute inline-flex items-center gap-1 bottom-2 right-2 text-[length:var(--text-sm)] text-[var(--color-muted)]">
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
