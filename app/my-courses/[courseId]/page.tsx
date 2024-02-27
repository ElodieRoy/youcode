import { LayoutContent } from "@/components/layout/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Typography } from "@/components/ui/typography";
import { getConnectedUser } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { PresentationIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import PaginationButtons from "../../../src/features/pagination/PaginationButtons";
import { getAdminCourse } from "./course.query";

type CoursePageProps = {
  params: { courseId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const CoursePage = async ({ params, searchParams }: CoursePageProps) => {
  const user = await getConnectedUser();

  const page = Number(searchParams.page ?? 1);
  const elementByPage = 5;

  if (!user) {
    throw new Error("Unauthorized");
  }

  const course = await getAdminCourse({
    courseId: params.courseId,
    creatorId: user.id,
    elementByPage: elementByPage,
    userPage: page,
  });

  return (
    <LayoutContent className="flex flex-col gap-4 lg:flex-row">
      <Card className="flex-1">
        <CardHeader className="flex-row items-center gap-4 space-y-0">
          <Avatar className="rounded">
            <AvatarFallback>{course.name?.[0]}</AvatarFallback>
            {course.image && (
              <AvatarImage src={course.image} alt="course image" />
            )}
          </Avatar>
          <CardTitle>{course.name}</CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
          <CardDescription>{course.presentation}</CardDescription>

          <div className="flex space-x-4 text-sm text-muted-foreground mt-5">
            <div className="flex items-center">
              <PresentationIcon className="mr-1 h-3 w-3" />
              {course._count?.lessons} leçon
              {course._count && course._count?.lessons > 1 ? "s" : null}
            </div>
            <div className="flex items-center ">
              <UserIcon className="mr-1 h-3 w-3" />
              {course._count?.users} utilisateur
              {course._count && course._count?.users > 1 ? "s" : null}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-center gap-4 md:flex-row lg:flex-col">
          <Link
            href={`/my-courses/${course.id}/edit`}
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "w-full"
            )}
          >
            Modifier
          </Link>
          <Link
            href={`/my-courses/${course.id}/lessons`}
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "w-full"
            )}
          >
            Modifier leçons
          </Link>
        </CardFooter>
      </Card>
      <Card className="flex-[2]">
        <CardHeader>
          <CardTitle>Utilisateurs</CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
          <Table>
            <TableHeader>
              <TableHead>Image</TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>Statut</TableHead>
            </TableHeader>
            <TableBody>
              {course?.users?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Avatar className="rounded">
                      <AvatarFallback>{user.name?.[0]}</AvatarFallback>
                      {user.image && (
                        <AvatarImage src={user.image} alt="user image" />
                      )}
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography
                      as={Link}
                      variant="large"
                      href={`/utilisateur/${user.id}`}
                    >
                      {user.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {user.canceled ? (
                      <Badge className="ml-auto bg-warning text-warning-foreground hover:bg-warning/50">
                        Inactif
                      </Badge>
                    ) : (
                      <Badge className="ml-auto bg-success text-success-foreground hover:bg-success/50">
                        Actif
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <PaginationButtons
            page={page}
            totalPage={Math.ceil((course._count?.users ?? 1) / elementByPage)}
            baseUrl={`/my-courses/${course.id}`}
          />
        </CardFooter>
      </Card>
    </LayoutContent>
  );
};
export default CoursePage;
