'use client';
import React from 'react';
import { login } from '@/actions/auth';
import { useFormState } from 'react-dom';
import { LoginButton } from './login-form-button';

function LoginForm() {
  const [state, action] = useFormState(login, undefined);

  return (
    <form
      action={action}
      className='px-6 py-10 flex flex-col gap-4 bg-gray-50 rounded-lg shadow-md w-96'
    >
      <div className='flex flex-col gap-2'>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          placeholder='Email'
          className='p-2 rounded-md border border-gray-300'
        />
      </div>
      {state?.errors?.email && (
        <p className='text-red-500 text-xs'>{state.errors.email}</p>
      )}

      <div className='flex flex-col gap-2'>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          className='p-2 rounded-md border border-gray-300'
        />
      </div>
      {state?.errors?.password && (
        <p className='text-red-500 text-xs'>{state.errors.password}</p>
      )}
      <LoginButton />
    </form>
  );
}

export default LoginForm;
