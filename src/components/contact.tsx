import { Button } from "./basic/button";
import { Container } from "./layout/container";

export const ContactSection = () => {
  return (
    <Container className="flex flex-col items-center gap-6 py-28 text-center">
      <h3 className="max-w-[30rem] text-center text-3xl font-bold">
        Get in touch
      </h3>
      <p className="max-w-[32rem] text-lg text-base-content-neutral">
        Building an educational platform? Are you a learner or a teacher? Just
        want to share ideas or discuss about education? Would love to hear from
        you.
      </p>
      <a href="mailto:mattiapomelli@gmail.com">
        <Button>Say hi</Button>
      </a>
    </Container>
  );
};
