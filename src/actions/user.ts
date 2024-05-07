import { db } from '@/lib/db';

export async function getUser(userId: string) {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
}

export async function updateUser(userId: string, name: string) {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  });
  return user;
}
