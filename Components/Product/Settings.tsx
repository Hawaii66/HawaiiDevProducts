import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Contexts/Product";
import { SelectedOption } from "../../Interfaces/Product";
import Card from "../Card";
import Radio from "../Forms/Radio";
import SettingWrapper from "./Settings/SettingWrapper";

interface Props {
  selections: SelectedOption[];
  setSelections: (selections: SelectedOption[]) => void;
}

function Settings({ selections, setSelections }: Props) {
  const product = useContext(ProductContext).product;

  return (
    <Card>
      <div>
        <h1 className="p-5 text-5xl text-center text-orange-500 font-mono font-bold">
          {product.name}
        </h1>
        <img draggable={false} className="rounded-3xl" src="/test.jpg" />
      </div>
      <div className="flex-grow self-center xl:self-end xl:flex xl:flex-col grid grid-cols-1 lg:grid-cols-3">
        {product.options.map((option, index) => {
          return (
            <SettingWrapper
              key={index}
              option={option}
              selected={selections[index].index}
              setSelected={(i) => {
                const old = [...selections];
                old[index].index = i;
                setSelections(old);
              }}
              changeText={(text) => {
                if (option.type !== "Extra") return;

                const old = [...selections];
                old[index].extraText = text;
                setSelections(old);
              }}
              text={
                option.type === "Extra"
                  ? selections[index].extraText
                  : undefined
              }
            />
          );
        })}
      </div>
    </Card>
  );
}

export default Settings;
