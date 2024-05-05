'use client';
import { logout } from '@/actions/auth';
import { useFormState, useFormStatus } from 'react-dom';

function LogoutButton() {
  const [state, action] = useFormState(logout, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action}>
      <button className='active:scale-95'>
        {pending ? 'Submitting...' : 'Logout'}
      </button>
    </form>
  );
}

export default LogoutButton;
