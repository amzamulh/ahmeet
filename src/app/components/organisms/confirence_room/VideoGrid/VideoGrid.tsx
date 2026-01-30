import React from "react";

export interface VideoGridProps {
  children: React.ReactNode;
}

export const VideoGrid = ({ children }: VideoGridProps) => {
  return (
    <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
