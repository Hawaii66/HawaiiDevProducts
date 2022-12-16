import React from "react";

interface Props {
  selected?: boolean;
  onClick?: () => void;
  text?: string;
  color?: string;
}

const STANDARD_COLOR = "bg-gray-500";

function Radio({ selected, onClick, text, color }: Props) {
  return (
    <div className="flex flex-row items-center">
      <div
        onClick={onClick}
        className={`w-10 h-10 ${
          color || STANDARD_COLOR
        } rounded-full flex justify-center items-center cursor-pointer mr-2`}
      >
        <div className="w-7 h-7 bg-gray-200 rounded-full flex justify-center items-center">
          {selected && (
            <div
              className={`w-4 h-4 ${color || STANDARD_COLOR} rounded-full`}
            />
          )}
        </div>
      </div>
      {text !== undefined && (
        <p className="text-gray-700 font-medium">{text}</p>
      )}
    </div>
  );
}

export default Radio;
