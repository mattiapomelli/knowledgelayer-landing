import { MANIFESTO_URL } from "@constants/urls";

import { Button } from "./basic/button";
import { Container } from "./layout/container";

export const BenefitsSection = () => {
  return (
    <section>
      <Container className="flex flex-col items-center gap-8 py-32">
        <h3 className="max-w-[34rem] text-center text-3xl font-bold">
          Powered by web3, serving the world
        </h3>
        <p className="max-w-[28rem] text-center text-lg text-base-content-neutral">
          Bring uncensorable content, efficient payments, user-owned credentials
          and reputation to your users thanks to the power of blockchain
          technology.
        </p>
        <a href={MANIFESTO_URL} target="_blank" rel="noreferrer">
          <Button>Read the manifesto</Button>
        </a>
      </Container>
    </section>
  );
};
