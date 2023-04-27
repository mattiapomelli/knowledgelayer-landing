import {
  AcademicCapIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";

import ArrowDownGraphic from "@icons/arrow-down.svg";
import ExplosionGraphic from "@icons/explosion.svg";

import { Container } from "./layout/container";

interface ComponentCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ComponentCard = ({ title, description, icon }: ComponentCardProps) => {
  return (
    <div className="rounded-box flex max-w-[20rem] flex-col gap-4 border-2 border-base-content bg-base-100 p-6 drop-shadow-default">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary-content bg-primary drop-shadow-default">
        <span className="h-8 w-8 text-primary-content">{icon}</span>
      </div>
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-base-content-neutral">{description}</p>
    </div>
  );
};

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
            <ComponentCard
              icon={<AcademicCapIcon />}
              title="Course listing and NFT-based sales"
              description="Create courses and sell them through NFTs that give access to the content."
            />
            <ComponentCard
              icon={<CurrencyDollarIcon />}
              title="Escrow and dispute resolution"
              description="Securely handle payments between students and teachers, and solve possible disputes."
            />
            <ComponentCard
              icon={<CheckBadgeIcon />}
              title="Verifiable credentials"
              description="Issue certificates and badges for the completion of courses to prove students' skills."
            />
            <ComponentCard
              icon={<StarIcon />}
              title="Reviews and reputation"
              description="Reviews for courses and teachers aggregated in a unified reputation across platforms."
            />
          </div>
        </Container>
      </section>

      <section className="relative bg-accent py-24 text-base-content">
        <ArrowDownGraphic className="absolute left-1/2 top-[-4.8rem] h-32 w-32 -translate-x-1/2" />
        <Container className="relative flex flex-col items-center">
          <div className="relative">
            <p className="max-w-[30rem] text-center text-3xl">
              Focus on what makes your platform
              <b> stand out</b>
            </p>
            <ExplosionGraphic className="absolute top-24 -left-8 h-14 w-14 md:top-16" />
            <ExplosionGraphic className="absolute -right-10 top-16 h-12 w-12 rotate-[140deg] md:top-10" />
            <ExplosionGraphic className="absolute left-20 -top-16 h-12 w-12 rotate-12 md:left-36" />
          </div>
        </Container>
      </section>
    </>
  );
};
