import React from "react";
import { NavLink } from "../../atoms/NavLink";
import { Icon, IconName } from "../../atoms/Icon";
import { useSidebar } from "@ah/hooks/ui/useSidebar";
import { Button } from "../../atoms/Button";

export interface NavItemProps {
  id: string;
  label: string;
  link?: string;
  iconName?: IconName;
  children?: NavItemProps[];
}

interface items {
  items: NavItemProps[];
  className?: string;
}

export const NavItem: React.FC<items> = ({
  items,
  className = "",
  ...props
}) => {
  const { openItems, toggleNavItem } = useSidebar();

  return (
    <>
      {items.map((item) => {
        const { id, label, link = "#", iconName, children } = item;
        const isOpen = openItems[id];
        const hasChildren = children?.length;
        return (
          <li
            key={id}
            className={`mb-1 border-b border-[var(--color-border)] ${className}`}
          >
            {hasChildren ? (
              <Button
                variant={"ghost"}
                color={"primary"}
                onClick={() => toggleNavItem(id)}
                className="w-full flex items-center !justify-between gap-2 !text-[var(--color-muted)] hover:!text-[var(--color-text)]"
              >
                <div className="flex items-center gap-2">
                  {iconName && <Icon name={iconName} />}
                  {label}
                </div>
                <Icon
                  name={"chevron-down"}
                  className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </Button>
            ) : (
              <NavLink
                href={link}
                variant={"ghost"}
                color="primary"
                {...props}
                className="flex items-center gap-2 !text-[var(--color-muted)] hover:!text-[var(--color-text)]"
              >
                {iconName && <Icon name={iconName} />}
                {label}
              </NavLink>
            )}

            {hasChildren && isOpen && (
              <ul
                className={`pl-4 border-l border-[var(--color-border)] transition-all overflow-hidden duration-300 ease-in-out`}
              >
                {children.map((child) => (
                  <NavItem
                    key={child.id}
                    items={[child]}
                    className={`${isOpen ? "pb-1 last:border-b-0" : ""}`}
                  />
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};
