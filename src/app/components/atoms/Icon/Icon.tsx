import type { IconType } from "react-icons";
import { iconMap, IconName } from "./Icons";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  ariaLabel?: string;
}

const sizeMap: Record<IconSize, string> = {
  xs: "text-[length:var(--icon-xs)]",
  sm: "text-[length:var(--icon-sm)]",
  md: "text-[length:var(--icon-base)]",
  lg: "text-[length:var(--icon-lg)]",
  xl: "text-[length:var(--icon-xl)]",
  xxl: "text-[length:var(--icon-xxl)]",
};

export function Icon({
  name,
  size = "md",
  className = "",
  ariaLabel,
}: IconProps) {
  const IconComponent: IconType = iconMap[name];

  return (
    <span
      role={ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={`inline-flex leading-none ${sizeMap[size]} ${className}`}
    >
      <IconComponent />
    </span>
  );
}
