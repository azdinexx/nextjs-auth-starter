import { SessionPayload } from '@/lib/definitions';
import { decrypt } from '@/lib/session';
import { cookies } from 'next/headers';
import React from 'react';

async function page() {
  const cookieStore = cookies();
  const session = cookieStore.get('session');

  if (!session) {
    return <div className='h-screen'>loading...</div>;
  }

  const data = (await decrypt(session.value)) as SessionPayload;
  return <div className='h-screen'>{data?.userId}</div>;
}

export default page;
