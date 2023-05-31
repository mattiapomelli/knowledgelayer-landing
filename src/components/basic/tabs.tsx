import { Tab } from "@headlessui/react";
import cx from "classnames";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

import type { ReactNode } from "react";

export interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  className?: string;
}

export const Tabs = ({ items, className }: TabsProps) => {
  return (
    <Tab.Group>
      <Tab.List className={twMerge(cx("flex gap-2", className))}>
        {items.map((item) => (
          <Tab key={item.label.toString()} as={Fragment}>
            {({ selected }) => (
              <button
                className={cx(
                  "rounded-btn",
                  "text-sm font-medium",
                  "py-2.5 px-4",
                  "focus:outline-none",
                  "min-w-[100px]",
                  "flex-1",
                  "border-primary-content border-2 hover:border-primary-content drop-shadow-default",
                  selected
                    ? "bg-primary text-primary-content shadow"
                    : "bg-base-100 text-base-content dark:bg-base-content dark:text-base-100 hover:opacity-90",
                )}
              >
                {item.label}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-6">
        {items.map((item) => (
          <Tab.Panel key={item.label.toString()}>{item.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
