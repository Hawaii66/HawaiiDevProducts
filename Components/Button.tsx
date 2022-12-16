import Link from "next/link";
import React from "react";

interface Props {
  onClick?: () => void;
  text?: string;
  link?: string;
  verifyClick?: () => boolean;
  small?: boolean;
}

function Button({ onClick, text, link, verifyClick, small }: Props) {
  if (link) {
    return (
      <Link
        onClick={(e) => {
          if (verifyClick == undefined) {
            return;
          }

          if (verifyClick() === true) {
            return;
          }

          e.preventDefault();
          alert("Något stämmer inte");
        }}
        href={link}
        className={`w-5/6 ${
          small && "sm:w-2/6"
        } sm:w-3/6 h-16 p-2 bg-green-400 ${
          small && "bg-slate-300"
        } flex justify-center items-center rounded-full hover:rounded-3xl hover:scale-110 transition-all`}
      >
        <h2 className="font-bold text-gray-100 text-2xl">{text}</h2>
      </Link>
    );
  }

  return (
    <button
      onClick={(e) => {
        if (verifyClick == undefined) {
          if (onClick === undefined) {
            return;
          }
          onClick();
          return;
        }

        if (verifyClick() === true && onClick !== undefined) {
          onClick();
        }

        e.preventDefault();
        alert("Något stämmer inte");
      }}
      className={`w-5/6 ${small && "sm:w-2/6"} sm:w-3/6 h-16 p-2 bg-green-400 ${
        small && "bg-slate-300"
      } flex justify-center items-center rounded-full hover:rounded-3xl hover:scale-110 transition-all`}
    >
      <h2 className="font-bold text-gray-100 text-2xl">{text}</h2>
    </button>
  );
}

export default Button;
