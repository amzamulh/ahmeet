import { Button } from "@ah/app/components/atoms/Button";
import { DropdownItem } from "@ah/app/components/atoms/DropdownItem";
import { Icon } from "@ah/app/components/atoms/Icon";
import { Select } from "@ah/app/components/atoms/Select";
import { Dropdown } from "@ah/app/components/molecules/Dropdown";
import { useMediaDevices } from "@ah/hooks/devices/useMediaDevices";
import { useSelectedDevices } from "@ah/hooks/devices/useSelectedDevices";

export interface MediaControlBarProps {
  isGranted: boolean;
  isMissingMic?: boolean;
  isMissingCamera?: boolean;
}

export const MediaControlBar = ({
  isGranted = false,
  isMissingMic = false,
  isMissingCamera = false,
}: MediaControlBarProps) => {
  const { microphones, defaultMic, cameras, defaultCamera } =
    useMediaDevices(isGranted);
  const { microphoneId, setMicrophone, cameraId, setCamera } =
    useSelectedDevices();
  const allMic = microphones.map((m) => ({ label: m.label, value: m.id }));
  const allCamera = cameras.map((c) => ({ label: c.label, value: c.id }));
  console.log(microphones);
  return (
    <div className="flex items-center justify-center gap-4 border-t bg-[var(--color-bg-card)] p-3">
      <Select
        options={allMic}
        value={microphoneId ?? defaultMic?.id ?? ""}
        onChange={(e) => setMicrophone(e.target.value)}
        disabled={!isGranted || isMissingMic}
      ></Select>

      <Select
        options={allCamera}
        value={cameraId ?? defaultCamera?.id ?? ""}
        onChange={(e) => setCamera(e.target.value)}
        disabled={!isGranted || isMissingCamera}
      ></Select>
      <Dropdown label="More">
        <DropdownItem>one</DropdownItem>
      </Dropdown>
    </div>
  );
};
