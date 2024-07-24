// frontend/src/app/components/payment/CheckoutForm.js

"use client";

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setMessage('Stripe has not loaded yet.');
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          email,
          name,
        },
      });

      if (error) {
        setMessage(error.message);
        setLoading(false);
        return;
      }

      const response = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, paymentMethodId: paymentMethod.id }),
      });

      const subscription = await response.json();

      if (subscription.error) {
        setMessage('Subscription failed: ' + subscription.error);
        setLoading(false);
        return;
      }

      const { error: confirmError } = await stripe.confirmCardPayment(subscription.clientSecret);
      if (confirmError) {
        setMessage('Subscription failed: ' + confirmError.message);
      } else {
        setMessage('Subscription successful!');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('Error subscribing. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-2xl mb-4">Checkout</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered w-full mb-4"
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input input-bordered w-full mb-4"
        required
      />
      <CardElement className="border p-2 w-full mb-4" />
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={!stripe || loading}
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

export default CheckoutForm;
