// frontend/src/app/pages/payment/page.js

'use client';

import StripePayment from '@/app/components/payment/StripePayment';

const PaymentPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <StripePayment />
    </div>
  );
};

export default PaymentPage;
