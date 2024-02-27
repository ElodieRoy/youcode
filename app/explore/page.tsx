import { LayoutContent } from "@/components/layout/layout";
import CourseCard from "../courses/CourseCard";
import { getCourses } from "../courses/course.query";

const PageExplore = async () => {
  const allCourses = await getCourses();

  return (
    <LayoutContent className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {allCourses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </LayoutContent>
  );
};

export default PageExplore;
