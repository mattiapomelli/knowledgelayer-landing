import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

import { Container } from "./layout/container";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
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

export const FeaturesSection = () => {
  return (
    <Container className="flex flex-col items-center gap-10 py-20">
      <h3 className="max-w-[30rem] text-center text-3xl font-bold">
        The key components of educational platforms
      </h3>
      <p className="max-w-[28rem] text-center text-lg text-base-content-neutral">
        KnowledgeLayer provides the main building blocks so that you can focus
        on building what makes your platform stand out
      </p>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
        <FeatureCard
          icon={<AcademicCapIcon />}
          title="Course listing and NFT-based sales"
          description="Create courses and sell them through NFTs that give access to the
        content"
        />
        <FeatureCard
          icon={<AcademicCapIcon />}
          title="Escrow and dispute resolution"
          description="Create courses and sell them through NFTs that give access to the
        content"
        />
        <FeatureCard
          icon={<AcademicCapIcon />}
          title="Reviews and reputation"
          description="Create courses and sell them through NFTs that give access to the
        content"
        />
        <FeatureCard
          icon={<AcademicCapIcon />}
          title="Verifiable credentials"
          description="Create courses and sell them through NFTs that give access to the
        content"
        />
      </div>
    </Container>
  );
};
