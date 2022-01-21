import { ComponentProps } from "react";

export const Button = (props: ComponentProps<"button">) => {
  return <button className="bg-blue-400 rounded p-2">{props.children}</button>;
};
