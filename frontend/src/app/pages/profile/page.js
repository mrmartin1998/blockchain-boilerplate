// frontend/src/app/pages/profile/page.js

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (session) {
        const response = await fetch(`/api/users/${session.user.email}`);
        const data = await response.json();
        setUser(data.user);
      }
    };

    fetchUserData();
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-6">Please sign in to view your profile</h1>
          <Link href="/pages/auth/signin" className="btn btn-primary w-full">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <p className="mb-4">Email: {session.user.email}</p>
        <p className="mb-4">Subscription: {user?.subscriptionStatus || session.user.subscriptionStatus}</p>
        {session.user.subscriptionStatus === 'free' && (
          <Link href="/pages/payment/subscribe" className="btn btn-success w-full mb-4">
            Upgrade to Premium
          </Link>
        )}
        <button onClick={() => signOut()} className="btn btn-error w-full">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
