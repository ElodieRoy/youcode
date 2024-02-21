import { LayoutContent } from "@/components/layout/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import Link from "next/link";
import { getCourse } from "./course.query";

type CoursePageProps = {
  params: { courseId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const CoursePage = async ({ params, searchParams }: CoursePageProps) => {
  const user = await getConnectedUser();
  const course = await getCourse({
    courseId: params.courseId,
    creatorId: user.id,
    userPage: Number(searchParams.page ?? 0),
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
          <Typography>
            {course._count?.lessons} leçon
            {course._count && course._count?.lessons > 1 ? "s" : null}
          </Typography>
          <Typography>
            {course._count?.users} utilisateur
            {course._count && course._count?.users > 1 ? "s" : null}
          </Typography>
        </CardContent>
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
                    <Typography>
                      {user.canceled ? "Inactif" : "Actif"}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </LayoutContent>
  );
};
export default CoursePage;
