import Image from "next/image";
import React from "react";

type Props = {
  isIcon?: boolean;
  icon?: string;
  name: string;
  defaultVal?: string;
  isReadOnly?: boolean;
  type: string;
};

export default function Input({
  isIcon = false,
  icon = "##",
  name,
  defaultVal,
  isReadOnly = false,
  type = "text",
}: Props) {
  return (
    <div className="bg-txtBox rounded-[10px] w-full h-[56px] flex items-center px-3 overflow-hidden">
      <input
        type={type}
        name={name}
        defaultValue={defaultVal}
        readOnly={isReadOnly}
        className="block grow h-full bg-transparent outline-0 text-textInTxtBox"
      />
      {isIcon && (
        <div className="w-[24px] h-[24px] mr-[12px]">
          <Image
            className="inline-block"
            src={icon}
            alt=""
            width={400}
            height={400}
          />
        </div>
      )}
    </div>
  );
}
