import {
  AcademicCapIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import ArrowDownGraphic from "@icons/arrow-down.svg";
import ExplosionGraphic from "@icons/explosion.svg";

import { Card } from "./basic/card";
import { BoxSection } from "./box-section";
import { Container } from "./layout/container";

export const ComponentsSection = () => {
  return (
    <>
      <section>
        <Container className="flex flex-col items-center gap-10 pt-20 pb-32">
          <h3 className="max-w-[30rem] text-center text-3xl font-bold">
            The key components for educational platforms
          </h3>
          <p className="max-w-[28rem] text-center text-lg text-base-content-neutral">
            Avoid building your backend from scratch. Reduce development costs
            and time, and go to market faster.
          </p>
          <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
            <Card
              icon={<AcademicCapIcon />}
              title="Course listing and NFT-based sales"
              description="Create courses and sell them through NFTs that give access to the content."
              className="max-w-[24rem] md:max-w-[20rem]"
            />
            <Card
              icon={<CurrencyDollarIcon />}
              title="Escrow and dispute resolution"
              description="Securely handle payments between students and teachers, and solve possible disputes."
              className="max-w-[24rem] md:max-w-[20rem]"
            />
            <Card
              icon={<CheckBadgeIcon />}
              title="Verifiable credentials"
              description="Issue certificates and badges for the completion of courses to prove students' skills."
              className="max-w-[24rem] md:max-w-[20rem]"
            />
            <Card
              icon={<StarIcon />}
              title="Reviews and reputation"
              description="Reviews for courses and teachers aggregated in a unified reputation across platforms."
              className="max-w-[24rem] md:max-w-[20rem]"
            />
          </div>
        </Container>
      </section>

      <BoxSection className="relative flex flex-col items-center">
        <ArrowDownGraphic className="absolute left-1/2 top-[-4.8rem] h-32 w-32 -translate-x-1/2" />
        <div className="relative">
          <p className="max-w-[30rem] text-center text-3xl">
            Focus on what makes your platform
            <b> stand out</b>
          </p>
          <ExplosionGraphic className="absolute top-24 -left-8 h-14 w-14 md:top-16" />
          <ExplosionGraphic className="absolute -right-10 top-16 h-12 w-12 rotate-[140deg] md:top-10" />
          <ExplosionGraphic className="absolute left-20 -top-16 h-12 w-12 rotate-12 md:left-36" />
        </div>
      </BoxSection>
    </>
  );
};
