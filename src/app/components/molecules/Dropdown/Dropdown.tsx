"use client";

import React, { use, useEffect, useRef, useState } from "react";
import { Button } from "../../atoms/Button";
export type BtnVariant = "solid" | "outline" | "dashed";
export type dropDownPosition = "top" | "bottom" | "left" | "right";
export type Color =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "disabled";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

const dropdownPositionClasses: Record<dropDownPosition, string> = {
  top: "origin-bottom-right bottom-full mb-2",
  bottom: "origin-top-right top-full mt-2",
  left: "origin-top-right right-full mr-2",
  right: "origin-top-left left-full ml-2",
};

type TextSize = Exclude<Size, "full">;
export interface DropdownProps {
  label: string;
  variant?: BtnVariant;
  color?: Color;
  size?: TextSize;
  radius?: Size;
  position?: dropDownPosition;
  className?: string;
  children: React.ReactNode;
}

export const Dropdown = ({
  label = "Menu",
  variant,
  color,
  size,
  radius,
  position = "top",
  className = "",
  ...props
}: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [align, setAlign] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open || !childRef.current || !ref.current) return;

    const parentRect = ref.current.getBoundingClientRect();
    const { width } = childRef.current.getBoundingClientRect();

    const spaceRight = window.innerWidth - parentRect.right;

    if (spaceRight < width) {
      setAlign(true);
    } else {
      setAlign(false);
    }
  }, [open]);

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
          className={` absolute z-50 mt-2 w-48 ${align ? "right-0" : "left-0"} ${dropdownPositionClasses[position]} bg-[var(--color-bg)] rounded-md border border-[var(--color-border)] shadow-lg focus:outline-none ${className}`}
        >
          <div ref={childRef} className="py-2">
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
};
