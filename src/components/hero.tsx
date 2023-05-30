import { DOCS_URL, MANIFESTO_URL } from "@constants/urls";
import ExplosionGraphic from "@icons/explosion.svg";

import { Button } from "./basic/button";
import { Container } from "./layout/container";

export const Hero = () => {
  return (
    <section className="relative">
      <Container className="relative flex flex-col items-center gap-6 py-36 text-center">
        <h1 className="max-w-[32rem] text-4xl font-bold">
          The toolkit for building web3 educational platforms
        </h1>
        <p className="max-w-[18rem] text-lg text-base-content-neutral sm:max-w-[26rem]">
          Build on a solid foundation and focus on what matters for your edtech
          platform.
        </p>

        <div className="flex flex-col gap-4 min-[400px]:flex-row">
          <a
            href={MANIFESTO_URL}
            target="_blank"
            rel="noreferrer"
            className="w-[9.3rem] flex-1"
          >
            <Button
              color="neutral"
              variant="outline"
              className="whitespace-nowrap hover:bg-accent hover:text-base-content dark:bg-base-content dark:text-base-100 dark:hover:bg-accent"
              block
            >
              Read manifesto
            </Button>
          </a>
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noreferrer"
            className="w-[9.3rem] flex-1"
          >
            <Button className="whitespace-nowrap" block>
              Start building
            </Button>
          </a>
        </div>

        <ExplosionGraphic className="absolute left-[10%] bottom-[10%] h-14 w-14 md:bottom-[20%]" />
        <ExplosionGraphic className="absolute right-[-20px] top-[35%] h-12 w-12 rotate-[140deg] md:right-[8%]" />
        <ExplosionGraphic className="absolute top-[0%] left-[40%] h-12 w-12 rotate-12" />
      </Container>
    </section>
  );
};
