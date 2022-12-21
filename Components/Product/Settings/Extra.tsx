import React from "react";
import Radio from "../../Forms/Radio";
import { OptionSetting } from "./SettingWrapper";

interface Props extends OptionSetting {
  text: string;
  setText: (text: string) => void;
}

function Extra({ options, selected, setSelected, setText, text }: Props) {
  const verifyText = (text: string) => {
    if (text === "") {
      return true;
    }

    const regex = /\w+/g;
    const result = text.replaceAll(regex, "");
    if (result !== "") {
      alert("Bara bokstäver och siffror");
      return false;
    }

    return true;
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {options.map((i, index) => {
        return (
          <Radio
            key={index}
            onClick={() => {
              setSelected(index);
              setText("");
            }}
            selected={index === selected}
            text={`${i.text} ${i.priceExtra !== 0 ? `+${i.priceExtra}kr` : ""}`}
          />
        );
      })}

      {options[selected].collectText !== undefined ? (
        options[selected].collectText ? (
          <input
            value={text}
            onChange={(e) => {
              const verify = verifyText(e.target.value);
              if (verify) {
                setText(e.target.value);
              }
            }}
            placeholder="Skriv här... (max 10)"
            maxLength={10}
            className="w-5/6 p-2 ml-5 h-10 bg-gray-100 font-mono text-gray-700"
          />
        ) : (
          <div className="h-10 p-2" />
        )
      ) : (
        <div />
      )}
    </div>
  );
}

export default Extra;
