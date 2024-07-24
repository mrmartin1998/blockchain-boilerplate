// frontend/src/app/components/auth/SignInForm.js

"use client";

import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (result.error) {
      alert(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-2xl mb-4">Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered w-full mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input input-bordered w-full mb-4"
      />
      <button type="submit" className="btn btn-primary w-full">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
