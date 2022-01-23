import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-purple-400 hover:bg-purple-500 rounded p-2 text-white ${
        props.className || ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
