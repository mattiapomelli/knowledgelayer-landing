import { useState } from "react";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email: string) => {
    setIsLoading(true);

    await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    setIsLoading(false);
  };

  return {
    signup,
    isLoading,
  };
};
