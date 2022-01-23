import { InputHTMLAttributes } from "react";

export const TextInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      className={`border-2 border-purple-400 rounded outline-purple-500 px-2 ${
        props.className || ""
      }`}
    />
  );
};
