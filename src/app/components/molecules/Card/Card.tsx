import React from "react";

export type BtnSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

type TextSize = Exclude<BtnSize, "full">;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: TextSize;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TextSize;
}
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TextSize;
}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TextSize;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { size = "md", className = "", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={`w-full h-auto flex flex-col bg-[var(--color-bg-card)] text-[var(--color-muted)] border border-[var(--color-border)] shadow-md hover:border-[var(--color-primary)] duration-300 ${className} `}
      {...props}
    >
      {props.children}
    </div>
  );
});

export const CardHeader = ({
  size = "md",
  className = "",
  ...props
}: CardHeaderProps) => {
  return (
    <div
      className={`flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2 text-[var(--color-text-muted)]`}
      {...props}
    >
      {props.children}
    </div>
  );
};
export const CardBody = ({
  size = "md",
  className,
  ...props
}: CardBodyProps) => {
  return (
    <div
      className={`px-4 py-2 text-[var(--color-text-muted)] ${className}`}
      {...props}
    >
      {props.children}
    </div>
  );
};

export const CardFooter = ({
  size = "md",
  className,
  ...props
}: CardFooterProps) => {
  return (
    <div
      className={`flex items-center gap-2 justify-end border-t border-[var(--color-border)] px-4 py-2 text-[var(--color-text-muted)]`}
      {...props}
    >
      {props.children}
    </div>
  );
};
