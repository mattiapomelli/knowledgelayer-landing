import cx from "classnames";
import { ReactNode } from "react";

import { TabItem, Tabs } from "./basic/tabs";
import { Container } from "./layout/container";

const TabCard = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cx(
        "rounded-box flex flex-col justify-center gap-4 bg-base-100 p-6 text-lg text-base-content-neutral",
        "border-2 border-base-content drop-shadow-default",
        "min-h-[18rem] sm:min-h-[12rem]",
      )}
    >
      {children}
    </div>
  );
};

export const EndUsersSection = () => {
  const items: TabItem[] = [
    {
      label: "I'm an Educator",
      content: (
        <TabCard>
          With KnowledgeLayer, your content gets automatically distributed on
          any platform of the network. This means that you are able to reach a
          wider audience and monetize your content more effectively. Your
          reviews and reputation follow you everywhere.
        </TabCard>
      ),
    },
    {
      label: "I'm a Student",
      content: (
        <TabCard>
          With KnowledgeLayer, you can access any platform in the network with a
          single profile, to learn in multiple topic areas. All your
          achievements, credentials and learning activity are aggregated in a
          single place.
        </TabCard>
      ),
    },
  ];

  return (
    <section>
      <Container className="flex flex-col items-center gap-8 py-32 text-center">
        <h3 className="max-w-[30rem] text-center text-3xl font-bold">
          One profile, many platforms
        </h3>
        <p className="max-w-[36rem] text-lg text-base-content-neutral">
          With KnowledgeLayer, you have complete ownerhip of your profile,
          content and data. Forget about creating a new profile and starting
          from scratch every time you use a new platform.
        </p>
        <div className="max-w-[36rem]">
          <Tabs items={items} className="justify-center" />
        </div>
      </Container>
    </section>
  );
};
