import { getUser } from '@/actions/user';
import LogoutButton from '@/components/logout-btn';
import ProfileForm from '@/components/profile-form';
import { SessionPayload } from '@/lib/definitions';
import { decrypt, deleteSession } from '@/lib/session';
import { cookies } from 'next/headers';
import React from 'react';
import { redirect } from 'next/navigation';

async function page() {
  const cookieStore = cookies();
  const session = cookieStore.get('session');

  if (!session) {
    return <div className='h-screen'>loading...</div>;
  }

  const data = (await decrypt(session.value)) as SessionPayload;

  const user = await getUser(data.userId);

  if (!user) {
    await deleteSession();
    redirect('/login');
  }
  return (
    <div className='h-screen'>
      <ProfileForm name={user.name as string} email={user.email} />
      <LogoutButton />
    </div>
  );
}

export default page;
