import Link from "next/link";
import React from "react";
import { IProduct } from "../Interfaces/Product";
import Button from "./Button";

export interface Props {
  product: IProduct;
}

function StoreFront({ product }: Props) {
  return (
    <section>
      <h1 className="text-center font-mono text-orange-500 text-3xl sm:text-5xl lg:text-7xl font-bold mt-10">
        {product.name}
      </h1>
      <h1 className="text-center font-mono text-green-600  sm:text-xl lg:text-3xl font-semibold m-5">
        Enkel och Snygg
      </h1>
      <div className="flex items-center flex-col lg:grid lg:grid-cols-2 w-3/5 m-auto gap-5">
        <img className="rounded-3xl shadow-2xl" src="../test.jpg" />
        <div className="flex flex-col">
          <h3 className="text-center font-sans text-black text-3xl font-semibold my-3">
            Information
          </h3>
          <div className="text-left font-sans text-black text-lg tracking-wide">
            Some things are simply better together. Cable Organiser is the
            perfect solution for long, bulky cables. Cable Organiser brings your
            personal style together with the perfect gadget. The Cable Organiser
            is a simple, stylish and practical solution for keeping your cables
            in order.
            <br />
            <br />
            <b>
              The cable is easily accessible and will not tangle.
              <br />
              <br />
              Key features:
            </b>
            <ul>
              <li>- Keeps your cables organised</li>
              <li>- Easy to find and out of the way </li>
              <li>- Stylish design that fits in with your style</li>
              <li> - Made from durable PLA plastic</li>
            </ul>
          </div>
          <div className="flex-grow mt-10 flex justify-center items-center">
            <Button link="/shop" text="Köp" />
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: "10rem" }} />
    </section>
  );
}

export default StoreFront;
