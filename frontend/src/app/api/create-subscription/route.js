import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import dbConnect from '@/app/utils/db';
import User from '@/app/models/User';
import { cookies } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  await dbConnect();

  try {
    const { email, paymentMethodId } = await req.json();

    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Create a customer in Stripe
    const customer = await stripe.customers.create({
      email: user.email,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    // Create a subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: process.env.STRIPE_PREMIUM_PLAN_PRICE_ID }],
      expand: ['latest_invoice.payment_intent'],
    });

    // Update user subscription status in the database
    user.subscriptionStatus = 'premium';
    await user.save();

    // Fetch the session cookie
    const cookieStore = cookies();
    const sessionToken = cookieStore.get('next-auth.session-token');

    if (sessionToken) {
      // You can update session logic here if necessary
      // Invalidate session or update user object in the session
    }

    return NextResponse.json({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    console.error('Error creating subscription:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
