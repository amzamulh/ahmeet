import React from "react";
import { Icon } from "../../atoms/Icon";

export type AlertVariant =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "danger";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: AlertVariant;
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
}
const variantMap: Record<AlertVariant, string> = {
  default:
    "bg-[var(--color-bg-card)] text-[var(--color-text)] border-[var(--color-border)] [&>span]:text-[var(--color-primary)]",
  danger:
    "bg-[var(--color-danger)]/10 text-[var(--color-danger)] border-[var(--color-danger)]/20 [&>span]:text-[var(--color-danger)]",
  success:
    "bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/20 [&>span]:text-[var(--color-success)]",
  warning:
    "bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/20 [&>span]:text-[var(--color-warning)]",
  info: "bg-[var(--color-info)]/10 text-[var(--color-info)] border-[var(--color-info)]/20 [&>span]:text-[var(--color-info)]",
};

type IconName = "user" | "info" | "success" | "warning" | "error";
const iconNames: Record<AlertVariant, IconName> = {
  default: "user",
  success: "success",
  info: "info",
  warning: "warning",
  danger: "error",
};

export function Alert({
  title,
  variant = "default",
  className,
  children,
}: AlertProps) {
  return (
    <div
      role="alert"
      className={`flex gap-4 rounded-xl border p-4 shadow-sm backdrop-blur-sm transition-all duration-200 ${variantMap[variant]} ${className}`}
    >
      <Icon
        className="inline-block"
        name={iconNames[variant]}
        size="md"
        ariaLabel="User"
      ></Icon>
      <div className="flex flex-col gap-1">
        {title && (
          <h4 className="font-semibold leading-none tracking-tight text-[var(--color-heading)]">
            {title}
          </h4>
        )}
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          {children}
        </p>
      </div>
    </div>
  );
}
