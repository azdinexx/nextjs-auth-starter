'use client';
import { profileUpdate } from '@/actions/profile';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';

interface Props {
  email: string;
  name: string;
}
function ProfileForm({ email, name }: Props) {
  const [state, action] = useFormState(profileUpdate, null);
  const { pending } = useFormStatus();

  return (
    <form
      action={action}
      className='w-full bg-neutral-800 p-10 flex flex-col gap-4 text-white'
    >
      <div>
        {state?.error && (
          <div className='bg-red-500 text-white p-2 rounded'>{state.error}</div>
        )}
        {state?.success && (
          <div className='bg-green-500 text-white p-2 rounded'>
            {state.success}
          </div>
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <label>Name:</label>
        <input
          type='text'
          className='p-2 text-black bg-neutral-100'
          defaultValue={name}
          name='name'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label>Email:</label>

        <input
          type='email'
          disabled
          value={email}
          name='email'
          className='p-2 text-black bg-neutral-100'
        />
      </div>
      <button type='submit'>{pending ? 'Loading...' : 'Update'}</button>
    </form>
  );
}

export default ProfileForm;
