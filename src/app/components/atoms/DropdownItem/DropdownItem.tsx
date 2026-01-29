export type BtnSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

type TextSize = Exclude<BtnSize, "full">;

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: TextSize;
  onClick?: () => void;
}

const textSizeClasses: Record<TextSize, string> = {
  xs: "text-[length:var(--text-xs)]",
  sm: "text-[length:var(--text-sm)]",
  md: "text-[length:var(--text-base)]",
  lg: "text-[length:var(--text-lg)]",
  xl: "text-[length:var(--text-xl)]",
  xxl: "text-[length:var(--text-xxl)]",
};

export function DropdownItem({
  children,
  size = "md",
  onClick,
}: DropdownItemProps) {
  return (
    <button
      role="menuitem"
      onClick={onClick}
      className={` flex w-full items-center px-4 py-2 text-[var(--color-muted)] cursor-pointer rounded-sm hover:text-gray-300 duration-300 hover:bg-[var(--color-primary)] focus:bg-[var(--color-primary)] focus:text-[var(--color-text)] focus:outline-none ${textSizeClasses[size]}`}
    >
      {children}
    </button>
  );
}
