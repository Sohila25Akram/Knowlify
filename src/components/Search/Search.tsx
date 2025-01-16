import React from "react";

type Props = {
  ourWidth?: string;
};

export default function Search({ ourWidth = "550px" }: Props) {
  return (
    <input
      type="text"
      placeholder="ser.."
      className="rounded-[15px] border-[1px] border-fadedLine bg-txtBox leading-[29.98px] py-[9px] px-[31px] shadow-custom outline-orangeColor"
      style={{ width: ourWidth }}
    />
  );
}
