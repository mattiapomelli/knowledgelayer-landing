import Image from "next/image";

import { MANIFESTO_URL } from "@constants/urls";

import { Button } from "./basic/button";
import { BoxSection } from "./box-section";

export const VisionSection = () => {
  return (
    <BoxSection className="flex flex-col items-center gap-20 py-20 md:flex-row">
      <div>
        <Image
          src="/network.svg"
          width={546}
          height={450}
          alt="Network of learners and teachers"
        />
      </div>
      <div className="flex flex-col gap-6 text-center md:text-left">
        <p className="max-w-[34rem] text-3xl font-bold">
          A network of people who want to expand and share their knowledge
        </p>
        <p className="max-w-[28rem] text-lg text-base-content-neutral">
          Education is the key to unlocking human potential. KnowledgeLayer aims
          to create a network of individuals who are passionate about learning,
          teaching and growing together.
        </p>
        <a href={MANIFESTO_URL} target="_blank" rel="noreferrer">
          <Button>Read the manifesto</Button>
        </a>
      </div>
    </BoxSection>
  );
};
