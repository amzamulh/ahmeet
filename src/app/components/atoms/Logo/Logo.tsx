"use client";
import Image from "next/image";
import React from "react";
import { Icon } from "../Icon";

type LogoSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type LogoVariant = "default" | "monochrome" | "scout";
type LogoLayout = "horizontal" | "vertical" | "icon-only";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: LogoSize;
  variant?: LogoVariant;
  layout?: LogoLayout;
  iconName?: "ah-log";
  showBadge?: boolean;
}

const iconSizes: Record<LogoSize, string> = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
  xxl: "h-16 w-16",
};

const textSizes: Record<LogoSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xxl: "text-xxl",
};

const gapSizes: Record<LogoSize, string> = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-2.5",
  lg: "gap-3",
  xl: "gap-3.5",
  xxl: "gap-4",
};

export const Logo = ({
  size = "md",
  variant = "default",
  layout = "horizontal",
  showBadge = false,
  iconName = "ah-log",
  src,
  alt = "",
  className = "",
  ...props
}: LogoProps) => {
  const isMonochrome = variant === "monochrome";
  const containerBase =
    layout === "vertical" ? "flex-col text-center" : "flex-row items-center";

  return (
    <div
      className={`inline-flex ${containerBase} ${gapSizes[size]} font-sans select-none ${className}`}
      {...props}
    >
      <div
        className={`relative ${iconSizes[size]} ${isMonochrome ? "text-[var(--color-text)]" : ""}`}
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
          <Icon name={iconName} />
        )}
      </div>

      {layout !== "icon-only" && (
        <div
          className={`flex flex-col ${layout === "vertical" ? "items-center" : "items-start"}`}
        >
          <div className="flex items-center gap-2">
            <h1
              className={`font-bold tracking-tight text-[var(--color-heading)] ${textSizes[size]}`}
            >
              Meet
              <span
                className={isMonochrome ? "" : "text-[var(--color-primary)]"}
              >
                AH
              </span>
            </h1>
            {showBadge && (
              <span className="rounded-full bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                Beta
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
