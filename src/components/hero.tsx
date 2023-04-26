import ExplosionGraphic from "@icons/explosion.svg";

import { Button } from "./basic/button";
import { Container } from "./layout/container";

export const Hero = () => {
  return (
    <Container className="relative flex flex-col items-center gap-6 overflow-hidden py-36 text-center">
      <h1 className="max-w-[32rem] text-4xl font-bold">
        The toolkit for building web3 educational platforms
      </h1>
      <p className="max-w-[28rem] text-lg text-base-content-neutral">
        Build on a solid foundation and focus on what matters for your edtech
        platform
      </p>
      <a
        href="https://tiapome.notion.site/KnowledgeLayer-Manifesto-dc10fb32bfb34847a591894479f3107a"
        target="_blank"
        rel="noreferrer"
      >
        <Button>Read the manifesto</Button>
      </a>
      <ExplosionGraphic className="absolute left-[10%] bottom-[10%] h-14 w-14 md:bottom-[20%]" />
      <ExplosionGraphic className="absolute right-[-20px] top-[35%] h-12 w-12 rotate-[140deg] md:right-[8%]" />
      <ExplosionGraphic className="absolute top-[0%] left-[40%] h-12 w-12 rotate-12" />
    </Container>
  );
};
