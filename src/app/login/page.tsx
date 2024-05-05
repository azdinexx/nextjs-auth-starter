import LoginForm from '@/components/login-form';
import { SignupForm } from '@/components/signup-form';
import React from 'react';

function LoginPage() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
