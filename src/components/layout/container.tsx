import cx from "classnames";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge(cx("max-w-6xl mx-auto px-4 sm:px-6", className))}>
      {children}
    </div>
  );
};
