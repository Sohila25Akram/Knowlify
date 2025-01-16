import Image from "next/image";
import React, { ReactNode } from "react";
import register from "../../../public/images/registration.svg";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div
      className="flex padding-x-remove padding-y-remove items-center gap-[50px]"
      style={{ padding: "0" }}
    >
      <div className="w-[480px] h-[100vh] flex items-center hidden lg:block">
        <Image
          src={register}
          alt="registration"
          width={400}
          height={400}
          priority
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "100vh",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="grow mx-auto mt-10">{children}</div>
    </div>
  );
}
