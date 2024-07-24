'use client';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl text-primary-content">
          App Name
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-primary-content">
          <li><Link href="/">Home</Link></li>
          {session && (
            <>
              <li><Link href="/pages/profile">Profile</Link></li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {session ? (
          <>
            <span className="text-primary-content mr-4">{session.user.email}</span>
            <button onClick={() => signOut()} className="btn btn-error text-primary-content">
              Sign out
            </button>
          </>
        ) : (
          <button onClick={() => signIn()} className="btn btn-success text-primary-content">
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
