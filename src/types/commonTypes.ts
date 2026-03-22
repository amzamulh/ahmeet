export type variantType = "solid" | "outline" | "dashed" | "ghost";
export type colorType =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "disabled";
export type sizeType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";
export type textType = Exclude<sizeType, "full">;
export type positionType = "top" | "bottom" | "left" | "right";
