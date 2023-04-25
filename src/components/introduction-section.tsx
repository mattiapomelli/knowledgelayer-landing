import Image from "next/image";

import { Container } from "./layout/container";

export const IntroducationSecion = () => {
  return (
    <section className="bg-accent text-base-content">
      <Container className="flex flex-col items-center gap-10 py-20 text-center">
        <p className="max-w-[34rem] text-3xl">
          KnowledgeLayer is an
          <b> open </b>
          protocol and
          <b> toolkit </b>
          for anyone to build edtech platforms on
        </p>
        <div className="relative hidden h-60 w-full md:block">
          <Image
            src="/protocol.svg"
            layout="fill"
            alt="Protocol architecture"
            priority
          />
        </div>
        <div className="relative h-60 w-full md:hidden">
          <Image
            src="/protocol-mobile.svg"
            layout="fill"
            alt="Protocol architecture"
            priority
          />
        </div>
      </Container>
    </section>
  );
};
