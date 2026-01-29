import React from "react";
import { Icon } from "../../atoms/Icon";

export type ToastVariant =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "danger";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: ToastVariant;
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
}
const variantMap: Record<ToastVariant, string> = {
  default:
    "bg-[var(--color-bg-card)] border-[var(--color-border)]  text-[var(--color-text)] border-[var(--color-border)] [&>span]:text-[var(--color-primary)]",
  danger:
    "bg-[var(--color-danger)]/10 border-[var(--color-danger)] text-[var(--color-danger)] border-[var(--color-danger)]/20 [&>span]:text-[var(--color-danger)]",
  success:
    "bg-[var(--color-success)]/10 border-[var(--color-success)] text-[var(--color-success)] border-[var(--color-success)]/20 [&>span]:text-[var(--color-success)]",
  warning:
    "bg-[var(--color-warning)]/10 border-[var(--color-warning)] text-[var(--color-warning)] border-[var(--color-warning)]/20 [&>span]:text-[var(--color-warning)]",
  info: "bg-[var(--color-info)]/10 border-[var(--color-info)] text-[var(--color-info)] border-[var(--color-info)]/20 [&>span]:text-[var(--color-info)]",
};

type IconName = "user" | "info" | "success" | "warning" | "error";
const iconNames: Record<ToastVariant, IconName> = {
  default: "user",
  success: "success",
  info: "info",
  warning: "warning",
  danger: "error",
};

export function Toast({
  title,
  variant = "default",
  className,
  children,
}: ToastProps) {
  return (
    <div
      role="alert"
      className={`relative flex gap-4 rounded-xl border p-4 shadow-md hover:shadow-lg backdrop-blur-sm transition-all duration-200 ${variantMap[variant]} ${className}`}
    >
      <Icon
        className="absolute right-2 top-2 cursor-pointer p-1 hover:scale-125 duration-100 !text-[var(--color-muted)]"
        name="close"
        ariaLabel="Close"
        size="sm"
      />
      <Icon
        className="inline-block"
        name={iconNames[variant]}
        size="md"
        ariaLabel="User"
      />
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
