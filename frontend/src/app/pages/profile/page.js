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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-6 text-black">Please sign in to view your profile</h1>
          <Link href="/pages/auth/signin" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 block text-center">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-black">Profile</h1>
        <p className="mb-4 text-black">Email: {session.user.email}</p>
        <p className="mb-4 text-black">Subscription: {user?.subscriptionStatus || session.user.subscriptionStatus}</p>
        {session.user.subscriptionStatus === 'free' && (
          <Link href="/pages/payment/subscribe" className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 block text-center">
            Upgrade to Premium
          </Link>
        )}
        <button onClick={() => signOut()} className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 block text-center mt-4">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
