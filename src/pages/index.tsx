import React from "react";

import { ContactSection } from "@components/contact";
import { FeaturesSection } from "@components/features-section";
import { Hero } from "@components/hero";
import { IntroducationSecion } from "@components/introduction-section";
import { VisionSection } from "@components/vision-section";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <IntroducationSecion />
      <FeaturesSection />
      <VisionSection />
      <ContactSection />
    </>
  );
};

export default Home;
