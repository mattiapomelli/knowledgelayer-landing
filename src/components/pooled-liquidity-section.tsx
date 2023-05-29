import Image from "next/image";

import { DOCS_URL } from "@constants/urls";

import { Button } from "./basic/button";
import { BoxSection } from "./box-section";

export const PooledLiquiditySection = () => {
  return (
    <BoxSection className="flex flex-col items-center gap-y-20 gap-x-10 py-28 md:flex-row">
      <div className="flex flex-col gap-6 text-center md:text-left">
        <h3 className="max-w-[34rem] text-3xl font-bold">
          Solve the chicken and egg problem, improve content discovery
        </h3>
        <p className="max-w-[28rem] text-lg text-base-content-neutral">
          KnowledgeLayer provides a shared pool of learners, teachers and
          educational content that any application can plug into. Network
          effects sharing helps marketplaces to bootstrap and focus on building
          user-friendly experiences.
        </p>
        <a href={DOCS_URL} target="_blank" rel="noreferrer">
          <Button>Start building</Button>
        </a>
      </div>
      <div>
        <Image
          src="/pooled-liquidity.svg"
          width="546px"
          height="305px"
          alt="Network of learners and teachers"
        />
      </div>
    </BoxSection>
  );
};
