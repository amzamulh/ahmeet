import Image from "next/image";
import React from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
}

const sizeMap: Record<AvatarSize, string> = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
  xl: "h-14 w-14 text-xl",
  xxl: "h-16 w-16 text-xxl",
};

export function Avatar({ src, alt = "", name, size = "md" }: AvatarProps) {
  const initials =
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ?? "?";

  return (
    <div
      className={`
        relative inline-flex shrink-0 items-center border border-[var(--color-border)] hover:border-[var(--color-primary)] duration-200 justify-center
        rounded-full bg-[var(--color-bg-card)] shadow-sm
        ${sizeMap[size]}
      `}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized={true}
          className="rounded-full object-cover"
        />
      ) : (
        <span className="font-medium">{initials}</span>
      )}
    </div>
  );
}
