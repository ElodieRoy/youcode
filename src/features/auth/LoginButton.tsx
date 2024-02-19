"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  const mutation = useMutation({ mutationFn: async () => signIn() });

  return (
    <Button
      size="sm"
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? (
        <Loader size={12} className="mr-2" />
      ) : (
        <LogIn size={12} className="mr-2" />
      )}
      Connexion
    </Button>
  );
};
