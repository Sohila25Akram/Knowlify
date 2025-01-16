"use client";

import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

type Props = {
  children: ReactNode;
};

export default function NavHeaderWrapper({ children }: Props) {
  const isGuest = useSelector((state: RootState) => state.guest.isGuest);
  const isGuestFromLocalStorage = localStorage.getItem("isGuest");

  return (
    <>
      {(isGuest || isGuestFromLocalStorage === "true") && <Header />}
      <div className="relative right-0 lg:flex">
        {(isGuest || isGuestFromLocalStorage === "true") && <NavBar />}
        <div className="padding-x padding-y w-full overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
}
