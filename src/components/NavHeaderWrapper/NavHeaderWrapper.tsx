"use client";

import React, { ReactNode } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function NavHeaderWrapper({ children }: Props) {
  // const isGuest = useSelector((state: RootState) => state.guest.isGuest);
  // const [isGuestFromLocalStorage, setIsGuestFromLocalStorage] = useState<
  //   boolean | null
  // >(null);

  // const router = useRouter();
  // const hideHeaderRoutes = ["/register-login"];

  const pathname = usePathname();

  const hideHeaderRoutes = ["/register-login", "/register-login/login"];
  const shouldHideHeader = hideHeaderRoutes.includes(pathname);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedIsGuest = localStorage.getItem("isGuest");
  //     // setIsGuestFromLocalStorage(storedIsGuest === "true");
  //   }
  // }, []);

  return (
    <>
      {!shouldHideHeader && <Header />}
      {/* {(isGuest || isGuestFromLocalStorage) && <Header />} */}
      <div className="relative right-0 lg:flex">
        {!shouldHideHeader && <NavBar />}
        {/* {(isGuest || isGuestFromLocalStorage) && <NavBar />} */}
        <div className="padding-x padding-y w-full overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
}
