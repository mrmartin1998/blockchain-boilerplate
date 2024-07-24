// frontend/src/app/pages/auth/register/page.js

"use client";

import RegisterForm from '@/app/components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
