import { prisma } from "@/lib/prisma";

type GetAdminCourse = {
  courseId: string;
  creatorId: string;
  elementByPage: number;
  userPage: number;
};

export const getAdminCourse = async ({
  courseId,
  creatorId,
  elementByPage,
  userPage,
}: GetAdminCourse) => {
  const course = await prisma.course.findUnique({
    where: { id: courseId, creatorId },
    select: {
      id: true,
      image: true,
      name: true,
      presentation: true,
      users: {
        take: elementByPage,
        skip: Math.max(0, (userPage - 1) * elementByPage),
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
