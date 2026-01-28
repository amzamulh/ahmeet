import React from "react";

export type SwitchSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type SwitchState =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "disable";

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  size?: SwitchSize;
  state?: SwitchState;
  label?: string;
  helperText?: string;
  labelPosition?: "left" | "right";
}

const trackSizeClasses: Record<SwitchSize, string> = {
  xs: "h-4 w-8",
  sm: "h-6 w-12",
  md: "h-8 w-16",
  lg: "h-10 w-20",
  xl: "h-12 w-24",
  xxl: "h-14 w-28",
};

const thumbSizeStyles = {
  xs: `after:h-2.25 after:w-2.25 after:left-0.5 peer-checked:after:content-['']  peer-checked:after:left-[calc(100%-0.75rem)]`,
  sm: `after:h-4 after:w-4 after:left-0.75  peer-checked:after:content-[''] peer-checked:after:left-[calc(100%-1.2rem)] `,
  md: `after:h-5.5 after:w-5.5 after:left-1 peer-checked:after:content-['']  peer-checked:after:left-[calc(100%-1.65rem)]`,
  lg: `after:h-7 after:w-7 after:left-1.5 peer-checked:after:content-[''] peer-checked:after:left-[calc(100%-2.125rem)]`,
  xl: `after:h-8 after:w-8 after:left-1.75 peer-checked:after:content-[''] peer-checked:after:left-[calc(100%-2.5rem)]`,
  xxl: `after:h-10 after:w-10 after:left-2 peer-checked:after:content-[''] peer-checked:after:left-[calc(100%-3rem)]`,
};

const stateClasses: Record<SwitchState, string> = {
  default:
    "peer-checked:bg-[var(--color-primary)] bg-[var(--color-border)] after:bg-white hover:peer-checked:brightness-110 hover:border-[var(--color-border-hover)]",
  success:
    "peer-checked:bg-[var(--color-success)] bg-[var(--color-border)] after:bg-white hover:peer-checked:brightness-110",
  warning:
    "peer-checked:bg-[var(--color-warning)] bg-[var(--color-border)] after:bg-white hover:peer-checked:brightness-110",
  error:
    "peer-checked:bg-[var(--color-danger)] bg-[var(--color-border)] after:bg-white hover:peer-checked:brightness-110",
  disable:
    "peer-checked:bg-[var(--color-disabled)] bg-[var(--color-border-disabled)] after:bg-gray-200 cursor-not-allowed opacity-60",
} as const;

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(
    {
      label,
      helperText,
      size = "md",
      state = "default",
      disabled,
      id,
      className = "",
      ...props
    },
    ref
  ) {
    const switchId = id || React.useId();

    return (
      <div className="inline-flex flex-col gap-1.5">
        <label
          htmlFor={switchId}
          className="flex items-center gap-3 text-sm font-medium text-heading-dark dark:text-heading-light"
        >
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            disabled={disabled || state === "disable"}
            data-size={size}
            data-state={state}
            className={`peer sr-only ${className}`}
            {...props}
          />
          <span
            className={`relative border inline-flex shrink-0 cursor-pointer rounded-full transition-colors
              ${trackSizeClasses[size]} ${stateClasses[state]} peer-focus:outline-none after:absolute after:top-1/2 after:-translate-y-1/2 after:rounded-full duration-300 after:duration-300 after:bg-white after:shadow transition-transform 
              ${thumbSizeStyles[size]}`}
          ></span>
          {label}
        </label>

        {helperText && (
          <p
            className={`text-xs ${
              state === "error"
                ? "text-danger"
                : "text-muted-light dark:text-muted-dark"
            }`}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
