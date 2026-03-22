export type classValue = string | number | boolean | null | undefined;
export const clx = (...classes: classValue[]) => {
  return classes.filter(Boolean).join(" ");
};
