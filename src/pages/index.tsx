import React from "react";

import { BenefitsSection } from "@components/benefits-section";
import { ComponentsSection } from "@components/components-section";
import { ContactSection } from "@components/contact-section";
import { Hero } from "@components/hero";
import { IntroducationSecion } from "@components/introduction-section";
import { NetworkSection } from "@components/network-section";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <IntroducationSecion />
      <ComponentsSection />
      <BenefitsSection />
      <NetworkSection />
      <ContactSection />
    </>
  );
};

export default Home;
