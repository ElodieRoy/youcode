import { prisma } from "@/lib/prisma";

type GetCourse = {
  courseId: string;
  creatorId: string;
  userPage: number;
};

export const getCourse = async ({
  courseId,
  creatorId,
  userPage,
}: GetCourse) => {
  const course = await prisma.course.findUnique({
    where: { id: courseId, creatorId },
    select: {
      id: true,
      image: true,
      name: true,
      presentation: true,
      users: {
        take: 5,
        skip: Math.max(0, userPage * 5),
        select: {
          user: {
            select: { id: true, name: true, image: true, canceledAt: true },
          },
        },
      },
      _count: { select: { lessons: true, users: true } },
    },
  });

  const users = course?.users.map((user) => {
    return {
      canceled: user.user.canceledAt ? true : false,
      ...user.user,
    };
  });

  return { ...course, users };
};
