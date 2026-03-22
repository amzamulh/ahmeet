import { useEffect, useState } from "react";

export interface MediaDevice {
  id: string;
  label: string;
  kind: "audioinput" | "audiooutput" | "videoinput";
}

export const useMediaDevices = (enabled: boolean) => {
  const [devices, setDevices] = useState<MediaDevice[]>([]);

  useEffect(() => {
    if (!enabled) return;

    const load = async () => {
      const all = await navigator.mediaDevices.enumerateDevices();

      const filtered = all
        .filter(
          (d) =>
            d.kind === "audioinput" ||
            d.kind === "audiooutput" ||
            d.kind === "videoinput",
        )
        .map((d) => ({
          id: d.deviceId,
          label: d.label || "Unknown device",
          kind: d.kind as "audioinput" | "audiooutput" | "videoinput",
        }));

      setDevices(filtered);
    };

    load();

    navigator.mediaDevices.addEventListener("devicechange", load);

    return () =>
      navigator.mediaDevices.removeEventListener("devicechange", load);
  }, [enabled]);

  const microphones = devices.filter((d) => d.kind === "audioinput");
  const speakers = devices.filter((d) => d.kind === "audiooutput");
  const cameras = devices.filter((d) => d.kind === "videoinput");

  const defaultMic =
    microphones.filter((m) => m.id === "default")[0] || microphones[0];
  const defaultCamera =
    cameras.filter((c) => c.id === "default")[0] || cameras[0];
  const defaultSpeaker =
    speakers.filter((s) => s.id === "default")[0] || speakers[0];

  return {
    devices,
    microphones,
    speakers,
    cameras,
    defaultMic,
    defaultCamera,
    defaultSpeaker,
  };
};
