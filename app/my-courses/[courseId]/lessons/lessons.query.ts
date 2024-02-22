import { prisma } from "@/lib/prisma";

type GetCourseLessons = {
  courseId: string;
  creatorId: string;
};

export const getCourseLessons = async ({
  courseId,
  creatorId,
}: GetCourseLessons) => {
  return await prisma.course.findUnique({
    where: { id: courseId, creatorId },
    select: {
      id: true,
      name: true,
      lessons: true,
    },
  });
};
