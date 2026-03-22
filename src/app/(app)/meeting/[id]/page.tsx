"use client";
import { useDevicePermissions } from "@ah/hooks/devices/useDevicePermissions";
import { ChatPanel } from "@ah/organisms/chat/ChatPanel";
import { VideoGrid } from "@ah/organisms/confirence_room/VideoGrid";
import { MediaControlBar } from "@ah/organisms/controls/MediaControlBar";
import { Sidebar } from "@ah/organisms/layouts/Sidebar";
import { MeetingLayout } from "@ah/templates/MeetingLayout";
import { useEffect } from "react";

const MeetingPage = () => {
  const { requestPermissions, granted, micMissing, cameraMissing } =
    useDevicePermissions();
  if (granted) {
    console.log("Permissions granted, proceeding to meeting...", granted);
  }

  useEffect(() => {
    const handleNewMeeting = async () => {
      await requestPermissions();
    };
    handleNewMeeting();
  }, []);
  return (
    <MeetingLayout
      sidebar={
        <Sidebar isOpen={false}>
          <ChatPanel>chat panel</ChatPanel>
        </Sidebar>
      }
      controls={
        <MediaControlBar
          isGranted={granted}
          isMissingMic={micMissing}
          isMissingCamera={cameraMissing}
        />
      }
    >
      <VideoGrid>Grid</VideoGrid>
    </MeetingLayout>
  );
};
export default MeetingPage;
