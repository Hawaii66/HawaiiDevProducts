import React from "react";

interface Props {
  children: React.ReactNode;
}

function Card({ children }: Props) {
  return (
    <div className="w-full m-5 p-5 rounded-3xl bg-gray-200 flex justify-evenly items-center flex-col xl:flex-row">
      {children}
    </div>
  );
}

export default Card;
