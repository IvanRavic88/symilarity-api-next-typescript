"use client";

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signIn } from "next-auth/react";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const signInWithGoogle = async () => {
    setIsloading(true);
    try {
      await signIn("google");
    } catch (error) {
      // toast({
      //   title: "Error signing in",
      //   message: "Please try later",
      //   type: "error",
      // });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
