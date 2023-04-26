import Image from "next/image";

import { Button } from "./basic/button";
import { Container } from "./layout/container";

export const VisionSection = () => {
  return (
    <section className="bg-accent text-base-content">
      <Container className="flex flex-col items-center gap-10 py-20 md:flex-row">
        <div className="order-1 flex flex-col gap-6 text-center md:order-none md:text-left">
          <p className="max-w-[34rem] text-3xl">
            A network of people who want to
            <b> expand </b>
            and
            <b> share </b>
            their
            <b> knowledge</b>
          </p>
          <p className="max-w-[28rem] text-lg text-base-content-neutral">
            KnowledgeLayer provides a shared pool of learners, teachers and
            educational content that any application can plug into.
          </p>
          <a
            href="https://tiapome.notion.site/KnowledgeLayer-Manifesto-dc10fb32bfb34847a591894479f3107a"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Read the manifesto</Button>
          </a>
        </div>
        <div>
          <Image
            src="/network.svg"
            width="546px"
            height="450px"
            alt="Network of learners and teachers"
          />
        </div>
      </Container>
    </section>
  );
};
