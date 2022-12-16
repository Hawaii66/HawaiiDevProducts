import React from "react";
import { EmptyProduct, IProduct } from "../Interfaces/Product";

export interface IProductContext {
  product: IProduct;
}

export const ProductContext = React.createContext<IProductContext>({
  product: EmptyProduct,
});
