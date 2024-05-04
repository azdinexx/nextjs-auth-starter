'use client';
import { useFormState } from 'react-dom';
import { signup } from '@/actions/auth';
import { SignupButton } from './signup-form-button';

export function SignupForm() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <form
      action={action}
      className='px-6 py-10 flex flex-col gap-4 bg-gray-50 rounded-lg shadow-md w-96'
    >
      <div className='flex flex-col gap-2'>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          placeholder='Name'
          className='p-2 rounded-md border border-gray-300'
        />
      </div>
      {state?.errors?.name && (
        <p className='text-red-500 text-xs'>{state.errors.name}</p>
      )}

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
        <div>
          <p className=' text-xs mb-2'>Password must:</p>
          <ul className='text-xs font-bold flex flex-col gap-1 text-red-500'>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <SignupButton />
    </form>
  );
}
