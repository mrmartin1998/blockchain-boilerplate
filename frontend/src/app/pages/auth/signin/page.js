// frontend/src/app/pages/auth/signin/page.js

'use client';

import SignInForm from '@/app/components/auth/SignInForm';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <SignInForm />
    </div>
  );
};

export default SignInPage;
