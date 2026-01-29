"use client";
import React from "react";
import { createPortal } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export function Modal({ open, onClose, title, footer, children }: ModalProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-modal flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div ref={modalRef} className="relative z-10 w-full max-w-md px-4">
        <Card>
          {title && (
            <CardHeader>
              <h3 className="text-md font-semibold">{title}</h3>
            </CardHeader>
          )}
          <CardBody>{children}</CardBody>
          {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
      </div>
    </div>,
    document.body
  );
}
