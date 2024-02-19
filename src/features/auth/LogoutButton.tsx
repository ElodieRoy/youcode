"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const LogoutButton = (props: ButtonProps) => {
  const mutation = useMutation({
    mutationFn: async () => signOut(),
  });

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
      {...props}
    >
      {mutation.isPending ? (
        <Loader size={12} className="mr-2" />
      ) : (
        <LogOut size={12} className="mr-2" />
      )}
      Déconnexion
    </Button>
  );
};
