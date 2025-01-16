"use client";

import { setGuest } from "@/store/guestSlice";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";

type Props = {
  children: ReactNode;
  isFit?: boolean;
};

export default function AuthRedirectButton({ children }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const onRemoveGuest = () => {
    localStorage.removeItem("isGuest");
    dispatch(setGuest(false));
    router.push("/register-login/login");
  };
  return (
    <button
      className="text-orangeColor w-[40px] h-[40px] border-[1px] border-orangeColor flex justify-center items-center rounded-[50%] transition hover:bg-orangeColor hover:text-whiteColor lg:p-5 lg:block lg:bg-orangeColor lg:text-whiteColor lg:w-fit lg:h-auto lg:rounded-[10px]"
      onClick={onRemoveGuest}
    >
      {children}
    </button>
  );
}
