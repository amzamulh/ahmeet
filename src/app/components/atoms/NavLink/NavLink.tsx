import React from "react";

export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  size?: Size;
  href: string;
}

const textSizes: Record<Size, string> = {
  xs: "text-[length:var(--text-xs)]",
  sm: "text-[length:var(--text-sm)]",
  md: "text-[length:var(--text-base)]",
  lg: "text-[length:var(--text-lg)]",
  xl: "text-[length:var(--text-xl)]",
  xxl: "text-[length:var(--text-xxl)]",
};

export const NavLink = ({
  children,
  href = "#",
  size = "md",
  className = "",
  ...props
}: NavLinkProps) => {
  return (
    <li>
      <a
        href={href}
        {...props}
        className={`block px-4 py-3 ${textSizes[size]} font-medium text-[var(--color-heading)] hover:bg-[var(--color-hover)] rounded-md transition-all ${className}`}
      >
        {children}
      </a>
    </li>
  );
};
