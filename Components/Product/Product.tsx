import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { ProductContext } from "../../Contexts/Product";
import {
  EmptyProduct,
  IProduct,
  SelectedOption,
} from "../../Interfaces/Product";
import Button from "../Button";
import Images from "./Images";
import Information from "./Information";
import Settings from "./Settings";
import Video from "./Video";

interface Props {
  product: IProduct;
}

function Product({ product }: Props) {
  const [selections, setSelections] = useState<SelectedOption[]>(
    product.options.map((item) => {
      return {
        index: 0,
        option: item,
      };
    })
  );

  const getPrice = () => {
    var price = product.price;

    selections.map((selection) => {
      price += selection.option.options[selection.index].priceExtra;
    });

    return price;
  };

  const getLink = () => {
    var selectedIndexes = selections.map((selection) => {
      if (selection.option.options[selection.index].collectText) {
        return {
          index: selection.index,
          text: selection.extraText,
        };
      }
      return {
        index: selection.index,
      };
    });
    const json = JSON.stringify(selectedIndexes);
    var link = `/confirm?id=${product.id}&options=${json}`;
    return link;
  };

  const verifyClick = () => {
    var hasError = false;
    selections.map((selection) => {
      const text = selection.extraText || "";
      if (selection.option.options[selection.index].collectText) {
        if (text.length <= 0) {
          hasError = true;
        }
      }
    });
    return !hasError;
  };

  return (
    <ProductContext.Provider
      value={{
        product: product,
      }}
    >
      <div className="pt-12 w-full flex justify-center items-center">
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 2xl:w-2/4  flex justify-center flex-col items-center">
          <Settings
            selections={selections}
            setSelections={(e) => setSelections(e)}
          />
          <Button
            verifyClick={verifyClick}
            text={`Köp ${getPrice()}kr`}
            link={getLink()}
          />
          <Information />
          <Video />
          <Images />
          <Button
            verifyClick={verifyClick}
            text={`Köp ${getPrice()}kr`}
            link={getLink()}
          />
          <div className="mb-10" />
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default Product;
