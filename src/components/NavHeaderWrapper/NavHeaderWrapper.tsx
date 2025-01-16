"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

type Props = {
  children: ReactNode;
};

export default function NavHeaderWrapper({ children }: Props) {
  const isGuest = useSelector((state: RootState) => state.guest.isGuest);
  const [isGuestFromLocalStorage, setIsGuestFromLocalStorage] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedIsGuest = localStorage.getItem("isGuest");
      setIsGuestFromLocalStorage(storedIsGuest === "true"); // Convert string back to boolean
    }
  }, []);

  return (
    <>
      {(isGuest || isGuestFromLocalStorage) && <Header />}
      <div className="relative right-0 lg:flex">
        {(isGuest || isGuestFromLocalStorage) && <NavBar />}
        <div className="padding-x padding-y w-full overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
}
