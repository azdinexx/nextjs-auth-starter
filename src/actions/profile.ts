'use server';
import { ProfileFormState } from '@/lib/definitions';
import { getUser, updateUser } from './user';
import { getUserId } from '@/lib/session';

export async function profileUpdate(
  state: ProfileFormState,
  formData: FormData
) {
  const name = formData.get('name') as string;
  const userId = await getUserId();
  const response = await updateUser(userId as string, name);

  if (response) {
    return {
      success: 'Profile updated successfully.',
    };
  }
  return {
    error: 'Failed to update profile.',
  };
}
