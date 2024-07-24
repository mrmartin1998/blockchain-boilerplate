// frontend/src/app/pages/auth/error/page.js

"use client";

import React from 'react';
import Link from 'next/link';

const ErrorPage = ({ error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Error</h1>
        <p className="text-center text-error">{error || 'An error occurred. Please try again.'}</p>
        <p className="mt-4 text-center">
          Go back to{' '}
          <Link href="/auth/signin" className="text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
