import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isFit?: boolean;
};

export default function SecondaryButton({ children, isFit = false }: Props) {
  return (
    <button
      className="btn-second"
      style={{ width: isFit ? "fit-content" : "100%" }}
    >
      {children}
    </button>
  );
}
