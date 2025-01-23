"use client";

import React, { useEffect, useState } from "react";
import logoText from "../../../public/images/logo-text.svg";
import logo from "../../../public/images/logo.svg";
import burgerMenu from "../../../public/images/icons/menu/burger-menu.svg";
import Image from "next/image";
import Search from "../Search/Search";
import profile from "../../../public/images/profile.svg";
import AuthRedirectButton from "../utils/Buttons/AuthRedirectButton";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "@/store/otherSlice";
import { RootState } from "@/store/store";

export default function Header() {
  const isLogged = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );
  const [user, setUser] = useState({
    email: "",
  });
  const navState = useSelector((state: RootState) => state.burgerMenu.isOpen);
  const dispatch = useDispatch();

  const handleOpenNav = () => {
    dispatch(setIsOpen(!navState));
  };

  const storedUser = localStorage.getItem("user");

  useEffect(() => {
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser((prevUser) => ({
        ...prevUser,
        email: userData.email,
      }));
    }
  }, [storedUser]);
  return (
    <>
      <div className="justify-between items-center py-5 px-[60px] hidden lg:flex">
        <div className="w-[120px] h-[66.67px]">
          <Image src={logo} alt="logo" width={400} height={400} />
        </div>
        <Search />
        {isLogged ? (
          <div className="max-w-[130px]">
            <div className="w-[60px] h-[60px] rounded overflow-hidden mx-auto mb-[8px]">
              <Image src={profile} alt="profile" width={400} height={400} />
            </div>
            <p
              className="text-ellipsis overflow-hidden whitespace-nowrap text-[small]"
              style={{ direction: "ltr" }}
            >
              {user.email}
            </p>
          </div>
        ) : (
          <AuthRedirectButton>تسجيل الدخول</AuthRedirectButton>
        )}
      </div>
      <div className="justify-between items-center px-5 pt-5 pb-[14px] shadow-custom flex lg:hidden">
        <div
          onClick={handleOpenNav}
          className="w-[32px] h-[30px] py-[10px] px-[8px] border-[1.32px] border-whiteColor bg-betrolly text-whiteColor rounded-[8.82px] flex flex-col gap-1 cursor-pointer"
        >
          <Image src={burgerMenu} alt="burger-menu" width={400} height={400} />
        </div>
        <div className="relative w-[250px] grow max-w-[550px]">
          <div className="w-[82.23px] h-5 mx-auto">
            <Image src={logoText} alt="logo" width={400} height={400} />
          </div>
          <div className="absolute top-[30px] right-0 w-full z-[2]">
            <Search ourWidth={"100%"} />
          </div>
        </div>
        {isLogged ? (
          <div className="w-[40px] h-[40px] rounded overflow-hidden">
            <Image src={profile} alt="profile" width={400} height={400} />
          </div>
        ) : (
          <AuthRedirectButton>Log</AuthRedirectButton>
        )}
      </div>
    </>
  );
}
