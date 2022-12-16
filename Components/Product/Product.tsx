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
  /*const [product, setProduct] = useState<IProduct>({
    id: 0,
    information: `<p>Some things are simply better together. Cable Organiser is the perfectsolution for long, bulky cables. Cable Organiser brings your personalstyle together with the perfect gadget. The Cable Organiser is asimple, stylish and practical solution for keeping your cables inorder.</p><h5 className="my-2"><b>The cable is easily accessible and will not tangle.</b></h5><h5 className="my-2"><b>Key features:</b></h5><ul><li><b>-</b> Keeps your cables organised</li><li><b>-</b> Easy to find and out of the way</li><li><b>-</b> Stylish design that fits in with your style</li><li> <b>-</b> Made from durable PLA plastic</li></ul><h5 className="my-2"><b>How to use:</b></h5><p>Remove the lid to insert the cable and attach the lid again. Spin thetop halft and watch as the cable winds itself around the central core.To use the cable, simply pull both ends of the cable away from eachother.</p>`,
    name: "Cable Organiser",
    options: [
      {
        type: "Color",
        options: [
          {
            priceExtra: 0,
            text: "bg-gray-900",
          },
          {
            priceExtra: 0,
            text: "bg-gray-100",
          },
          {
            priceExtra: 0,
            text: "bg-blue-500",
          },
          {
            priceExtra: 0,
            text: "bg-orange-500",
          },
        ],
      },
      {
        type: "Size",
        options: [
          {
            priceExtra: 0,
            text: "5 cm",
          },
          {
            priceExtra: 0,
            text: "6 cm",
          },
          {
            priceExtra: 5,
            text: "7 cm",
          },
        ],
      },
      {
        type: "Extra",
        options: [
          {
            priceExtra: 0,
            text: "Nej",
          },
          {
            priceExtra: 0,
            text: "Handtag",
          },
          {
            priceExtra: 5,
            text: "Text",
            collectText: true,
          },
        ],
      },
    ],
    price: 50,
    thumbnail: "",
    images: [
      "https://media.printables.com/media/prints/51301/images/1119259_4572e173-f1fc-4112-ade0-3d586e7eebfd/thumbs/cover/1280x960/jpg/img_3246.webp",
      "https://media.printables.com/media/prints/51301/images/533204_e8cade42-7b9b-4329-86de-fc13d7392e83/thumbs/cover/1280x960/jpeg/cable-winder-2.webp",
      "https://media.printables.com/media/prints/51301/images/506495_c16fd002-c1d1-43a6-8686-38ce0f47b0a7/thumbs/cover/1280x960/jpg/4.webp",
    ],
    video: "https://www.youtube.com/embed/eaedq1Jl2fc",
  });*/
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
