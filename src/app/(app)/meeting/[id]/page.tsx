import { ChatPanel } from "@ah/organisms/chat/ChatPanel";
import { VideoGrid } from "@ah/organisms/confirence_room/VideoGrid";
import { MediaControlBar } from "@ah/organisms/controls/MediaControlBar";
import { Sidebar } from "@ah/organisms/layouts/Sidebar";
import { MeetingLayout } from "@ah/templates/MeetingLayout";

interface MeetingPageProps {
  params: { id: string };
}

const MeetingPage = ({ params }: MeetingPageProps) => {
  return (
    <MeetingLayout
      sidebar={
        <Sidebar isOpen>
          <ChatPanel>chat panel</ChatPanel>
        </Sidebar>
      }
      controls={<MediaControlBar />}
    >
      <VideoGrid>Grid</VideoGrid>
    </MeetingLayout>
  );
};
export default MeetingPage;
