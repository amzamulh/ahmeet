import React from "react";
import { NavItem, NavItemProps } from "../../molecules/NavItem";

export interface NavbarProps {
  items: Array<NavItemProps>;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ items, className = "" }) => {
  return (
    <nav className="w-64">
      <ul className={`pt-2 ${className}`}>
        <NavItem items={items} />
      </ul>
    </nav>
  );
};
