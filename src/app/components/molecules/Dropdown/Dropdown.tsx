"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../atoms/Button";
export type BtnVariant = "solid" | "outline" | "dashed";
export type Color =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "disabled";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";
type ListItems = {
  label: string;
};

type TextSize = Exclude<Size, "full">;
export interface DropdownProps {
  label: string;
  variant?: BtnVariant;
  color?: Color;
  size?: TextSize;
  radius?: Size;
  items: ListItems[];
  className?: string;
  children: React.ReactNode;
}

export const Dropdown = ({
  label = "Menu",
  variant,
  color,
  size,
  items,
  radius,
  className = "",
  ...props
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-center">
      <Button
        {...props}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        variant={variant}
        color={color}
        size={size}
        radius={radius}
      >
        {label}
      </Button>

      {open && (
        <div
          role="menu"
          className={` absolute right-0 z-50 mt-2 w-48  origin-top-right bg-[var(--color-bg)] rounded-md border border-[var(--color-border)] shadow-lg focus:outline-none ${className}`}
        >
          <div className="py-2">{props.children}</div>
        </div>
      )}
    </div>
  );
};
