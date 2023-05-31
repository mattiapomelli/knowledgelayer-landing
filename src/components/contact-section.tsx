import { TYPEFORM_URL } from "@constants/urls";

import { Button } from "./basic/button";
import { BoxSection } from "./box-section";

export const ContactSection = () => {
  return (
    <BoxSection className="flex flex-col items-center gap-8 text-center">
      <h3 className="max-w-[30rem] text-center text-3xl font-bold">
        Get in touch
      </h3>
      <p className="max-w-[32rem] text-lg text-base-content-neutral">
        Building an educational platform? Are you a learner or a teacher? Just
        want to share ideas or chat about education? Would love to hear from
        you.
      </p>
      <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">
        <Button>Let&apos;s chat</Button>
      </a>
      <p className="mt-4 text-base-content-neutral">
        Don&apos;t like forms? Email us directly{" "}
        <a
          href="mailto:mattiapomelli@gmail.com"
          className="text-primary hover:underline"
        >
          here
        </a>
        .
      </p>
    </BoxSection>
  );
};
