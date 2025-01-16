"use client";

import React, { useEffect, useState } from "react";
import home from "../../../public/images/icons/menu/home-1.svg";
import contact from "../../../public/images/icons/menu/contact-us.svg";
import setttings from "../../../public/images/icons/menu/settings.svg";
import exams from "../../../public/images/icons/menu/exams.svg";
import courses from "../../../public/images/icons/menu/courses.svg";
import homeGreen from "../../../public/images/icons/menu/green/home-1.svg";
import contactGreen from "../../../public/images/icons/menu/green/contact-us.svg";
import setttingsGreen from "../../../public/images/icons/menu/green/settings.svg";
import examsGreen from "../../../public/images/icons/menu/green/exams.svg";
import coursesGreen from "../../../public/images/icons/menu/green/courses.svg";
import logout from "../../../public/images/icons/menu/logout.svg";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const nav = [
  {
    title: "home",
    src: home,
    srcGreen: homeGreen,
    link: "/",
  },
  {
    title: "contact",
    src: contact,
    srcGreen: contactGreen,
    link: "/contact",
  },
  {
    title: "settings",
    src: setttings,
    srcGreen: setttingsGreen,
    link: "/profile",
  },
  {
    title: "exams",
    src: exams,
    srcGreen: examsGreen,
    link: "/exams",
  },
  {
    title: "courses",
    src: courses,
    srcGreen: coursesGreen,
    link: "/courses",
  },
  {
    title: "logout",
    src: logout,
    srcGreen: logout,
    link: "/logout",
  },
];
export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const navState = useSelector((state: RootState) => state.burgerMenu.isOpen);

  useEffect(() => {
    setIsOpen(navState);
    console.log(navState);

    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [navState]);

  const getClassName = () => {
    if (isSmallScreen) {
      if (isOpen) {
        return "block fixed min-w-[230px] p-5 top-[88px] right-0";
      } else {
        return "hidden";
      }
    }
  };

  return (
    <ul
      className={`lg:sticky h-fit top-[156px] right-0 bg-betrolly text-whiteColor rounded-tl-[10px] z-30 group hover:min-w-[230px] hover:p-5 ${getClassName()}`}
    >
      {nav.map((item) => (
        <li key={item.title} className="last:mt-[260px]">
          <Link
            href={item.link}
            className={`flex items-center py-[5px] px-[10px] rounded-[10px] text-light hover:bg-whiteColor hover:text-betrolly group-hover:gap-[8px] group2 ${
              isSmallScreen && "gap-[8px]"
            }`}
          >
            <div className="w-[24px] h-[24px]">
              <Image
                src={item.src}
                alt={item.title}
                width={400}
                height={400}
                className=""
              />
              <Image
                src={item.srcGreen}
                alt={item.title}
                width={400}
                height={400}
                className="hidden"
              />
            </div>
            <span className="lg:w-0 overflow-hidden transition-[width] duration-[3000ms] ease-in-out group-hover:w-fit group-hover:overflow-visible">
              {item.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
