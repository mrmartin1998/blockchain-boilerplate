// frontend/src/app/pages/payment/subscribe/page.js

'use client';

import React from 'react';
import StripePayment from '@/app/components/payment/StripePayment';

const SubscribePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <StripePayment />
    </div>
  );
};

export default SubscribePage;
