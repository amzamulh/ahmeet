import React from "react";

export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

type TextSize = Exclude<Size, "full">;
export type State = "default" | "success" | "warning" | "error" | "disable";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  size?: TextSize;
  state?: State;
  radius?: Size;
  label?: string;
  helperText?: string;
  options: SelectOption[];
}

const sizeClasses: Record<TextSize, string> = {
  xs: "text-[length:var(--text-xs)]",
  sm: "text-[length:var(--text-sm)]",
  md: "text-[length:var(--text-base)]",
  lg: "text-[length:var(--text-lg)]",
  xl: "text-[length:var(--text-xl)]",
  xxl: "text-[length:var(--text-xxl)]",
};

const borderRadius: Record<Size, string> = {
  xs: "rounded-[var(--redius-xs)]",
  sm: "rounded-[var(--redius-sm)]",
  md: "rounded-[var(--redius-base)]",
  lg: "rounded-[var(--redius-lg)]",
  xl: "rounded-[var(--redius-xl)]",
  xxl: "rounded-[var(--redius-xxl)]",
  full: "rounded-[var(--redius-xxl)]",
};
const stateClasses: Record<State, string> = {
  default:
    "border-[var(--color-border)] bg-[var(--color-bg-input)] text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] hover:border-[var(--color-primary)]",
  success:
    "border-[var(--color-success)] bg-[var(--color-bg-input)] text-[var(--color-muted)] focus:border-[var(--color-success)] focus:ring-[var(--color-success)]",
  warning:
    "border-[var(--color-warning)] bg-[var(--color-bg-input)] text-[var(--color-muted)] focus:border-[var(--color-warning)] focus:ring-[var(--color-warning)]",
  error:
    "border-[var(--color-danger)] bg-[var(--color-bg-input)] text-[var(--color-muted)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]",
  disable:
    "border-[var(--color-disable)] bg-[var(--color-bg-input)] text-gray-300 dark:text-gray-700 cursor-not-allowed",
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      size = "md",
      state = "default",
      label,
      helperText,
      options,
      disabled,
      className = "",
      radius = "sm",
      id,
      ...props
    },
    ref
  ) {
    const getId = id || React.useId();

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            htmlFor={getId}
            className={`${sizeClasses[size]} font-medium text-[var(--color-muted)]`}
          >
            {label}
          </label>
        )}

        <select
          ref={ref}
          id={getId}
          disabled={disabled || state === "disable"}
          data-size={size}
          data-state={state}
          className={`w-full py-2 px-3 border outline-none transition focus:ring-1 focus:ring-offset-0 ${stateClasses[state]} ${sizeClasses[size]} ${borderRadius[radius]}  ${className}`}
          {...props}
        >
          {options.map((opt: any) => (
            <option
              className="bg-[var(--color-bg)]"
              key={opt.value}
              value={opt.value}
            >
              {opt.label}
            </option>
          ))}
        </select>
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
