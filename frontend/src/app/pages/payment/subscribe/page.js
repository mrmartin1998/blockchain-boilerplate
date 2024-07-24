'use client';

import React from 'react';
import StripePayment from '@/app/components/payment/StripePayment';

const SubscribePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <StripePayment />
    </div>
  );
};

export default SubscribePage;
