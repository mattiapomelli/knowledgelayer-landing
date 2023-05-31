import { AcademicCapIcon, StarIcon } from "@heroicons/react/24/outline";

import { Card } from "./basic/card";
import { Container } from "./layout/container";

export const EndUsersSection = () => {
  return (
    <section>
      <Container className="flex flex-col items-center gap-8 py-32">
        <h3 className="max-w-[30rem] text-center text-3xl font-bold">
          One profile, many platforms
        </h3>
        <p className="max-w-[36rem] text-center text-lg text-base-content-neutral">
          With KnowledgeLayer, you have complete ownerhip of your profile,
          content and data. Forget about creating a new profile and starting
          from scratch every time you use a new platform.
        </p>
        <div className="flex max-w-[52rem] flex-col gap-4 md:flex-row">
          <Card
            description="With KnowledgeLayer, your content gets automatically distributed on
          any platform of the network. This means that you are able to reach a
          wider audience and monetize your content more effectively. Your
          reviews and reputation follow you everywhere."
            title="For educators"
            icon={<StarIcon />}
            className="flex-1"
          />
          <Card
            description="With KnowledgeLayer, you can access any platform in the network with a
        single profile, to learn in multiple topic areas. All your
        achievements, credentials and learning activity are aggregated in a
        single place."
            title="For learners"
            icon={<AcademicCapIcon />}
            className="flex-1"
          />
        </div>
      </Container>
    </section>
  );
};
