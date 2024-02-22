import { Layout, LayoutContent } from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getConnectedUser } from "@/lib/auth";
import { notFound } from "next/navigation";
import LessonItem from "./LessonItem";
import { getCourseLessons } from "./lessons.query";

type CourseLessonProps = {
  params: { courseId: string };
};

const CourseLesson = async ({ params }: CourseLessonProps) => {
  const user = await getConnectedUser();
  const course = await getCourseLessons({
    courseId: params.courseId,
    creatorId: user.id,
  });

  if (!course) {
    notFound();
  }
  return (
    <Layout>
      <LayoutContent className="flex flex-col gap-4 lg:flex-row">
        <Card className="flex-[2]">
          <CardHeader>
            <CardTitle>Leçons · {course.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {course.lessons.map((lesson) => (
              <LessonItem key={lesson.id} lesson={lesson} />
            ))}
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
};
export default CourseLesson;
