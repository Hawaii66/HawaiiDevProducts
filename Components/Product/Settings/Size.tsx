import React from "react";
import Radio from "../../Forms/Radio";
import { OptionSetting } from "./SettingWrapper";

function Size({ options, selected, setSelected }: OptionSetting) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {options.map((i, index) => {
        return (
          <Radio
            key={index}
            onClick={() => setSelected(index)}
            selected={index === selected}
            text={`${i.text} ${i.priceExtra !== 0 ? `+${i.priceExtra}kr` : ""}`}
          />
        );
      })}
    </div>
  );
}

export default Size;
