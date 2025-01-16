import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isFit?: boolean;
};

export default function PrimaryButton({ children, isFit = false }: Props) {
  return (
    <button
      className="btn-orange"
      style={{ width: isFit ? "fit-content" : "100%" }}
    >
      {children}
    </button>
  );
}
