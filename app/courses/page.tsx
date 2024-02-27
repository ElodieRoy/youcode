import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { NotAuthenticatedCard } from "@/features/errors/NotAuthenticatedCard";
import { getConnectedUser } from "@/lib/auth";
import Link from "next/link";
import { getCourses } from "./course.query";

export default async function Courses() {
  const user = await getConnectedUser();

  if (!user) {
    return <NotAuthenticatedCard />;
  }

  const courses = await getCourses(user.id);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
    </div>
  );
}
