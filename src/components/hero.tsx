import { Button } from "./basic/button";
import { Container } from "./layout/container";

export const Hero = () => {
  return (
    <Container className="flex flex-col items-center gap-6 py-28 text-center">
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
    </Container>
  );
};
