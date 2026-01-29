import { Avatar } from "../../atoms/Avatar";
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export interface AvatarGroupProps {
  users: {
    id: string;
    name?: string;
    src?: string;
  }[];
  size?: AvatarSize;
  max?: number;
}
const sizeMap: Record<AvatarSize, string> = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
  xl: "h-14 w-14 text-xl",
  xxl: "h-16 w-16 text-xxl",
};

export const AvatarGroup = ({
  users,
  max = 5,
  size = "md",
}: AvatarGroupProps) => {
  const visible = users.slice(0, max);
  const extra = users.length - visible.length;

  return (
    <div className="flex -space-x-2">
      {visible.map((user) => (
        <Avatar key={user.id} src={user.src} name={user.name} size={size} />
      ))}

      {extra > 0 && (
        <div
          className={`flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] duration-200 justify-center rounded-full bg-[var(--color-bg-card)] shadow-sm font-medium text-[var(--color-muted)] ${sizeMap[size]}`}
        >
          +{extra}
        </div>
      )}
    </div>
  );
};
