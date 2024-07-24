// frontend/src/app/pages/payment/success/page.js

'use client';

import React from 'react';
import Link from 'next/link';

const SuccessPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
    <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md text-center">
      <h1 className="text-2xl font-bold mb-6">Payment Successful!</h1>
      <p className="mb-6">Thank you for your purchase.</p>
      <Link href="/" className="btn btn-primary w-full">
        Go to Home
      </Link>
    </div>
  </div>
);

export default SuccessPage;
