import { Button } from "./basic/button";
import { Container } from "./layout/container";

export const ContactSection = () => {
  return (
    <Container className="flex flex-col items-center gap-6 py-28 text-center">
      <h3 className="max-w-[30rem] text-center text-3xl font-bold">
        Get in touch
      </h3>
      <p className="max-w-[28rem] text-lg text-base-content-neutral">
        Whether you are a learner or teacher, or building an edtech platform, or
        just want to discuss about education, would love to hear from you.
      </p>
      <a href="mailto:mattiapomelli@gmail.com">
        <Button>Say hi</Button>
      </a>
    </Container>
  );
};
