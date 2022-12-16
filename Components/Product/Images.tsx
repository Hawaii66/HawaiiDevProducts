import React, { useContext, useState } from "react";
import { ProductContext } from "../../Contexts/Product";
import Card from "../Card";

function Images() {
  const images = useContext(ProductContext).product.images || [];
  const [startIndex, setStartIndex] = useState(0);

  const increment = () => {
    var index = startIndex;
    index += 1;
    index = index >= images.length ? 0 : index;
    setStartIndex(index);
  };

  const decrement = () => {
    var index = startIndex;
    index -= 1;
    index = index < 0 ? images.length - 1 : index;
    setStartIndex(index);
  };
  return (
    <Card>
      <div className="w-full relative flex flex-col items-center">
        <h1 className="p-5 text-5xl text-center text-orange-500 font-mono font-bold">
          Bilder
        </h1>
        <div className="relative w-5/6 h-3/5 aspect-[1/0.6] flex justify-center items-center">
          <div
            style={{
              backgroundImage: `url(${
                images[startIndex + 1 >= images.length ? 0 : startIndex + 1]
              })`,
            }}
            className="bg-center bg-cover rounded-3xl opacity-50 absolute w-3/5 h-full left-0 scale-75 -translate-x-1/4"
          />
          <div
            style={{
              backgroundImage: `url(${
                images[startIndex - 1 < 0 ? images.length - 1 : startIndex - 1]
              })`,
            }}
            className="bg-center bg-cover rounded-3xl opacity-50 absolute w-3/5 h-full right-0 scale-75 translate-x-1/4"
          />
          <div
            style={{
              backgroundImage: `url(${images[startIndex]})`,
            }}
            className="bg-center bg-cover rounded-3xl bg-no-repeat absolute w-3/5 h-full"
          />
        </div>
        <div className="flex w-4/5 flex-row justify-center items-center">
          <button
            onClick={increment}
            className="text-neutral-600 font-medium text-xl bg-slate-100 p-2 rounded-xl mt-2"
          >
            Förra
          </button>
          <h3 className="w-3/5 text-center">
            {images.length - startIndex} / {images.length}
          </h3>
          <button
            onClick={decrement}
            className="text-neutral-600 font-medium text-xl bg-slate-100 p-2 rounded-xl mt-2"
          >
            Nästa
          </button>
        </div>
      </div>
    </Card>
  );
}

export default Images;
