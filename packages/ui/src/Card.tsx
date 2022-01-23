import { HTMLAttributes } from "react";

export const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="top-60 mx-auto relative grid grid-cols-4 gap-2 p-5 border w-[32rem] shadow-lg rounded-md bg-white">
      {props.children}
    </div>
  );
};
