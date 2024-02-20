import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogoutButton } from "@/features/auth/LogoutButton";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";

const page = async () => {
  const session = await getAuthSession();
  const user = session?.user;

  if (!user) throw new Error("No session found!");

  return (
    <Card className="m-auto mt-4 max-w-lg">
      <CardHeader className="flex flex-row gap-4 space-y-0">
        <Avatar>
          <AvatarFallback>{user.name && user.name?.[0]}</AvatarFallback>
          {user.image && <AvatarImage src={user.image} alt="user picture" />}
        </Avatar>
        <div className="flex flex-col gap-2">
          <CardTitle>{user.email}</CardTitle>
          <CardDescription>{user.name}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href="/account/settings"
        >
          Paramètre du compte
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href="/admin"
        >
          Admin
        </Link>
      </CardContent>
      <CardFooter className="flex justify-end">
        <LogoutButton />
      </CardFooter>
    </Card>
  );
};

export default page;
