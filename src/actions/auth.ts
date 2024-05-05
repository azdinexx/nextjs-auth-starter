'use server';
import {
  FormState,
  LoginFormSchema,
  SignupFormSchema,
} from '@/lib/definitions';
import { createSession, deleteSession } from '../lib/session';
import { redirect } from 'next/navigation';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
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

  // Call the provider or db to create a user...
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  await createSession(user.id);
  // 5. Redirect user
  redirect('/profile');
  // Call the provider or db to create a user...
}

export async function logout() {
  // 1. Delete session
  // 2. Redirect user
  await deleteSession();
  redirect('/login');
}

export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // Call the provider or db to create a user...
  const user = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });

  if (!user) {
    return {
      errors: {
        email: ['Invalid email or password'],
        password: ['Invalid email or password'],
      },
    };
  }

  await createSession(user.id as string);

  redirect('/profile');
}
