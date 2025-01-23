import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  isIcon?: boolean;
  icon?: string;
  children: ReactNode;
};

export default function Input({
  isIcon = false,
  icon = "##",
  children,
}: Props) {
  return (
    <div className="bg-txtBox rounded-[10px] w-full h-[56px] flex items-center px-3 overflow-hidden">
      {/* <input
        type={type}
        name={name}
        defaultValue={defaultVal}
        readOnly={isReadOnly}
        className="block grow h-full bg-transparent outline-0 text-textInTxtBox"
      /> */}
      {children}
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
