import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function getUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
}

export async function updateUser(userId: string, name: string) {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  });
  return user;
}
