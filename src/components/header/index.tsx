import { isLogged } from '@/lib/session';
import Link from 'next/link';
import React from 'react';
import LogoutButton from '../logout-btn';

async function MainHeader() {
  const isLoggedIn = await isLogged();
  return (
    <header className='flex justify-between items-center px-6 py-4 bg-gray-800 text-white shadow-md'>
      <p>Nextjs Auth Starter</p>
      {isLoggedIn ? <LogoutButton /> : <Link href={'/login'}>Login</Link>}
    </header>
  );
}

export default MainHeader;
