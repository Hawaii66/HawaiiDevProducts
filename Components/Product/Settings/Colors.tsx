import React from "react";
import { OptionValue } from "../../../Interfaces/Product";
import Radio from "../../Forms/Radio";
import { OptionSetting } from "./SettingWrapper";

function Colors({ options, selected, setSelected }: OptionSetting) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {[...options].map((i, index) => {
        return (
          <Radio
            key={index}
            onClick={() => setSelected(index)}
            selected={index === selected}
            color={i.text}
          />
        );
      })}
    </div>
  );
}

export default Colors;
