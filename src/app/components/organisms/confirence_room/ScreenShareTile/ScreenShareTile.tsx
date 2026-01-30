export interface ScreenShareTileProps {
  presenter: string;
}

export const ScreenShareTile = ({ presenter }: ScreenShareTileProps) => {
  return (
    <div className="relative aspect-video rounded-md bg-gray-800 text-[var(--color-muted)]">
      <span className="absolute bottom-2 right-2 text-xs">
        {presenter} is sharing
      </span>
    </div>
  );
};
