import { Button } from "./basic/button";
import { Container } from "./layout/container";

export const VisionSection = () => {
  return (
    <section className="bg-accent text-base-content">
      <Container className="flex flex-col items-center gap-10 py-20 text-center">
        <p className="max-w-[34rem] text-3xl">
          An ecosystem for people who want to expand and share their
          <b> knowledge</b>
        </p>
        <a
          href="https://tiapome.notion.site/KnowledgeLayer-Manifesto-dc10fb32bfb34847a591894479f3107a"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Read the manifesto</Button>
        </a>
      </Container>
    </section>
  );
};
