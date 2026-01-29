export type BtnSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

type TextSize = Exclude<BtnSize, "full">;

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
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
  label,
  size = "md",
  onClick,
}: DropdownItemProps) {
  return (
    <button
      role="menuitem"
      onClick={onClick}
      className={` flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${textSizeClasses[size]}`}
    >
      {label}
    </button>
  );
}
