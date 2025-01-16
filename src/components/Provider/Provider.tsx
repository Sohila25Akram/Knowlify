"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
