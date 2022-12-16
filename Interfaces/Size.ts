export enum Size {
  "5 cm",
  "6 cm",
  "7 cm",
  "8 cm",
}

export const Sizes = [...(Object.values(Size) as string[])].splice(
  0,
  [...(Object.values(Size) as string[])].length / 2
);
