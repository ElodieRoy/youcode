import { getAuthSession } from "@/lib/auth";
import { LoggedInButton } from "./LoggedInButton";
import { LoginButton } from "./LoginButton";

export const AuthButton = async () => {
  const session = await getAuthSession();

  const user = session?.user;

  if (!user) {
    return <LoginButton />;
  }

  return <LoggedInButton user={user} />;
};
