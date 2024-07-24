// frontend/src/app/components/layout/Navbar.js

'use client';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary-content font-bold text-xl">App Name</div>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-primary-content hover:text-secondary">Home</Link></li>
          {session ? (
            <>
              <li>
                <Link href="/pages/profile" className="text-primary-content hover:text-secondary">Profile</Link>
              </li>
              <li className="text-primary-content">{session.user.email}</li>
              <li>
                <button onClick={() => signOut()} className="text-primary-content bg-error px-4 py-2 rounded">
                  Sign out
                </button>
              </li>
            </>
          ) : (
            <li>
              <button onClick={() => signIn()} className="text-primary-content bg-success px-4 py-2 rounded">
                Sign in
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
