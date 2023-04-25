import { Button } from "./basic/button";
import { Container } from "./layout/container";

export const Hero = () => {
  return (
    <Container className="flex flex-col items-center gap-6 py-28 text-center">
      <h1 className="max-w-[30rem] text-4xl font-bold">
        The toolkit to build web3 educational platforms
      </h1>
      <p className="max-w-[28rem] text-lg text-base-content-neutral">
        Build on a solid foundation and focus on what matters for your edtech
        platform
      </p>
      <Button>Read the manifesto</Button>
    </Container>
  );
};
