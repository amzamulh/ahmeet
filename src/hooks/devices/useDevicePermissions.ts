import { useEffect, useState } from "react";

export const useDevicePermissions = () => {
  const [granted, setGranted] = useState(false);
  const [cameraMissing, setCameraMissing] = useState(false);
  const [micMissing, setMicMissing] = useState(false);

  const requestPermissions = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();

      const hasCamera = devices.some((d) => d.kind === "videoinput");
      const hasMic = devices.some((d) => d.kind === "audioinput");

      if (!hasCamera) {
        setCameraMissing(true);
      }

      if (!hasMic) {
        setMicMissing(true);
      }

      if (hasCamera || hasMic) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: hasMic,
          video: hasCamera,
        });

        stream.getTracks().forEach((t) => t.stop());
        setGranted(true);
      }
    } catch (error) {
      console.error("Permission error:", error);
      setGranted(false);
    }
  };

  return {
    granted,
    cameraMissing,
    micMissing,
    requestPermissions,
  };
};
