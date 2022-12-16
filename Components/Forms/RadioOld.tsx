import React from "react";

interface Props {
  selected: boolean;
  onSelect: () => void;
  children?: React.ReactNode;
  inputClassNames?: string;
  labelClassNames?: string;
}

function RadioOld({
  selected,
  onSelect,
  children,
  inputClassNames,
  labelClassNames,
}: Props) {
  return (
    <div
      onClick={onSelect}
      onSelect={onSelect}
      className={`cursor-pointer flex my-3 gap-3`}
    >
      <div
        className={`
          appearance-none rounded-full flex items-center justify-center h-8 w-8 " +
          ${selected && inputClassNames?.toString()} ${
          selected && " border border-black rounded-full"
        }`}
      >
        <div
          className={`
          appearance-none rounded-full flex items-center justify-center h-6 w-6 " +
          ${selected ? "bg-white" : inputClassNames?.toString()}`}
        >
          <div
            className={`
			appearance-none rounded-full flex items-center justify-center h-4 w-4 " +
			${selected && inputClassNames?.toString()}`}
          ></div>
        </div>
      </div>
      <label className={labelClassNames + " cursor-pointer"}>{children}</label>
    </div>
  );
}

export default RadioOld;
