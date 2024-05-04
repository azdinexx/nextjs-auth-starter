'use server';
import { FormState, SignupFormSchema } from '@/lib/definitions';
import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  await createSession(name);
  // 5. Redirect user
  redirect('/profile');
  // Call the provider or db to create a user...
}
