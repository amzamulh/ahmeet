export type BtnVariant = "solid" | "outline" | "dashed";
export type BtnColor =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "disabled";
export type BtnSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

type TextSize = Exclude<BtnSize, "full">;

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
  color?: BtnColor;
  size?: TextSize;
  radius?: BtnSize;
  children: React.ReactNode;
}

const textSizes: Record<TextSize, string> = {
  xs: "text-[length:var(--text-xs)]",
  sm: "text-[length:var(--text-sm)]",
  md: "text-[length:var(--text-base)]",
  lg: "text-[length:var(--text-lg)]",
  xl: "text-[length:var(--text-xl)]",
  xxl: "text-[length:var(--text-xxl)]",
};

const borderRadius: Record<BtnSize, string> = {
  xs: "rounded-[var(--redius-xs)]",
  sm: "rounded-[var(--redius-sm)]",
  md: "rounded-[var(--redius-base)]",
  lg: "rounded-[var(--redius-lg)]",
  xl: "rounded-[var(--redius-xl)]",
  xxl: "rounded-[var(--redius-xxl)]",
  full: "rounded-[var(--redius-xxl)]",
};

const variantColorClasses: Record<BtnVariant, Record<BtnColor, string>> = {
  solid: {
    primary: "bg-[var(--color-primary)] text-gray-300 hover:brightness-110",
    secondary: "bg-[var(--color-secondary)] text-gray-300 hover:brightness-110",
    success: "bg-[var(--color-success)] text-gray-300 hover:brightness-110",
    warning: "bg-[var(--color-warning)] text-gray-300 hover:brightness-110",
    info: "bg-[var(--color-info)] text-gray-300 hover:brightness-110",
    danger: "bg-[var(--color-danger)] text-gray-300 hover:brightness-110",
    disabled: "bg-[var(--color-disable)] text-gray-300 cursor-not-allowed",
  },
  outline: {
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
      className={`inline-flex py-1.5 px-3 items-center justify-center  transition-colors focus:outline-none cursor-pointer disabled:cursor-not-allowed"; ${textSizes[size]} ${disabled ? variantColorClasses[variant]["disabled"] : variantColorClasses[variant][color]} ${borderRadius[radius]}  ${className}`}
    >
      {props.children}
    </button>
  );
};
