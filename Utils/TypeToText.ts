import { OptionTypes } from "../Interfaces/Product";

export const OptionTypeToTitle = (type: OptionTypes) => {
  switch (type) {
    case "Color":
      return "Färg";
    case "Extra":
      return "Tillägg";
    case "Size":
      return "Storlek";
  }
};
