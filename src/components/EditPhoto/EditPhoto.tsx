import Image from "next/image";
import React from "react";
import profile from "../../../public/images/profile.svg";

type Props = {
  imgSource?: string;
};

export default function EditPhoto({ imgSource }: Props) {
  return (
    <div className="w-[150px] h-[150px] rounded-[50%] overflow-hidden bg-whiteColor flex items-center">
      <Image
        src={imgSource ? imgSource : profile}
        alt="profile"
        width={400}
        height={400}
      />
    </div>
  );
}
