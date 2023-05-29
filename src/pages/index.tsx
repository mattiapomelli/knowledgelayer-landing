import React from "react";

import { BenefitsSection } from "@components/benefits-section";
import { ComponentsSection } from "@components/components-section";
import { ContactSection } from "@components/contact-section";
import { DemoSection } from "@components/demo-section";
import { Hero } from "@components/hero";
import { IntroducationSecion } from "@components/introduction-section";
import { PooledLiquiditySection } from "@components/pooled-liquidity-section";
import { VisionSection } from "@components/vision-section";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <IntroducationSecion />
      <ComponentsSection />
      <DemoSection />
      <PooledLiquiditySection />
      <BenefitsSection />
      <VisionSection />
      <ContactSection />
    </>
  );
};

export default Home;
