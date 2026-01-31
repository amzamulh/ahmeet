import { Button } from "@ah/app/components/atoms/Button";
import { Icon } from "@ah/app/components/atoms/Icon";

export interface MediaControlBarProps {
  muted?: boolean;
  cameraOff?: boolean;
  onMuteToggle?: () => void;
  onCameraToggle?: () => void;
  onScreenShare?: () => void;
  onLeave?: () => void;
}

export const MediaControlBar = ({
  muted,
  cameraOff,
  onMuteToggle,
  onCameraToggle,
  onScreenShare,
  onLeave,
}: MediaControlBarProps) => {
  return (
    <div className="flex items-center justify-center gap-4 border-t bg-[var(--color-bg-card)] p-3">
      <Button variant="outline" onClick={onMuteToggle}>
        <Icon name={muted ? "mic-off" : "mic"} />
      </Button>

      <Button variant="outline" onClick={onCameraToggle}>
        <Icon name={cameraOff ? "camera-off" : "camera"} />
      </Button>

      <Button variant="outline" onClick={onScreenShare}>
        <Icon name="screen-share" />
      </Button>

      <Button color="danger" onClick={onLeave}>
        Leave
      </Button>
    </div>
  );
};
