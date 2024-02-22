import { LayoutContent } from "@/components/layout/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
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
      {courses.map((course) => (
        <Card className="mt-4" key={course.id}>
          <Link href={`/my-courses/${course.id}`}>
            <CardContent className="flex justify-center item-center p-6">
              <Avatar className="rounded mr-4">
                <AvatarFallback>{course.name[0]}</AvatarFallback>
                {course.image && (
                  <AvatarImage src={course.image} alt={course.name} />
                )}
              </Avatar>
              <Typography variant="large" className="leading-10">
                {course.name}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      ))}
    </LayoutContent>
  );
}
