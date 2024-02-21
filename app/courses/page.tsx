import { LayoutContent } from "@/components/layout/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
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
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Courses() {
  const user = await getConnectedUser();

  const courses = await prisma.course.findMany({
    where: {
      creatorId: user.id,
    },
  });

  return (
    <LayoutContent>
      <Card>
        <CardContent className="mt-4">
          <Table>
            <TableHeader>
              <TableHead>Image</TableHead>
              <TableHead>Nom</TableHead>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>
                    <Avatar className="rounded">
                      <AvatarFallback>{course.name[0]}</AvatarFallback>
                      {course.image && (
                        <AvatarImage src={course.image} alt={course.name} />
                      )}
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography
                      as={Link}
                      variant="large"
                      href={`/courses/${course.id}`}
                    >
                      {course.name}
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
}
