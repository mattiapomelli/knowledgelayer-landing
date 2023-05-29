import cx from "classnames";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { Container } from "./layout/container";

interface BoxSectionProps {
  children: ReactNode;
  className?: string;
}

export const BoxSection = ({ children, className }: BoxSectionProps) => {
  return (
    <section className="lg:px-10">
      <Container
        className={twMerge(
          cx(
            "lg:rounded-box bg-accent py-20 text-base-content sm:px-20",
            className,
          ),
        )}
      >
        {children}
      </Container>
    </section>
  );
};
