export interface IProduct {
  id: number;
  name: string;
  price: number;
  information: string;
  video?: string;
  images?: string[];
  thumbnail: string;
  options: IOption[];
}

export const EmptyProduct: IProduct = {
  id: 0,
  information: "",
  name: "",
  options: [],
  price: 0,
  thumbnail: "",
  images: [],
  video: "",
};

export type OptionValue = {
  text: string;
  priceExtra: number;
  collectText?: boolean;
};

export type OptionTypes = "Color" | "Size" | "Extra";

export interface IOption {
  type: OptionTypes;
  options: OptionValue[];
}

export interface SelectedOption {
  option: IOption;
  index: number;
  extraText?: string;
}

export interface ProductSelections {
  id: number;
  options: SelectedOption[];
}
