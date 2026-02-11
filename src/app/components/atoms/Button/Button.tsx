export type BtnVariant = "solid" | "outline" | "dashed" | "ghost";
export type BtnColor =
  | "base"
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "disabled";
export type BtnSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

type TextSize = Exclude<BtnSize, "full">;

export interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
  color?: BtnColor;
  size?: TextSize;
  radius?: BtnSize;
  children: React.ReactNode;
}

const textSizes: Record<TextSize, string> = {
  xs: "h-7 px-2 text-[length:var(--text-xs)] gap-1.5",
  sm: "h-8 px-3 text-[length:var(--text-sm)] gap-2",
  md: "h-10 px-4 text-[length:var(--text-base)] gap-2",
  lg: "h-12 px-5 text-[length:var(--text-lg)] gap-2.5",
  xl: "h-14 px-5.5 text-[length:var(--text-xl)] gap-3",
  xxl: "h-16 px-6 text-[length:var(--text-xxl)] gap-3.5",
};

const borderRadius: Record<BtnSize, string> = {
  xs: "rounded-[var(--radius-xs)]",
  sm: "rounded-[var(--radius-sm)]",
  md: "rounded-[var(--radius-md)]",
  lg: "rounded-[var(--radius-lg)]",
  xl: "rounded-[var(--radius-xl)]",
  xxl: "rounded-[var(--radius-xxl)]",
  full: "rounded-[var(--radius-full)]",
};

const variantColorClasses: Record<BtnVariant, Record<BtnColor, string>> = {
  solid: {
    base: "bg-[var(--color-border)] text-[var(--color-muted)] backdrop-blur-sm hover:text-[var(--color-text)] hover:bg-[var(--color-hover)] ",
    primary: "bg-[var(--color-primary)] text-gray-300 hover:brightness-110",
    secondary: "bg-[var(--color-secondary)] text-gray-300 hover:brightness-110",
    success: "bg-[var(--color-success)] text-gray-300 hover:brightness-110",
    warning: "bg-[var(--color-warning)] text-gray-300 hover:brightness-110",
    info: "bg-[var(--color-info)] text-gray-300 hover:brightness-110",
    danger: "bg-[var(--color-danger)] text-gray-300 hover:brightness-110",
    disabled: "bg-[var(--color-disable)] text-gray-300 cursor-not-allowed",
  },
  outline: {
    base: "bg-transparent border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-hover)] ",
    primary:
      "bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-gray-300",
    secondary:
      "bg-transparent text-[var(--color-secondary)] border border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-gray-300",
    success:
      "bg-transparent text-[var(--color-success)] border border-[var(--color-success)] hover:bg-[var(--color-success)] hover:text-gray-300",
    warning:
      "bg-transparent text-[var(--color-warning)] border border-[var(--color-warning)] hover:bg-[var(--color-warning)] hover:text-gray-300",
    info: "bg-transparent text-[var(--color-info)] border border-[var(--color-info)] hover:bg-[var(--color-info)] hover:text-gray-300",
    danger:
      "bg-transparent text-[var(--color-danger)] border border-[var(--color-danger)] hover:bg-[var(--color-danger)] hover:text-gray-300",
    disabled:
      "bg-transparent text-[var(--color-disable)] border border-[var(--color-disable)] cursor-not-allowed opacity-50",
  },
  dashed: {
    base: "bg-transparent border border-dashed border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-hover)] ",

    primary:
      "bg-transparent text-[var(--color-primary)] border border-dashed border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-gray-300",
    secondary:
      "bg-transparent text-[var(--color-secondary)] border border-dashed border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-gray-300",
    success:
      "bg-transparent text-[var(--color-success)] border border-dashed border-[var(--color-success)] hover:bg-[var(--color-success)] hover:text-gray-300",
    warning:
      "bg-transparent text-[var(--color-warning)] border border-dashed border-[var(--color-warning)] hover:bg-[var(--color-warning)] hover:text-gray-300",
    info: "bg-transparent text-[var(--color-info)] border border-dashed border-[var(--color-info)] hover:bg-[var(--color-info)] hover:text-gray-300",
    danger:
      "bg-transparent text-[var(--color-danger)] border border-dashed border-[var(--color-danger)] hover:bg-[var(--color-danger)] hover:text-gray-300",
    disabled:
      "bg-transparent text-disable border border-dashed border-disable cursor-not-allowed opacity-50",
  },
  ghost: {
    base: "bg-transparent  text-[var(--color-muted)] hover:text-[var(--color-text)] ",
    primary:
      "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-gray-300",
    secondary:
      "bg-transparent text-[var(--color-secondary)]  hover:bg-[var(--color-secondary)] hover:text-gray-300",
    success:
      "bg-transparent text-[var(--color-success)] hover:bg-[var(--color-success)] hover:text-gray-300",
    warning:
      "bg-transparent text-[var(--color-warning)] hover:bg-[var(--color-warning)] hover:text-gray-300",
    info: "bg-transparent text-[var(--color-info)] hover:bg-[var(--color-info)] hover:text-gray-300",
    danger:
      "bg-transparent text-[var(--color-danger)] hover:bg-[var(--color-danger)] hover:text-gray-300",
    disabled: "bg-transparent text-disable cursor-not-allowed opacity-50",
  },
};
export const Button: React.FC<BtnProps> = ({
  variant = "solid",
  color = "primary",
  size = "md",
  radius = "sm",
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      data-variant={variant}
      data-color={color}
      data-size={size}
      data-radius={radius}
      className={`inline-flex items-center justify-center duration-300 transition-colors focus:outline-none cursor-pointer disabled:cursor-not-allowed"; ${textSizes[size]} ${disabled ? variantColorClasses[variant]["disabled"] : variantColorClasses[variant][color]} ${borderRadius[radius]}  ${className}`}
    >
      {props.children}
    </button>
  );
};
