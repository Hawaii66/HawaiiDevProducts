import React, { useContext } from "react";
import { ProductContext } from "../../Contexts/Product";
import Card from "../Card";

function Information() {
  const information = useContext(ProductContext).product.information;

  return (
    <Card>
      <div className="flex-grow text-neutral-600 font-medium">
        <h1 className="p-5 text-5xl text-center text-orange-500 font-mono font-bold">
          Information
        </h1>
        <div dangerouslySetInnerHTML={{ __html: information }}></div>
      </div>
    </Card>
  );
}

export default Information;
