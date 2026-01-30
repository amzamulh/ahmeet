export interface VideoTitleProps {
  name: string;
  isMuted?: boolean;
  isCameraOff?: boolean;
}

export const VideoTitle = ({ name, isMuted, isCameraOff }: VideoTitleProps) => {
  return (
    <div className="relative flex aspect-video items-center justify-center rounded-md bg-black text-white">
      {isCameraOff ? (
        <span className="text-sm opacity-70">{name}</span>
      ) : (
        <div className="h-full w-full bg-gray-900" />
      )}
      {isMuted && (
        <span className="absolute bottom-2 right-2 text-xs">Muted</span>
      )}
    </div>
  );
};
