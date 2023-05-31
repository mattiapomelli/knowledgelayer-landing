import cx from "classnames";
import { ReactNode } from "react";

interface ComponentCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export const Card = ({
  title,
  description,
  icon,
  className,
}: ComponentCardProps) => {
  return (
    <div
      className={cx(
        "rounded-box flex flex-col gap-4 border-2 border-base-content bg-base-100 p-6 drop-shadow-default",
        className,
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary-content bg-primary drop-shadow-default">
        <span className="h-8 w-8 text-primary-content">{icon}</span>
      </div>
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-base-content-neutral">{description}</p>
    </div>
  );
};
