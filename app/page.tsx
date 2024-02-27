import { Typography } from "@/components/ui/typography";
import CourseCard from "./courses/CourseCard";
import { getCourses } from "./courses/course.query";

export default async function Home() {
  const allCourses = await getCourses();

  return (
    <main className="flex flex-col items-center justify-between xs:px-2 sm:px-24 xs:py-2 sm:py-10">
      <Typography variant="h2" className="mb-4">
        Tous les cours
      </Typography>
      <div className="grid grid-cols-1 gap-4 xs:grid-cols-1 md:grid-cols-2  2xl:grid-cols-3">
        {allCourses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </main>
  );
}
