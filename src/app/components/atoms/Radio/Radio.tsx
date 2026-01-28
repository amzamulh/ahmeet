import React from "react";

export type RadioSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

type TextSize = Exclude<RadioSize, "full">;
export type RadioState =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "disable";

export interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  size?: TextSize;
  state?: RadioState;
  label?: string;
  helperText?: string;
}

const sizeClasses: Record<TextSize, string> = {
  xs: "text-[length:var(--text-xs)]",
  sm: "text-[length:var(--text-sm)]",
  md: "text-[length:var(--text-base)]",
  lg: "text-[length:var(--text-lg)]",
  xl: "text-[length:var(--text-xl)]",
  xxl: "text-[length:var(--text-xxl)]",
};

const stateClasses: Record<RadioState, string> = {
  default:
    "border-[var(--color-border)] accent-[var(--color-primary)] bg-[var(--color-bg-input)] text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] hover:border-[var(--color-primary)]",
  success:
    "border-[var(--color-success)] accent-[var(--color-success)] bg-[var(--color-bg-input)] text-[var(--color-muted)] focus:border-[var(--color-success)] focus:ring-[var(--color-success)]",
  warning:
    "border-[var(--color-warning)] accent-[var(--color-warning)] bg-[var(--color-bg-input)] text-[var(--color-muted)] focus:border-[var(--color-warning)] focus:ring-[var(--color-warning)]",
  error:
    "border-[var(--color-danger)] accent-[var(--color-danger)] bg-[var(--color-bg-input)] text-[var(--color-muted)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]",
  disable:
    "border-[var(--color-disable)] accent-[var(--color-disable)] bg-[var(--color-bg-input)] text-gray-300 dark:text-gray-700 cursor-not-allowed",
};
const radioSizeClasses: Record<TextSize, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7",
  xxl: "h-8 w-8",
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio(
    {
      size = "md",
      state = "default",
      label,
      helperText,
      disabled,
      className = "",
      id,
      ...props
    },
    ref
  ) {
    const redioId = id || React.useId();

    return (
      <div className="flex w-full flex-col gap-1.5">
        <label
          htmlFor={redioId}
          className={` flex items-center gap-2 font-medium text-[var(--color-muted)] ${sizeClasses[size]} ${
            state === "disable"
              ? "text-[var(--color-disable)]"
              : "text-[var(--color-muted)]"
          } `}
        >
          <input
            ref={ref}
            id={redioId}
            type="radio"
            disabled={disabled || state === "disable"}
            data-size={size}
            data-state={state}
            className={` border transition focus:ring-1 focus:ring-offset-0 ${stateClasses[state]} ${sizeClasses[size]} ${radioSizeClasses[size]} ${className}`}
            {...props}
          />
          {label}
        </label>

        {helperText && (
          <p
            className={`text-[length:var(--text-sm)] ${state === "error" && "text-[var(--color-danger)]"} ${state === "success" && "text-[var(--color-success)]"} ${state === "warning" && "text-[var(--color-warning)]"} ${state === "default" && "text-[var(--color-muted)]"} `}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
