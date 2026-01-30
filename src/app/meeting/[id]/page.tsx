import { ChatPanel } from "@/app/components/organisms/chat/ChatPanel";
import { VideoGrid } from "@/app/components/organisms/confirence_room/VideoGrid";
import { MediaControlBar } from "@/app/components/organisms/controls/MediaControlBar";
import { Sidebar } from "@/app/components/organisms/layouts/Sidebar";
import { MeetingLayout } from "@/app/components/templates/MeetingLayout";

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
