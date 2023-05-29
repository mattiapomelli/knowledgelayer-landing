import Image from "next/image";

import { BoxSection } from "./box-section";

export const IntroducationSecion = () => {
  return (
    <BoxSection className="flex flex-col items-center gap-10 text-center">
      <p className="max-w-[34rem] text-3xl">
        KnowledgeLayer is an
        <b> open protocol </b>
        and
        <b> developer toolkit </b>
        for anyone to build edtech platforms on
      </p>
      <div className="relative hidden h-60 w-full md:block">
        <Image
          src="/protocol-architecture.svg"
          layout="fill"
          alt="Protocol architecture"
          priority
        />
      </div>
      <div className="relative h-60 w-full md:hidden">
        <Image
          src="/protocol-architecture-mobile.png"
          layout="fill"
          alt="Protocol architecture"
          priority
          objectFit="contain"
        />
      </div>
    </BoxSection>
  );
};
