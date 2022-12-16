import { OptionTypes } from "../Interfaces/Product";

export const BGtoColor = (color: string) => {
  switch (color) {
    case "bg-gray-900":
      return "Svart";
    case "bg-gray-100":
      return "Vit";
    case "bg-blue-500":
      return "Blå";
    case "bg-orange-500":
      return "Orange";
  }
};

export const TypeToText = (type: OptionTypes) => {
  switch (type) {
    case "Color":
      return "Färg";
    case "Extra":
      return "Tillägg";
    case "Size":
      return "Storlek";
  }
};
