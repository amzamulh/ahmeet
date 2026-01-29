"use client";

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <div className="relative inline-flex group">
      {children}
      <span
        role="tooltip"
        className="
          pointer-events-none
          absolute bottom-full left-1/2 z-50
          mb-2 w-max max-w-xs
          -translate-x-1/2
          rounded-md
          bg-gray-900 px-2 py-1
          text-xs text-white
          opacity-0
          transition-opacity
          group-hover:opacity-100
          group-focus-within:opacity-100
        "
      >
        {content}
      </span>
    </div>
  );
};
