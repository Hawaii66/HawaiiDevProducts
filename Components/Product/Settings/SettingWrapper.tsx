import React from "react";
import { IOption, OptionValue } from "../../../Interfaces/Product";
import { OptionTypeToTitle } from "../../../Utils/TypeToText";
import Colors from "./Colors";
import Extra from "./Extra";
import Size from "./Size";

interface Props {
  option: IOption;
  selected: number;
  setSelected: (index: number) => void;
  changeText?: (text: string) => void;
  text?: string;
}

export interface OptionSetting {
  options: OptionValue[];
  selected: number;
  setSelected: (index: number) => void;
}

function SettingWrapper({
  option,
  selected,
  setSelected,
  changeText,
  text,
}: Props) {
  return (
    <div className="ml-5 p-2">
      <h3 className="text-2xl text-left text-gray-700 font-mono font-semibold">
        {OptionTypeToTitle(option.type)}
      </h3>
      {option.type === "Color" && (
        <Colors
          options={option.options}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      {option.type === "Size" && (
        <Size
          options={option.options}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      {option.type === "Extra" && (
        <Extra
          options={option.options}
          selected={selected}
          setSelected={setSelected}
          setText={
            changeText === undefined
              ? () => alert("Something went wrong rendering a option")
              : changeText
          }
          text={text || ""}
        />
      )}
    </div>
  );
}

export default SettingWrapper;
