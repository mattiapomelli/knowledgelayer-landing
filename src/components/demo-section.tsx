import { UKNOW_URL } from "@constants/urls";

import { Button } from "./basic/button";
import { Container } from "./layout/container";

export const DemoSection = () => {
  return (
    <section>
      <Container className="flex flex-col items-center gap-10 pt-28 pb-32">
        <h3 className="max-w-[34rem] text-center text-3xl font-bold">
          Get started building in minutes
        </h3>
        <p className="max-w-[30rem] text-center text-lg text-base-content-neutral">
          Want to get started fast? Fork our demo frontend codebase to get
          started building a platform integrating KnowledgeLayer in minutes.
        </p>
        <a href={UKNOW_URL} target="_blank" rel="noreferrer">
          <Button>Fork the demo app</Button>
        </a>
      </Container>
    </section>
  );
};
