import { useState } from "react";

export const useSelectedDevices = () => {
  const [microphoneId, setMicrophone] = useState<string | null>(null);
  const [cameraId, setCamera] = useState<string | null>(null);
  const [speakerId, setSpeaker] = useState<string | null>(null);

  return {
    microphoneId,
    cameraId,
    speakerId,
    setMicrophone,
    setCamera,
    setSpeaker,
  };
};
