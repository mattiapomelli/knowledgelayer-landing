// import { useState } from "react";
// import { useForm } from "react-hook-form";

// import { useSignup } from "@hooks/use-signup";
import { DOCS_URL } from "@constants/urls";
import ExplosionGraphic from "@icons/explosion.svg";

import { Button } from "./basic/button";
// import { Input } from "./basic/input";
import { Container } from "./layout/container";

export const Hero = () => {
  // const { signup, isLoading } = useSignup();
  // const [isSuccess, setIsSuccess] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm<{ email: string }>();

  // const onSubmit = handleSubmit(async (data) => {
  //   await signup(data.email);
  //   reset();
  //   setIsSuccess(true);
  // });

  return (
    <section className="relative">
      <Container className="relative flex flex-col items-center gap-6 py-36 text-center">
        <h1 className="max-w-[32rem] text-4xl font-bold">
          The toolkit for building web3 educational platforms
        </h1>
        <p className="max-w-[18rem] text-lg text-base-content-neutral sm:max-w-[26rem]">
          Build on a solid foundation and focus on what matters for your edtech
          platform.
          {/* Get a step-by-step integration guide and start building on a solid
          foundation. */}
        </p>

        {/* <div className="flex flex-col items-center gap-4">
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-end gap-2 sm:flex-row"
          >
            <Input
              label="Get the integration guide"
              placeholder="Email"
              type="email"
              className="sm:min-w-[300px]"
              block
              {...register("email", { required: "Email is required" })}
              error={errors.email?.message}
            />
            <Button loading={isLoading} disabled={isLoading}>
              Start building
            </Button>
          </form>
          {isSuccess && (
            <div className="rounded-box w-full border-2 border-primary-content bg-success px-4 py-2 text-primary-content drop-shadow-default">
              Will get back to you shortly! Check your email in a while 🎉
            </div>
          )}
        </div> */}

        <a href={DOCS_URL} target="_blank" rel="noreferrer">
          <Button>Start building</Button>
        </a>
        <ExplosionGraphic className="absolute left-[10%] bottom-[10%] h-14 w-14 md:bottom-[20%]" />
        <ExplosionGraphic className="absolute right-[-20px] top-[35%] h-12 w-12 rotate-[140deg] md:right-[8%]" />
        <ExplosionGraphic className="absolute top-[0%] left-[40%] h-12 w-12 rotate-12" />
      </Container>
    </section>
  );
};
