// frontend/src/app/pages/payment/cancel/page.js

'use client';

import React from 'react';
import Link from 'next/link';

const CancelPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
    <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md text-center">
      <h1 className="text-2xl font-bold mb-6">Payment Cancelled</h1>
      <p className="mb-6">Your payment was not processed. Please try again.</p>
      <Link href="/payment/checkout" className="btn btn-primary w-full">
        Try Again
      </Link>
    </div>
  </div>
);

export default CancelPage;
