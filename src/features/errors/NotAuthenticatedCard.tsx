import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginButton } from "../auth/LoginButton";

export const NotAuthenticatedCard = () => {
  return (
    <Card className="m-auto mt-4 max-w-lg">
      <CardHeader>
        <CardTitle>
          L&apos;accès à cette page requiert une authentification
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-row-reverse">
        <LoginButton />
      </CardFooter>
    </Card>
  );
};
